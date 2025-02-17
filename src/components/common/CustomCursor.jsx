import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', mouseMove);

    const handleMouseOver = () => setCursorVariant('hover');
    const handleMouseOut = () => setCursorVariant('default');

    const elements = document.querySelectorAll('a, button, [role="button"]');
    elements.forEach(el => {
      el.addEventListener('mouseover', handleMouseOver);
      el.addEventListener('mouseout', handleMouseOut);
    });

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      elements.forEach(el => {
        el.removeEventListener('mouseover', handleMouseOver);
        el.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1
    },
    hover: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1.5
    }
  };

  if (typeof window === 'undefined' || 'ontouchstart' in window) {
    return null; // No mostrar el cursor personalizado en dispositivos táctiles
  }

  return (
    <>
      <motion.div
        className="cursor-dot"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "tween", duration: 0.1 }}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: 24,
          height: 24,
          backgroundColor: theme === 'dark' ? 'rgba(120, 67, 233, 0.3)' : 'rgba(120, 67, 233, 0.5)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: theme === 'dark' ? 'difference' : 'normal'
        }}
      />
      <motion.div
        className="cursor-ring"
        animate={{
          x: mousePosition.x - 36,
          y: mousePosition.y - 36,
        }}
        transition={{ type: "tween", duration: 0.15 }}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: 72,
          height: 72,
          border: theme === 'dark' 
            ? '2px solid rgba(120, 67, 233, 0.2)'
            : '2px solid rgba(120, 67, 233, 0.3)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          mixBlendMode: theme === 'dark' ? 'difference' : 'normal'
        }}
      />
    </>
  );
};

export default CustomCursor;
