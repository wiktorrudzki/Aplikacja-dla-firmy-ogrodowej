import {
  KeyframeOptions,
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import React from "react";

type Props = {
  from: number;
  to: number;
  formatNumber?: (value: number) => string;
  delay?: number;
  animationOptions?: KeyframeOptions;
};

const AnimatedCounter = ({
  from,
  to,
  formatNumber,
  delay = 0,
  animationOptions,
}: Props) => {
  const elementRef = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(elementRef, { once: true });
  const shouldReduceMotion = useReducedMotion();
  const count = useMotionValue(from);
  const [currentValue, setCurrentValue] = React.useState(from);

  React.useEffect(() => {
    const unsubscribe = count.on("change", (v) => setCurrentValue(v));
    return () => unsubscribe();
  }, [count]);

  React.useEffect(() => {
    if (!elementRef.current || !inView) return;

    const controls = animate(count, to, {
      duration: shouldReduceMotion ? 0 : 1 + delay,
      ...animationOptions,
    });

    return () => controls.stop();
  }, [animationOptions, count, delay, inView, shouldReduceMotion, to]);

  return (
    <motion.span ref={elementRef}>
      {formatNumber ? formatNumber(currentValue) : currentValue}
    </motion.span>
  );
};

export default AnimatedCounter;
