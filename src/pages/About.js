// Import necessary dependencies
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import profilePic from "../assets/profile.jpeg"; // Import profile image

const About = () => {
  return (
    <div className="container mt-4 text-center">
      {/* Profile image with Bootstrap styling */}
      <img src={profilePic} alt="Akil" className="img-fluid rounded-circle mb-3" width="200" />

      {/* Section title */}
      <h2>About Me</h2>

      {/* Short bio */}
      <p>
        Hi! I'm Akil, a developer with experience in React, Firebase, and Unity game development.
        I love creating efficient and visually appealing applications.
      </p>
    </div>
  );
};

// Exporting the About component for use in other parts of the app
export default About;
