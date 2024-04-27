import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer} data-testid="Footer">
      <p className={styles.text}>MKS sistemas © Todos os direitos reservados</p>
    </footer>
  );
};

export default Footer;
