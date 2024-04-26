import { useState } from "react";
import styles from "./QuantityEditor.module.scss";

const QuantityEditor = () => {
  const [counter, setCounter] = useState(0);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleRemove = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <p className={styles.quantityLabel}>Qtd:</p>
      <div className={styles.innerContainer}>
        <button className={styles.buttom} onClick={handleRemove}>
          -
        </button>
        <span className={styles.quantity}>{counter}</span>
        <button className={styles.buttom} onClick={handleAdd}>
          +
        </button>
      </div>
    </div>
  );
};

export default QuantityEditor;
