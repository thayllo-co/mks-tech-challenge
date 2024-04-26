import {
  default as ProducCartObject,
  default as ProductCartObject,
} from "@/models/ProducCartObject";
import ProductObject from "@/models/ProductObject";

import { createContext, ReactNode, useContext, useState } from "react";

type CartContextType = {
  isMenuVisible: boolean;
  togleMenu: () => void;
  addProduct: (product: ProductObject) => void;
  removeProduct: (product: ProductCartObject) => void;
  removeProductAll: (product: ProductCartObject) => void;
  cleanCart: () => void;
  products: ProducCartObject[];
  quantity: number;
  totalPrice: number;
};

const cartDefaultValues: CartContextType = {
  isMenuVisible: false,
  togleMenu: () => {},
  addProduct: (product: ProductObject) => {},
  removeProduct: (product: ProductCartObject) => {},
  removeProductAll: (product: ProductCartObject) => {},
  cleanCart: () => {},
  products: [],
  quantity: 0,
  totalPrice: 0,
};

const CartContext = createContext<CartContextType>(cartDefaultValues);

type CartProviderProps = {
  children: ReactNode;
};

const CartProvider = ({ children }: CartProviderProps) => {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(
    cartDefaultValues.isMenuVisible
  );
  const [quantity, setQuantity] = useState<number>(cartDefaultValues.quantity);
  const [totalPrice, setTotalPrice] = useState<number>(
    cartDefaultValues.totalPrice
  );
  const [products, setProducts] = useState<ProducCartObject[]>(
    cartDefaultValues.products
  );

  const togleMenu = () => setIsMenuVisible((state) => !state);

  const addProduct = (product: ProductObject) => {
    setProducts((state) => {
      let updatedProducts: ProducCartObject[] = [];
      if (state.length > 0) {
        updatedProducts = state.map((element) => {
          return new ProducCartObject({ ...element });
        });
      }
      const selectedProductIndex = updatedProducts.findIndex(
        (el) => el.id === product.id
      );
      if (selectedProductIndex < 0) {
        updatedProducts.push(new ProducCartObject({ ...product, quantity: 1 }));
      } else {
        updatedProducts = updatedProducts.map((e) => {
          if (e.id === updatedProducts[selectedProductIndex].id) {
            e.quantity += 1;
            return new ProducCartObject(e);
          } else {
            return new ProducCartObject(e);
          }
        });
      }
      return updatedProducts;
    });
    setQuantity((state) => state + 1);
    setTotalPrice((state) => state + parseFloat(product.price));
  };

  const removeProduct = (product: ProductCartObject) => {
    setProducts((state) => {
      let updatedProducts: ProducCartObject[] = [];
      if (state.length > 0) {
        updatedProducts = state.map((element) => {
          return new ProducCartObject({ ...element });
        });
      }
      const selectedProductIndex = updatedProducts.findIndex(
        (el) => el.id === product.id
      );
      updatedProducts = updatedProducts.filter((e) => {
        if (e.id === updatedProducts[selectedProductIndex].id) {
          if (e.quantity === 1) return;
          e.quantity -= 1;
          return new ProducCartObject(e);
        } else {
          return new ProducCartObject(e);
        }
      });
      return updatedProducts;
    });
    setQuantity((state) => state - 1);
    setTotalPrice((state) => state - parseFloat(product.price));
  };

  const removeProductAll = (product: ProductCartObject) => {
    setProducts((state) => {
      let updatedProducts: ProducCartObject[] = [];
      if (state.length > 0) {
        updatedProducts = state.map((element) => {
          return new ProducCartObject({ ...element });
        });
      }
      const selectedProductIndex = updatedProducts.findIndex(
        (el) => el.id === product.id
      );
      updatedProducts = updatedProducts.filter((e) => {
        if (e.id === updatedProducts[selectedProductIndex].id) {
          return;
        } else {
          return new ProducCartObject(e);
        }
      });
      return updatedProducts;
    });
    setQuantity((state) => state - product.quantity);
    setTotalPrice(
      (state) => state - parseFloat(product.price) * product.quantity
    );
  };

  const cleanCart = () => {
    setProducts([]);
    setQuantity(0);
    setTotalPrice(0);
  };

  const value: CartContextType = {
    isMenuVisible,
    togleMenu,
    addProduct,
    removeProduct,
    products,
    quantity,
    totalPrice,
    removeProductAll,
    cleanCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside of a CartProvider");
  }
  return context;
};

export default CartProvider;
