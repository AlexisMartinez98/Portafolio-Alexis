import React from "react";
import ButtonSkills from "./common/ButtonSkills";
import skills from "../utils/skill";

const MySkill = () => {
  return (
    <div className="flex justify-center items-center flex-col mt-4 mx-4">
      <h4 className="md:text-[2.2rem] text-[1.8rem] font-bold">
        Mis habilidades!
      </h4>
      <div className="grid grid-cols-4 md:grid-cols-8 gap-4 mt-4 md:mt-8">
        {skills?.map(({ nameSkill, urlImg }) => {
          return (
            <ButtonSkills
              urlImg={urlImg}
              nameSkill={nameSkill}
              key={nameSkill}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MySkill;
