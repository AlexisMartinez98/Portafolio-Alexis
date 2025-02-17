import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const Footer = () => {
  const { t } = useTranslation();
  const theme = useSelector((state) => state.theme);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`relative flex justify-center items-center my-3 md:text-md text-xs overflow-hidden ${
        theme === 'dark' ? 'text-gray-300' : ''
      }`}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(circle at 0% 100%, rgba(120, 67, 233, 0.03) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, rgba(120, 67, 233, 0.03) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 100%, rgba(120, 67, 233, 0.03) 0%, transparent 50%)"
          ]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      <motion.p
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400 }}
        className="relative z-10 flex items-center gap-2"
      >
        <span>&copy; 2025</span>
        <motion.span
          className="text-text-color font-semibold"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          Alexis Martinez
        </motion.span>
        <span>. {t('footer.rights')}</span>
      </motion.p>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-text-color to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1 }}
      />
    </motion.div>
  );
};

export default Footer;
