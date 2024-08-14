"use client";

import { ReactNode, useEffect, useRef } from "react";

import { motion, useAnimation, useInView } from "framer-motion";

type RevealAnimationProps = {
  children: ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  duration?: number;
  directionY?: number;
};

export const RevealAnimation = ({
  children,
  width = "100%",
  delay = 0.2,
  duration = 0.5,
  directionY = 75
}: RevealAnimationProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: directionY },
        visible: { opacity: 1, y: 0 }
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration, delay }}
      ref={ref}
      className="relative overflow-hidden"
      style={{ width }}
    >
      {children}
    </motion.div>
  );
};
