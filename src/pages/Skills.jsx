import React from "react";
import Accordion from "../components/Accordian";
import "./skills.css"

const Skills = () => {
  const developmentSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Vue",
    "Vuex",
    "Pinia",
    "NodeJs",
    "React",
    "Redux",
    "Webpack",
    "NPM",
    "Yarn",
    "Git/GitHub",
    "Heroku",
    "Pendo",
    "SonarQube",
    "Python",
  ];
  const testingSkills = [
    "Unit Testing",
    "Test Driven Development",
    "Jest",
    "Automation using bots",
  ];
  const webpackSkills = ["Webpack"];

  return ( 
  <div className="skills"> 
    <Accordion title="Development" skills={developmentSkills} />
     <Accordion title="Testing" skills={testingSkills} /> 
     <Accordion title="Webpacks" skills={webpackSkills} /> 
     </div>
  );
};

export default Skills;
