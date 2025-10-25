React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useNavigate ,useLocation} from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const color = useSelector((state) => state.theme.value);
  const info = useSelector((state)=>state.info.value)
  const location = useLocation();
  
  return (
    <motion.div
    key={location.pathname}
    initial={   { x : window.innerWidth } }
    animate={  { x : 0}  }
    exit={  {x : -window.innerWidth} }
    transition={{ duration: 1 }}
     className="h-screen w-full grid sm:grid-cols-5 mt-10 ">
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
             Full-Stack Web-Developer
          </div>
        </div>
        <div className="mt-5 sm:mt-15 text-[30px] text-xl">
          {info.home[0].description}
        </div>
        <div className="mt-10 ">
          <button
            className={`${color[2]} rounded-full p-3 px-4 hover:animate-pulse `}
            onClick={() => {
              navigate("/about");
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
    </motion.div>

  );
};
export default Home;
