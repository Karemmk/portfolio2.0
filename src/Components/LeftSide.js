import React from "react";
import { useSelector } from "react-redux";
import { NavBar } from "./NavBar";

export const LeftSide = () => {
  const color = useSelector((state) => state.theme.value[1]);

  return (
    <div>
      <div className="md:h-full grid grid-cols-1  sm:gap-40 mt-8 justify-items-center ">
        <div className="flex font-bold font-9">
          <div
            className={`w-3 h-3 ${color}  border-t-8 border-l-8 `}
          ></div>
          <div className="mt-2 text-lg ">KaRem</div>
          <div
            className={`w-3 h-3 ${color} border-b-8 border-r-8 mt-5 lg:mt-12`}
          ></div>
        </div>
        <div>
          <NavBar />
        </div>
      </div>
    </div>
  );
};
