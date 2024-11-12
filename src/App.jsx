import React from "react";
import {  Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import About from "./pages/About";
import "./index.css";



const App = () => {
  return (
    <>
   <Navbar></Navbar>
   <Routes>
    <Route></Route>
    <Route path="/" element={<Home />} />
    <Route path="/skills" element={<Skills />} />
    <Route path="/projects" element={<Projects></Projects>}></Route>
    <Route path="/about" element={<About />} />
   </Routes>
   </>
    
  );
};

export default App;
