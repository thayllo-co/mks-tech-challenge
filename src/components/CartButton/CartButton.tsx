"use client";

import cart from "@/assets/cart.svg";
import Image from "next/image";
import styles from "./CartButton.module.scss";

const CartButton = () => {
  const cartQuantity = 0;
  const handleOpenCart = () => {
    console.log("OPEN CART");
  };

  return (
    <button className={styles.cartButton} onClick={handleOpenCart}>
      <Image src={cart} alt="Carrinho de compras" className={styles.cartIcon} />
      <span className={styles.cartText}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
