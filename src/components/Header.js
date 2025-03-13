// Import necessary dependencies
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from "../assets/logo.webp";

const Header = () => {
  useEffect(() => {
    // Select navbar toggler button and collapse menu
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector("#navbarNav");

    // Add event listener to toggle menu visibility on click
    if (navbarToggler) {
      navbarToggler.addEventListener("click", () => {
        navbarCollapse.classList.toggle("show");
      });
    }

    // Cleanup event listener when component unmounts
    return () => {
      if (navbarToggler) {
        navbarToggler.removeEventListener("click", () => {
          navbarCollapse.classList.toggle("show");
        });
      }
    };
  }, []);

  return (
    // Navbar container with Bootstrap classes
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* Logo and site title with a link to the homepage */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Portfolio Logo" width="40" height="40" className="me-2" />
          Akil's Portfolio
        </Link>

        {/* Navbar toggle button for mobile view */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/projects">Projects</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// Exporting the Header component for use in other parts of the app
export default Header;