import styles from "./CloseButton.module.scss";

const CloseButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      data-testid="CloseButton"
    >
      X
    </button>
  );
};

export default CloseButton;
