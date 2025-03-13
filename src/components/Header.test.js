import { render } from "@testing-library/react";
import Header from "../components/Header";

test("renders navigation bar", () => {
  const { getByText } = render(<Header />);
  expect(getByText(/Akil's Portfolio/i)).toBeInTheDocument();
});