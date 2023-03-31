import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { navLinks } from "../data/data.js";
import { logo, menu, close } from "../assets";
function Navbar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex items-center p-5  fixed  top-0 z-20 bg-black bg-opacity-95 ">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2 "
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="Logo" className="w-14 h-14 object-contain" />
          <p className="text-white text-2xl cursor-pointer font-bold font-Roslindale">
            Gabriel Sirbu
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10 ">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-secondary" : "text-white"
              } hover:text-secondary hover:
              cursor-pointer
               underline-animation`}
              onClick={() => {
                setActive(link.title);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className=" sm:hidden flex justify-end items-center z-20">
          <img
            src={toggle ? close : menu}
            alt="Menu Button"
            className="w-{30px} h-{30px} object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
        </div>
      </div>
      <div
        className={` w-full h-screen absolute top-0 left-0 transition-all ease-in-out duration-1000 ${
          toggle ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className=" bg-stone-900 h-full flex justify-center py-5  ">
          {/* Place your modal content here */}
          <ul className="list-none flex flex-col gap-10 text-2xl ">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } hover:text-white hover:
          cursor-pointer
          font-medium underline-animation `}
                onClick={() => {
                  setActive(link.title);
                  setToggle(!toggle);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
