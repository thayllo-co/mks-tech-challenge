import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CartMenu from "./CartMenu";

describe("<CartMenu />", () => {
  it("not renders CartMenu", () => {
    render(<CartMenu />);
    expect(screen.getByTestId("CartMenu")).toBeEmptyDOMElement();
  });
});
