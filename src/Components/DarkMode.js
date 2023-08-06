import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { darkMode } from "../Redux/stateSlices/darkSlice";

export const DarkMode = () => {
  const color = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  const dark = useSelector((state) => state.dark.value);
  const handleClick = () => {
    dispatch(darkMode());
  };
  return (
    <div
      onClick={handleClick}
      className="absolute bg-gray-100 right-0 p-0 mt-12 sm:mr-8 rounded-full p-1 cursor-pointer hover:bg-gray-700 z-30"
    >
      {dark ? (
        <FaSun className={`text-${color}-500 w-6 h-6 hover:text-orange-300`} />
      ) : (
        <FaMoon className={`text-${color}-500 w-6 h-6 hover:text-white`} />
      )}
    </div>
  );
};
