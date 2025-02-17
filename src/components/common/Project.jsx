import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import "./index.css";

const Project = ({ nameProject, img, onClick }) => {
  const { t } = useTranslation();
  const theme = useSelector((state) => state.theme);
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative w-auto h-auto overflow-hidden rounded-lg m-8 group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        boxShadow: theme === 'dark' 
          ? '0 4px 15px rgba(120, 67, 233, 0.2)'
          : '0 4px 15px rgba(120, 67, 233, 0.1)'
      }}
    >
      <motion.div
        animate={{
          scale: hovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.3 }}
        className={`relative ${hovered ? 'hover-distort' : ''}`}
      >
        <img
          src={img}
          alt={nameProject}
          className="w-full h-full object-cover rounded-lg"
        />
        <motion.div
          initial={false}
          animate={{
            opacity: hovered ? 1 : 0,
            scale: hovered ? 1 : 0.8
          }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(120,67,233,0.2)]"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`absolute inset-0 flex items-center justify-center backdrop-blur-sm ${
          theme === 'dark' ? 'bg-gray-900/80' : 'bg-white/80'
        } glass`}
      >
        <div className={`flex justify-center items-center flex-col text-center ${
          theme === 'dark' ? 'text-white' : 'text-black'
        }`}>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: hovered ? 0 : 20, opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-lg font-semibold uppercase mb-4 neon-text"
          >
            {nameProject}
          </motion.h2>
          
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: hovered ? 0 : 20, opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="learn-more neon-box"
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="circle">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">{t('projects.seeMore')}</span>
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: hovered 
            ? `radial-gradient(circle at 50% 50%, ${theme === 'dark' ? 'rgba(120, 67, 233, 0.3)' : 'rgba(120, 67, 233, 0.2)'} 0%, transparent 70%)`
            : 'none'
        }}
        transition={{ duration: 0.3 }}
      />

      <motion.div
        className="absolute -inset-2 bg-gradient-to-r from-[rgba(120,67,233,0.2)] via-[rgba(120,67,233,0.1)] to-[rgba(120,67,233,0.2)] opacity-0 group-hover:opacity-100 animate-gradient-xy pointer-events-none"
        style={{ 
          filter: 'blur(10px)',
          transform: 'translate3d(0, 0, 0)'
        }}
      />
    </motion.div>
  );
};

export default Project;
