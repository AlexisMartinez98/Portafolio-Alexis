import React, { useState, useEffect } from "react";
import { BsArrowDown } from "react-icons/bs";
import Typed from "typed.js";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const Header = () => {
  const { t } = useTranslation();
  const theme = useSelector((state) => state.theme);
  const [arrow, setArrow] = useState(true);

  useEffect(() => {
    const handleArrow = () => {
      if (window.scrollY >= 90) {
        setArrow(false);
      } else {
        setArrow(true);
      }
    };

    window.addEventListener("scroll", handleArrow);

    return () => {
      window.removeEventListener("scroll", handleArrow);
    };
  }, []);

  useEffect(() => {
    const typed = new Typed("#name", {
      strings: ["ALEXIS MARTINEZ"],
      typeSpeed: 100,
      backSpeed: 150,
      startDelay: 100,
      backDelay: 2500,
      loop: false,
    });

    const typedRole = new Typed("#role", {
      strings: ["Full Stack", "Front End", "Back End"],
      typeSpeed: 150,
      backSpeed: 150,
      startDelay: 400,
      backDelay: 2500,
      loop: true,
    });

    return () => {
      typed.destroy();
      typedRole.destroy();
    };
  }, []);

  return (
    <motion.div
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`bg-repeat min-h-screen flex flex-col justify-center items-center text-center px-10 md:px-0 relative overflow-hidden ${
        theme === 'dark' ? 'bg-dark' : 'bg-light'
      }`}
      style={{
        background: theme === 'dark' 
          ? "linear-gradient(to right,rgba(26,26,26,.9),rgba(26,26,26,.9)), url(/src/assets/low.svg)"
          : "linear-gradient(to right,rgba(245,245,245,.7),rgba(245,245,245,.7)), url(/src/assets/low.svg)",
        boxShadow: theme === 'dark' ? "0 5px 20px rgba(255,255,255,.1)" : "0 5px 20px rgba(0,0,0,.1)",
      }}
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="md:text-[3.5rem] font-bold text-[2.5rem]"
      >
        {t('header.hello')}{" "}
        <motion.img
          whileHover={{ scale: 1.2, rotate: 20 }}
          transition={{ type: "spring", stiffness: 300 }}
          src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
          width="56"
          className="inline-block ml-4"
          alt="Wave hand"
        />
      </motion.div>
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="md:text-[3.5rem] font-bold text-[2.5rem]"
      >
        {t('header.im')} <span id="name" className="text-text-color min-w-20"></span>
      </motion.h1>
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className={`md:text-xl md:px-0 md:max-w-[45rem] pt-4 max-w-lg mx-auto text-sm px-10 ${
          theme === 'dark' ? 'text-gray-300' : 'text-text-3'
        }`}
      >
        {t('header.developer')}{" "}
        <span id="role" className="text-text-color underline"></span>{" "}
        {t('header.description')}
      </motion.h2>

      {arrow && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-5 left-1/2 transform -translate-x-1/2"
        >
          <BsArrowDown
            className="text-secondary"
            size={50}
            color="#7843e9"
          />
        </motion.div>
      )}

      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(circle at 20% 20%, rgba(120, 67, 233, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 80%, rgba(120, 67, 233, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 20%, rgba(120, 67, 233, 0.1) 0%, transparent 50%)"
          ]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
    </motion.div>
  );
};

export default Header;
