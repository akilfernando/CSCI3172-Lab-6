import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container-fluid bg-primary text-white hero-section py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h1 className="display-4">Hi, I'm Akil Fernando</h1>
          <p className="lead">A passionate web developer and student, focusing on React, JavaScript, and full-stack development.</p>
          <Link to="/about" className="btn btn-light btn-lg mt-3">Learn More About Me</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
