import React from "react";
import {
  FaHome,
  FaListUl,
  FaBriefcase,
  FaFacebookMessenger
} from "react-icons/fa";
import { IoPersonAddSharp } from "react-icons/io5";
import {  useSelector } from "react-redux";
import { useNavigate,useLocation} from "react-router-dom";

export const NavBar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const color = useSelector((state) => state.theme.value);
 
  return (
    <div className="grid gap-3 bg-none">
      <div
        onClick={() => {
          navigate(`/`)

        }}
        className={
             location.pathname === "/"
            ? `flex gap-x-1 ${color[5]} cursor-pointer border-b ${color[0]}`
            : `flex gap-x-1 ${color[5]} cursor-pointer border-b`
        }
      >
        <FaHome className="mt-1" />
       Home
      </div>
      <div
        onClick={() => {
          navigate(`/about`)
        }}
        className={
          location.pathname === "/about"
            ? `flex gap-x-1 ${color[5]} cursor-pointer border-b ${color[0]}`
            : `flex gap-x-1 ${color[5]} cursor-pointer border-b `
        }
      >
        <IoPersonAddSharp className="mt-1" />
        About
      </div>
      <div
        onClick={() => {
        navigate(`/services`)
          }} 
        className={
          location.pathname === "/services"
            ? `flex gap-x-1 ${color[5]} cursor-pointer border-b ${color[0]}`
            : `flex gap-x-1 ${color[5]} cursor-pointer border-b`
        }
      >
        <FaListUl className="mt-1" />
        Services
      </div>
      <div
        onClick={() => {
          navigate(`/skills`)
        }}
        className={
          location.pathname === "/skills"
            ? `flex gap-x-1 ${color[5]} cursor-pointer border-b ${color[0]}`
            : `flex gap-x-1 ${color[5]} cursor-pointer border-b`
        }
      >
        <FaBriefcase className="mt-1" />
        Skills
      </div>
      <div
        onClick={() => {
        navigate(`/contact`)
        }}
        className={
          location.pathname === "/contact"
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
