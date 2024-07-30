import React from "react";

const Navbar = () => {
  return (
    <div className="w-full  h-14 bg-white flex  justify-center border-2 ">
      <div className="w-3/4 h-full flex  z-20">
        <div className="h-full flex items-center justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className="h-full "
            height="40"
            viewBox="0 0 360 360"
            width="60"
            class="injected-svg"
            data-src="https://neverinstall.com/cdn-cgi/imagedelivery/AvFws3zK3WPu5k1TtWLA1A/ni-logo-1.svg/public"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            role="img"
          >
            <path
              d="M45 60.9399C17.01 92.6599 0 134.37 0 180C0 225.63 17.01 267.34 45 299.06V60.9399Z"
              fill="#0064FF"
            ></path>
            <path
              d="M315 299.06C342.99 267.33 360 225.63 360 180C360 134.37 342.99 92.6599 315 60.9399V299.06Z"
              fill="#0064FF"
            ></path>
            <path
              d="M90 100.63V24.0801C73.07 33.8801 57.86 46.3701 45 60.9401L90 100.63Z"
              fill="#0064FF"
            ></path>
            <path
              d="M270 259.37V335.91C286.93 326.11 302.14 313.62 315 299.05L270 259.36V259.37Z"
              fill="#0064FF"
            ></path>
            <path
              d="M180 0C164.46 0 149.38 1.97 135 5.67V140.31L180 180V0Z"
              fill="#0064FF"
            ></path>
            <path
              d="M270 259.37V24.0799C256.06 16.0199 240.98 9.77992 225 5.66992V219.69L270 259.38V259.37Z"
              fill="#0064FF"
            ></path>
            <path
              d="M135 140.31L90 100.62V335.91C103.94 343.97 119.03 350.21 135 354.32V140.3V140.31Z"
              fill="#0064FF"
            ></path>
            <path
              d="M225 219.69L180 180V360C195.54 360 210.62 358.03 225 354.33V219.69Z"
              fill="#0064FF"
            ></path>
          </svg>
          <a href="">Neverinstall</a>
        </div>

        <div className="h-full flex items-center ml-8 gap-7 text-sm font-satoshi-light  w-1/2 ">
            <div className="text-slate-400 hover:text-black cursor-pointer">Enterprice Solution</div>
            <div className="text-slate-400 hover:text-black cursor-pointer">CloudLink</div>
            <div className="text-slate-400 hover:text-black cursor-pointer">AI</div>
            <div className="text-slate-400 hover:text-black cursor-pointer">Pricing</div>
            <div className="text-slate-400 hover:text-black cursor-pointer">Help</div>
            <div className="text-slate-400 hover:text-black cursor-pointer">About us</div>
        </div>

        <div className="flex items-center gap-2 font-satoshi-light ml-28">
            <div className=" inline-flex items-center justify-center h-8 px-6 py-3 text-xs font-medium tracking-wider">SIGN IN</div>
            <div className="inline-flex items-center justify-center h-8 px-6 py-3 text-xs font-medium tracking-wider bottom-2 border-black border-solid">SIGN UP FOR FREE</div>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;



