"use client";
import { useCart } from "@/store/CartContext";
import { printCart } from "@/utils/functions";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import CartProductList from "../CartProductList/CartProductList";
import CloseButton from "../CloseButton/CloseButton";
import styles from "./CartMenu.module.scss";

const CartMenu = () => {
  const [width, setWidth] = useState<number>(0);

  const { isMenuVisible, togleMenu, totalPrice, products, cleanCart } =
    useCart();

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const variants = {
    closed: {
      width: 0,
      transition: {
        duration: 0.3,
      },
    },
    open: {
      width: width > 900 ? 486 : 290,
      transition: {
        duration: 0.3,
      },
    },
  };

  const handleCheckout = () => {
    printCart(products, totalPrice);
    cleanCart();
  };

  return (
    <main className={styles.container} data-testid="CartMenu">
      <AnimatePresence>
        {isMenuVisible && (
          <motion.aside
            className={styles.menu}
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
          >
            <div className={styles.menuContent}>
              <div className={styles.row}>
                <h1 className={styles.text}>
                  Carrinho <br />
                  de compras
                </h1>
                <CloseButton onClick={togleMenu} />
              </div>
              <CartProductList />
              <div className={styles.row}>
                <h1 className={styles.text}>Total:</h1>
                <h1 className={styles.text}>
                  R${" "}
                  {totalPrice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </h1>
              </div>
            </div>
            <button className={styles.button} onClick={handleCheckout}>
              <h1 className={styles.text}>Finalizar Compra</h1>
            </button>
          </motion.aside>
        )}
      </AnimatePresence>
    </main>
  );
};

export default CartMenu;
