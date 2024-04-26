import ProductCartObject from "@/models/ProducCartObject";
import { useCart } from "@/store/CartContext";
import { motion } from "framer-motion";
import Image from "next/image";
import QuantityEditor from "../QuantityEditor/QuantityEditor";
import styles from "./ProductCart.module.scss";

const ProductCart: React.FC<{ product: ProductCartObject }> = ({ product }) => {
  const { addProduct, removeProduct, removeProductAll } = useCart();
  const variants = {
    closed: {
      opacity: 0,
      duration: 0.8,
      delay: 0.8,
      scale: [1, 1, 0.1],
      x: [0, 0, 400],
    },
    open: {
      opacity: 1,
      duration: 0.8,
      delay: 0.8,
      scale: [0.1, 1, 1],
      x: [400, 0, 0],
    },
  };

  const handleAddOne = () => addProduct(product);

  const handleRemoveOne = () => removeProduct(product);

  const handleRemoveAll = () => removeProductAll(product);

  return (
    <motion.li className={styles.container} variants={variants}>
      <button className={styles.button} onClick={handleRemoveAll}>
        X
      </button>
      <div className={styles.productContainer}>
        <div className={styles.productInnerContainer1}>
          <div className={styles.imageContainer}>
            <Image
              src={product?.photo}
              width={200}
              height={200}
              alt={product.name}
              className={styles.image}
            />
          </div>
          <p className={styles.name}>{product.name}</p>
        </div>
        <div className={styles.productInnerContainer2}>
          <QuantityEditor
            quantity={product.quantity}
            handleAddOne={handleAddOne}
            handleRemoveOne={handleRemoveOne}
          />
          <p className={styles.price}>R${product.price}</p>
        </div>
      </div>
    </motion.li>
  );
};

export default ProductCart;
