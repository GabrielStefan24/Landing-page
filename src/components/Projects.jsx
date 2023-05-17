import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { github } from "../assets";
import { fadeTransition } from "../utils/Framer";
import useMediaQuery from "../utils/useMediaQuery";
import { projects } from "../data/data";
import Tilt from "react-parallax-tilt";

const ProjectCard = ({
  name,
  description,
  index,
  tags,
  image,
  source_code_link,
  page_link,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  return (
    <>
      <Tilt
        options={{ max: 35, scale: 1, speed: 400 }}
        className=" sm:w-[400px]"
      >
        <motion.div
          id="projects"
          variants={fadeTransition("left", "", index * 0.25, 0.5)}
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          exit="exit"
          className="mx-auto  bg-neutral-800/50 relative flex flex-col h-[500px] rounded-xl"
        >
          <div
            className="h-[240px] overflow-hidden"
            onClick={() => window.open(page_link, "_blank")}
          >
            <img
              src={image}
              alt="project image"
              className="h-full w-full object-fill rounded-t-xl cursor-pointer"
            />
          </div>
          <div className="p-2">
            <div
              className="absolute top-0 right-0 m-3 w-9 bg-black h-9 rounded-full cursor-pointer"
              onClick={() => window.open(source_code_link, "_blank")}
            >
              <img src={github} alt="github page" />
            </div>
            <div
              className="absolute top-0 left-0 m-3 h-9  cursor-pointer flex items-center justify-center bg-black px-2 rounded-full ml-2 hover:bg-secondary font-mono text-white"
              onClick={() => window.open(page_link, "_blank")}
            >
              <p className="text-md  ">Demo</p>
            </div>
            <div className="flex flex-col px-2 mt-4 h-full">
              <h3 className="text-white text-2xl sm:xl">{name}</h3>
              <p className="text-secondary text-sm sm:text-[14px]">
                {description}
              </p>
              <div className="flex flex-row gap-4 mt-4">
                {tags.map((tag) => {
                  return (
                    <p
                      key={tag.name}
                      className={`text-[14px] ${
                        tag.color === "white" ? "text-white" : ""
                      } ${tag.color === "red" ? "text-red" : ""} ${
                        tag.color === "green"
                          ? "text-green"
                          : tag.color === "purple"
                          ? "text-purple"
                          : ""
                      }`}
                    >
                      #{tag.name}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </Tilt>
    </>
  );
};

function Projects() {
  const isBelowSmallScreens = useMediaQuery("(max-width: 640px)");
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  return (
    <section
      className={`flex  overflow-x-hidden  ${
        isBelowSmallScreens ? "flex-col" : "flex-col"
      } mx-auto max-w-7xl  justify-between px-6 mt-20`}
    >
      <motion.div
        className="mt-10"
        ref={ref}
        variants={fadeTransition("down", "", 0.3, 0.8)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        <h1 className="text-white xl:text-7xl  sm:text-5xl text-4xl font-bold text-center ">
          Projects
        </h1>
        <p className="text-secondary  font-semibold py-2 mt-6 xxs:text-[14px] md:text-[16px] text-center">
          The projects below highlight my expertise and knowledge via practical
          illustrations of my contributions. <br />
          Accompanied by links to code repositories and live demonstrations.
        </p>
      </motion.div>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-10 md:gap-20 gap-10 mx-auto overflow-hidden">
        {projects.map((project, index) => {
          return (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
