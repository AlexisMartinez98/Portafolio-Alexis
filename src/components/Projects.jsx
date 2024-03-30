import React from "react";
import { useState } from "react";
import Project from "./common/Project";
import projects from "../utils/projects";
import ProjectModal from "./common/ProjectModal";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../redux/actions";

const Projects = () => {
  const modalOpen = useSelector((state) => state.modalOpen);
  const dispatch = useDispatch();
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    dispatch(toggleModal());
  };
  return (
    <section
      id="projects"
      className="flex justify-center items-center flex-col my-10 bg-[#f2f2f2]"
    >
      <div className="flex flex-col justify-center items-center">
        <h2 className="md:text-[2.2rem] text-[1.8rem] font-bold mt-6">
          PROYECTOS
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
        <h3 className="text-text-3 text-center px-11 mt-6 text-sm md:text-lg md:w-[50rem] max-w-full">
          Aquí encontrarás alguno de los proyectos mas relevantes que he
          relizado.
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
        <ProjectModal project={selectedProject} closeModal={openModal} />
      )}
    </section>
  );
};

export default Projects;
