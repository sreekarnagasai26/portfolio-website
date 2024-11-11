import React from "react";
import { Link, Router } from "react-router-dom";
import Home from '../pages/Home'; 
import About from '../pages/About'; 
import Blog from '../pages/Blog';
import Education from "../pages/Education";
import "./Navbar.css";

const NavBar = () => {
  return (
    <Router>
      <nav role="navigation">
        
        <div className="nav-list">
          
          <Link className="nav-item" to="/">
            Home
          </Link>
          <Link className="nav-item" to="/about">
            About
          </Link>
          <Link className="nav-item" to="/skills">
            Skills
          </Link>
          <Link className="nav-item" to="/education">
            Education
          </Link>
        </div>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/education" component={Education} />
      </nav>
    </Router>
  );
};

export default NavBar;
