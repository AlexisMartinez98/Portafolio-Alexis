import React, { useState } from "react";
import "./index.css";

const Project = ({ nameProject, img, onClick }) => {
  const [hovered, setHovered] = useState(false);
  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className="relative w-auto h-auto overflow-hidden rounded-md shadow-md m-8"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`transition-transform transform ${
          hovered ? "scale-100" : "scale-95"
        }`}
      >
        <img
          src={img}
          alt={nameProject}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div
        className={`overlay absolute inset-0 flex items-center justify-center bg-[#fafafa] bg-opacity-80 opacity-0 transition-opacity duration-700 ease-in-out ${
          hovered ? "opacity-100" : ""
        }`}
      >
        <div className="flex justify-center items-center flex-col text-center text-black">
          <h2 className="text-lg font-semibold uppercase">{nameProject}</h2>
          <button className="learn-more mt-4" onClick={onClick}>
            <span className="circle">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">Ver más</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
