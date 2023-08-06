import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { route } from "../../Redux/stateSlices/routeSlice";

const Home = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const color = useSelector((state) => state.theme.value);
  return (
    <div className="sm:h-screen grid sm:grid-cols-5 mt-10 ">
      <div className=" sm:col-span-3 pl-2">
        <div className="grid lg:flex  gap-1 text-md mt-5 sm:mt-40 text-3xl">
          <div>Hello,my name is </div>
          <div className={`text-${color}-500 font-bold `}>Karem Mkacher</div>
        </div>
        <div className="flex gap-1 mt-5 font-bold text-3xl">
          <div className="mr-1">I'm a </div>
          <div className={`text-${color}-500 font-bold`}>Web developer</div>
        </div>
        <div className="mt-5 sm:mt-15 text-[30px] text-xl">
          I am front End/UI Developer with overall 2 years of extensive
          experience in the Manufacturing domain, with experience in the
          software development lifecycle (SDLC) in{" "}
        </div>
        <div className="mt-10 ">
          <button
            className={`bg-${color}-500 rounded-full p-3 px-4`}
            onClick={() => {
              Navigate("/about");
              dispatch(route(1));
            }}
          >
            More about me
          </button>
        </div>
      </div>
      <div className="sm:col-span-2 mt-3 mt-10 sm:mt-40 lg:px-20">
        <div className="grid font-bold font-9 ml-[50px]">
          <div
            className={`w-10 h-10 border-${color}-500  border-t-8 border-l-8`}
          ></div>
          <div className="mt-2 p-1 m-auto ">
            <img
              className="bg-black "
              src="https://res.cloudinary.com/dyx1jeydm/image/upload/v1661929693/About/karem_y5l32v.png"
              alt="karem"
            />
          </div>
          <div
            className={`w-10 h-10 border-${color}-500 border-b-8 border-r-8 justify-self-end`}
          ></div>
        </div>
      </div>
    </div>
  );
};
export default Home;
