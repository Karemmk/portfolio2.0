import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { route } from "../../Redux/stateSlices/routeSlice";

 const About = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const color = useSelector((state) => state.theme.value);
  return (
    <div className="sm:h-screen mt-10 pl-5 relative pb-10">
      <div>
        <div className="font-bold text-4xl">About Me</div>
        <div className={`border-${color}-500 border-t-8 w-12`}></div>
        <div className={`border-${color}-500 border-t-8 w-6 mt-1`}></div>
      </div>
      <div className="mt-10 flex font-bold">
        <div className="mr-2">I'm Karem Mkacher and </div>
        <div className={`text-${color}-500`}>Web developer</div>
      </div>
      <div className="mt-5">
        Hi There, I'm Karem Mkacher and I am Full-Stuck Web Developer. It's been
        more than 3 years, I'm working as web developer,I have developed many
        websites and also provided my services to college students by getting
        their projects ready ASAP as a freelancer I have been part of some very
        good web design project.
      </div>
      <div className="mt-10 grid sm:grid-cols-5 sm:text-lg xl:text-3xl">
        <div className="sm:col-span-3 pr-5">
          <div className="grid grid-cols-2 gap-x-8 gap-5 sm:text-xl ">
            <div className="border-gray-300 border-b-2 ">
              Birthday: 09/08/1993
            </div>
            <div className="border-gray-300 border-b-2">
              Website: <a href="mkacherkarem.netlify.app">Link</a>
            </div>
            <div className="border-gray-300 border-b-2 ">Degree: Master</div>
            <div className="border-gray-300 border-b-2 ">Email: @gmail.com</div>
            <div className="border-gray-300 border-b-2 ">City:Sousse</div>
            <div className="border-gray-300 border-b-2 ">
              Phone: +0097892244
            </div>
            <div className="border-gray-300 border-b-2 ">age: 30</div>
            <div className="border-gray-300 border-b-2">
              Freelancer: Karemmk
            </div>
          </div>
          <div className="flex mt-5 gap-x-3 text-lg">
            <a
              href="https://drive.google.com/file/d/1dTNOy-RYOnKa5Tq0kxtlR1gfceq-_UtT/view?usp=drivesdk"
              target="_blank"
              and
              rel="noopener noreferrer"
              download
            >
              <button className={`bg-${color}-500 rounded-full p-3 px-6`}>
                Dowload CV
              </button>
            </a>
            <button
              onClick={() => {
                Navigate("/contact");
                dispatch(route(4));
              }}
              className={`bg-${color}-500 rounded-full p-3 px-6`}
            >
              Hire Me
            </button>
          </div>
        </div>
        <div className="relative grid sm:col-span-2 pr-5 sm:mt-0 mt-10 sm:text-lg xl:text-4l ">
          <div className="grid grid-cols-5">
            <div
              className={`col-span-4 rounded border-${color}-500 border-b-8 self-end`}
            >
              css
            </div>
            <div className="rounded border-white border-b-8 self-end">95%</div>
          </div>

          <div className="grid grid-cols-5">
            <div
              className={`col-span-4 rounded border-${color}-500 border-b-8 self-end`}
            >
              css
            </div>
            <div className="rounded border-white border-b-8 self-end">95%</div>
          </div>

          <div className="grid grid-cols-5">
            <div
              className={`col-span-4 rounded border-${color}-500 border-b-8 self-end`}
            >
              css
            </div>
            <div className="rounded border-white border-b-8 self-end">95%</div>
          </div>

          <div className="grid grid-cols-5">
            <div
              className={`col-span-4 rounded border-${color}-500 border-b-8 self-end`}
            >
              css
            </div>
            <div className="rounded border-white border-b-8 self-end">95%</div>
          </div>

          <div className="grid grid-cols-5">
            <div
              className={`col-span-4 rounded border-${color}-500 border-b-8 self-end`}
            >
              css
            </div>
            <div className="rounded border-white border-b-8 self-end">95%</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
