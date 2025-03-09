import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';

// Import Components
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;