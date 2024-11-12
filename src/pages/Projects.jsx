import React from "react";
import MyButton from "../components/button";
import Card from "../components/Card";

const Projects = () => {

  const projectTypes = ["Development", "E-commerce", "One-Page"]
  return (
    <div className="projectClass">
      <h1>Projects</h1> <p>Your projects...</p>
      {projectTypes.map((item) => {
       return <MyButton label={item}></MyButton>
      })}

      <Card></Card>
    </div>
  );
};
export default Projects;
