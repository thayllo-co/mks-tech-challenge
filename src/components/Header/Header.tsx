import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        MKS <span className={styles.subtitle}>Sistemas</span>
      </h1>
    </header>
  );
};

export default Header;
