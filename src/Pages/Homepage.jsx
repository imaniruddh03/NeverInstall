import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Dekstop from '../assets/Dekstop.png';
import Companies from '../component/Companies';
import Sectionc from "../component/Sectionc";
import Sectiond from "../component/Sectiond";
import Sectione from "../component/Sectione";

const Homepage = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full flex flex-col justify-center relative">
      <div className="w-3/4 mx-auto h-screen flex items-center justify-center flex-col gap-20 z-20">
        <div
          className="text-[6vw] font-satoshi font-semibold leading-[120%] flex flex-col text-center relative"
          onMouseEnter={() => setIsHovered(true)}  
          onMouseLeave={() => setIsHovered(false)} 
        >
          <div className="">
            Virtual {isHovered ? null : <span className="effect hover-trigger">Desktops</span>}
          </div>
          <img
            src={Dekstop}
            alt="Hover Image"
            className={`absolute right-1 mt-1 w-32 h-auto transition-opacity duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          />
          <div>
            <span className="tile font-satoshi-italic">Reimagined.</span>
          </div>
        </div>
        <div className="w-full flex items-center justify-center leading-[150%]">
          <p>
            Introducing a secure, scalable, and immediate advantage to your
            digital workspaces with the most convenient virtual desktops.
          </p>
        </div>
        <div className="bg-black text-white px-6 py-3 rounded-full font-medium text-sm flex items-center gap-2 ">
          <button className="">Get Started</button>
          <FaArrowRight />
        </div>
      </div>
      <Companies />
      <Sectionc />
      <Sectiond />
      <Sectione />
    </div>
  );
};

export default Homepage;
