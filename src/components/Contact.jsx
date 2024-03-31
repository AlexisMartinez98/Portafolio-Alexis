import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex justify-center items-center flex-col my-10"
    >
      <div className="flex flex-col justify-center items-center">
        <h2 className="md:text-[2.2rem] text-[1.8rem] font-bold mt-6">
          CONTACTO
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
        <h3 className="text-text-3 text-center mt-6 text-sm md:text-lg md:w-[50rem] max-w-full px-11">
          Actualmente me encuentro en búsqueda de nuevas oportunidades
          laborales, si quieres ponerte en contaco, no dudes en contactarme.
        </h3>
        <div className="flex gap-5 mt-5 md:flex-row scale-125 md:scale-150">
          <a href="https://github.com/AlexisMartinez98" target="_blank">
            <div class="group relative">
              <button>
                <svg
                  className="w-8 hover:scale-125 duration-200 hover:stroke-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5  -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4  -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6  -.6 1.2 -.5 2v3.5"></path>
                </svg>
              </button>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/alexismartinez98/"
            target="_blank"
          >
            <div class="group relative">
              <button>
                <svg
                  className="w-8 hover:scale-125 duration-200 hover:stroke-[#0077b5]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                  <path d="M8 11l0 5"></path>
                  <path d="M8 8l0 .01"></path>
                  <path d="M12 16l0 -5"></path>
                  <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                </svg>
              </button>
            </div>
          </a>

          <a href="mailto:as.alexismartinez@gmail.com" target="_blank">
            <div class="group relative">
              <button>
                <svg
                  className="w-8 hover:scale-125 duration-200 hover:stroke-[#d93025]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                  <path d="M3 7l9 6l9 -6"></path>
                </svg>
              </button>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
