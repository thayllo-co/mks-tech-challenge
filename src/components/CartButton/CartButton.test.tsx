import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CartButton from "./CartButton";

describe("<CartButton />", () => {
  it("renders CartButton", () => {
    render(<CartButton />);
    expect(screen.getByTestId("CartButton")).toBeInTheDocument();
  });

  it("renders CartButton quantity", () => {
    render(<CartButton />);
    expect(screen.getByTestId("CartButton")).toHaveTextContent("0");
  });
});
