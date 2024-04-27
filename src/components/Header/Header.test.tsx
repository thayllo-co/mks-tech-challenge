import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("<Header />", () => {
  it("renders Header", () => {
    render(<Header />);
    expect(screen.getByTestId("Header")).toBeInTheDocument();
  });

  it("renders CartMenu logo text", () => {
    render(<Header />);
    expect(screen.getByTestId("Header")).toHaveTextContent("MKS Sistemas");
  });
});
