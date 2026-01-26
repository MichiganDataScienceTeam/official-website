"use client";
import { motion, useInView } from "framer-motion";
import { useRef, Children, isValidElement } from "react";

export default function StaggerContainer({
  children,
  staggerDelay = 0.1,
  initialDelay = 0,
  duration = 0.5,
  className = "",
  once = true,
  threshold = 0.1,
  direction = "up",
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });

  const directionOffsets = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
    none: { y: 0, x: 0 },
  };

  const offset = directionOffsets[direction] || directionOffsets.up;

  return (
    <div ref={ref} className={className}>
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) return child;

        return (
          <motion.div
            initial={{ opacity: 0, x: offset.x, y: offset.y }}
            animate={
              isInView
                ? { opacity: 1, x: 0, y: 0 }
                : { opacity: 0, x: offset.x, y: offset.y }
            }
            transition={{
              duration,
              delay: initialDelay + index * staggerDelay,
              ease: "easeOut",
            }}
          >
            {child}
          </motion.div>
        );
      })}
    </div>
  );
}
