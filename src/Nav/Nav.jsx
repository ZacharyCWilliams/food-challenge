import React from "react";
import styles from "./Nav.module.css";

const Nav = () => (
  <section className={styles.navbar}>
    <img className={styles.logo} src="https://territory-assets.s3.amazonaws.com/logos/territory-wordmark-dark-60@2x.png" alt="logo"/>
  </section>
)

export default Nav