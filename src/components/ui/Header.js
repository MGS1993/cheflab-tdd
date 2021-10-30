import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div data-testid="header" className={styles.mainWrapper}>
      <h1>Chef Lab</h1>
    </div>
  );
};

export default Header;
