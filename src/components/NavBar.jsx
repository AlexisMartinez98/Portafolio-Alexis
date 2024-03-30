import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { GoListUnordered, GoX } from "react-icons/go";
import { useSelector, useDispatch } from "react-redux";
import logo from "../assets/logo-cla.svg";

const NavBar = () => {
  const modalOpen = useSelector((state) => state.modalOpen);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };
  if (modalOpen) {
    return null;
  }

  return (
    <nav className="w-full h-[10vh] px-10 bg-white fixed top-0 z-50 shadow">
      <div className="w-full h-full flex items-center justify-between md:justify-around">
        <Link to="/">
          <img src={logo} alt="" className="w-14" />
        </Link>
        <div className="hidden sm:block">
          <div className="flex text-text-1">
            <NavItem number="01" sectionId="home">
              Home
            </NavItem>
            <NavItem number="02" sectionId="aboutMe">
              Sobre Mí
            </NavItem>
            <NavItem number="03" sectionId="projects">
              Proyectos
            </NavItem>
            <NavItem number="04" sectionId="contact">
              Contacto
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
          className="h-full w-full bg-black bg-opacity-50 fixed top-0 left-0 transition-opacity duration-300 z-40"
          onClick={handleMenu}
        ></div>
      )}
      <div
        className={`h-full w-80 bg-white fixed top-0 right-0 transition-transform duration-300 transform ${
          open ? "translate-x-0" : "translate-x-full"
        } z-50 sm:hidden`}
      >
        <div className="flex flex-col text-text-1 mt-8 mr-8">
          <NavItem number="01" sectionId="home" handleMenu={handleMenu}>
            Home
          </NavItem>
          <NavItem number="02" sectionId="aboutMe" handleMenu={handleMenu}>
            Sobre Mí
          </NavItem>
          <NavItem number="03" sectionId="projects" handleMenu={handleMenu}>
            Proyectos
          </NavItem>
          <NavItem number="04" sectionId="contact" handleMenu={handleMenu}>
            Contacto
          </NavItem>
        </div>
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
    handleMenu(); // Cerrar el menú después de hacer clic en un enlace
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
