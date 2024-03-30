import React, { useEffect, useState } from "react";
import projects from "../../utils/projects";
import ButtonRepository from "./ButtonRepository";
import ButtonSkills from "./ButtonSkills";

const ProjectModal = ({ project, closeModal }) => {
  const [infoProject, setinfoProject] = useState({});

  const getProjectInfo = (projectTitle) => {
    const selectedProject = projects.find(
      (project) => project.nameProject === projectTitle
    );
    return selectedProject || null;
  };
  const selectedProjectInfo = getProjectInfo(project.nameProject);
  useEffect(() => {
    setinfoProject(selectedProjectInfo);
  }, []);

  if (!project) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content relative flex justify-center items-center">
        <img
          src={infoProject.img}
          alt=""
          className="hidden md:block h-[20rem] mx-6"
        />
        <div className="w-[60rem] flex justify-center items-center flex-col p-4 ">
          <h2 className="uppercase font-bold flex items-center justify-center md:text-[1.8rem] text-[1.4rem]">
            {infoProject.nameProject}
            <span
              className={`font-light md:text-xs text-[0.5rem] ml-2 px-2 rounded-full ${
                infoProject.status === "En Desarrollo"
                  ? "bg-red-300"
                  : "bg-green-300"
              }`}
            >
              {infoProject.status}
            </span>
          </h2>
          <p className="md:w-[45rem] md:my-3 my-1 text-sm md:text-lg text-center">
            . {infoProject.description}
          </p>
          <h3 className="font-bold md:my-1 underline text-lg">Funciones:</h3>
          {infoProject?.functions ? (
            <div className="text-lg md:w-[45rem]">
              {infoProject.functions.modeUser && (
                <>
                  <h4 className="underline text-base md:text-lg">
                    Modo Usuario
                  </h4>
                  <p className="my-2 text-text-3 text-sm md:text-lg">
                    {infoProject.functions.modeUser}
                  </p>
                </>
              )}
              {infoProject.functions.modeAdmin && (
                <>
                  <h4 className="underline text-base md:text-lg">Modo Admin</h4>
                  <p className="my-2 text-text-3 text-sm md:text-lg">
                    {infoProject.functions.modeAdmin}
                  </p>
                </>
              )}
            </div>
          ) : null}
          <h4 className="underline text-lg md:my-2 font-bold">Repositorios:</h4>
          <div className="flex justify-evenly gap-6 mt-4 scale-90 md:scale-100 ">
            {infoProject.repositoryLinks && (
              <>
                {infoProject.repositoryLinks.back && (
                  <ButtonRepository
                    linkRepository={infoProject.repositoryLinks.back}
                    titlebutton="Back End"
                  />
                )}

                <ButtonRepository
                  linkRepository={infoProject.repositoryLinks.front}
                  titlebutton="Front End"
                />
                {infoProject.repositoryLinks.front2 && (
                  <ButtonRepository
                    linkRepository={infoProject.repositoryLinks.front2}
                    titlebutton="Front End II"
                  />
                )}
              </>
            )}
          </div>
          <div className="md:my-4">
            <h4 className="underline text-lg md:my-2  font-bold text-center">
              Tecnologías Implementadas :
            </h4>
            <div className="grid grid-cols-6 md:flex md:flex-row md:justify-evenly md:gap-4 scale-75">
              {infoProject.skill &&
                infoProject.skill.map((tech) => (
                  <ButtonSkills key={tech} nameSkill={tech} />
                ))}
            </div>
          </div>
        </div>
        <button
          onClick={closeModal}
          title="Cerrar"
          className="group cursor-pointer outline-none absolute top-0 right-0 m-4 duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            className="stroke-red-400 fill-none group-hover:bg-red-500 hover:stroke-white rounded-full"
          >
            <line x1="6" y1="6" x2="18" y2="18" strokeWidth="1.5" />
            <line x1="18" y1="6" x2="6" y2="18" strokeWidth="1.5" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProjectModal;
