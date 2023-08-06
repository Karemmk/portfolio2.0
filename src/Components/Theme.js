import React from "react";
import { IoSettings } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { themeMode } from "../Redux/stateSlices/themeSlice";
import { isOpen } from "../Redux/stateSlices/isopenSlice";

export const Theme = () => {
  const color = useSelector((state) => state.theme.value);
  const isopen = useSelector((state) => state.isopen.value);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(isOpen());
  };
  const colorHandle = (color) => {
    dispatch(themeMode(color));
  };
  return (
    <div onClick={handleClick}>
      {isopen ? (
        <div>
          <div className="absolute flex gap-x-1 bg-gray-100 right-0 rounded-full mt-2 p-1 mr-1 sm:mr-8">
            <IoSettings
              className={`text-${color}-500 cursor-pointer animate-spin `}
            />
            <div className="flex gap-2 w-40">
              <div
                onClick={() => colorHandle("pink")}
                className="h-5 w-5 bg-pink-500 rounded-full cursor-pointer"
              ></div>
              <div
                onClick={() => colorHandle("red")}
                className="h-5 w-5 bg-red-500 rounded-full cursor-pointer"
              ></div>
              <div
                onClick={() => colorHandle("green")}
                className="h-5 w-5 bg-green-500 rounded-full cursor-pointer"
              ></div>
              <div
                onClick={() => colorHandle("purple")}
                className="h-5 w-5 bg-purple-500 rounded-full cursor-pointer"
              ></div>
              <div
                onClick={() => colorHandle("blue")}
                className="h-5 w-5 bg-blue-500 rounded-full cursor-pointer"
              ></div>
              <div
                onClick={() => colorHandle("yellow")}
                className="h-5 w-5 bg-yellow-500 rounded-full cursor-pointer"
              ></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="absolute bg-gray-100 hover:bg-gray-600 right-0 rounded-full mt-2 p-1 mr-0 sm:mr-8 hover:animate-spin">
          <IoSettings
            className={`w-6 h-6 text-${color}-500 cursor-pointer hover:text-gray-200`}
          />
        </div>
      )}
    </div>
  );
};
