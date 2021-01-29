import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import axios from "axios";
import styles from "./MenuGrid.module.css";

const MenuGrid = () => {
  const [menu, setMenu] = useState([]);
  const [filteredMenu, setFilteredMenu] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const getMenuItems = async () => {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const config = {
      headers: { "Access-Control-Allow-Origin": "*" },
    };
    const items = await axios.get(proxy + "https://light.territory.workers.dev/api/v1/meals", config);
    setMenu(items.data)
    setFilteredMenu(items.data)

    let tags = [];
    items.data.forEach((item) => (tags = [...tags, ...item.tags]));
    let unique = new Set(tags);
    tags = [...unique];
    setTags(tags);
  };
  useEffect(() => {
    getMenuItems();
  }, []);
  const Tags = () =>
    tags.map((tag) => (
      <TagButton
        _handleTagAdd={handleTagAdd}
        _handleRemoveTag={handleRemoveTag}
        tag={tag}
      />
    ));
  const handleTagAdd = (tag) => {
    setSelectedTags([...selectedTags, tag]);
  };
  const handleRemoveTag = (tag) => {
    const tagList = selectedTags.filter((t) => t !== tag);
    setSelectedTags(tagList);
  };
  const TagButton = ({ _handleRemoveTag, _handleTagAdd, tag }) => {
    const handleClick = (e) => {
      e.preventDefault();
      if (!selectedTags.includes(e.target.name)) _handleTagAdd(tag);
      if (selectedTags.includes(e.target.name)) _handleRemoveTag(tag);
    };

    const btnClass = selectedTags.includes(tag) ? styles.tagButtonActive : styles.tagButton
    return (
      <button className={btnClass} onClick={handleClick} name={tag}>
        {tag.toUpperCase()}
      </button>
    );
  };
  useEffect(() => {
    filterByTag();
  }, [selectedTags]);
  const filterByTag = () => {
    if (selectedTags.length > 0) {
      const filteredList = menu
        ?.map((item) => ({
          ...item,
          tags: item.tags.filter((tag) =>
            selectedTags.includes(tag.toLowerCase())
          ),
        }))
        .filter((item) => item.tags.length > 0);
      setFilteredMenu(filteredList);
      return;
    }
    if (menu.length > 0) setFilteredMenu(menu);
  };
  const FilteredMenu = () => {
    return filteredMenu?.map((item) => <MenuItem item={item} />);
  };
  return (
    <div className={styles.contentContainer}>
      <h1>NUTRITION IS ON THE MENU</h1>
      <p>
        Our meals are designed by nutritionists and crafted by local chefs. Free
        of gluten, refined sugars or dairy* and responsibly sourced.
      </p>
      <section className={styles.tagWrapper}>{tags && <Tags />}</section>
      <div className={styles.gridWrapper}>{menu && <FilteredMenu />}</div>
    </div>
  );
};
export default MenuGrid;