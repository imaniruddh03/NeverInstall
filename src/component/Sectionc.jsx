import React from "react";
import { CardBody, CardContainer, CardItem } from "./elements/card";

const Sectionc = () => {
  return (
    <div className="w-full  items-center flex  justify-center ">
      <div className=" w-3/4 h-full flex flex-col gap-16 px-20  ">
        <div className="w-full flex justify-center ">
          <h1 className="mt-10 text-5xl font-semibold leading-[120%] font-satoshi">
            Access secure virtual desktops in record time
          </h1>
        </div>
        <div className="flex flex-row gap-7">
          <div className="flex flex-col gap-7">
            <CardContainer className="inter-var flex">
              <CardBody className="bg-gray-50 relative group/card  flex flex-col gap-5 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-4 border">
                <CardItem translateZ="100" className="w-full mt-4">
                  <img src="https://neverinstall.com/cdn-cgi/imagedelivery/AvFws3zK3WPu5k1TtWLA1A/images/landing/landing-page-grid-col-1-row-1-top.svg/public" className="h-90 w-full object-cover bg-slate-200 rounded-xl group-hover/card:shadow-xl" alt="" />
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  Engineered for convenience
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  Neverinstall's architecture, built on first principles, offers
                  fast, modern & secure access to virtual desktops that are
                  centrally managed, deployed in multi-cloud & on-premise
                  environments & designed with user simplicity in mind.
                </CardItem>
              </CardBody>
            </CardContainer>
            <CardContainer className="inter-var flex">
              <CardBody className="bg-gray-50 relative group/card  flex flex-col gap-5 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem translateZ="100" className="w-full mt-4">
                
                 <img src="https://neverinstall.com/cdn-cgi/imagedelivery/AvFws3zK3WPu5k1TtWLA1A/images/landing/landing-page-grid-col-1-row-2-top.svg/public" alt="" className="h-40 w-full object-cover rounded-xl bg-slate-200 group-hover/card:shadow-xl" />
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  Secured with zero trust
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  Keep yours and your team's data secure with our zero trust security protocols embedded in each virtual desktop service, and maintain compliance for PCI-DSS, HIPAA, FINRA, & More.
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
          <div className=" flex flex-col gap-7">
          <CardContainer className="inter-var flex">
              <CardBody className="bg-gray-50 relative group/card  flex flex-col gap-5 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem translateZ="100" className="w-full mt-4">
                
                 <img src="https://neverinstall.com/cdn-cgi/imagedelivery/AvFws3zK3WPu5k1TtWLA1A/images/landing/landing-page-grid-col-1-row-2-top.svg/public" alt="" className="h-40 w-full object-cover rounded-xl bg-slate-200 group-hover/card:shadow-xl" />
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  Secured with zero trust
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  Keep yours and your team's data secure with our zero trust security protocols embedded in each virtual desktop service, and maintain compliance for PCI-DSS, HIPAA, FINRA, & More.
                </CardItem>
              </CardBody>
            </CardContainer>
            <CardContainer className="inter-var flex">
              <CardBody className="bg-gray-50 relative group/card  flex flex-col gap-5 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-4 border">
                <CardItem translateZ="100" className="w-full mt-4">
                  <img src="https://neverinstall.com/cdn-cgi/imagedelivery/AvFws3zK3WPu5k1TtWLA1A/images/landing/landing-page-grid-col-1-row-1-top.svg/public" className="h-90 w-full object-cover bg-slate-200 rounded-xl group-hover/card:shadow-xl" alt="" />
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  Engineered for convenience
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  Neverinstall's architecture, built on first principles, offers
                  fast, modern & secure access to virtual desktops that are
                  centrally managed, deployed in multi-cloud & on-premise
                  environments & designed with user simplicity in mind.
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sectionc;
