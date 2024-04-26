type ProductType = {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
};

class ProductObject {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;

  constructor(product: ProductType) {
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

export default ProductObject;
