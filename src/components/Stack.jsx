import { technologies } from "../data/data";
import BallCanvas from "./Canvas/Ball";

const Stack = () => {
  return (
    <section className="flex flex-col items-center mt-20">
      <div className="flex flex-row flex-wrap justify-center gap-8 mt-20">
        {technologies.map((el) => {
          return (
            <div className="w-24 h-24" key={el.name}>
              <BallCanvas icon={el.icon} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Stack;
