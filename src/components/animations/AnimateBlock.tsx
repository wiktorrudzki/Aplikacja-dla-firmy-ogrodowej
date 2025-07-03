import { motion, useInView, useReducedMotion } from "framer-motion";
import React, { useRef } from "react";

type Props = {
  children: React.ReactNode;
};

const AnimateSection = ({ children }: Props) => {
  const elementRef = useRef(null);
  const isInView = useInView(elementRef, { once: true });
  const shouldReduceMotion = useReducedMotion();
  const initialStyle = { opacity: 0, x: -80 };

  return (
    <motion.div
      ref={elementRef}
      initial={initialStyle}
      animate={isInView ? { opacity: 1, x: 0 } : initialStyle}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.8,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateSection;
