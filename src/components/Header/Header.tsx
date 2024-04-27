import CartButton from "../CartButton/CartButton";
import CartMenu from "../CartMenu/CartMenu";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <>
      <header className={styles.header} data-testid="Header">
        <h1 className={styles.title}>
          MKS <span className={styles.subtitle}>Sistemas</span>
        </h1>
        <CartButton />
      </header>
      <CartMenu />
    </>
  );
};

export default Header;
