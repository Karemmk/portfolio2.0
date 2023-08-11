// Dependencies
import React, { useEffect, useState } from "react";
import { FaListAlt } from "react-icons/fa";
import { BrowserRouter } from "react-router-dom";
import { RightSide } from "./Components/RightSide";
import { LeftSide } from "./Components/LeftSide";
import { DarkMode } from "./Components/DarkMode";
import { Theme } from "./Components/Theme";
import { useSelector, useDispatch } from "react-redux";
import { fetchInfo } from "./Redux/stateSlices/infoSlice";

const App = () => {
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
    <BrowserRouter>
      <div onClick={colseNav} className="relative  overflow-hidden ">
        <div className="flex">
          <Theme />
          <DarkMode />
          <FaListAlt
            onClick={minNav}
            className={`fixed sm:hidden ${color[0]} hover:text-gray-600 z-40 w-10 h-10 mt-2 ml-3 cursor-pointer`}
          />
          <div
            className={
              navopen
                ? dark
                  ? "fixed w-2/4 bg-gray-800 text-gray-200 pt-10 p-10 z-30"
                  : "fixed start-0  max-h-lg bg-white w-2/4 pt-10 p-10 z-30"
                : dark
                ? "hidden sm:inline-block sm:w-1/4 bg-gray-800 text-gray-200"
                : "hidden bg-white sm:w-1/4 sm:inline-block"
            }
          >
            <LeftSide onclick={() => setNavopen(false)} />
          </div>
          <div
            className={
              dark
                ? "overflow-scroll sm:w-3/4 bg-gray-900 text-gray-200 "
                : "overflow-scroll sm:w-3/4 bg-gray-200"
            }
          >
            {info ? <RightSide /> : <div></div>}
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
