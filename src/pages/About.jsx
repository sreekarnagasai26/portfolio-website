import React, { useState } from "react";



const About = () => {
 
const [aboutState, setAboutState] = useState({
  name:"",
  email:"",
  message:"",
})

const [errors, setErrors] = useState({})

const handleChange = (e) => {
  
}


const handleSubmit = (e) => {

}

  return (
    <div className="About">
    <p>Do you need a website or want to know more about my services? Contact me </p>
     <form onSubmit={handleSubmit} className="form-container">
      <label htmlFor="name">Name</label>
      <input type="text" id="name" value={aboutState.name} placeholder="Your Name" onChange={handleChange}/>
      <label htmlFor="email">Email</label>
      <input type="email" value={aboutState.email} placeholder="Your Email" onChange={handleChange}/>
      <label htmlFor="">Message</label>
      <input type="text" value={aboutState.message} onChange={handleChange} placeholder="Your Message" rows="4" required />
      <button className="submit-button">Submit</button>
     </form>
    </div>
  );
};


export default About;
