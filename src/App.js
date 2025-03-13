// Import necessary dependencies
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import "./styles/custom.css"; // Import custom styles

function App() {
  return (
    // Wrap the application in a Router to handle routing
    <Router>
      {/* Header component */}
      <Header />
      
      {/* Define routes for different pages */}
      <Routes>
        {/* Home page route */}
        <Route path="/" element={<Home />} />
        
        {/* About page route */}
        <Route path="/about" element={<About />} />
        
        {/* Projects page route */}
        <Route path="/projects" element={<Projects />} />
        
        {/* Catch-all route for undefined paths (404 page) */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      {/* Footer component */}
      <Footer />
    </Router>
  );
}

export default App;