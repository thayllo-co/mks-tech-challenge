type ProductObject = {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
};

class Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;

  constructor(product: ProductObject) {
    const { id, name, brand, description, photo, price, createdAt, updatedAt } =
      product;
    this.id = id;
    this.name = name;
    this.brand = brand;
    this.description = description;
    this.photo = photo;
    this.price = price;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

export default Product;
