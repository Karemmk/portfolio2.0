import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { darkMode } from "../Redux/stateSlices/darkSlice";

export const DarkMode = () => {
  const color = useSelector((state) => state.theme.value[0]);
  const dispatch = useDispatch();
  const dark = useSelector((state) => state.dark.value);
  const handleClick = () => {
    dispatch(darkMode());
  };
  return (
    <div
      onClick={handleClick}
      className="fixed bg-white right-0 p-0 mt-12 mr-2 rounded-full p-1 cursor-pointer hover:bg-gray-700 z-30"
    >
      {dark ? (
        <FaSun className={`${color} w-6 h-6 hover:text-orange-300`} />
      ) : (
        <FaMoon className={`${color} w-6 h-6 hover:text-white`} />
      )}
    </div>
  );
};
