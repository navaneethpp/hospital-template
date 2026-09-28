"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import DepartmentIcon from "./DepartmentIcon";
import { departments } from "../data/departments";
import { defaultEase } from "./MotionWrappers";

// Curated 6 departments for the preview (shared across desktop and mobile)
export const previewDepartments = departments.slice(0, 6);

export default function DepartmentsDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const openTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    if (!isOpen) {
      openTimeoutRef.current = setTimeout(() => {
        setIsOpen(true);
      }, 100);
    }
  };

  const handleMouseLeave = () => {
    if (openTimeoutRef.current) {
      clearTimeout(openTimeoutRef.current);
      openTimeoutRef.current = null;
    }
    if (isOpen) {
      closeTimeoutRef.current = setTimeout(() => {
        setIsOpen(false);
      }, 150);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") {
      setIsOpen(false);
      const button = containerRef.current?.querySelector<HTMLAnchorElement>("#departments-nav-link");
      button?.focus();
    }
  };

  const handleBlur = () => {
    // Delay check so document.activeElement has updated to the next focused child
    setTimeout(() => {
      if (!containerRef.current?.contains(document.activeElement)) {
        setIsOpen(false);
      }
    }, 50);
  };

  useEffect(() => {
    return () => {
      if (openTimeoutRef.current) clearTimeout(openTimeoutRef.current);
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
    >
      <Link
        id="departments-nav-link"
        href="/departments"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls="departments-dropdown-menu"
        onFocus={() => setIsOpen(true)}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:text-primary"
      >
        <span>Departments</span>
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-primary" : "text-gray-400"
          }`}
          aria-hidden="true"
        />
      </Link>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="departments-dropdown-menu"
            role="menu"
            aria-labelledby="departments-nav-link"
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, scale: 0.95, y: -8 }
            }
            animate={
              shouldReduceMotion
                ? { opacity: 1 }
                : { opacity: 1, scale: 1, y: 0 }
            }
            exit={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, scale: 0.98, y: -4 }
            }
            transition={
              shouldReduceMotion
                ? { duration: 0.15 }
                : { duration: 0.2, ease: defaultEase }
            }
            className="absolute left-1/2 top-full z-50 mt-3 w-80 -translate-x-1/2 rounded-2xl border border-white/60 bg-white/90 p-2.5 shadow-2xl shadow-slate-900/10 backdrop-blur-2xl"
          >
            {/* Invisible hover bridge to prevent premature closing when moving cursor across gap */}
            <div
              className="absolute -top-3.5 left-0 right-0 h-3.5"
              aria-hidden="true"
            />

            <div className="flex flex-col gap-1">
              {previewDepartments.map((dept) => (
                <Link
                  key={dept.slug}
                  href={`/departments/${dept.slug}`}
                  role="menuitem"
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-ink transition-colors duration-150 hover:bg-primary-light/70 hover:text-primary focus:bg-primary-light/70 focus:text-primary focus:outline-none"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary transition-colors duration-150 group-hover:bg-primary group-hover:text-white group-focus:bg-primary group-focus:text-white">
                    <DepartmentIcon
                      name={dept.icon}
                      className="h-4 w-4"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="truncate">{dept.name}</span>
                </Link>
              ))}
            </div>

            <div className="mt-2 border-t border-slate-100/90 pt-2">
              <Link
                href="/departments"
                role="menuitem"
                onClick={() => setIsOpen(false)}
                className="group flex items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold text-primary transition-colors duration-150 hover:bg-primary-light/70 hover:text-primary-dark focus:bg-primary-light/70 focus:text-primary-dark focus:outline-none"
              >
                <span>View All Departments</span>
                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
