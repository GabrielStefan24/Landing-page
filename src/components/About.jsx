import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeTransition } from "../utils/Framer";
import { avatar } from "../assets";
import useMediaQuery from "../utils/useMediaQuery";
import { useInView } from "react-intersection-observer";

const Photo = React.forwardRef(({ inView }, ref) => (
  <Tilt
    tiltMaxAngleX={25}
    tiltMaxAngleY={25}
    scale={1}
    transitionSpeed={450}
    className="min-w-[300px] min-h-[300px] h-[350px] w-[350px] overflow-hidden"
  >
    <motion.div
      ref={ref}
      className="w-full h-full"
      variants={fadeTransition("left", "", 0.5, 0.75)}
      style={{
        backgroundImage: `url(${avatar})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius: "40%",
      }}
      animate={inView ? "show" : "hidden"}
      exit="exit"
    ></motion.div>
  </Tilt>
));

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  const isBelowSmallScreens = useMediaQuery("(max-width: 640px)");
  return (
    <motion.section
      id="about"
      className={`flex ${
        isBelowSmallScreens ? "flex-col" : "flex-row"
      } mx-auto max-w-7xl items-center justify-between px-6`}
    >
      <div className="mb-10 mr-3">
        <motion.h2
          variants={fadeTransition("", "", 0.2, 1.2)}
          className="text-white xl:text-7xl sm:text-5xl text-4xl font-bold md:mt-10"
          animate={inView ? "show" : "hidden"}
          exit="exit"
        >
          About me
        </motion.h2>
        <motion.p
          ref={ref}
          variants={fadeTransition("", "", 0.2, 1.2)}
          className="text-secondary mt-2 xl:text-[18px] text-base sm:text-sm md:mt-10 font-semibold max-w-3xl"
          animate={inView ? "show" : "hidden"}
          exit="exit"
        >
          Hi, I'm Gabriel, a self-taught front-end web developer. Passionate
          about learning new technologies and pushing boundaries, I blend design
          and development to create optimal user experiences. My expertise lies
          in front-end development, while also nurturing a love for design.
        </motion.p>
      </div>
      <Photo inView={inView} ref={ref} />
    </motion.section>
  );
};

export default About;
