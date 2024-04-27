import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CloseButton from "./CloseButton";

describe("<CloseButton />", () => {
  it("renders CloseButton", () => {
    render(<CloseButton onClick={() => {}} />);
    expect(screen.getByTestId("CloseButton")).toBeInTheDocument();
  });

  it("renders X inner CloseButton", () => {
    render(<CloseButton onClick={() => {}} />);
    const button = screen.getByTestId("CloseButton");
    expect(button).toHaveTextContent("X");
  });
});
