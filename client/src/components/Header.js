import React from "react";
import styles from "./style/Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>Schellonit.v2</h1>
      <div className={styles.icons}>
        <a
          href="https://icons8.com/icon/Vra58PN2KmI5/react"
          className={styles.ind_icon}
          id={styles.react}
        >
          <img src="https://img.icons8.com/bubbles/100/000000/react.png" />
        </a>
        <a
          href="https://icons8.com/icon/afoy2UEDztIt/bootstrap-a-free-and-open-source-css-framework"
          className={styles.ind_icon}
        >
          <img src="https://img.icons8.com/external-tal-revivo-green-tal-revivo/72/000000/external-bootstrap-a-free-and-open-source-css-framework-logo-green-tal-revivo.png" />
        </a>
        <a
          href="https://icons8.com/icon/iFoT5Ds3iK1c/mongodb-a-cross-platform-document-oriented-database-program"
          className={styles.ind_icon}
        >
          <img src="https://img.icons8.com/external-tal-revivo-tritone-tal-revivo/64/000000/external-mongodb-a-cross-platform-document-oriented-database-program-logo-tritone-tal-revivo.png" />
        </a>
      </div>
    </div>
  );
};

export default Header;
