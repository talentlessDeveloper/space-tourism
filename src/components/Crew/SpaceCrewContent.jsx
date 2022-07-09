import { motion, AnimatePresence } from "framer-motion";

function SpaceCrewContent({ animation, idx, data }) {
  const container = {
    hidden: { opacity: 0, x: 50 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.75,
        duration: 2,
        ease: "linear",
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
            className="mt-8 overflow-hidden"
          >
            <motion.h2
              variants={item}
              className="font-belle uppercase text-[1.75rem] text-white md:text-[2.5rem] md:leading-[2.875rem] delay-1000 lg:text-left lg:text-[3rem]"
            >
              <span className="text-base block text-white opacity-50 md:text-2xl lg:text-[2rem] lg:mb-[1rem]">
                {data[idx].role}
              </span>
              {data[idx].name}
            </motion.h2>

            <motion.p
              variants={item}
              className="mt-4 text-heading text-[0.9375rem] font-barlow max-w-[28.625rem] md:leading-[1.75rem] lg:w-[80%]"
            >
              {data[idx].bio}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default SpaceCrewContent;
