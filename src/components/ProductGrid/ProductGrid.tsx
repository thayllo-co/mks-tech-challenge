"use client";
import { useProducts } from "@/store/ProductContext";
import ErrorPlaceholder from "../Placeholders/Error";
import LoadingPlaceholder from "../Placeholders/Loading";
import ProductOffer from "../ProductOffer/ProductOffer";
import styles from "./ProductGrid.module.scss";

const ProductGrid = () => {
  const { products, isPending, isError, error } = useProducts();

  return (
    <div className={styles.container}>
      {isPending && <LoadingPlaceholder />}

      {isError && <ErrorPlaceholder message={error?.message} />}

      {!isPending && !isError && (
        <div className={styles.grid}>
          {products?.length > 0 &&
            products.map((product) => (
              <ProductOffer key={product.id} product={product} />
            ))}
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
