import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { GoListUnordered, GoX } from "react-icons/go";
import { BsSun, BsMoon } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { toggleTheme, toggleLanguage } from "../redux/actions";
import logo from "../assets/logo-cla.svg";
import ContactButton from "./common/ContactButton";

const NavBar = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const modalOpen = useSelector((state) => state.modalOpen);
  const theme = useSelector((state) => state.theme);
  const language = useSelector((state) => state.language);
  const [open, setOpen] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    document.documentElement.className = theme;
    i18n.changeLanguage(language);
  }, [theme, language]);

  const handleMenu = () => {
    setOpen(!open);
  };

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  const handleLanguageToggle = () => {
    dispatch(toggleLanguage());
  };

  if (modalOpen) {
    return null;
  }

  return (
    <nav className={`w-full h-[10vh] px-10 ${theme === 'light' ? 'bg-white' : 'bg-gray-900'}`}>
      <div className="w-full h-full flex items-center justify-between md:justify-around relative">
        <Link to="/">
          <img src={logo} alt="" className="w-14" />
        </Link>
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={handleThemeToggle}
            className={`p-2 rounded-full ${theme === 'light' ? 'text-gray-800' : 'text-white'} hover:bg-gray-200 dark:hover:bg-gray-700`}
          >
            {theme === 'light' ? <BsMoon size={20} /> : <BsSun size={20} />}
          </button>
          <button
            onClick={handleLanguageToggle}
            className={`px-2 py-1 rounded ${theme === 'light' ? 'text-gray-800' : 'text-white'} hover:bg-gray-200 dark:hover:bg-gray-700`}
          >
            {language === 'es' ? 'EN' : 'ES'}
          </button>
          <div className="flex text-text-1">
            <NavItem number="01" sectionId="home" handleMenu={handleMenu}>
              // Home
            </NavItem>
            <NavItem number="02" sectionId="aboutMe" handleMenu={handleMenu}>
              // {t('nav.about')}
            </NavItem>
            <NavItem number="03" sectionId="projects" handleMenu={handleMenu}>
              // {t('nav.projects')}
            </NavItem>
            <NavItem number="04" sectionId="contact" handleMenu={handleMenu}>
              // {t('nav.contact')}
            </NavItem>
          </div>
        </div>
        <div className="sm:hidden">
          <button
            onClick={handleMenu}
            className="text-xl text-gray-700 focus:outline-none"
          >
            {open ? <GoX /> : <GoListUnordered />}
          </button>
        </div>
      </div>
      {open && (
        <div
          className="h-full w-full bg-black bg-opacity-50 md:bg-opacity-0 fixed top-0 left-0 transition-opacity duration-300 z-40"
          onClick={handleMenu}
        ></div>
      )}
        <div
          className={`h-full w-60 ${theme === 'light' ? 'bg-white' : 'bg-gray-900'} fixed top-0 right-0 transition-transform duration-300 transform ${
          open ? "translate-x-0" : "translate-x-full"
        } z-50 sm:hidden`}
      >
        <div className="flex flex-col text-text-1 mt-20 mr-8 gap-6">
          <NavItem number="01" sectionId="home" handleMenu={handleMenu}>
            <span className="text-text-color">//</span> Home
          </NavItem>
          <NavItem number="02" sectionId="aboutMe" handleMenu={handleMenu}>
            <span className="text-text-color">//</span> {t('nav.about')}
          </NavItem>
          <NavItem number="03" sectionId="projects" handleMenu={handleMenu}>
            <span className="text-text-color">//</span> {t('nav.projects')}
          </NavItem>
          <NavItem number="04" sectionId="contact" handleMenu={handleMenu}>
            <span className="text-text-color">//</span> {t('nav.contact')}
          </NavItem>
        </div>
        <ContactButton />
      </div>
    </nav>
  );
};

const NavItem = ({ number, sectionId, children, handleMenu }) => {
  const smoothScroll = () => {
    scroll.scrollTo(sectionId, {
      duration: 800,
      smooth: "easeInOutQuart",
    });
    handleMenu();
  };

  return (
    <div className="flex flex-col px-6 group hover:text-text-color font-bold cursor-pointer">
      <span className="text-xs text-end font-light">{number}</span>
      <ScrollLink
        to={sectionId}
        className="group-hover:underline"
        smooth={true}
        onClick={smoothScroll}
      >
        {children}
      </ScrollLink>
    </div>
  );
};

export default NavBar;
