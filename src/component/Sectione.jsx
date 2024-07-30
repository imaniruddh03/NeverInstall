import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "./elements/outsidehook";

const cards = [
  {
    
    title: "Limitless hardware flexibility",
    src: "https://neverinstall.com/cdn-cgi/imagedelivery/AvFws3zK3WPu5k1TtWLA1A/images/landing/landing-page-carousel-2-top.svg/public",
    ctaText: "Click Here",
    ctaLink: "",
    content: () => {
      return (
        <p>
          Scale your graphics and resolution settings with Neverinstall' s GPU on demand and fine-tuned agility. Blends in effortlessly with any on-prem or bare metal servers.
        </p>
      );
    },
  },
  {
    
    title: "Enable effortless collaborations",
    src: "https://neverinstall.com/cdn-cgi/imagedelivery/AvFws3zK3WPu5k1TtWLA1A/images/landing/landing-page-carousel-2-top.svg/public",
    ctaText: "Click Here",
    ctaLink: "",
    content: () => {
      return (
        <p>
          Collaborate over any application by sharing desktop controls, in low latency environments, freeing up from the hurdles of remote work. Keep connected with webcam & mic support from stand up meetings till sun down.
        </p>
      );
    },
  },
  {
    
    title: "Decluttered admin dashboard",
    src: "https://neverinstall.com/cdn-cgi/imagedelivery/AvFws3zK3WPu5k1TtWLA1A/images/landing/landing-page-carousel-2-top.svg/public",
    ctaText: "Click Here",
    ctaLink: "",
    content: () => {
      return (
        <p>
          Gain unmatched visibility and control over your virtual desktops with Neverinstall & aposs console designed for end-to-end cloud pc management and compact executions.
          </p>
      );
    },
  },
  {
    
    title: "Multi-factor authentication",
    src: "https://neverinstall.com/cdn-cgi/imagedelivery/AvFws3zK3WPu5k1TtWLA1A/images/landing/landing-page-carousel-2-top.svg/public",
    ctaText: "Click Here",
    ctaLink: "",
    content: () => {
      return (
        <p>
          Benefit from Multi-Factor Authentication, Zero Trust protocols, and adherence to SOC II, GDPR, and ISO frameworks for unparalleled data protection and privacy in your virtual desktop environment.
        </p>
      );
    },
  },
];

const Sectione = () => {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <div className="w-full items-center flex justify-center">
      <div className="w-3/4 h-full flex  items-center justify-center flex-col gap-7 ">
        <div className="w-full flex items-center justify-center">
          <h1 className="text-[4vw] font-bold font-satoshi">Your 360° desktop virtualisation stack</h1>
        </div>

        <div className=" w-full mt-20 " >
        <AnimatePresence>
          {active && typeof active === "object" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 h-full w-full z-10"
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {active && typeof active === "object" ? (
            <div className="fixed inset-0 grid place-items-center z-[100]">
              <motion.button
                key={`button-${active.title}-${id}`}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.05 } }}
                className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white/75 rounded-full h-6 w-6"
                onClick={() => setActive(null)}
              >
                <CloseIcon />
              </motion.button>
              <motion.div
                layoutId={`card-${active.title}-${id}`}
                ref={ref}
                className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
              >
                <motion.div layoutId={`image-${active.title}-${id}`}>
                  <img
                    src={active.src}
                    alt={active.title}
                    className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                  />
                </motion.div>

                <div>
                  <div className="flex justify-between items-start p-4">
                    <div className=" flex justify-center items-center ">
                      <motion.h3
                        layoutId={`title-${active.title}-${id}`}
                        className="font-bold text-neutral-700 dark:text-neutral-200"
                      >
                        {active.title}
                      </motion.h3>
                      
                    </div>

                    <motion.a
                      layoutId={`button-${active.title}-${id}`}
                      href={active.ctaLink}
                      target="_blank"
                      className="px-4 py-3 text-sm rounded-full font-bold bg-slate-500 text-white"
                    >
                      {active.ctaText}
                    </motion.a>
                  </div>
                  <div className="pt-4 relative px-4">
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                    >
                      {typeof active.content === "function"
                        ? active.content()
                        : active.content}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>
        <ul className="max-w-2xl mx-auto w-full gap-4">
          {cards.map((card, index) => (
            <motion.div
              layoutId={`card-${card.title}-${id}`}
              key={`card-${card.title}-${id}`}
              onClick={() => setActive(card)}
              className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-400  rounded-xl cursor-pointer"
            >
              <div className="flex gap-4 flex-col items-center md:flex-row ">
                <motion.div layoutId={`image-${card.title}-${id}`}>
                  <img
                    src={card.src}
                    alt={card.title}
                    className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                  />
                </motion.div>
                <div className="">
                  <motion.h3
                    layoutId={`title-${card.title}-${id}`}
                    className="font-medium text-neutral-800 dark:text-neutral-700 text-center md:text-left"
                  >
                    {card.title}
                  </motion.h3>
                  
                </div>
              </div>
              <motion.button
                layoutId={`button-${card.title}-${id}`}
                className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-[#4A91FF] hover:text-white text-black mt-4 md:mt-0"
              >
                {card.ctaText}
              </motion.button>
            </motion.div>
          ))}
        </ul>
        </div>
        
      </div>
    </div>
  );
};

const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

export default Sectione;
