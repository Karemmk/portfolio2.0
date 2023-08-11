import React from "react";
import { useSelector } from "react-redux";
import { NavBar } from "./NavBar";

export const LeftSide = () => {
  const color = useSelector((state) => state.theme.value[1]);

  return (
    <div>
      <div className="grid grid-cols-1  sm:gap-40 mt-8 justify-items-center ">
        <div className="flex font-bold font-9">
          <div
            className={`w-5 h-5 ${color}  border-t-8 border-l-8 `}
          ></div>
          <div className="mt-2 text-lg lg:text-4xl">KaRem</div>
          <div
            className={`w-5 h-5 ${color} border-b-8 border-r-8 mt-5 lg:mt-12`}
          ></div>
        </div>
        <div>
          <NavBar />
        </div>
      </div>
    </div>
  );
};
