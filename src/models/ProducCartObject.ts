import ProductObject from "./ProductObject";

type ProductCartType = {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
  quantity: number;
};

class ProductCartObject extends ProductObject {
  quantity: number;
  constructor(product: ProductCartType) {
    const {
      id,
      name,
      brand,
      description,
      photo,
      price,
      createdAt,
      updatedAt,
      quantity,
    } = product;
    super({ id, name, brand, description, photo, price, createdAt, updatedAt });
    this.quantity = quantity;
  }
}

export default ProductCartObject;
