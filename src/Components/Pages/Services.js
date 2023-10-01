import React, {  useState } from "react";
import { useSelector } from "react-redux";
import {
  FaMobileAlt,
  FaDev,
  FaCode,
  FaReact,
  FaSearchengin
} from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Services = () => {
  const [isShown1, setIsShown1] = useState(false);
  const [hove, setHove] = useState();
  const dark = useSelector((state) => state.dark.value);
  const color = useSelector((state) => state.theme.value);
  const location = useLocation(); 
  const info = useSelector((state) => state.info.value);

  const icons = [
   { id : 1,
     img : FaMobileAlt,
     title :`${info.services[0].mobileicontitle}`,
     desc : `${info.services[0].mobileicondesc}` } ,
   {id : 2,
     img : FaDev,
     title :`${info.services[0].devicontitle}`,
     desc : `${info.services[0].devicondesc}` } ,
   { id : 3,
     img : FaCode,
     title :`${info.services[0].codeicontitle}`,
     desc : `${info.services[0].codeicondesc}` } ,
   { id : 4,
     img : FaReact,
     title :`${info.services[0].reacticontitle}`,
     desc : `${info.services[0].reacticondesc}` } ,
    {id : 5,
     img : FaSearchengin,
     title :`${info.services[0].searchicontitle}`,
     desc : `${info.services[0].searchicondesc}` } ,   
   { id : 6,
     img : MdComputer,
     title :`${info.services[0].pcicontitle}`,
     desc : `${info.services[0].pcicondesc}` } 
     
  ]
  

  
 

  const handleEnterMouse1 = (key) => {
    setIsShown1(true)
    setHove(key) 
  };
  
  const handleLeaveMouse1 = () => {
    setIsShown1(false);
  };
 
  
  return (
    <motion.div
     key={location.pathname}
     exit={  {x : -window.innerWidth} }
     initial={{ x : window.innerWidth }}
    animate={{ x : 1}}
    transition={{ duration: 1 }} 
    className={`mt-10 pl-5 pr-5 relative pb-10 `}>
      <div>
        <div className="font-bold text-4xl">Services</div>
        <div className={`${color[1]} border-t-8 w-12`}></div>
        <div className={`${color[1]} border-t-8 w-6 mt-1`}></div>
      </div>
      <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {icons.map((icon, index) => (
        <div
          key={index}
          onMouseEnter={() =>   { handleEnterMouse1(icon.id)
          setHove(icon.id)          
            } }
          onMouseLeave={() => handleLeaveMouse1(icon.id)}
          className={
            dark
              ? "grid p-8 px-5 gap-4 bg-gray-800 border-none rounded-lg "
              : " grid p-8 px-5 gap-4 bg-white border-none rounded-lg "
          }
        >
         { <icon.img
            className={
              isShown1 && hove===icon.id
                ? ` h-20 w-20 m-auto ${color[0]} border-none rounded-full ${color[4]}`
                : ` h-20 w-20 m-auto ${color[0]} border-none rounded-full`
            }
          />}
          <div className="text-center font-bold ">{icon.title}</div>
          <div className={
              isShown1 && hove===icon.id
                ? `text-center ${color[0]}`
                :
                 `text-center` }>
          {icon.desc}
          </div>
        </div>
       )) }

      </div>
    </motion.div>
  );
};
export default Services;
