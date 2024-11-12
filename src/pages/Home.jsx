import React from "react";
import "./Home.css";
import srikar from "../Assests/srikar.jpeg";
import cv from "../Assests/cv.pdf";

const Home = () => {
  return (
    <div className="HomePage">
      <div className="text-section">
        <div>Hi, I am Sreekar</div>
        <div> FrontEnd Developer</div>
        <div>
          Full Stack Developer with 3+ years of experience in building
          responsive and scalable web applications using modern frameworks such
          as Vue.js, React, and Node.js. Proficient in TypeScript and JavaScript
          for frontend development and experienced with Python for backend
          services. Adept in Agile methodologies, DevOps practices, and
          cloud-based deployments with tools like Heroku and GitHub Actions.
        </div>
        <a href={cv} className="download-button">
          My Resume
          <div className="tooltip">
            <p>Sreekar Dathi</p>
            <p>Full Stack Developer</p> <p>Hyderabad</p>
            <p>Email: sreekarnagasai@gmail.com</p> <p>Phone: 8008629639</p>
          </div>
        </a>
      </div>
      <img src={srikar} alt="Srikar" />
    </div>
  );
};

export default Home;
