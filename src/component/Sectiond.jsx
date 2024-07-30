import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";

const Sectiond = () => {
  return (
    <div className="w-full items-center flex  justify-center">
      <div className="w-3/4 h-full flex  mt-32">
        <div className="flex w-1/2 px-16 py-10">
          <div className="flex  flex-col gap-7">
            <h1 className="text-[3vw] font-satoshi font-bold">Neverinstall DaaS</h1>
            <p className="text-[1vw] font-satoshi">
              Enhance your team's efficiency with on-demand hardware, readily
              available wherever they need it, with our Desktop as a Service
              (DaaS).
            </p>

            <ul className="flex flex-col">
                <div className="flex items-center text-2xl text-green-400  gap-4">
                    <SiTicktick />
                    <li className="text-lg font-satoshi-light text-black ">Get instant cloud PCs with your desired compute, controls, and
                        flavour of OS.
                    </li>
                </div>
                <div className="flex items-center text-2xl  text-green-400 gap-4">
                    <SiTicktick />
                    <li className="text-lg font-satoshi-light text-black">Integrate your existing cloud infrastructure for a fully managed experience.
                    </li>
                </div>
                <div className="flex items-center text-2xl text-green-400  gap-4">
                    <SiTicktick />
                    <li className="text-lg font-satoshi-light text-black">Access more than 100+ applications, pre-installed & pre-configured.
                    </li>
                </div>
                <div className="flex items-center text-4xl text-green-400 gap-4">
                    <SiTicktick />
                    <li className="text-lg font-satoshi-light text-black">Improve your productivity with our blazing fast machines with upto 5Gbps internet speeds
                    </li>
                </div>
            </ul>

            
            <div className="flex gap-3">

            <div className="bg-black text-white px-6 py-3 rounded-full font-medium text-sm flex items-center gap-2">
              <button className="">Get Started</button>
              <FaArrowRight />
            </div>

            <div className="bg-white text-black px-6 py-3 rounded-full font-medium text-sm flex items-center gap-2 border-2">
              <button className="">Know More</button>
              
            </div>

            </div>

          </div>
        </div>
        <div className="flex w-1/2 px-16 py-10 h-95  ">
            <div className="flex items-center justify-center h-full  rounded-3xl">
                <img src="https://neverinstall.com/cdn-cgi/imagedelivery/AvFws3zK3WPu5k1TtWLA1A/images/landing/landing-page-info-1-top.svg/public" alt="" className="h-95 rounded-2xl" />
            </div>

        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Sectiond;
