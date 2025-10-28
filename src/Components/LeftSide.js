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
            className={`absolute mr-[10px] w-5 h-5 ${color}  border-t-8 border-l-8`}
          ></div>
          <div className="ml-[5px] mt-2 text-lg ">KaRem</div>
          <div
            className={`absolute ml-[45px] w-5 h-5 ${color} border-b-8 border-r-8 mt-5 lg:mt-12`}
          ></div>
        </div>
        <div>
          <NavBar />
        </div>
      </div>
    </div>
  );
};
