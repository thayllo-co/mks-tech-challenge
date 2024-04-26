"use client";

import { useState } from "react";
import CartButton from "../CartButton/CartButton";
import CartMenu from "../CartMenu/CartMenu";
import styles from "./Header.module.scss";

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

  const togleMenu = () => setIsMenuVisible((state) => !state);

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>
          MKS <span className={styles.subtitle}>Sistemas</span>
        </h1>
        <CartButton toggle={togleMenu} />
      </header>
      <CartMenu isVisible={isMenuVisible} setVisibility={togleMenu} />
    </>
  );
};

export default Header;
