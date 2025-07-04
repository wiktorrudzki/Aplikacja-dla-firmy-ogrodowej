import {
  KeyframeOptions,
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
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
  const formattedNumber = useTransform(count, (latest) =>
    formatNumber ? formatNumber(latest) : latest.toString(),
  );

  React.useEffect(() => {
    if (!elementRef.current || !inView) return;

    animate(count, to, {
      duration: shouldReduceMotion ? 0 : 1 + delay,
      ...animationOptions,
    });
  }, [animationOptions, count, delay, inView, shouldReduceMotion, to]);

  return <motion.span ref={elementRef}>{formattedNumber}</motion.span>;
};

export default AnimatedCounter;
