"use client";

import { motion, useReducedMotion } from "framer-motion";
import DepartmentIcon from "./DepartmentIcon";

export interface DepartmentIconBadgeProps {
  iconName: string;
  isHovered?: boolean;
  delay?: number;
  rotation?: number;
  className?: string;
  iconClassName?: string;
}

/**
 * Shared Department Icon Badge component
 * - Entrance: delayed pop-in relative to card (scale 0.8 -> 1 with soft spring, ~100ms offset)
 * - Card Hover: icon scale bump (1.1) and subtle rotate (2-4 deg, duration ~200ms, ease-out)
 * - Background transition: light teal (bg-primary-light) to deeper teal (group-hover:bg-primary-muted)
 * - Fully respects prefers-reduced-motion
 */
export default function DepartmentIconBadge({
  iconName,
  isHovered = false,
  delay = 0.1,
  rotation = 3,
  className = "mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-light text-primary transition-colors duration-200 group-hover:bg-primary-muted",
  iconClassName = "h-7 w-7",
}: DepartmentIconBadgeProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.span
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.8 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={
        shouldReduceMotion
          ? { duration: 0.25 }
          : {
              type: "spring",
              stiffness: 300,
              damping: 20,
              delay,
            }
      }
      className={className}
    >
      <motion.span
        animate={
          shouldReduceMotion
            ? {}
            : isHovered
            ? { scale: 1.1, rotate: rotation }
            : { scale: 1, rotate: 0 }
        }
        whileHover={
          shouldReduceMotion
            ? {}
            : {
                scale: 1.1,
                rotate: rotation,
              }
        }
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="flex items-center justify-center"
      >
        <DepartmentIcon name={iconName} className={iconClassName} aria-hidden="true" />
      </motion.span>
    </motion.span>
  );
}
