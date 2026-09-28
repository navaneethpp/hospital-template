"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { defaultEase } from "./MotionWrappers";

interface StatItem {
  target: number;
  suffix: string;
  decimals: number;
  label: string;
  displayFallback: string;
}

const stats: StatItem[] = [
  { target: 25, suffix: "+", decimals: 0, label: "Years of Excellence", displayFallback: "25+" },
  { target: 120, suffix: "+", decimals: 0, label: "Medical Specialists", displayFallback: "120+" },
  { target: 99.4, suffix: "%", decimals: 1, label: "Patient Satisfaction", displayFallback: "99.4%" },
  { target: 24, suffix: "/7", decimals: 0, label: "Immediate Critical Care", displayFallback: "24/7" },
];

function StatCounter({
  item,
  triggerAnimation,
  shouldReduceMotion,
}: {
  item: StatItem;
  triggerAnimation: boolean;
  shouldReduceMotion: boolean | null;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!triggerAnimation || shouldReduceMotion) {
      return;
    }

    let startTimestamp: number | null = null;
    let animationFrameId: number;
    const duration = 1000; // 1 second duration, under 1.2s limit

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Gentle ease-out cubic curve
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setValue(item.target * easeProgress);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setValue(item.target);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [triggerAnimation, shouldReduceMotion, item.target]);

  const formattedValue =
    shouldReduceMotion || !triggerAnimation
      ? item.displayFallback
      : item.decimals > 0
      ? `${value.toFixed(item.decimals)}${item.suffix}`
      : `${Math.round(value)}${item.suffix}`;

  return (
    <p className="text-2xl font-extrabold text-primary sm:text-4xl tabular-nums">
      {formattedValue}
    </p>
  );
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="px-4 pb-10 sm:pb-16 sm:px-6 lg:px-8">
      <motion.div
        ref={ref}
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: defaultEase }}
        className="mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-6 rounded-2xl bg-card px-4 py-7 shadow-sm sm:gap-8 sm:px-10 sm:py-10 sm:shadow-md lg:grid-cols-4"
      >
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <StatCounter
              item={stat}
              triggerAnimation={isInView}
              shouldReduceMotion={shouldReduceMotion}
            />
            <p className="mt-1.5 text-xs text-muted sm:mt-2 sm:text-sm">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
