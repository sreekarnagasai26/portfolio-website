const MyButton = ({ label, color }) => {
  const buttonStyle = {
    backgroundColor: color === "blue" ? "blue" : "white",
    color: color === "blue" ? "white" : "black",
    border: `2px solid ${color === "blue" ? "blue" : "black"}`,
    padding: "10px 20px",
    cursor: "pointer",
    borderRadius:"15px"
  };

  return (
    <div>
      <button className="mybutton" style={buttonStyle}>{label}</button>
    </div>
  );
};

export default MyButton;
