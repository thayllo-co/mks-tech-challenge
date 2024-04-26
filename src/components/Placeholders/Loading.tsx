import styles from "./Placeholders.module.scss";

const LoadingPlaceholder = () => {
  return (
    <div className={styles.container}>
      <h1>Carregando produtos...</h1>
    </div>
  );
};

export default LoadingPlaceholder;
