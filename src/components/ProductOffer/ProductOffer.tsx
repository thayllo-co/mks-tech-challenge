import bag from "@/assets/bag.svg";
import productImg from "@/assets/image.png";
import Image from "next/image";
import styles from "./ProductOffer.module.scss";

const ProductOffer = () => {
  const product = {
    name: "Apple Watch Series 4 GPS",
    price: "R$399",
    description: "Redesigned from scratch and completely revised.",
  };
  return (
    <div className={styles.container}>
      <div className={styles.productContainer}>
        <div className={styles.imageContainer}>
          <Image src={productImg} alt="Product" className={styles.image} />
        </div>
        <div className={styles.detailsContainer}>
          <p className={styles.name}>{product.name}</p>
          <p className={styles.price}>{product.price}</p>
        </div>
        <p className={styles.description}>{product.description}</p>
      </div>
      <button className={styles.button}>
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
