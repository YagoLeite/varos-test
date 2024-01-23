"use client";
import React, { useState, useRef, MouseEvent } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

const circleVariants: Variants = {
  initial: { scale: 1 },
  animate: {
    scale: 40,
    transition: {
      duration: 0.4,
      type: "easeOut",
    },
  },
  exit: {
    scale: 0,
    transition: {
      duration: 0.4,
      type: "easeIn",
    },
  },
};

const CircleFillButton: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <motion.div
      ref={buttonRef}
      className="relative mt-[8px] bg-greenHero flex items-center gap-[10px] justify-center w-[263px] h-[56px] rounded-[48px]  cursor-pointer overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
      whileHover={{ gap: "15px" }}
      whileTap={{ scale: 0.9 }}
    >
      <AnimatePresence>
        {isHovering && (
          <motion.div
            variants={circleVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{
              position: "absolute",
              left: `${mousePosition.x - 7.5}px`,
              top: `${mousePosition.y - 7.5}px`,
              width: "15px",
              height: "15px",
              borderRadius: "50%",
              backgroundColor: "rgb(5 115 33)",
              pointerEvents: "none",
            }}
          />
        )}
      </AnimatePresence>
      <p className="text-lg z-10 text-greenHero">Comprar agora</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="z-10"
      >
        <path
          d="M14 4L12.9 5.1L18.9 11.2H2V12.8H18.9L12.9 18.9L14 20L22 12L14 4Z"
          fill="#00F700"
        />
      </svg>
    </motion.div>
  );
};

export default CircleFillButton;
