import React,{useEffect,useState} from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Skills from "./Pages/Skills";
import Contact from "./Pages/Contact";
import { useSelector } from "react-redux";

export const RightSide = () => {
  const activ = useSelector((state)=>state.route.value);
  const [state, setState] = useState();
  
  useEffect(()=>
   {
    setState(parseInt(localStorage.getItem('nav')))

   },[activ])

     switch (state) {
  case 0:
    return (<div><Home/></div>)
    break;
  case 1:
    return (<div><About/></div>)
    break;
  case 2:
    return (<div><Services/></div>)
    break;
  case 3:
    return (<div><Skills/></div>)
    break;
  case 4:
    return (<div><Contact/></div>)
    break;
  default:
    return (<div><Home/></div>)
}

};
