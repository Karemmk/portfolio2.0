import React,{useEffect,useState} from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Skills from "./Pages/Skills";
import Contact from "./Pages/Contact";
import { useDispatch, useSelector } from "react-redux";
import { Routes , Route ,useLocation ,useSearchParams } from "react-router-dom";
import { AnimatePresence } from "framer-motion"

export const RightSide = () => {
  const color = useSelector((state) => state.theme.value[0]);
  const location = useLocation();
  

  return (
     <div>
      <AnimatePresence>
       <Routes location={location} key={location.pathname}>
        <Route  path="" element={<Home />} />
        <Route  path="about" element={<About />} />
        <Route  path="services" element={<Services />} />
        <Route  path="skills" element={<Skills />} />
        <Route  path="contact" element={<Contact />} />
        <Route  path="*" element={<Home />} />        
       </Routes>
       </AnimatePresence>
     </div> 
  )
};
