import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import CardPerson from "./common/CardPerson";

const AboutMe = () => {
  const { t } = useTranslation();
  const theme = useSelector((state) => state.theme);
  return (
    <section
      id="aboutMe"
      className={`flex justify-center items-center flex-col my-10 ${
        theme === 'dark' ? 'text-white' : ''
      }`}
    >
      <div className="flex flex-col justify-center items-center">
        <h2 className="md:text-[2.2rem] text-[1.8rem] font-bold">{t('aboutMe.title')}</h2>
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
        <h3 className={`text-center mt-3 px-11 text-sm md:text-lg md:w-[50rem] max-w-full ${
          theme === 'dark' ? 'text-gray-300' : 'text-text-3'
        }`}>
          {t('aboutMe.subtitle')}
        </h3>
        <div className="flex items-start mt-8 gap-24 flex-col lg:flex-row">
          <div className="flex justify-center flex-col mt-4 mx-6">
            <h4 className="text-2xl font-bold text-center md:text-start">
              {t('aboutMe.knowMe')}
            </h4>
            <div className={`flex-col text-center w-[full] md:w-[60vh] md:text-start tracking-wide mt-8 text-sm md:text-lg ${
              theme === 'dark' ? 'text-gray-300' : 'text-text-3'
            }`}>
              {t('aboutMe.description1')}{" "}
              <span className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-text-2'}`}>
                {t('aboutMe.role')}
              </span>{" "}
              {t('aboutMe.description2')}
              <p className={`w-[full] md:w-[60vh] tracking-wide mt-8 ${
                theme === 'dark' ? 'text-gray-300' : 'text-text-3'
              }`}>
                {t('aboutMe.description3')}{" "}
                <span className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-text-2'}`}>
                  {t('aboutMe.developer')}
                </span>{" "}
                {t('aboutMe.description4')}{" "}
                <a
                  href="https://www.linkedin.com/in/alexismartinez98/"
                  className="text-text-color font-bold underline decoration-1"
                  target="_blank"
                >
                  LinkedIn
                </a>
                {t('aboutMe.description5')}
              </p>
              <p className={`w-[full] md:w-[60vh] tracking-wide mt-8 ${
                theme === 'dark' ? 'text-gray-300' : 'text-text-3'
              }`}>
                {t('aboutMe.description6')}{" "}
                <span className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-text-2'}`}>
                  {t('aboutMe.job')}
                </span>{" "}
                {t('aboutMe.description7')}{" "}
                <span className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-text-2'}`}>
                  {t('aboutMe.contactMe')}
                </span>
                {t('aboutMe.description8')}
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
