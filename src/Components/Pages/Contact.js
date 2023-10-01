import React, {useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { useSelector } from "react-redux";
import { FaPhoneAlt, FaMailBulk } from "react-icons/fa";
import { BiWorld, BiCurrentLocation } from "react-icons/bi";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

 const Contact = () => {
  const location = useLocation(); 
  const color = useSelector((state) => state.theme.value);
  const dark = useSelector((state) => state.dark.value);
  const info = useSelector((state) => state.info.value);
  const form = useRef();
  const [done, setDone] = useState(false);
  const [err, seterr] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    
  } = useForm({
    defaultValues: {
      user_name: "",
      user_email: "",
      user_subject: "",
      message: ""
    }
  });

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_28p2y33",
        "template_a00lnzr",
        form.current,
        "g-65z4a7AfkvWjq-n"
      )
      .then(
        (result) => {
          setDone(true);
          seterr(false);
          reset();
          setTimeout(() => setDone(false), 5000);
        },
        (error) => {
          seterr(true);
          setDone(false);
        }
      );
  };
  
  return (
     <motion.div
     key={location.pathname}
     exit={  {x : -window.innerWidth} }
     initial={{ x : window.innerWidth }}
    animate={{ x : 1}}
    transition={{ duration: 1 }} 
    className={`mt-10 pl-5 relative pb-10 `}>
      <div>
        <div className="font-bold text-4xl">Contact Me</div>
        <div className={`${color[1]} border-t-8 w-12`}></div>
        <div className={`${color[1]} border-t-8 w-6 mt-1`}></div>
      </div>
      <div>
        <div
          className={`mt-10 font-bold text-2xl ${color[0]} text-center`}
        >
          Have You Any Questions ?
        </div>
        <div className="text-center mt-3">I'm in your service</div>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-y-5 mr-5">
        <div className="text-center">
            <BiWorld className={`w-10 h-10 m-auto ${color[0]}`} />
            <div className="mt-5 mb-3 font-bold">Website</div>
            <div  className="overflow-scroll">{info.contact[0].website}</div>
          </div>
         
          <div className="text-center">
            <FaPhoneAlt className={`w-10 h-10 m-auto ${color[0]}`} />
            <div className="mt-5 mb-3 font-bold">Call Us On</div>
            <div className="ml-3 overflow-scroll">{info.contact[0].phone}</div>
          </div>

          <div className="text-center">
            <BiCurrentLocation
              className={`w-10 h-10 m-auto ${color[0]}`}
            />
            <div className="mt-5 mb-3 font-bold">Office</div>
            <div className="overflow-scroll">{info.contact[0].office}</div>
          </div>

          <div className="text-center">
            <FaMailBulk className={`w-10 h-10 m-auto ${color[0]}`} />
            <div className="mt-5 mb-3 font-bold">Email</div>
            <div className="ml-3 overflow-scroll">{info.contact[0].email}</div>
          </div>

         
        </div>

        <div
          className={`mt-10 font-bold text-2xl ${color[0]} text-center`}
        >
          How You Send Me Email ?
        </div>
        <div className="text-center mt-3">I'm very respencive to messages</div>
        <form
           className="grid mt-10 gap-5 pr-5"
          ref={form}
          onSubmit={handleSubmit(sendEmail)}
        >
          <div className="grid grid-cols-2 gap-5">
          <input
          className={
                dark ? `rounded bg-gray-800 ${color[0]}` : "rounded"
              }
            type="text"
            name="user_name"
            {...register("user_name", { required: "This is required" })}
           
            placeholder= "Name"
           
          />
           <input
           className={
                dark ? `rounded bg-gray-800 ${color[0]}` : "rounded"
              }
            type="email"
            {...register("user_email", { required: "This is required" })}
            name="user_email"
            placeholder="Email"
           
          />

          </div>
          <input
            className={
              dark ? `rounded bg-gray-800 ${color[0]}` : "rounded"
            }
            {...register("user_subject", { required: "This is required" })}
             name="user_subject"
            type="text"
            placeholder="Subject"
          />
          <input
          
          className={
              dark
                ? `h-20 rounded bg-gray-800 ${color[0]} `
                : "h-20 rounded"
            }
            type="textarea"
            {...register("message", { required: "This is required" })}
            
            placeholder="Message"
            
          />
              
          <button
            type="send"
            value="submit"
              className={`w-40  ${color[2]} rounded-full p-3 px-4 mt-3 hover:animate-pulse`}
          >
            Send Message
          </button>
          
          <div className=" text-green-500">
            {done? "Thanks for Contacting me":""}
          </div>
          <div className=" text-red-600">
            {" "}
            {err?  "Email didn't send ,Please try again":""}
          </div>
        </form>
      </div>
    </motion.div>
  );
};
export default Contact;
