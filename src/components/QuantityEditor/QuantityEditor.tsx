import styles from "./QuantityEditor.module.scss";

const QuantityEditor: React.FC<{
  quantity: number;
  handleAddOne: () => void;
  handleRemoveOne: () => void;
}> = ({ quantity, handleAddOne, handleRemoveOne }) => {
  return (
    <div>
      <p className={styles.quantityLabel}>Qtd:</p>
      <div className={styles.innerContainer}>
        <button className={styles.buttom} onClick={handleRemoveOne}>
          -
        </button>
        <span className={styles.quantity}>{quantity}</span>
        <button className={styles.buttom} onClick={handleAddOne}>
          +
        </button>
      </div>
    </div>
  );
};

export default QuantityEditor;
