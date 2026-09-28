"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

export const defaultEase = [0.25, 0.1, 0.25, 1] as const;

export interface FadeInSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "none";
  distance?: number;
  amount?: number | "some" | "all";
  once?: boolean;
  scale?: number;
}

export function FadeInSection({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  direction = "up",
  distance = 20,
  amount = 0.2,
  once = true,
  scale,
}: FadeInSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const yOffset =
    direction === "up" ? distance : direction === "down" ? -distance : 0;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: yOffset,
        ...(scale ? { scale } : {}),
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        ...(scale ? { scale: 1 } : {}),
      }}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: defaultEase,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
  amount?: number | "some" | "all";
  once?: boolean;
}

export function AnimatedCard({
  children,
  className = "",
  delay = 0,
  duration = 0.45,
  distance = 22,
  amount = 0.2,
  once = true,
}: AnimatedCardProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: defaultEase,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
