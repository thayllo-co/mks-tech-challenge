import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import CartProductList from "../CartProductList/CartProductList";
import CloseButton from "../CloseButton/CloseButton";
import styles from "./CartMenu.module.scss";

type CartMenuObj = {
  isVisible: boolean;
  setVisibility: () => void;
};

const CartMenu: React.FC<CartMenuObj> = ({ isVisible, setVisibility }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
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

  return (
    <main className={styles.container}>
      <AnimatePresence>
        {isVisible && (
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
                <CloseButton onClick={setVisibility} />
              </div>
              <CartProductList />
              <div className={styles.row}>
                <h1 className={styles.text}>Total:</h1>
                <h1 className={styles.text}>R$798</h1>
              </div>
            </div>
            <button className={styles.button}>
              <h1 className={styles.text}>Finalizar Compra</h1>
            </button>
          </motion.aside>
        )}
      </AnimatePresence>
    </main>
  );
};

export default CartMenu;
