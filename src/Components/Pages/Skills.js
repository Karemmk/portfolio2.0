import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Skills = () => {
  const dark = useSelector((state) => state.dark.value);
  const color = useSelector((state) => state.theme.value);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://karemmk.github.io/Portfolio/myapi.json")
      .then((res) => res.json())
      .then((data) => {
        setImages(data.images);
      });
  }, [images]);

  return (
    <div className=" mt-10 pl-5 relative pb-10">
      <div>
        <div className="font-bold text-4xl">Skills</div>
        <div className={`border-${color}-500 border-t-8 w-12`}></div>
        <div className={`border-${color}-500 border-t-8 w-6 mt-1`}></div>
      </div>
      <div className="mt-10">My Projects:</div>
      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((photo, index) => (
          <a
            key={photo.id}
            href={photo.adress}
            target="_blank"
            and
            rel="noopener noreferrer"
            className={
              dark
                ? `grid p-8 px-5 gap-4 bg-gray-800 border-none rounded-lg hover:bg-${color}-300`
                : `grid p-8 px-5 gap-4 bg-white border-none rounded-lg hover:bg-${color}-300`
            }
          >
            <img
              src={photo.url}
              alt={photo.alternativetext}
              className={`m-auto text-${color}-500 border-2 border-${color}-500 rounded`}
            />
            <div className={`text-center font-bold text-${color}-500`}>
              {photo.alternativetext}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
export default Skills;
