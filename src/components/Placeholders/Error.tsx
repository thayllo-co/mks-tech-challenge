import styles from "./Placeholders.module.scss";

const ErrorPlaceholder: React.FC<{ message: string | undefined }> = ({
  message,
}) => {
  return (
    <div className={styles.container}>
      <h1>Algo deu errado 😢</h1>
      <h3>Tente novamente mais tarde</h3>
      <h6 className={styles.error}>{message}</h6>
    </div>
  );
};

export default ErrorPlaceholder;
