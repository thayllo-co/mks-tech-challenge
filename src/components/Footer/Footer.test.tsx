import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("<Footer />", () => {
  it("renders Footer", () => {
    render(<Footer />);
    expect(screen.getByTestId("Footer")).toBeInTheDocument();
  });

  it("renders Footer text", () => {
    render(<Footer />);
    expect(screen.getByTestId("Footer")).toHaveTextContent(
      "MKS sistemas © Todos os direitos reservados"
    );
  });
});
