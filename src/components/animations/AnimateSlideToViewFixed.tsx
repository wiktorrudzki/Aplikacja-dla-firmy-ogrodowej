import React from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = React.PropsWithChildren & {
  isVisible: boolean;
  initialPosition: { x?: number; y?: number };
  elementPosition: {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  };
};

const AnimateSlideToViewFixed = ({
  isVisible,
  initialPosition,
  elementPosition,
  children,
}: Props) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="slideToViewElement"
          initial={{ opacity: 0, ...initialPosition }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, ...initialPosition }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{
            zIndex: 1000,
            position: "fixed",
            ...elementPosition,
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnimateSlideToViewFixed;
