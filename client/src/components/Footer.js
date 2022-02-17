import React from "react";
import styles from "./style/Footer.module.css";

const Footer = () => {
  return (
    <div id={styles.wrapper} className="p-3 bg-light text-dark">
      <div id={styles.socialM}>
        <a href="https://www.instagram.com/_the_meme_mayor_">
          <img
            className={styles.footer_icon}
            src="https://img.icons8.com/bubbles/45/000000/instagram-new--v2.png"
          />
        </a>{" "}
        <a href="https://www.github.com/lukescheller">
          <img
            className={styles.footer_icon}
            src="https://img.icons8.com/color-glass/45/000000/github.png"
          />
        </a>{" "}
      </div>
    </div>
  );
};

export default Footer;
