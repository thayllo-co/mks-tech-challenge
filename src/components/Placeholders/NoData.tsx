import styles from "./Placeholders.module.scss";

const NoDataPlaceholder = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Nada para exibir aqui 😶</h1>
      <h3 className={styles.subtitle}>Tente adicionar um produto</h3>
    </div>
  );
};

export default NoDataPlaceholder;
