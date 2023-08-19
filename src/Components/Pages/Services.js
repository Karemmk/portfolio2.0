import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  FaMobileAlt,
  FaDev,
  FaCode,
  FaReact,
  FaSearchengin
} from "react-icons/fa";
import { MdComputer } from "react-icons/md";

const Services = () => {
  const [isShown1, setIsShown1] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);
  const [isShown4, setIsShown4] = useState(false);
  const [isShown5, setIsShown5] = useState(false);
  const [isShown6, setIsShown6] = useState(false);
  const dark = useSelector((state) => state.dark.value);
  const color = useSelector((state) => state.theme.value);
  const [anime, setAnime] = useState("animate-bounce");
  const info = useSelector((state) => state.info.value);

  
  useEffect(() => {
    setAnime("");
  }, []);

  const handleEnterMouse1 = () => {
    setIsShown1(true);
  };
  const handleEnterMouse2 = () => {
    setIsShown2(true);
  };
  const handleEnterMouse3 = () => {
    setIsShown3(true);
  };
  const handleEnterMouse4 = () => {
    setIsShown4(true);
  };
  const handleEnterMouse5 = () => {
    setIsShown5(true);
  };
  const handleEnterMouse6 = () => {
    setIsShown6(true);
  };
  const handleLeaveMouse1 = () => {
    setIsShown1(false);
  };
  const handleLeaveMouse2 = () => {
    setIsShown2(false);
  };

  const handleLeaveMouse3 = () => {
    setIsShown3(false);
  };
    const handleLeaveMouse4 = () => {
      setIsShown4(false);
    };
    const handleLeaveMouse5 = () => {
      setIsShown5(false);
    };
    const handleLeaveMouse6 = () => {
      setIsShown6(false);
    };
  
  return (
    <div className={`xl:h-screen mt-10 pl-5 pr-5 relative pb-10 ${anime}`}>
      <div>
        <div className="font-bold text-4xl">Services</div>
        <div className={`${color[1]} border-t-8 w-12`}></div>
        <div className={`${color[1]} border-t-8 w-6 mt-1`}></div>
      </div>
      <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          onMouseEnter={handleEnterMouse1}
          onMouseLeave={handleLeaveMouse1}
          className={
            dark
              ? "grid p-8 px-5 gap-4 bg-gray-800 border-none rounded-lg "
              : " grid p-8 px-5 gap-4 bg-white border-none rounded-lg "
          }
        >
          <FaMobileAlt
            className={
              isShown1
                ? ` h-20 w-20 m-auto ${color[0]} border-none rounded-full ${color[4]}`
                : ` h-20 w-20 m-auto ${color[0]} border-none rounded-full`
            }
          />
          <div className="text-center font-bold ">{info.services[0].mobileicontitle}</div>
          <div className="text-center">
          {info.services[0].mobileicondesc}
          </div>
        </div>

        <div
         onMouseEnter={handleEnterMouse2}
         onMouseLeave={handleLeaveMouse2}
          className={
            dark
              ? " grid p-8 px-5 gap-4 bg-gray-800 border-none rounded-lg "
              : " grid p-8 px-5 gap-4 bg-white border-none rounded-lg "
          }
        >
          <FaDev
            className=
            {
              isShown2
                ? ` h-20 w-20 m-auto ${color[0]} border-none rounded-full ${color[4]}`
                : ` h-20 w-20 m-auto ${color[0]} border-none rounded-full`
            }          />
          <div className="text-center font-bold ">{info.services[0].devicontitle}</div>
          <div className="text-center">
{info.services[0].devicondesc}            
          </div>
        </div>

        <div
         onMouseEnter={handleEnterMouse3}
         onMouseLeave={handleLeaveMouse3}
          className={
            dark
              ? "grid p-8 px-5 gap-4 bg-gray-800 border-none rounded-lg "
              : "grid p-8 px-5 gap-4 bg-white border-none rounded-lg "
          }
        >
          <MdComputer
            className=
            {
              isShown3
                ? ` h-20 w-20 m-auto ${color[0]} border-none rounded-full ${color[4]}`
                : ` h-20 w-20 m-auto ${color[0]} border-none rounded-full`
            }          />
          <div className="text-center font-bold ">{info.services[0].pcicontitle}</div>
          <div className="text-center">
{info.services[0].pcicondesc}            
          </div>
        </div>

        <div
         onMouseEnter={handleEnterMouse4}
         onMouseLeave={handleLeaveMouse4}
          className={
            dark
              ? "grid p-8 px-5 gap-4 bg-gray-800 border-none rounded-lg "
              : "grid p-8 px-5 gap-4 bg-white border-none rounded-lg "
          }
        >
          <FaCode
            className=
            {
              isShown4
                ? ` h-20 w-20 m-auto ${color[0]} border-none rounded-full ${color[4]}`
                : ` h-20 w-20 m-auto ${color[0]} border-none rounded-full`
            }          />
          <div className="text-center font-bold ">{info.services[0].codeicontitle}</div>
          <div className="text-center">
{info.services[0].codeicondesc}            
          </div>
        </div>

        <div
         onMouseEnter={handleEnterMouse5}
         onMouseLeave={handleLeaveMouse5}
          className={
            dark
              ? "grid p-8 px-5 gap-4 bg-gray-800 border-none rounded-lg "
              : "grid p-8 px-5 gap-4 bg-white border-none rounded-lg "
          }
        >
          <FaSearchengin
            className=
            {
              isShown5
                ? ` h-20 w-20 m-auto ${color[0]} border-none rounded-full ${color[4]}`
                : ` h-20 w-20 m-auto ${color[0]} border-none rounded-full`
            }          />
          <div className="text-center font-bold "> {info.services[0].searchicontitle}</div>
          <div className="text-center">
          {info.services[0].searchicondesc}
          </div>
        </div>

        <div
         onMouseEnter={handleEnterMouse6}
         onMouseLeave={handleLeaveMouse6}
          className={
            dark
              ? "grid p-8 px-5 gap-4 bg-gray-800 border-none rounded-lg "
              : "grid p-8 px-5 gap-4 bg-white border-none rounded-lg "
          }
        >
          <FaReact
            className=
            {
              isShown6
                ? ` h-20 w-20 m-auto ${color[0]} border-none rounded-full ${color[4]}`
                : ` h-20 w-20 m-auto ${color[0]} border-none rounded-full`
            }          />
          <div className="text-center font-bold ">{info.services[0].reacticontitle}</div>
          <div className="text-center">
          {info.services[0].reacticondesc}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
