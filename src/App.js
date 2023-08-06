// Dependencies
import React, { useState } from "react";
import { FaListAlt } from "react-icons/fa";
import { BrowserRouter } from "react-router-dom";
import { RightSide } from "./Components/RightSide";
import { LeftSide } from "./Components/LeftSide";
// Styles
import "./tailwind.output.css";
import { DarkMode } from "./Components/DarkMode";
import { Theme } from "./Components/Theme";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const App = () => {
  const color = useSelector((state) => state.theme.value);
  const [navopen, setNavopen] = useState(false);
  const dark = useSelector((state) => state.dark.value);
  const minNav = () => {
    setNavopen(!navopen);
  };
  const colseNav = () => {
    navopen ? setNavopen(false) : "";
  };
  return (
    <BrowserRouter>
      <div onClick={colseNav} className="relative  bg-green-500 ">
        <div className="flex">
          <Theme />
          <DarkMode />
          <FaListAlt
            onClick={minNav}
            className={`sm:hidden text-${color}-500 hover:text-gray-600 z-40 absolute w-10 h-10 mt-2 ml-3 cursor-pointer`}
          />
          <div
            className={
              navopen
                ? dark
                  ? "absolute w-2/4 bg-gray-800 max-h-full-6xl text-gray-200 pt-10 p-10 z-30"
                  : "absolute max-h-full-6xl bg-white w-2/4 pt-10 p-10 z-30"
                : dark
                ? "hidden sm:inline-block sm:w-1/4 bg-gray-800 text-gray-200"
                : "hidden bg-white sm:w-1/4 sm:inline-block"
            }
          >
            <LeftSide onclick={() => setNavopen(false)} />
          </div>
          <div
            className={
              dark
                ? "  sm:w-3/4 bg-gray-900 text-gray-200"
                : " sm:w-3/4 bg-gray-200"
            }
          >
            <RightSide />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
