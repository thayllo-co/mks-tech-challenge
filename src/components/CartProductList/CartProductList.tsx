import { cartProducts } from "@/utils/constants";
import ProductCart from "../ProductCart/ProductCart";
import styles from "./CartProductList.module.scss";

const CartProductList = () => {
  return (
    <ul className={styles.productList}>
      {cartProducts.map((item) => (
        <ProductCart key={item.id} product={item} />
      ))}
    </ul>
  );
};

export default CartProductList;
