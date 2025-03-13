// Import necessary dependencies
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Import project images
import ammoLife from "../assets/ammoLife.png";
import flightSim from "../assets/planeDemo.png";
import quickCash from "../assets/quickCash.png";

const Projects = () => {
    return (
      <div className="container mt-4">
        {/* Page title */}
        <h2 className="text-center mb-4">My Projects</h2>
  
        {/* Project: Ammo = Life */}
        <div className="card mb-4 shadow-lg border-0">
          <div className="row g-0 align-items-center">
            <div className="col-md-4">
              {/* Project image */}
              <img src={ammoLife} className="img-fluid rounded-start" alt="Ammo = Life FPS Game" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                {/* Project title */}
                <h3 className="card-title">Ammo = Life</h3>
                <p>
                  <strong>Genre:</strong> First-Person Shooter (FPS)  
                  <br />
                  <strong>Technologies Used:</strong> Unity, C#, Blender, Audacity
                </p>
                <p>
                  <em>Ammo = Life</em> is an experimental FPS game where bullets serve as both 
                  <strong> ammo and health</strong>. Players must carefully manage resources while engaging 
                  in <strong>fast-paced combat</strong>. The game challenges traditional FPS mechanics, 
                  promoting strategic decision-making.
                </p>
              </div>
            </div>
          </div>
        </div>
  
        {/* Project: Flight Simulator */}
        <div className="card mb-4 shadow-lg border-0">
          <div className="row g-0 align-items-center">
            <div className="col-md-4">
              {/* Project image */}
              <img src={flightSim} className="img-fluid rounded-start" alt="Flight Simulator" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                {/* Project title */}
                <h3 className="card-title">Flight Simulator</h3>
                <p>
                  <strong>Genre:</strong> OpenGL-Based 3D Program  
                  <br />
                  <strong>Technologies Used:</strong> OpenGL, FreeGLUT, C++  
                </p>
                <p>
                  This project is a <strong>lightweight flight simulator</strong> designed to demonstrate 
                  OpenGL rendering and animation. It includes a <strong>simple flight model</strong>, 
                  allowing users to control a plane in 3D space while exploring <strong>real-time rendering, 
                  movement, and camera controls</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
  
        {/* Project: QuickCash */}
        <div className="card mb-4 shadow-lg border-0">
          <div className="row g-0 align-items-center">
            <div className="col-md-4">
              {/* Project image */}
              <img src={quickCash} className="img-fluid rounded-start" alt="QuickCash App" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                {/* Project title */}
                <h3 className="card-title">QuickCash</h3>
                <p>
                  <strong>Category:</strong> Job Marketplace Mobile App  
                  <br />
                  <strong>Technologies Used:</strong> Android Studio, Java, Firebase  
                </p>
                <p>
                  <em>QuickCash</em> is a mobile platform connecting <strong>freelancers with quick gig 
                  opportunities</strong>. Inspired by <strong>DoorDash and Fiverr</strong>, it allows users 
                  to post and accept jobs for immediate payment via <strong>PayPal</strong>. Key features 
                  include <strong>real-time job posting, Firebase authentication, and secure transactions</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
  
      </div>
    );
};

// Exporting the Projects component for use in other parts of the app
export default Projects;