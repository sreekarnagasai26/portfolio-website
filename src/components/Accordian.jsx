import React, { useState } from "react";
import "./Accordian.css";

const Accordion = ({ title, skills }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion ${isOpen ? "open" : ""}`}>   
      <div className="accordion-title" onClick={toggleAccordion}> 
        {title}
      </div>
      {isOpen && (
        <div className="accordion-content">
          
          {skills.map((skill, index) => (
            <div className="skill" key={index}>
              
              <img src={`/icons/${skill.toLowerCase()}.png`} alt={skill} />
              <span>{skill}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Accordion;
