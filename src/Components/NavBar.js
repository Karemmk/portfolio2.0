import React, { useEffect } from "react";
import {
  FaHome,
  FaListUl,
  FaBriefcase,
  FaFacebookMessenger
} from "react-icons/fa";
import { IoPersonAddSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { route } from "../Redux/stateSlices/routeSlice";

export const NavBar = () => {
  const color = useSelector((state) => state.theme.value);
  const activ = useSelector((state) => state.route.value);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const routeHandle = (numb) => {
    dispatch(route(numb));
  };
  useEffect(() => {
    if (activ === 0) {
      Navigate("/");
    } else if (activ === 1) {
      Navigate("/about");
    } else if (activ === 2) {
      Navigate("/services");
    } else if (activ === 3) {
      Navigate("/skills");
    } else {
      Navigate("/contact");
    }
  }, [activ, Navigate]);

  return (
    <div className="grid gap-3 bg-none">
      <div
        onClick={() => {
          Navigate("/");
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
          Navigate("/about");
          dispatch(route(1));
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
          Navigate("/services");
          dispatch(route(2));
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
          Navigate("/skills");
          dispatch(route(3));
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
          Navigate("/contact");
          dispatch(route(4));
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
