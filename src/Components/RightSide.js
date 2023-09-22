import React,{useEffect,useState} from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Skills from "./Pages/Skills";
import Contact from "./Pages/Contact";
import { Routes, Route } from "react-router-dom";

export const RightSide = () => {

  

  return (
     <div>
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/skills" element={<Skills />} />
        <Route exact path="/conctact" element={<Contact />} />
      </Routes>
     </div> 
  )
};
