import React from "react";
import skill from "../../utils/skill";

const ButtonSkills = ({ urlImg, nameSkill }) => {
  const techInfo = skill.find((tech) => tech.nameSkill === nameSkill);
  const urlImagen = techInfo?.urlImg;
  const getIcon = (techName) => {
    switch (techName) {
      case "Jest":
        return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg";
      case "Aws (EC2, S3 Y IAM)":
        return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg";
      case "Figma":
        return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg";
      default:
        return null;
    }
  };
  return (
    <div class="flex justify-cente items-center">
      <button
        href="/"
        class="group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
      >
        {
          <>
            <img
              src={urlImg || urlImagen || getIcon(nameSkill)}
              alt=""
              className="w-16 hover:opacity-50"
            />
            <span class="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-md group-hover:-translate-y-5 duration-700">
              {nameSkill}
            </span>
          </>
        }
      </button>
    </div>
  );
};
export default ButtonSkills;
