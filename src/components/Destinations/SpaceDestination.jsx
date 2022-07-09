import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import useWindowResize from "../../utils/useWindowResize";
import SpaceDestinationButtons from "./SpaceDestinationButtons";

import bgDesktop from "../../assets/destination/background-destination-desktop.jpg";
import bgTablet from "../../assets/destination/background-destination-tablet.jpg";
import bgMobile from "../../assets/destination/background-destination-mobile.jpg";
import SpaceDestinationContent from "./SpaceDestinationContent";

import Loader from "../../utils/Loader";
import { useFetchSpace } from "../.././utils/useFetch";

function SpaceDestination() {
  const { data, status } = useFetchSpace(
    "https://talentlessdeveloper.github.io/space-tourism-api/data.json"
  );
  const [idx, setIdx] = useState(0);
  const [animation, setAnimation] = useState(true);

  const imageUrl = useWindowResize(bgDesktop, bgTablet, bgMobile);

  const handleActive = (e) => {
    switch (e.target.dataset.name) {
      case "btn-0":
        setIdx(0);
        break;
      case "btn-1":
        setIdx(1);
        break;
      case "btn-2":
        setIdx(2);
        break;
      case "btn-3":
        setIdx(3);
        break;
      default:
        setIdx(0);
    }
    setAnimation(false);
    console.log(idx);
    setTimeout(() => setAnimation(true), 300);
  };

  if (status === "loading" || !data.destinations.length) {
    return <Loader />;
  }

  const variants = {
    animateTrue: {
      opacity: 1,
      transition: {
        duration: 2,
        ease: "linear",
      },
    },
    animateFalse: { opacity: 0 },
  };
  return (
    <section
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      {status === "success" && (
        <div className="container mx-auto px-[1.5rem] pt-[5.5rem] pb-[3.25rem] text-center md:pt-[8.5rem] md:px-[2.40625rem] lg:px-[6.313rem] lg:pt-[13.25rem]">
          <div>
            <h2 className="uppercase leading-5 tracking-[2.7px] text-white font-barlowC md:text-left md:text-xl">
              <span className="mr-2 opacity-25">01</span> Pick your destination
            </h2>
          </div>
          <div className="flex flex-col items-center lg:flex-row lg:gap-x-12 lg:justify-between">
            <div className="mt-8 md:mt-[3.75rem]">
              <AnimatePresence>
                {animation && (
                  <motion.img
                    animate={"animateTrue"}
                    exit={"animateFalse"}
                    variants={variants}
                    src={`${data.destinations[idx].images.webp}`}
                    alt="planet"
                    className="delayAnimation translate-x-50 opacity-0 delay-[2000ms]  w-[10.625rem] h-[10.625rem] md:w-[18.75rem] md:h-[18.75rem] lg:w-[27.1825rem] lg:h-[27.1825rem]"
                  />
                )}
              </AnimatePresence>
            </div>

            <div className="content mt-[1.625rem] flex flex-col items-center text-center md:mt-[3.3125rem]lg:text-left lg:items-start">
              <div className="buttons flex gap-x-6">
                <SpaceDestinationButtons
                  idx={idx}
                  handleActive={handleActive}
                />
              </div>
              <SpaceDestinationContent
                data={data.destinations}
                animation={animation}
                idx={idx}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default SpaceDestination;
