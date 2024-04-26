import bag from "@/assets/bag.svg";
import ProductObject from "@/models/ProductObject";
import { useCart } from "@/store/CartContext";
import Image from "next/image";
import styles from "./ProductOffer.module.scss";

const ProductOffer: React.FC<{ product: ProductObject }> = ({ product }) => {
  const { addProduct } = useCart();

  return (
    <div className={styles.container}>
      <div className={styles.productContainer}>
        <div className={styles.imageContainer}>
          <Image
            src={product?.photo}
            width={200}
            height={200}
            alt={product.name}
            className={styles.image}
          />
        </div>
        <div className={styles.detailsContainer}>
          <p className={styles.name}>{product?.name}</p>
          <p className={styles.price}>{product?.price}</p>
        </div>
        <p className={styles.description}>{product?.description}</p>
      </div>
      <button className={styles.button} onClick={() => addProduct(product)}>
        <Image
          src={bag}
          alt="Sacola de compras"
          className={styles.buttonIcon}
        />
        <span className={styles.buttonText}>COMPRAR</span>
      </button>
    </div>
  );
};

export default ProductOffer;
