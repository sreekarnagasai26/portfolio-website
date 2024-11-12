import "./Card.css";

const Card = ({ project }) => {
  return (
    <div className="cardComponent">      
      <img src={project.src} alt={project.name} />
      <div>   
        <button>{project.percentage}%</button> <p>{project.description}</p>{" "}
      </div>
    </div>
  );
};

export default Card;
