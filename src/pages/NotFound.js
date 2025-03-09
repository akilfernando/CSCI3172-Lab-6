import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container text-center py-5">
      <h1 className="display-4">404 - Page Not Found</h1>
      <p className="lead">Sorry, the page you're looking for doesn't exist.</p>
      <Link to="/" className="btn btn-primary">Go to Home</Link>
    </div>
  );
};

export default NotFound;
