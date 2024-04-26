import ProducCartObject from "@/models/ProducCartObject";

export const printCart = (products: ProducCartObject[], totalPrice: number) => {
  if (products.length > 0) {
    let cartSummary: string = "Resumo da Compra\n";
    for (const product of products) {
      cartSummary =
        cartSummary +
        `# ${product.name} - ${product.quantity} x R$${product.price}\n`;
    }
    cartSummary = cartSummary + `TOTAL R$ ${totalPrice.toFixed(2)}`;
    alert(cartSummary);
  } else {
    alert("Não há produtos no carrinho 😶");
  }
};
