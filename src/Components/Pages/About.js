import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { route } from "../../Redux/stateSlices/routeSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import "../../../node_modules/swiper/swiper-bundle.css";


const About = () => {
  const dispatch = useDispatch();
  const color = useSelector((state) => state.theme.value);
  const [anime, setAnime] = useState("animate-bounce");
  const info = useSelector((state) => state.info.value);
  const [certif, setCertif] = useState([]);
  
 useEffect(() => {
    setCertif(info.about[0].images);
  }, [certif]);
  
  useEffect(() => {
    setAnime("");
  }, []);

  return (
    <div className={`sm:h-screen mt-10 pl-5 pr-5 relative pb-10 ${anime}`}>
      <div>
        <div className="font-bold text-4xl">About Me</div>
        <div className={`${color[1]} border-t-8 w-12`}></div>
        <div className={`${color[1]} border-t-8 w-6 mt-1`}></div>
      </div>
      <div className="mt-10 flex font-bold">
        <div className="mr-2">{info.about[0].name} </div>
        <div className={`${color[0]}`}>Web developer</div>
      </div>
      <div className="mt-5">{info.about[0].description}</div>
      <div className="mt-10 grid sm:grid-cols-5 sm:text-lg xl:text-3xl">
        <div className="sm:col-span-3 pr-5">
          <div className="grid grid-cols-2 gap-x-8 gap-5 sm:text-xl ">
            <div className="flex border-gray-300 border-b-2 ">
              <div className="font-bold">Birthday:</div>
              <div className="ml-1 overflow-scroll">{info.about[0].birthday}</div>
            </div>

            <div className="flex border-gray-300 border-b-2">
              <div className="font-bold">Website:</div>
              <a className={`ml-1 ${color[0]}`} href={info.about[0].website}>
                Link
              </a>
            </div>

            <div className="flex border-gray-300 border-b-2 ">
              <div className="font-bold">Degree:</div>
              <div className="ml-1">{info.about[0].degree}</div>
            </div>

            <div className="xl:flex border-gray-300 border-b-2 ">
              <div className="font-bold">Email:</div>
              <div className="overflow-scroll">{info.about[0].email}</div>
            </div>

            <div className="flex border-gray-300 border-b-2 ">
              <div className="font-bold">City:</div>
              <div className="ml-1">{info.about[0].city}</div>
            </div>

            <div className="flex border-gray-300 border-b-2 ">
              <div className="font-bold"> Phone:</div>
              <div className="ml-1 overflow-scroll">{info.about[0].phone}</div>
            </div>

            <div className="flex border-gray-300 border-b-2 ">
              <div className="font-bold">Age:</div>
              <div className="ml-1">{info.about[0].age}</div>
            </div>

            <div className="flex border-gray-300 border-b-2">
              <div className="font-bold">Freelancer:</div>
              <div className="ml-1 overflow-scroll">{info.about[0].freelance}</div>
            </div>
          </div>
          <div className="flex mt-5 gap-x-3 text-lg">
            <a
              href={info.about[0].cv}
              target="_blank"
              and
              rel="noopener noreferrer"
              download
            >
              <button
                className={`${color[2]} rounded-full p-3 px-6 hover:animate-pulse`}
              >
                Dowload CV
              </button>
            </a>
            <button
              onClick={() => {
                dispatch(route(4));
              }}
              className={`${color[2]} rounded-full p-3 px-6 hover:animate-pulse`}
            >
              Hire Me
            </button>
          </div>
        </div>
        <div className="relative grid sm:col-span-2 pr-5 sm:mt-0 mt-10 sm:text-lg xl:text-4l gap-3 ">
          <div className="grid grid-cols-5">
            <div
              className={`col-span-4 rounded ${color[1]} border-b-8 self-end`}
            >
              HTML
            </div>
            <div className="rounded border-white border-b-8 self-end">95%</div>
          </div>

          <div className="grid grid-cols-5">
            <div
              className={`col-span-4 rounded ${color[1]} border-b-8 self-end`}
            >
              CSS
            </div>
            <div className="rounded border-white border-b-8 self-end">95%</div>
          </div>

          <div className="grid grid-cols-5">
            <div
              className={`col-span-4 rounded ${color[1]} border-b-8 self-end`}
            >
              Javasript
            </div>
            <div className="rounded border-white border-b-8 self-end">95%</div>
          </div>

          <div className="grid grid-cols-5">
            <div
              className={`col-span-4 rounded ${color[1]} border-b-8 self-end`}
            >
              Reactjs
            </div>
            <div className="rounded border-white border-b-8 self-end">95%</div>
          </div>

          <div className="grid grid-cols-5">
            <div
              className={`col-span-4 rounded ${color[1]} border-b-8 self-end`}
            >
              jQuery
            </div>
            <div className="rounded border-white border-b-8 self-end">95%</div>
          </div>
        </div>
      </div>
      <div className="mr-5">
          <div className="text-center mt-5 font-bold" >My certificates</div>
      <Swiper
      className="text-center mt-5"
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      centeredSlides={true}
        navigation
        loop={true}
        spaceBetween={20}
        breakpoints= {{

        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1.5,
        },
        1080: {
            slidesPerView: 2.5,
        },
        1280: {
            slidesPerView: 2.5,
        },
    }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      
      {certif.map((photo, index) => (
          <SwiperSlide key={index} >
          <div className="justify-content-center">
            
          
            <img
              style={{height:"50%",}}
              className={`rounded-lg border-2 ${color[1]} `}
              src={photo.url}
              alt={photo.alternativeText}
              />
            
            <div 
            className="text-center">
            <a href={photo.download} target="_blank" and rel="noopener noreferrer" download>
            <button type="button" 
           className={`${color[2]} rounded-full p-3 px-6 hover:animate-pulse mt-5`} >
             Download Certificate
             </button>
             </a>
            <div className="mt-2 text-center">Verify:
            <br/>
            <a className={`${color[0]}`} 
            href={photo.adress} target="_blank" and rel="noopener noreferrer">Link
            </a>
            </div>
            </div>
            </div>
          </SwiperSlide>
        ))}
     
    </Swiper>

      </div>
    </div>
  );
};
export default About;
