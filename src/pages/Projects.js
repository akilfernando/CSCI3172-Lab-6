import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ammoLife from "../assets/ammoLife.png";
import flightSim from "../assets/planeDemo.png";
import quickCash from "../assets/quickCash.png";

const Projects = () => {
    return (
      <div className="container mt-4">
        <h2 className="text-center mb-4">My Projects</h2>
  
        {/* Project: Ammo = Life */}
        <div className="card mb-4 shadow-lg border-0">
          <div className="row g-0 align-items-center">
            <div className="col-md-4">
              <img src={ammoLife} className="img-fluid rounded-start" alt="Ammo = Life FPS Game" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h3 className="card-title">Ammo = Life</h3>
                <p>
                  <strong>Genre:</strong> First-Person Shooter (FPS)  
                  <br />
                  <strong>Technologies Used:</strong> Unity, C#, Blender, Audacity
                </p>
                <p>
                  <em>Ammo = Life</em> is an experimental FPS game that challenges traditional mechanics: 
                  bullets are both your <strong>ammo and health</strong>. Players must balance shooting enemies 
                  while ensuring they have enough resources to survive. The game focuses on <strong>fast-paced combat</strong> that forces players to be decisive and aggressive. 
                </p>
              </div>
            </div>
          </div>
        </div>
  
        {/* Project: Flight Simulator */}
        <div className="card mb-4 shadow-lg border-0">
          <div className="row g-0 align-items-center">
            <div className="col-md-4">
              <img src={flightSim} className="img-fluid rounded-start" alt="Flight Simulator" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h3 className="card-title">Flight Simulator</h3>
                <p>
                  <strong>Genre:</strong> OpenGL-Based 3D Program  
                  <br />
                  <strong>Technologies Used:</strong> OpenGL, FreeGLUT, C++  
                </p>
                <p>
                  This is a <strong>lightweight flight "simulator"</strong> designed to showcase OpenGL rendering 
                  and animation techniques. The program features a <strong>rudimentary but functional flight model</strong>, 
                  allowing users to control a plane in 3D space. The goal was to understand and implement 
                  <strong> real-time rendering, simple movement, and camera controls</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
  
        {/* Project: QuickCash */}
        <div className="card mb-4 shadow-lg border-0">
          <div className="row g-0 align-items-center">
            <div className="col-md-4">
              <img src={quickCash} className="img-fluid rounded-start" alt="QuickCash App" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h3 className="card-title">QuickCash</h3>
                <p>
                  <strong>Category:</strong> Job Marketplace Mobile App  
                  <br />
                  <strong>Technologies Used:</strong> Android Studio, Java, Firebase  
                </p>
                <p>
                  <em>QuickCash</em> is a mobile platform that bridges the gap between <strong>freelancers and 
                  quick gig opportunities</strong>. Inspired by platforms like <strong>DoorDash and Fiverr</strong>, users can 
                  post short-term jobs and accept offers for immediate payments using <strong>PayPal</strong>. The app features 
                  <strong> real-time job posting, Firebase authentication, and secure payment integration</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
  
      </div>
    );
  };
  
  export default Projects;