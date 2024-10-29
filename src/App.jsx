import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Projects from "./pages/Projects";
import About from "./pages/About";
import "./index.css";
const App = () => {
  return (
    <Router>
      {" "}
      <Navbar />{" "}
      <Routes>
        {" "}
        <Route path="/" element={<Home />} />{" "}
        <Route path="/blog" element={<Blog />} />{" "}
        <Route path="/projects" element={<Projects />} />{" "}
        <Route path="/about" element={<About />} />{" "}
      </Routes>{" "}
    </Router>
  );
};

export default App;
