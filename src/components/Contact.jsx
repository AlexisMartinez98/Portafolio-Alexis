import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const Contact = () => {
  const { t } = useTranslation();
  const theme = useSelector((state) => state.theme);

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/AlexisMartinez98",
      icon: (
        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5  -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4  -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6  -.6 1.2 -.5 2v3.5" />
      ),
      hoverColor: "blue-500"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/alexismartinez98/",
      icon: (
        <>
          <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
          <path d="M8 11l0 5" />
          <path d="M8 8l0 .01" />
          <path d="M12 16l0 -5" />
          <path d="M16 16v-3a2 2 0 0 0 -4 0" />
        </>
      ),
      hoverColor: "[#0077b5]"
    },
    {
      name: "Email",
      url: "mailto:as.alexismartinez@gmail.com",
      icon: (
        <>
          <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
          <path d="M3 7l9 6l9 -6" />
        </>
      ),
      hoverColor: "[#d93025]"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      id="contact"
      className={`flex justify-center items-center flex-col my-10 ${
        theme === 'dark' ? 'text-white' : ''
      }`}
    >
      <div className="flex flex-col justify-center items-center">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:text-[2.2rem] text-[1.8rem] font-bold mt-6 relative"
        >
          {t('contact.title')}
          <motion.div
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-text-color"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.h2>

        <motion.h3
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-center mt-6 text-sm md:text-lg md:w-[50rem] max-w-full px-11 ${
            theme === 'dark' ? 'text-gray-300' : 'text-text-3'
          }`}
        >
          {t('contact.description')}
        </motion.h3>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex gap-5 mt-5 md:flex-row scale-125 md:scale-150"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="group relative">
                <motion.button
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg
                    className={`w-8 duration-200 hover:stroke-${social.hoverColor} ${
                      theme === 'dark' ? 'stroke-white' : 'stroke-current'
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {social.icon}
                  </svg>
                </motion.button>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>

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
    </motion.section>
  );
};

export default Contact;
