import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CartProductList from "./CartProductList";

describe("<CartProductList />", () => {
  it("renders CartProductList", () => {
    render(<CartProductList />);
    expect(screen.getByTestId("CartProductList")).toBeInTheDocument();
  });

  it("renders placeholder", () => {
    render(<CartProductList />);
    expect(screen.getByTestId("CartProductList")).toHaveTextContent(
      "Nada para exibir aqui"
    );
  });
});
