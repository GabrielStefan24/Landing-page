import { motion } from "framer-motion";
import HeroModelCanvas from "./Canvas/HeroModel";
import arrowVariants from "../utils/arrow";

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen 
  "
    >
      <div className="absolute px-6 inset-0 top-[140px] max-w-7xl mx-auto flex items-start gap-5">
        <div>
          <h1 className="text-white xl:text-7xl  sm:text-5xl text-4xl font-bold md:mt-10 ">
            Hi, I'm{" "}
            <span className="text-secondary xl:text-7xl  sm:text-5xl text-4xl  ">
              Gabriel
            </span>
          </h1>
          <p className="text-white mt-2 xl:text-3xl sm:text-2xl  md:text-3xl md:mt-10 font-semibold ">
            {" "}
            I specialize in crafting visually appealing, responsive,
            <br /> and user-friendly interfaces for websites and web
            applications
          </p>
        </div>
      </div>
      <HeroModelCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center xxs:relative">
        <a href="#about">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={arrowVariants}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <p className="text-white mt-2 xl:text-3xl sm:text-2xl text:xl font-semibold">
              Scroll to about section
            </p>
            <motion.svg
              className={"hover:translate-y-1"}
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginTop: 8 }}
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </motion.svg>
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
