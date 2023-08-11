import React from "react";
import { IoSettings } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { themeMode } from "../Redux/stateSlices/themeSlice";
import { isOpen } from "../Redux/stateSlices/isopenSlice";

export const Theme = () => {
  const color = useSelector((state) => state.theme.value[0]);
  const isopen = useSelector((state) => state.isopen.value);
  const dispatch = useDispatch();
  console.log(color);
  const handleClick = () => {
    dispatch(isOpen());
  };
  const colorHandle = (colors) => {
    dispatch(themeMode(colors));
  };
  return (
    <div onClick={handleClick}>
      {isopen ? (
        <div className="">
          <div className="fixed flex gap-x-1 bg-gray-100 right-0  rounded-full mt-2 p-1 mr-1 sm:mr-8 z-40">
            <IoSettings
              className={`${color} cursor-pointer animate-spin w-6 h-6 `}
            />
            <div className="flex gap-2 w-40 mt-1">
              <div
                onClick={() => colorHandle(["text-pink-500","border-pink-500","bg-pink-500","hover:bg-pink-300","bg-pink-300","hover:text-pink-500"])}
                className="h-5 w-5 bg-pink-500 rounded-full cursor-pointer"
              ></div>
              <div
                onClick={() => colorHandle(["text-red-500","border-red-500","bg-red-500","hover:bg-red-300","bg-red-300","hover:text-red-500"])}
                className="h-5 w-5 bg-red-500 rounded-full cursor-pointer"
              ></div>
              <div
                onClick={() => colorHandle(["text-green-500","border-green-500","bg-green-500","hover:bg-green-300","bg-green-300"])}
                className="h-5 w-5 bg-green-500 rounded-full cursor-pointer"
              ></div>
              <div
                onClick={() => colorHandle(["text-purple-500","border-purple-500","bg-purple-500","hover:bg-purple-300","bg-purple-300","hover:text-purple-500"])}
                className="h-5 w-5 bg-purple-500 rounded-full cursor-pointer"
              ></div>
              <div
                onClick={() => colorHandle(["text-blue-500","border-blue-500","bg-blue-500","hover:bg-blue-300","bg-blue-300","hover:text-blue-500"])}
                className="h-5 w-5 bg-blue-500 rounded-full cursor-pointer"
              ></div>
              <div
                onClick={() => colorHandle(["text-yellow-500","border-yellow-500","bg-yellow-500","hover:bg-yellow-300","bg-yellow-300","hover:text-yellow-500"])}
                className="h-5 w-5 bg-yellow-500 rounded-full cursor-pointer"
              ></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="absolute bg-gray-900 hover:bg-gray-600 right-0 rounded-full mt-2  mr-10 ">
          <IoSettings
            className={`fixed w-8 h-8 ${color} bg-white rounded-full cursor-pointer hover:text-gray-200 hover:bg-gray-600  animate-spin z-40`}
          />
        </div>
      )}
    </div>
  );
};
