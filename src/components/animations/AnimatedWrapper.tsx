"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { ReactNode, useEffect, useRef } from "react";

interface AnimatedWrapperProps {
  children: ReactNode;
  from: "left" | "right";
}

const AnimatedWrapper: React.FC<AnimatedWrapperProps> = ({
  children,
  from,
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: { opacity: 0, x: from === "left" ? "-100%" : "100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "linear" },
    },
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      className="w-full h-full"
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedWrapper;
