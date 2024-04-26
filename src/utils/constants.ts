import ProductObject from "@/models/ProductObject";

export const PRODUCTS = [
  new ProductObject({
    id: 1,
    name: "Iphone 11 128 GB",
    brand: "Apple",
    description:
      "Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.",
    photo:
      "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp",
    price: "5000.00",
    createdAt: "2023-10-30T16:25:01.093Z",
    updatedAt: "2023-10-30T16:25:01.093Z",
  }),
  new ProductObject({
    id: 3,
    name: "Macbook Air",
    brand: "Apple",
    description:
      "Processador intel Core i5 de dois núcleos e 1,8 GHz (Turbo Boost de até 2,9 GHz) com cache L3 compartilhado de 3 MB.",
    photo:
      "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/macbookair.webp",
    price: "8200.00",
    createdAt: "2023-10-30T16:25:01.093Z",
    updatedAt: "2023-10-30T16:25:01.093Z",
  }),
  new ProductObject({
    id: 2,
    name: "AirPods",
    brand: "Apple",
    description:
      "Criados pela Apple Ligam e se conectam automaticamente Configuração com apenas um toque para todos seus aparelhos Apple.",
    photo:
      "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/airpods.webp",
    price: "1200.00",
    createdAt: "2023-10-30T16:25:01.093Z",
    updatedAt: "2023-10-30T16:25:01.093Z",
  }),
];
