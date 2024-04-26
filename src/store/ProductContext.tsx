import Product from "@/models/ProductObject";
import { fetchProducts } from "@/utils/http";
import { useQuery } from "@tanstack/react-query";
import { createContext, ReactNode, useContext } from "react";

type ProductsContextType = {
  products: Product[];
  isPending: boolean;
  isError: boolean;
  error: Error | null;
};

const productsDefaultValues: ProductsContextType = {
  products: [],
  isPending: true,
  isError: false,
  error: null,
};

const ProductsContext = createContext<ProductsContextType>(
  productsDefaultValues
);

type ProductsProviderProps = {
  children: ReactNode;
};

const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const value: ProductsContextType = {
    products: data,
    isPending,
    isError,
    error,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useProducts must be used inside of a ProductsProvider");
  }
  return context;
};

export default ProductsProvider;
