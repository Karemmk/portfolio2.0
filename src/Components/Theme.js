import React,{useEffect} from "react";
import { darkMode } from "../Redux/stateSlices/darkSlice";
import { IoSettings } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { themeMode } from "../Redux/stateSlices/themeSlice";
import { isOpen } from "../Redux/stateSlices/isopenSlice";
import { motion } from "framer-motion";
import { useSearchParams ,useLocation } from "react-router-dom";

export const Theme = () => {
   const color = useSelector((state) => state.theme.value);
  const location = useLocation(); 
  const dark = useSelector((state) => state.dark.value);
  const [searchParams, setSearchParams] = useSearchParams();
  const colore = searchParams.get("color") ;
  const isopen = useSelector((state) => state.isopen.value);
  const dispatch = useDispatch();
   
  const handleClick =()=>{
     dispatch(isOpen())
  };
  
  
  useEffect(() => {
  const validColors = ["blue", "pink", "green", "red", "purple", "yellow"];
  const colorParam = colore;
  const currentColor = color[0]?.split("-")[1] || "blue";

  // ✅ Case 1: no color param → set default blue
  if (!colorParam) {
    setSearchParams(prev => {
      prev.set("color", "blue");
      return prev;
    });
    dispatch(themeMode([
      "text-blue-500",
      "border-blue-500",
      "bg-blue-500",
      "hover:bg-blue-300",
      "bg-blue-300",
      "hover:text-blue-500"
    ]));
    return;
  }

  // ✅ Case 2: valid color param → apply it
  if (validColors.includes(colorParam)) {
    dispatch(themeMode([
      `text-${colorParam}-500`,
      `border-${colorParam}-500`,
      `bg-${colorParam}-500`,
      `hover:bg-${colorParam}-300`,
      `bg-${colorParam}-300`,
      `hover:text-${colorParam}-500`
    ]));
  }

  // ❌ Case 3: invalid color param → revert to previous valid color
  else {
    setSearchParams(prev => {
      prev.set("color", currentColor);
      return prev;
    });
    dispatch(themeMode([
      `text-${currentColor}-500`,
      `border-${currentColor}-500`,
      `bg-${currentColor}-500`,
      `hover:bg-${currentColor}-300`,
      `bg-${currentColor}-300`,
      `hover:text-${currentColor}-500`
    ]));
  }
}, [location.pathname,location.search,colore]); // run on route changes
     
     const colorHandle = (colors,coulor) => {
 setSearchParams(prev =>{ prev.set("color" , coulor)
  return prev
  });
    dispatch(themeMode(colors))

  };
   
   return (
    <div onClick={handleClick}>
      {isopen ? (
        <motion.div 
         key="theme"
         initial={   { width:0 } }
         whileInView={  {width:1}  }
         exit={  {width:0} }
         transition={{ duration: 2 }}         
        >
          <div className="fixed flex gap-x-1 bg-gray-100 right-0  rounded-full mt-2 p-1 mr-1 sm:mr-8 z-40">
            <IoSettings
              className={`${color[0]} cursor-pointer animate-spin w-6 h-6 `}
            />
            <div className="flex gap-2 w-40 mt-1">
              <div
                onClick={() => colorHandle(["text-pink-500","border-pink-500","bg-pink-500","hover:bg-pink-300","bg-pink-300","hover:text-pink-500"],"pink")}
                className="h-5 w-5 bg-pink-500 rounded-full cursor-pointer"
              ></div>
              <div
                onClick={() => colorHandle(["text-red-500","border-red-500","bg-red-500","hover:bg-red-300","bg-red-300","hover:text-red-500"],"red")}
                className="h-5 w-5 bg-red-500 rounded-full cursor-pointer"
              ></div>
              <div
                onClick={() => colorHandle(["text-green-500","border-green-500","bg-green-500","hover:bg-green-300","bg-green-300"],"green")}
                className="h-5 w-5 bg-green-500 rounded-full cursor-pointer"
              ></div>
              <div
                onClick={() => colorHandle(["text-purple-500","border-purple-500","bg-purple-500","hover:bg-purple-300","bg-purple-300","hover:text-purple-500"],"purple")}
                className="h-5 w-5 bg-purple-500 rounded-full cursor-pointer"
              ></div>
              <div
                onClick={() => colorHandle(["text-blue-500","border-blue-500","bg-blue-500","hover:bg-blue-300","bg-blue-300","hover:text-blue-500"],"blue")}
                className="h-5 w-5 bg-blue-500 rounded-full cursor-pointer"
              ></div>
              <div
                onClick={() => colorHandle(["text-yellow-500","border-yellow-500","bg-yellow-500","hover:bg-yellow-300","bg-yellow-300","hover:text-yellow-500"],"yellow")}
                className="h-5 w-5 bg-yellow-500 rounded-full cursor-pointer"
              ></div>
            </div>
          </div>
        </motion.div>
      ) : (
        <div className="absolute bg-gray-900 hover:bg-gray-600 right-0 rounded-full mt-2  mr-10 ">
          <IoSettings
            className={`fixed w-8 h-8 ${color[0]} bg-white rounded-full cursor-pointer hover:text-gray-200 hover:bg-gray-600  animate-spin z-40`}
          />
        </div>
      )}
    </div>
  );
};
