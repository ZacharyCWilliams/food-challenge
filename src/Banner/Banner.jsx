import React from "react";
import centerBanner from "../assets/center-banner.png";
import styles from "./Banner.module.css";

// make h1, p, & overlay resize with container

const Banner = () => (
  <div className={styles.container}>
    <div className={styles.overlay}></div>
    <img className={styles.image} src={centerBanner} alt="Banner Image"/>
    <h1 className={styles.header}>SEE WHAT WE'RE SERVING UP NEXT WEEK</h1>
    <p className={styles.paragraph}>Get local, fresh, chef-made meals, designed by nutritionists and free from refined sugars, gluten and dairy*.</p>
  </div>
)

export default Banner