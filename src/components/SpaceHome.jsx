import { motion } from "framer-motion";

import useWindowResize from "../utils/useWindowResize";

import bgDesktop from "../assets/home/background-home-desktop.jpg";
import bgTablet from "../assets/home/background-home-tablet.jpg";
import bgMobile from "../assets/home/background-home-mobile.jpg";

function SpaceHome() {
  const imageUrl = useWindowResize(bgDesktop, bgTablet, bgMobile);
  const container = {
    hidden: { opacity: 0, y: 200 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.75,
        duration: 2,
        type: "tween",
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 200 },
    show: { opacity: 1, y: 0 },
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
      <div className="container mx-auto px-[1.5rem] pt-[7rem] pb-12 md:pt-[12.625rem] md:pb-[5.625rem] lg:pt-[24.1875rem] lg:px-[6.313rem] lg:pb-[8.1875rem]">
        <div className="lg:flex lg:justify-between lg:gap-12">
          <motion.div
            className="flex flex-col items-center overflow-hidden "
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.h1
              className="text-heading uppercase font-barlowC leading-[1.1875rem] text-center md:text-xl md:leading-6 lg:text-left lg:text-[1.75rem]"
              variants={item}
            >
              So you want to travel to{" "}
              <span className="block text-[5rem]  font-belle text-white leading-[6.25rem] md:text-[9.375rem] leading-[9.375rem] lg:mt-4">
                space
              </span>
            </motion.h1>

            <motion.p
              className="text-heading leading-[1.5625rem] font-barlowC text-center max-w-xs md:max-w-md md:leading-7 md:mt-2 lg:text-left lg:leading-8 lg:text-[1.125rem] lg:mt-10"
              variants={item}
            >
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </motion.p>
          </motion.div>
          <div className="text-center">
            <button className="explore-btn w-[9.375rem] h-[9.375rem] bg-white uppercase rounded-full mt-[5.0625rem] text-body text-xl leading-6 tracking-[1.25px] font-belle md:w-[15.125rem] md:h-[15.125rem] md:text-2xl lg:w-[17.125rem] lg:h-[17.125rem] ">
              Explore
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpaceHome;
