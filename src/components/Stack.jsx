import { technologies } from "../data/data";
import BallCanvas from "./Canvas/Ball";
import { fadeTransition } from "../utils/Framer";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Stack = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  return (
    <section className="flex flex-col items-center mt-40 mx-auto max-w-7xl px-6 ">
      <motion.h2
        ref={ref}
        variants={fadeTransition("", "", 0.2, 1.2)}
        className="text-white xl:text-7xl sm:text-5xl text-4xl font-bold md:mt-20 sm:self-start"
        animate={inView ? "show" : "hidden"}
        exit="exit"
      >
        Tehnologies
      </motion.h2>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-20">
        {technologies.map((el) => {
          return (
            <div className="w-24 h-24" key={el.name}>
              <BallCanvas icon={el.icon} />
              <p className="text-white text-center">{el.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Stack;
