import React from "react";
import { useSelector } from "react-redux";
import { FaPhoneAlt, FaMailBulk } from "react-icons/fa";
import { BiWorld, BiCurrentLocation } from "react-icons/bi";

 const Contact = () => {
  const color = useSelector((state) => state.theme.value);
  const dark = useSelector((state) => state.dark.value);

  return (
    <div className="sm:h-screen mt-10 pl-5 relative pb-10">
      <div>
        <div className="font-bold text-4xl">Contact Me</div>
        <div className={`border-${color}-500 border-t-8 w-12`}></div>
        <div className={`border-${color}-500 border-t-8 w-6 mt-1`}></div>
      </div>
      <div>
        <div
          className={`mt-10 font-bold text-2xl text-${color}-500 text-center`}
        >
          Have You Any Questions ?
        </div>
        <div className="text-center mt-3">I'm in your service</div>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-y-5 gap-x-10">
          <div className="text-center">
            <FaPhoneAlt className={`w-10 h-10 m-auto text-${color}-500`} />
            <div className="mt-5 mb-3 font-bold">Call Us On</div>
            <div>+21697892244</div>
          </div>

          <div className="text-center">
            <BiCurrentLocation
              className={`w-10 h-10 m-auto text-${color}-500`}
            />
            <div className="mt-5 mb-3 font-bold">Office</div>
            <div>+21697892244</div>
          </div>

          <div className="text-center">
            <FaMailBulk className={`w-10 h-10 m-auto text-${color}-500`} />
            <div className="mt-5 mb-3 font-bold">Email</div>
            <div>karemmkach@gmail.com</div>
          </div>

          <div className="text-center">
            <BiWorld className={`w-10 h-10 m-auto text-${color}-500`} />
            <div className="mt-5 mb-3 font-bold">Website</div>
            <div>mkacherkarem.netlify.app</div>
          </div>
        </div>

        <div
          className={`mt-10 font-bold text-2xl text-${color}-500 text-center`}
        >
          How You Send Me Email ?
        </div>
        <div className="text-center mt-3">I'm very respencive to messages</div>
        <div className="grid mt-10 gap-5 pr-10">
          <div className="grid grid-cols-2 gap-5">
            <input
              className={
                dark ? `rounded bg-gray-800 text-${color}-500` : "rounded"
              }
              type="text"
              placeholder="Name"
            />
            <input
              className={
                dark ? `rounded bg-gray-800 text-${color}-500` : "rounded"
              }
              type="email"
              placeholder="Email"
            />
          </div>
          <input
            className={
              dark ? `rounded bg-gray-800 text-${color}-500` : "rounded"
            }
            type="text"
            placeholder="Subject"
          />
          <input
            className={
              dark
                ? `h-20 rounded bg-gray-800 text-${color}-500`
                : "h-20 rounded"
            }
            type="text"
            placeholder="Message"
          />
          <button
            className={`w-40  bg-${color}-500 rounded-full p-3 px-4 mt-3`}
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};
export default Contact;