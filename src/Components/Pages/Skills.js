import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Skills = () => {
  const location = useLocation(); 
  const dark = useSelector((state) => state.dark.value);
  const color = useSelector((state) => state.theme.value);
  const info = useSelector((state) => state.info.value);
  const [images, setImages] = useState([]);
  
 useEffect(() => {
    setImages(info.skills[0].images);
  }, [images,info.skills]);
 
  
 
  return (
     <motion.div
      key={location.pathname}
     exit={  {x : -window.innerWidth} }
     initial={{ x : window.innerWidth }}
    animate={{ x : 1}}
    transition={{ duration: 1 }} 
    className={` mt-10 pl-5 pr-5 relative pb-10 `}>
      <div>
        <div className="font-bold text-4xl">Skills</div>
        <div className={`${color[1]} border-t-8 w-12`}></div>
        <div className={`${color[1]} border-t-8 w-6 mt-1`}></div>
      </div>
      <div className="mt-10">My Projects:</div>
      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((photo, index) => (
          <a
           
            key={photo.id}
            href={photo.adress}
            target="_blank"
            and
            rel="noopener noreferrer"
            className={
             
              dark
                ? `grid p-8 px-5 gap-4 bg-gray-800 ${color[3]} border-none rounded-lg`
                : `grid p-8 px-5 gap-4 bg-white  border-none rounded-lg ${color[3]}`
                
            }
          >
            <img
              src={photo.url}
              alt={photo.alternativetext}
              className={`m-auto ${color[0]} border-2 ${color[1]} rounded`}
            />
            <div className={`text-center font-bold ${color[0]}`}>
              {photo.alternativetext}
            </div>
          </a>
        ))}
      </div>
    </motion.div>
  );
};
export default Skills;
