import { AnimatePresence, motion } from "framer-motion";

function SpaceTechContent({ data, idx, animation }) {
  const container = {
    hidden: { opacity: 0, x: 50 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.75,
        duration: 2,
        ease: "anticipate",
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0 },
  };
  return (
    <AnimatePresence>
      {animation && (
        <motion.div
          variants={container}
          animate={"show"}
          exit={"hidden"}
          className="overflow-hidden mt-[1.625rem] md:mt-[2.75rem] lg:mt-0 lg:pl-[0.2rem]"
        >
          <motion.h2
            variants={item}
            className="font-belle uppercase text-[1.75rem] text-white md:text-[2.5rem] md:leading-[2.875rem] delay-1000 lg:text-left lg:text-[3rem]"
          >
            <span className="font-barlowC text-base block text-heading  md:text-2xl md:mb-4">
              The Terminology...
            </span>
            {data[idx].name}
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-4 text-heading text-[0.9375rem] leading-[1.5625rem] font-barlow max-w-[28.625rem] md:leading-[1.75rem] md:text-base md:mx-auto lg:w-[80%] lg:mx-0 lg:text-left"
          >
            {data[idx].description}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SpaceTechContent;
