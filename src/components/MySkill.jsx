import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import ButtonSkills from "./common/ButtonSkills";
import skills from "../utils/skill";

const MySkill = () => {
  const { t } = useTranslation();
  const theme = useSelector((state) => state.theme);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
      className={`flex justify-center items-center flex-col mt-4 mx-4 ${
        theme === 'dark' ? 'text-white' : ''
      }`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          type: "spring",
          stiffness: 100
        }}
      >
        <h4 className="md:text-[2.2rem] text-[1.8rem] font-bold relative">
          {t('skills.title')}
          <motion.div
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-text-color"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </h4>
      </motion.div>

      <motion.div
        variants={container}
        className="grid grid-cols-4 md:grid-cols-8 gap-4 mt-8 md:mt-12"
      >
        {skills?.map(({ nameSkill, urlImg }, index) => (
          <motion.div
            key={nameSkill}
            variants={item}
            whileHover={{ 
              scale: 1.1,
              rotate: [0, -5, 5, -5, 0],
              transition: { duration: 0.3 }
            }}
          >
            <ButtonSkills
              urlImg={urlImg}
              nameSkill={nameSkill}
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(circle at 20% 20%, rgba(120, 67, 233, 0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 80%, rgba(120, 67, 233, 0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 20%, rgba(120, 67, 233, 0.05) 0%, transparent 50%)"
          ]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
    </motion.div>
  );
};

export default MySkill;
