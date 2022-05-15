import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Oliver Drew | Web Developer", () => {
  render(<App />);
  const linkElement = screen.getByText(/Oliver Drew/i);
  expect(linkElement).toBeInTheDocument();
});
