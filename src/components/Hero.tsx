"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import BookingCard from "./BookingCard";
import { defaultEase } from "./MotionWrappers";

function Stars() {
  return (
    <span className="flex items-center gap-0.5 text-amber-400" aria-label="4.9 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-current" aria-hidden="true">
          <path d="M10 1.6l2.2 4.6 5.1.7-3.7 3.6.9 5.1L10 13.2 5.5 15.6l.9-5.1L2.7 6.9l5.1-.7L10 1.6z" />
        </svg>
      ))}
    </span>
  );
}

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const getTransition = (delay: number, duration = 0.5) => ({
    duration,
    delay: shouldReduceMotion ? 0 : delay,
    ease: defaultEase,
  });

  return (
    <section id="home" className="px-3 pt-2 sm:px-6 sm:pt-6 lg:px-8">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl bg-gradient-to-br from-surface to-surface-alt p-4 pt-6 sm:rounded-3xl sm:px-10 sm:pb-8 sm:pt-10 lg:px-12 lg:pb-24 lg:pt-14">
        <div className="grid items-center gap-5 sm:gap-10 lg:grid-cols-2 lg:gap-12 lg:pb-12">
          <div>
            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={getTransition(0.1, 0.45)}
              className="inline-flex items-center gap-1.5 rounded-full bg-primary-light px-3 py-1 text-[11px] font-semibold text-primary sm:gap-2 sm:px-3.5 sm:py-1.5 sm:text-xs"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
              24/7 Premium Healthcare & Urgent Care
            </motion.p>
            <motion.h1
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={getTransition(0.2, 0.5)}
              className="mt-3.5 text-3xl font-extrabold leading-[1.12] tracking-tight text-ink sm:mt-5 sm:text-5xl lg:text-[56px]"
            >
              Your Health,
              <br />
              <span className="text-primary">Our Priority</span>
            </motion.h1>
            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={getTransition(0.3, 0.5)}
              className="mt-3 text-sm leading-relaxed text-gray-600 sm:mt-5 sm:max-w-md sm:text-lg"
            >
              Compassionate Care for You and Your Family with world-class medical specialists and advanced diagnostics.
            </motion.p>
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={getTransition(0.4, 0.45)}
              className="mt-3.5 flex flex-wrap items-center gap-1.5 text-xs text-muted sm:mt-6 sm:gap-2 sm:text-sm"
            >
              <Stars />
              <span className="font-semibold text-ink">4.9/5</span>
              <span>patient satisfaction · Joint Commission accredited</span>
            </motion.div>
          </div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={getTransition(0.2, 0.55)}
            className="relative"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl shadow-sm sm:aspect-[4/3] sm:rounded-2xl sm:shadow-lift lg:aspect-[5/4]">
              <Image
                src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=1400&q=80"
                alt="Physician reviewing a tablet with a patient during a consultation"
                fill
                priority
                className="object-cover object-[center_20%]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 540px"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={getTransition(0.5, 0.55)}
        >
          <BookingCard />
        </motion.div>
      </div>
    </section>
  );
}
