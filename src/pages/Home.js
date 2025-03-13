// Import necessary dependencies
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import heroImage from "../assets/logo.webp"; // Import hero image

const Home = () => {
  return (
    <div className="container mt-4 text-center">
      {/* Hero image with Bootstrap styling */}
      <img 
        src={heroImage} 
        alt="Hero" 
        className="img-fluid rounded-3 mb-4" 
        style={{ maxHeight: "400px" }} 
      />

      {/* Main heading */}
      <h1>Welcome to My Portfolio</h1>

      {/* Short introduction */}
      <p className="lead">I am Akil, a passionate developer building amazing applications.</p>
    </div>
  );
};

// Exporting the Home component for use in other parts of the app
export default Home;
