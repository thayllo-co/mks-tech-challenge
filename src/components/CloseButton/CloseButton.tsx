import styles from "./CloseButton.module.scss";

const CloseButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      X
    </button>
  );
};

export default CloseButton;
