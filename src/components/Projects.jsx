import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Project from "./common/Project";
import projects from "../utils/projects";
import ProjectModal from "./common/ProjectModal";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../redux/actions";

const Projects = () => {
  const { t } = useTranslation();
  const modalOpen = useSelector((state) => state.modalOpen);
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    dispatch(toggleModal());
  };

  const closeModal = () => {
    setSelectedProject(null);
    dispatch(toggleModal());
  };
  return (
    <section
      id="projects"
      className={`flex justify-center items-center flex-col my-10 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-[#f2f2f2]'
      }`}
    >
      <div className="flex flex-col justify-center items-center">
        <h2 className={`md:text-[2.2rem] text-[1.8rem] font-bold mt-6 ${
          theme === 'dark' ? 'text-white' : ''
        }`}>
          {t('projects.title')}
        </h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 1"
          className="mt-2 animate-pulse"
        >
          <line
            x1="48"
            y1="0.5"
            x2="52"
            y2="0.5"
            stroke="#7843e9"
            stroke-width="0.5"
            stroke-linecap="round"
          />
        </svg>
        <h3 className={`text-center px-11 mt-6 text-sm md:text-lg md:w-[50rem] max-w-full ${
          theme === 'dark' ? 'text-gray-300' : 'text-text-3'
        }`}>
          {t('projects.subtitle')}
        </h3>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mt-4">
        {projects?.map(({ img, nameProject }) => {
          return (
            <Project
              img={img}
              nameProject={nameProject}
              key={nameProject}
              onClick={() => openModal({ img, nameProject })}
            />
          );
        })}
      </div>
      {modalOpen && (
        <ProjectModal project={selectedProject} closeModal={closeModal} />
      )}
    </section>
  );
};

export default Projects;
