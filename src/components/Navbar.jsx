import React from "react";
import { NavLink } from "react-router-dom";
import Home from '../pages/Home'; 
import About from '../pages/About'; 
import Blog from '../pages/Blog';
import Education from "../pages/Education";
import "./Navbar.css";

const NavBar = () => {
  return (
    <div className="Navbar">
      <span>Srikar Portfolio</span>
      <NavLink to="/" activeClassName="active-link">Home</NavLink>
      <NavLink to="/blog" activeClassName="active-link">Blog</NavLink>
      <NavLink to="/projects" activeClassName="active-link">Projects</NavLink>
      <NavLink to="/about" activeClassName="active-link">About</NavLink>
    </div>
  );
};

export default NavBar;
