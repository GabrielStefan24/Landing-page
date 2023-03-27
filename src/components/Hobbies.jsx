import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { hobbies } from "../data/data";

import { fadeTransition } from "../utils/Framer";

const Hobby = ({ hobby }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgba(9, 9, 9, 0.67)",
        color: "#fff",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={hobby.icon}
            alt={hobby.title}
            className="w-[80%] h-[80%] rounded-full bg-white "
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{hobby.title}</h3>
        <p className="text-secondary text-[16px] font-semibold py-2">
          {hobby.description}
        </p>
      </div>
    </VerticalTimelineElement>
  );
};

const Hobbies = () => {
  return (
    <>
      <motion.div
        variants={fadeTransition("", "", 0.2, 1.2)}
        className="text-center"
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <p className="text-center">What I have done so far</p>
        <h2 className="text-center">Work hobby.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {hobbies.map((hobby, index) => (
            <Hobby key={`hobby-${index}`} hobby={hobby} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Hobbies;
