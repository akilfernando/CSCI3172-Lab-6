// Import testing utilities from React Testing Library
import { render } from "@testing-library/react";

// Import the Header component to be tested
import Header from "../components/Header";

test("renders navigation bar", () => {
  // Render the Header component
  const { getByText } = render(<Header />);

  // Check if "Akil's Portfolio" text is present in the document
  expect(getByText(/Akil's Portfolio/i)).toBeInTheDocument();
});
