import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { route } from "../../Redux/stateSlices/routeSlice";
import Typical from "react-typical";

const Home = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const color = useSelector((state) => state.theme.value);
  const [anime, setAnime] = useState("animate-bounce ease-in-out");
  const info = useSelector((state)=>state.info.value)

  useEffect(() => {
    setAnime("");
  }, []);
  //console.log(info.home[0].name)
  return (
    <div className={`sm:h-screen grid sm:grid-cols-5 mt-10 ${anime}`}>
      <div className=" sm:col-span-3 pl-2">
        <div className="grid lg:flex  gap-1 text-md mt-5 sm:mt-20 text-3xl">
          <div>Hello,my name is </div>
          <div className={`${color[0]} font-bold `}>
            {info.home[0].name}
          </div>
        </div>
        <div className="flex gap-1 mt-5 font-bold text-3xl">
          <div className="mr-1">I'm a </div>
          <div className={`${color[0]} font-bold`}>
            <Typical
              loop={Infinity}
              steps={[1000, "Full-Stack", 1000, "Web-Developer", 1000]}
            />
          </div>
        </div>
        <div className="mt-5 sm:mt-15 text-[30px] text-xl">
          {info.home[0].description}
        </div>
        <div className="mt-10 ">
          <button
            className={`${color[2]} rounded-full p-3 px-4 hover:animate-pulse `}
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
        <div className="grid font-bold font-9 ">
          <div
            className={`w-10 h-10 ${color[1]} border-t-8 border-l-8`}
          ></div>
          <div className="mt-2 p-1 m-auto ">
            <img className="bg-black " src={info.home[0].image} alt="karem" />
          </div>
          <div
            className={`w-10 h-10 ${color[1]} border-b-8 border-r-8 justify-self-end`}
          ></div>
        </div>
      </div>
    </div>
  );
};
export default Home;
