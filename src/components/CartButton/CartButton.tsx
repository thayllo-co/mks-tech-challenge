"use client";
import cart from "@/assets/cart.svg";
import { useCart } from "@/store/CartContext";
import Image from "next/image";
import styles from "./CartButton.module.scss";

const CartButton = () => {
  const { togleMenu, quantity } = useCart();
  return (
    <button className={styles.cartButton} onClick={togleMenu}>
      <Image src={cart} alt="Carrinho de compras" className={styles.cartIcon} />
      <span className={styles.cartText}>{quantity}</span>
    </button>
  );
};

export default CartButton;
