import { render, screen } from "@testing-library/react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

test("renders About in Nav", () => {
  render(<Nav />);
  const linkElement = screen.getByText(/About/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders Work in Nav", () => {
  render(<Nav />);
  const linkElement = screen.getByText(/Work/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders Contact in Nav", () => {
  render(<Nav />);
  const linkElement = screen.getByText(/Contact/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders Resume in Nav", () => {
  render(<Nav />);
  const linkElement = screen.getByText(/Resume/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders LinkedIn in Footer", () => {
  render(<Footer />);
  const linkElement = screen.getByText(/LinkedIn/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders GitHub in Footer", () => {
  render(<Footer />);
  const linkElement = screen.getByText(/GitHub/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders Email in Footer", () => {
  render(<Footer />);
  const linkElement = screen.getByText(/Email/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders Stack Overflow in Footer", () => {
  render(<Footer />);
  const linkElement = screen.getByText(/Stack Overflow/i);
  expect(linkElement).toBeInTheDocument();
});
