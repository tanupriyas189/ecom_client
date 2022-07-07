import React from "react";
import styles from "./header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>ECOM</h1>
      <div className={styles.options}>
        <h3 className={styles.product}>Products</h3>
        <h3 className={styles.contact}>Contact Us</h3>
        <h3 className={styles.careers}>Careers</h3>
      </div>
    </div>
  );
}

export default Header;
