// Import necessary dependencies
import { Link } from "react-router-dom";
import notFound from "../assets/notFound.png"; // Import "Not Found" image

const NotFound = () => {
  return (
    <div className="container text-center mt-5">
      {/* Page title and message */}
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>

      {/* Display "Not Found" image */}
      <img 
        src={notFound} 
        alt="Not Found" 
        className="img-fluid my-4" 
        style={{ maxWidth: "25%", height: "auto" }} 
      />

      {/* Button to navigate back to the home page */}
      <br />
      <Link to="/" className="btn btn-primary mt-3" style={{ margin: "15px" }}>
        Go to Home
      </Link>
    </div>
  );
};

// Exporting the NotFound component for use in other parts of the app
export default NotFound;