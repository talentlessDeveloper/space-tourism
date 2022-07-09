import { useState } from "react";

import useWindowResize from "../../utils/useWindowResize";

import { AnimatePresence, motion } from "framer-motion";

import bgDesktop from "../../assets/technology/background-technology-desktop.jpg";
import bgTablet from "../../assets/technology/background-technology-tablet.jpg";
import bgMobile from "../../assets/technology/background-technology-mobile.jpg";
import Loader from "../../utils/Loader";
import SpaceTechContent from "./SpaceTechContent";
import { useFetchSpace } from "../.././utils/useFetch";

function SpaceTech() {
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
      default:
        setIdx(0);
    }
    setAnimation(false);

    setTimeout(() => setAnimation(true), 350);
  };

  if (status === "loading" || !data.technology.length) {
    return <Loader />;
  }

  const variants = {
    animateTrue: {
      opacity: 1,
      transition: {
        duration: 3,
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
        <div className="pt-[5.5rem] text-center  md:pt-[8.5rem] lg:pt-[13.25rem] lg:pb-[6.3125rem]">
          <div>
            <h2 className="uppercase leading-5 tracking-[2.7px] text-white font-barlowC px-[1.5rem] md:px-[2.40625rem] md:text-left md:text-xl lg:mx-auto lg:px-[8.313rem] lg:text-[1.75rem]">
              <span className="mr-2 opacity-25">03</span> Space Launch 101
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row-reverse lg:gap-x-28">
            <div className="mt-8">
              <AnimatePresence>
                {animation && (
                  <motion.img
                    variants={variants}
                    animate={"animateTrue"}
                    exit={"animateFalse"}
                    src={
                      imageUrl === bgDesktop
                        ? `${data.technology[idx].images.portrait}`
                        : `${data.technology[idx].images.landscape}`
                    }
                    alt="technology"
                    className="w-full"
                  />
                )}
              </AnimatePresence>
            </div>

            <div className="container mx-auto flex flex-col items-center mt-[2.125rem] px-[1.5rem] md:px-[2.40625rem] lg:text-left lg:pl-[6.313rem] lg:pr-0 lg:flex-row lg:gap-x-20 lg:basis-2/4">
              <div className="techButtons flex gap-x-4 lg:flex-col lg:gap-y-8">
                <button
                  onClick={handleActive}
                  data-name="btn-0"
                  className={idx === 0 ? "active" : ""}
                >
                  1
                </button>
                <button
                  onClick={handleActive}
                  data-name="btn-1"
                  className={idx === 1 ? "active" : ""}
                >
                  2
                </button>
                <button
                  onClick={handleActive}
                  data-name="btn-2"
                  className={idx === 2 ? "active" : ""}
                >
                  3
                </button>
              </div>
              <SpaceTechContent
                data={data.technology}
                idx={idx}
                animation={animation}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default SpaceTech;
