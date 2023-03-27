import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Hero,
  Navbar,
  Projects,
  Stack,
  StarsCanvas,
  Hobbies,
} from "./components";
import Space from "./components/Space";
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative ">
        <Space />
        <div>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Hobbies />
        <Stack />
        <Projects />
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
