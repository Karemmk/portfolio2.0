import React, { useEffect } from "react";
import {
  FaHome,
  FaListUl,
  FaBriefcase,
  FaFacebookMessenger
} from "react-icons/fa";
import { IoPersonAddSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { route } from "../Redux/stateSlices/routeSlice";

export const NavBar = () => {
  const color = useSelector((state) => state.theme.value);
  const activ = useSelector((state) => state.route.value);
  const dispatch = useDispatch();
  const routeHandle = (numb) => {
  localStorage.setItem('nav',numb);    dispatch(route(parseInt(localStorage.getItem('nav')))); 
  };
  
  useEffect(()=>
   {
const state=localStorage.getItem('nav') ;
     state ? dispatch(route(parseInt(localStorage.getItem('nav'))))
:
dispatch(route(activ))
   },[activ,dispatch])
 

  return (
    <div className="grid gap-3 bg-none">
      <div
        onClick={() => {
          routeHandle(0);
        }}
        className={
          activ === 0
            ? `flex gap-x-1 ${color[5]} cursor-pointer border-b ${color[0]}`
            : `flex gap-x-1 ${color[5]} cursor-pointer border-b`
        }
      >
        <FaHome className="mt-1" />
       Home
      </div>
      <div
        onClick={() => {
           routeHandle(1);
        }}
        className={
          activ === 1
            ? `flex gap-x-1 ${color[5]} cursor-pointer border-b ${color[0]}`
            : `flex gap-x-1 ${color[5]} cursor-pointer border-b `
        }
      >
        <IoPersonAddSharp className="mt-1" />
        About
      </div>
      <div
        onClick={() => {
           routeHandle(2);
          }} 
        className={
          activ === 2
            ? `flex gap-x-1 ${color[5]} cursor-pointer border-b ${color[0]}`
            : `flex gap-x-1 ${color[5]} cursor-pointer border-b`
        }
      >
        <FaListUl className="mt-1" />
        Services
      </div>
      <div
        onClick={() => {
          routeHandle(3);
        }}
        className={
          activ === 3
            ? `flex gap-x-1 ${color[5]} cursor-pointer border-b ${color[0]}`
            : `flex gap-x-1 ${color[5]} cursor-pointer border-b`
        }
      >
        <FaBriefcase className="mt-1" />
        Skills
      </div>
      <div
        onClick={() => {
           routeHandle(4);
        }}
        className={
          activ === 4
            ? `flex gap-x-1 ${color[5]} cursor-pointer border-b ${color[0]}`
            : `flex gap-x-1 ${color[5]} cursor-pointer border-b`
        }
      >
        <FaFacebookMessenger className="mt-1" />
        Contact
      </div>
    </div>
  );
};
