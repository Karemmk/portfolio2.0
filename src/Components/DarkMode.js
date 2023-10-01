import React, {useEffect} from "react";
import { themeMode } from "../Redux/stateSlices/themeSlice";
import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { darkMode } from "../Redux/stateSlices/darkSlice";
import { useSearchParams ,useLocation } from "react-router-dom";

export const DarkMode = () => {
  const location = useLocation(); 
  const color = useSelector((state) => state.theme.value[0]);
  const dispatch = useDispatch();
  const dark = useSelector((state) => state.dark.value);
  const [searchParams, setSearchParams] = useSearchParams({dark:`${dark}`});
  const darks = searchParams.get("dark") === "true";

    
  
  useEffect(()=>{
    if(!darks ){
        dispatch(darkMode(dark));
        setSearchParams(prev =>{ prev.set("dark" , dark)
  return prev
  });
        }
        else{dispatch(darkMode(darks));
                  setSearchParams(prev =>{ prev.set("dark" , darks)
  return prev
  });
  }
 
  },[location.search])
  
  
  
  const handleClick = () => {
    setSearchParams(prev =>{ prev.set("dark" , !darks)
  return prev
  });
    const somb=!dark
    dispatch(darkMode(somb));
  };
  
  return (
    <div
      onClick={handleClick}
      className="fixed bg-white right-0 p-0 mt-12 mr-2 rounded-full p-1 cursor-pointer hover:bg-gray-700 z-30"
    >
      {dark ? (
        <FaSun className={`${color} w-6 h-6 hover:text-orange-300`} />
      ) : (
        <FaMoon className={`${color} w-6 h-6 hover:text-white`} />
      )}
    </div>
  );
};
