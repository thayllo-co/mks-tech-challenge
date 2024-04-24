import ProductOffer from "../ProductOffer/ProductOffer";
import styles from "./ProductGrid.module.scss";

const ProductGrid = () => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <ProductOffer />
        <ProductOffer />
        <ProductOffer />
        <ProductOffer />
        <ProductOffer />
        <ProductOffer />
        <ProductOffer />
        <ProductOffer />
      </div>
    </div>
  );
};

export default ProductGrid;
