import React from "react";

import CardPerson from "./common/CardPerson";

const AboutMe = () => {
  return (
    <section
      id="aboutMe"
      className="flex justify-center items-center flex-col my-10"
    >
      <div className="flex flex-col justify-center items-center">
        <h2 className="md:text-[2.2rem] text-[1.8rem] font-bold">SOBRE MÍ</h2>
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
            stroke-width="0.3"
            stroke-linecap="round"
          />
        </svg>
        <h3 className="text-text-3 text-center mt-3 px-11 text-sm md:text-lg md:w-[50rem] max-w-full">
          Aquí encontrarás más información sobre mí, lo que hago y mis
          habilidades actuales de programación y tecnología.
        </h3>
        <div className="flex items-start mt-8 gap-24 flex-col lg:flex-row">
          <div className="flex justify-center flex-col mt-4 mx-6">
            <h4 className="text-2xl font-bold text-center md:text-start">
              Conóceme!
            </h4>
            <div className=" flex-col text-center w-[full] md:w-[60vh] md:text-start text-text-3 tracking-wide mt-8 text-sm md:text-lg">
              Soy{" "}
              <span className="text-text-2 font-semibold ">
                Desarrollador Web Full Stack
              </span>{" "}
              especializado en la creación de interfaces para sitios web y
              aplicaciones, enfocado en impulsar el éxito del producto. Explora
              algunos de mis Proyectos en la sección correspondiente.
              <p className="w-[full] md:w-[60vh]  text-text-3 tracking-wide mt-8">
                Me apasiona compartir mis logros como{" "}
                <span className="text-text-2 font-semibold ">
                  Desarrollador
                </span>{" "}
                y aprendizajes acumulados a lo largo de los años. Conéctate
                conmigo en{" "}
                <a
                  href="https://www.linkedin.com/in/alexismartinez98/"
                  className="text-text-color font-bold underline decoration-1"
                  target="_blank"
                >
                  LinkedIn
                </a>{" "}
                . Estoy buscando oportunidades laborales donde pueda contribuir,
                aprender y crecer.
              </p>
              <p className="w-[full] md:w-[60vh]  text-text-3 tracking-wide mt-8">
                Si tienes una oportunidad{" "}
                <span className="text-text-2 font-semibold ">Laboral</span> que
                se alinee con mis habilidades y experiencia, ¡No dudes en{" "}
                <span className="text-text-2 font-semibold ">contactarme</span>!
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center md:mt-4 mx-auto">
            <CardPerson />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
