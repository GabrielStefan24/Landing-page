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
    <motion.div
      id="projects"
      variants={fadeTransition("left", "", index * 0.25, 0.5)}
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      exit="exit"
      className="mx-auto "
    >
      <Tilt
        options={{ max: 35, scale: 1, speed: 400 }}
        className=" bg-cover p-4 rounded-2xl sm:w-[360px] w-full  "
      >
        <div className="relative flex flex-col">
          <img
            src={image}
            alt="project image"
            className="w-full rounded-2xl min-h-[280px] "
          />
          <div
            className="absolute top-0 right-0 m-3 w-9 bg-black h-9 rounded-full cursor-pointer"
            onClick={() => window.open(source_code_link, "_blank")}
          >
            <img src={github} alt="github page" />
          </div>
          <div className="flex  flex-col mt-4">
            <h3 className="text-white text-2xl sm:xl">{name}</h3>
            <p className="text-secondary text-xl sm:text-[14px]">
              {description}
            </p>
            <p></p>
            <div className=" flex flex-row gap-4 mt-4">
              {tags.map((tag) => {
                return (
                  <p
                    key={tag.name}
                    className={`text-[14px] ${
                      tag.color === "white" ? "text-white" : ""
                    } ${tag.color === "red" ? "text-red" : ""} ${
                      tag.color === "green" ? "text-green" : ""
                    }`}
                  >
                    #{tag.name}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
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
      className={`flex  overflow-hidden ${
        isBelowSmallScreens ? "flex-col" : "flex-col"
      } mx-auto max-w-7xl items-center justify-between px-6 mt-20`}
    >
      <motion.div
        ref={ref}
        variants={fadeTransition("down", "", 0.3, 0.8)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        <h1 className="text-white xl:text-7xl  sm:text-5xl text-4xl font-bold ">
          Projects
        </h1>
        <p className="text-secondary  font-semibold py-2 mt-6 xxs:text-[14px] md:text-[16px]">
          The projects below highlight my expertise and knowledge via practical
          illustrations of my contributions. <br />
          Accompanied by links to code repositories and live demonstrations.
          <br />
          These examples showcase my capabilities in tackling intricate
          challenges, employing various technologies, and efficiently managing
          projects.
        </p>
      </motion.div>
      <div className="flex flex-wrap mt-10 gap-5">
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
