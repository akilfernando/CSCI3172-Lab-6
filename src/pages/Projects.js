import React from 'react';

const Projects = () => {
    return (
        <div className="container py-5">
            <h2 className="text-center mb-4">Projects</h2>
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <img src="https://www.wpdownloadmanager.com/wp-content/uploads/2021/08/Features-To-Consider-Before-Choosing-an-E-commerce-Platform.jpg" className="card-img-top" alt="E-commerce Platform" />
                        <div className="card-body">
                            <h5 className="card-title">E-commerce Platform</h5>
                            <p className="card-text">A full stack e-commerce platform built with React, Node.js, Express, and MongoDB. Features include user authentication, product management, and payment integration.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2024/08/some-3d-social-media-icons.jpg" className="card-img-top" alt="Social Media App" />
                        <div className="card-body">
                            <h5 className="card-title">Social Media App</h5>
                            <p className="card-text">A social media application developed using React, Redux, Node.js, Express, and PostgreSQL. Includes features like user profiles, posts, comments, and real-time notifications.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img src="https://www.zohowebstatic.com/sites/zweb/images/projects/mobile-team/about-banner.png" className="card-img-top" alt="Project Management Tool" />
                        <div className="card-body">
                            <h5 className="card-title">Project Management Tool</h5>
                            <p className="card-text">A project management tool built with Angular, Node.js, Express, and MySQL. Features include task management, team collaboration, and project tracking.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
