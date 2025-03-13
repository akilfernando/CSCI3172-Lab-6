import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import heroImage from "../assets/logo.webp"; // Add your hero image

const Home = () => {
  return (
    <div className="container mt-4 text-center">
      <img src={heroImage} alt="Hero" className="img-fluid rounded-3 mb-4" style={{ maxHeight: "400px" }} />
      <h1>Welcome to My Portfolio</h1>
      <p className="lead">I am Akil, a passionate developer building amazing applications.</p>
    </div>
  );
};

export default Home;