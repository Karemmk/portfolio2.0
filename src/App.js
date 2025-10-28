// Dependencies
import React, { useEffect, useState } from "react";
import { FaListAlt } from "react-icons/fa";
import { RightSide } from "./Components/RightSide";
import { LeftSide } from "./Components/LeftSide";
import { DarkMode } from "./Components/DarkMode";
import { Theme } from "./Components/Theme";
import { useSelector, useDispatch } from "react-redux";
import { fetchInfo } from "./Redux/stateSlices/infoSlice";
import { motion } from "framer-motion";
import { useNavigate ,useLocation,useSearchParams} from "react-router-dom";
import { themeMode } from "./Redux/stateSlices/themeSlice";

const App = () => {
  const location = useLocation();
  const [nothing, setNothing] = useState(false);
  const dispatch = useDispatch();
  const color = useSelector((state) => state.theme.value);
  const [navopen, setNavopen] = useState(false);
  const dark = useSelector((state) => state.dark.value);
  const info = useSelector((state) => state.info.value);


  useEffect(() => {
    dispatch(fetchInfo());
  }, [dispatch]);

  const minNav = () => {
    setNavopen(!navopen);
  };
  const colseNav = () => {
   navopen? setNavopen(false) : setNothing(false) ;
  };

  return (
      <div 
      location={location}
      onClick={colseNav} 
      className="relative h-full">
        <div className="flex">
          <Theme />
          <DarkMode />
          <FaListAlt
            onClick={minNav}
            className={`fixed sm:hidden ${color[0]} hover:text-gray-600 z-40 w-10 h-10 mt-2 ml-3 cursor-pointer`}
          />
          <motion.div
            key="nav"
            initial={{ width: 0 }}
            whileHover={{ width: "30%" }}
            animate={navopen ? { width: "20%" } : { width: "25%" }}
            transition={{ duration: 0.5 }}
            className={
           navopen
           ? dark
           ? "fixed bg-gray-800 text-gray-200 pt-10 p-10 z-30"
           : "absolute start-0 bg-white pt-10 p-10 z-50"
           : dark
           ? "hidden sm:inline-block sm:w-1/4 bg-gray-800 text-gray-200"
           : "hidden bg-white sm:w-1/4 sm:inline-block"
           }
           >
             <LeftSide onclick={() => setNavopen(false)} />
        </motion.div>
            <div
            className={
              dark
                ? "h-full overflow-hidden sm:w-3/4 bg-gray-900 text-gray-200 pb-20"
                : "h-full overflow-hidden sm:w-4/5 bg-gray-200 pb-20"
            }
          >
          
          {info ? <RightSide /> : <div className="fixed font-bold ml-[40%] mt-[20%]">Loading ...</div>}
          </div>
        </div>
      </div>
  );
};

export default App;
