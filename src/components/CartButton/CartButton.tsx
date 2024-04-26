import cart from "@/assets/cart.svg";
import Image from "next/image";
import styles from "./CartButton.module.scss";

const CartButton: React.FC<{ toggle: () => void }> = ({ toggle }) => {
  const cartQuantity = 0;
  return (
    <button className={styles.cartButton} onClick={toggle}>
      <Image src={cart} alt="Carrinho de compras" className={styles.cartIcon} />
      <span className={styles.cartText}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
