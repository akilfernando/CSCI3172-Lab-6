import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import profilePic from "../assets/profile.jpeg";

const About = () => {
  return (
    <div className="container mt-4 text-center">
      <img src={profilePic} alt="Akil" className="img-fluid rounded-circle mb-3" width="200" />
      <h2>About Me</h2>
      <p>
        Hi! I'm Akil, a developer with experience in React, Firebase, and Unity game development.
        I love creating efficient and visually appealing applications.
      </p>
    </div>
  );
};

export default About;