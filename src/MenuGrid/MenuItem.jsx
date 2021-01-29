import React, { useEffect } from 'react'
import styles from "./MenuItem.module.css";

const MenuItem = ({ item }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <img className={styles.image} width="100%" src={item.img} alt="food"/>
      </div>
      <div className={styles.infoPanel}>
        <h2 className={styles.itemTitle}>{ item.title }</h2>
      </div>
    </div>
  )

}

export default MenuItem