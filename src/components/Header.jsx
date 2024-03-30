import React, { useState, useEffect } from "react";
import { BsArrowDown } from "react-icons/bs";
import Typed from "typed.js";

const Header = () => {
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

    // Cleanup
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

    // Cleanup
    return () => {
      typed.destroy();
      typedRole.destroy();
    };
  }, []);

  return (
    <div
      className="bg-repeat h-[100vh] flex flex-col justify-center items-center text-center px-10 md:px-0"
      style={{
        background:
          "linear-gradient(to right,rgba(245,245,245,.7),rgba(245,245,245,.7)), url(/src/assets/low.svg)",
        boxShadow: "0 5px 20px rgba(0,0,0,.1)",
      }}
    >
      <div className="md:text-[3.5rem] font-bold text-[2.5rem]">
        HOLA{" "}
        <img
          src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
          width="56"
          className="inline-block ml-4"
          alt="Wave hand"
        />
        ,
      </div>
      <h1 className="md:text-[3.5rem] font-bold text-[2.5rem]">
        SOY <span id="name" className="text-text-color min-w-20"></span>
      </h1>
      <h2 className="md:text-xl md:px-0 md:max-w-[45rem] pt-4 text-text-3 max-w-lg mx-auto text-sm px-10">
        Desarrollador{" "}
        <span id="role" className="text-text-color underline"></span>{" "}
        especializado en la creación integral de sitios web y aplicaciones. Con
        experiencia tanto en el Frontend como en el Backend.
      </h2>
      {arrow && (
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
          <BsArrowDown
            className="animate-bounce text-secondary"
            size={50}
            color="#7843e9"
          />
        </div>
      )}
    </div>
  );
};

export default Header;
