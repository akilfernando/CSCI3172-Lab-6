import React from 'react';

const About = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">About Me</h2>
      <div className="row">
        <div className="col-md-6">
          <h3>Education & Background</h3>
          <p>I am currently a student pursuing my degree in Computer Science. My focus is on web development, with a particular interest in front-end technologies like React.</p>
        </div>
        <div className="col-md-6">
          <h3>Technical Skills</h3>
          <ul>
            <li>React</li>
            <li>JavaScript (ES6+)</li>
            <li>Node.js</li>
            <li>Python</li>
            <li>Firebase</li>
          </ul>
        </div>
      </div>
      <div className="mt-5">
        <h3>Career Goals</h3>
        <p>My goal is to become a proficient full-stack developer with a solid understanding of both front-end and back-end technologies.</p>
      </div>
    </div>
  );
};

export default About;
