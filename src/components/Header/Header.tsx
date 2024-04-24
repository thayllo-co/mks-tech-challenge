import CartButton from "../CartButton/CartButton";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        MKS <span className={styles.subtitle}>Sistemas</span>
      </h1>
      <CartButton />
    </header>
  );
};

export default Header;
