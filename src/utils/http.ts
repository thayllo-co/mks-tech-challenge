const BASE_URL =
  "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/";

export const fetchProducts = async () => {
  let url = BASE_URL + "products?page=1&rows=8&sortBy=id&orderBy=ASC";

  const response = await fetch(url, {
    headers: { accept: "application/json" },
  });

  if (!response.ok) {
    throw new Error("An error occurred while fetching the products");
  }

  const { products } = await response.json();

  return products;
};
