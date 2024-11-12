import React from "react";
import MyButton from "../components/button";
import Card from "../components/Card";
import "./projects.css"
import framework from "../Assests/framework.png"
import ecommerce from "../Assests/ecommerce.jpeg"
import InterestNow from "../Assests/InterestNow.jpg"
import complibraryimg from "../Assests/complibraryimg.avif"

const Projects = () => {
  const projectTypes = ["Development", "E-commerce", "One-Page"];
  const projects = [
    {
      name: "SOMA",
      description: "Web framework built from scratch",
      percentage: 80,
      src: framework
    },
    {
      name: "E-commerce website",
      description: "Website built using React",
      percentage: 40,
      src:ecommerce
    },
    {
      name: "Component library",
      description: "Components are implemented in Vanilla javascript",
      percentage: 30,
      src:complibraryimg
    },
    {
      name: "InterestedNow",
      description: "Personal Project",
      percentage: 30,
      src:InterestNow
    },
  ];
  return (
    <div className="projectClass">
      <h1>Projects</h1> <p>Your projects...</p>
      <div className="projectTypes">  
        {projectTypes.map((item, index) => (
          <MyButton key={index} label={item} />
        ))}
      </div>
      <div className="projectCards">    
        {projects.map((project, index) => (
          <Card key={index} project={project} />
        ))}
      </div>
    </div>
  );
};
export default Projects;
