import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useInView } from "react-intersection-observer";
import { fadeTransition } from "../utils/Framer";
import PhoneCanvas from "./Canvas/Phone";
import useMediaQuery from "../utils/useMediaQuery";

const Contact = () => {
  const isAboveSmallScreens = useMediaQuery("(min-width:1290px)");
  const { ref, inView } = useInView({
    threshold: 0.05,
    triggerOnce: true,
  });
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const isFormValid = () => {
    return (
      form.name.trim() !== "" &&
      form.email.trim() !== "" &&
      form.message.trim() !== ""
    );
  };

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Gabriel Sirbu",
          from_email: form.email,
          to_email: "sirbugabriel97@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };
  return (
    <div className="flex mt-20 mx-auto max-w-7xl mb-10 px-10 ">
      <motion.div
        id="contact"
        ref={ref}
        variants={fadeTransition("right", "", 0.2, 0.6)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        exit="exit"
        className="flex-1 bg-cover p-8 rounded-2xl"
      >
        <h3 className="text-4xl text-white">Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-white py-4 px-6 placeholder:text-secondary text-black-100 rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-white py-4 px-6 placeholder:text-secondary text-black-100 rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-white py-4 px-6 placeholder:text-secondary text-black-100 rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-white py-3 px-8 rounded-xl outline-none w-fit text-black font-bold shadow-md shadow-black hover:bg-slate-300"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      {isAboveSmallScreens && (
        <motion.div
          ref={ref}
          variants={fadeTransition("left", "", 0.4, 0.6)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          exit="exit"
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <PhoneCanvas />
        </motion.div>
      )}
    </div>
  );
};

export default Contact;
