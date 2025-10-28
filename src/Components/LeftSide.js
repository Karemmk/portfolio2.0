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
            className={`w-4 h-4 ${color}  border-t-6 border-l-6`}
          ></div>
          <div className="mt-2 text-lg ">KaRem</div>
          <div
            className={`w-4 h-4 ${color} border-b-6 border-r-6 mt-5 lg:mt-12`}
          ></div>
        </div>
        <div>
          <NavBar />
        </div>
      </div>
    </div>
  );
};
