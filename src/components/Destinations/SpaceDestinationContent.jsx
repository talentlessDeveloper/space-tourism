import { motion, AnimatePresence } from "framer-motion";

function SpaceDestinationContent({ data, animation, idx }) {
  let name = data[idx].name;
  let description = data[idx].description;
  let distance = data[idx].distance;
  let travel = data[idx].travel;

  const container = {
    hidden: { opacity: 0, x: 50 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
        duration: 1,
        ease: "anticipate",
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0 },
  };
  return (
    <>
      <AnimatePresence>
        {animation && (
          <motion.div
            variants={container}
            animate={"show"}
            exit={"hidden"}
            className="overflow-hidden lg:text-left"
          >
            <motion.h2
              variants={item}
              className="uppercase mt-5 text-[3.5rem] leading-[4rem] font-belle lg:text-[7.25rem] lg:leading-[7.1875rem] lg:mt-9"
            >
              {name}
            </motion.h2>
            <motion.p
              variants={item}
              className="text-heading text-[0.9375rem] leading-[1.5625rem] w-full max-w-[35.8125rem] font-barlow pb-8 border-b-2 border-solid border-[#383B4B] md:mt-2 md:pb-12 lg:max-w-md"
            >
              {description}
            </motion.p>
            <div className="md:flex w-full md:justify-around lg:justify-between">
              <div>
                <motion.p
                  variants={item}
                  className="uppercase text-heading text-sm leading-[1.0625rem] font-barlowC tracking-[2.3px] mt-8"
                >
                  Avg Distance
                </motion.p>
                <motion.p
                  variants={item}
                  className="uppercase text-white text-xl leading-[2rem] font-belle md:text-[1.75rem]  md:mt-[0.75rem]"
                >
                  {distance}
                </motion.p>
              </div>

              <div className="lg:mr-[4rem]">
                <motion.p
                  variants={item}
                  className="uppercase text-heading text-sm leading-[1.0625rem] font-barlowC tracking-[2.3px] mt-8"
                >
                  Est. Travel Time
                </motion.p>
                <motion.p
                  variants={item}
                  className="uppercase text-white text-xl leading-[2rem] font-belle md:text-[1.75rem]  md:mt-[0.75rem]"
                >
                  {travel}
                </motion.p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default SpaceDestinationContent;
