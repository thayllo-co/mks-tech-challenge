import { useCart } from "@/store/CartContext";
import NoDataPlaceholder from "../Placeholders/NoData";
import ProductCart from "../ProductCart/ProductCart";
import styles from "./CartProductList.module.scss";

const CartProductList = () => {
  const { products } = useCart();
  return (
    <ul className={styles.productList}>
      {products.length > 0 ? (
        products.map((item) => <ProductCart key={item.id} product={item} />)
      ) : (
        <NoDataPlaceholder />
      )}
    </ul>
  );
};

export default CartProductList;
