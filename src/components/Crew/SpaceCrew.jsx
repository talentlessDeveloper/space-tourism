import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import useWindowResize from "../../utils/useWindowResize";

// assets
import bgDesktop from "../../assets/crew/background-crew-desktop.jpg";
import bgTablet from "../../assets/crew/background-crew-tablet.jpg";
import bgMobile from "../../assets/crew/background-crew-mobile.jpg";

import SpaceCrewButtons from "./SpaceCrewButtons";
import Loader from "../../utils/Loader";
import SpaceCrewContent from "./SpaceCrewContent";
import { useFetchSpace } from "../.././utils/useFetch";

function SpaceCrew() {
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

    setTimeout(() => setAnimation(true), 350);
  };

  if (status === "loading" || !data.crew.length) {
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
        <div className="container mx-auto px-[1.5rem] pt-[5.5rem] pb-[3.25rem] text-center md:pt-[8.5rem] md:px-[2.40625rem] lg:px-[6.313rem] lg:pt-[13.25rem] lg:pb-0">
          <div>
            <h2 className="uppercase leading-5 tracking-[2.7px] text-white font-barlowC md:text-left md:text-xl">
              <span className="mr-2 opacity-25">02</span> Meet your crew
            </h2>
          </div>
          <div className="flex flex-col items-center lg:flex-row lg:gap-x-12 lg:justify-between">
            <div className="w-full max-w-xl h-[13.9375rem] mt-8 flex justify-center border-b-2 border-solid border-[#383B4B] md:border-none md:order-2 md:h-[33.25rem] md:mt-[3.5rem] lg:basis-[50%]">
              <AnimatePresence>
                {animation && (
                  <motion.img
                    variants={variants}
                    animate={"animateTrue"}
                    exit={"animateFalse"}
                    src={`${data.crew[idx].images.webp}`}
                    alt="crew member"
                    className="w-full h-full object-contain"
                  />
                )}
              </AnimatePresence>
            </div>

            <div className="content mt-8 flex flex-col items-center text-center md:mt-[3.75rem] lg:items-start lg:text-left lg:basis-[60%]">
              <div className="crewButtons flex gap-x-6 md:order-2 md:mt-10 lg:mt-[7.5rem]">
                <SpaceCrewButtons handleActive={handleActive} idx={idx} />
              </div>
              <SpaceCrewContent
                data={data.crew}
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

export default SpaceCrew;
