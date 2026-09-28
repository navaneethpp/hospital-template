"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Logo from "./Logo";
import BookButton from "./BookButton";
import DepartmentsDropdown, { previewDepartments } from "./DepartmentsDropdown";
import DepartmentIcon from "./DepartmentIcon";
import { defaultEase } from "./MotionWrappers";

const navItems = [
  { href: "/#home", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/departments", label: "Departments" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const closeMobileMenu = () => {
    setOpen(false);
    setOpenSection(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={shouldReduceMotion ? false : { opacity: 0, y: -12, x: "-50%" }}
      animate={shouldReduceMotion ? { x: "-50%" } : { opacity: 1, y: 0, x: "-50%" }}
      transition={{ duration: 0.3, ease: defaultEase }}
      className={`fixed left-1/2 top-2 z-50 w-[calc(100%-1.25rem)] max-w-6xl border transition-all duration-300 ease-in-out sm:w-[calc(100%-2rem)] md:top-3 ${
        open
          ? "rounded-2xl border-white/60 bg-white/95 shadow-2xl shadow-slate-900/10 backdrop-blur-2xl"
          : scrolled
          ? "rounded-2xl md:rounded-full border-white/60 bg-white/85 shadow-lg shadow-black/5 backdrop-blur-xl"
          : "rounded-2xl md:rounded-full border-white/40 bg-white/70 shadow-lg shadow-black/5 backdrop-blur-lg"
      }`}
    >
      <div
        className={`mx-auto flex items-center justify-between gap-2 px-3 sm:px-6 lg:px-8 transition-all duration-300 ease-in-out ${
          scrolled ? "py-1.5 sm:py-2.5" : "py-2 sm:py-3.5"
        }`}
      >
        <Logo />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navItems.map((item) =>
            item.label === "Departments" ? (
              <DepartmentsDropdown key={item.href} />
            ) : (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-primary"
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        <div className="flex items-center gap-2">
          {/* Mobile compact 'Book' button */}
          <div className="md:hidden">
            <BookButton size="sm">Book</BookButton>
          </div>

          {/* Desktop full 'Book Appointment' button */}
          <div className="hidden md:block">
            <BookButton>Book Appointment</BookButton>
          </div>

          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-ink transition-colors duration-200 hover:bg-black/5 sm:h-10 sm:w-10 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() =>
              setOpen((v) => {
                if (v) setOpenSection(null);
                return !v;
              })
            }
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-slate-100/90 px-4 py-4 md:hidden"
        >
          <nav className="flex flex-col gap-1.5" aria-label="Mobile">
            {navItems.map((item) =>
              item.label === "Departments" ? (
                <div key={item.href} className="flex flex-col">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenSection((cur) =>
                        cur === "departments" ? null : "departments"
                      )
                    }
                    aria-expanded={openSection === "departments"}
                    aria-controls="mobile-departments-submenu"
                    className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm font-medium text-gray-700 transition-colors duration-200 hover:bg-black/5 hover:text-primary"
                  >
                    <span>Departments</span>
                    <ChevronDown
                      className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${
                        openSection === "departments" ? "rotate-180 text-primary" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {openSection === "departments" && (
                      <motion.div
                        id="mobile-departments-submenu"
                        initial={
                          shouldReduceMotion
                            ? { opacity: 0 }
                            : { height: 0, opacity: 0 }
                        }
                        animate={
                          shouldReduceMotion
                            ? { opacity: 1 }
                            : { height: "auto", opacity: 1 }
                        }
                        exit={
                          shouldReduceMotion
                            ? { opacity: 0 }
                            : { height: 0, opacity: 0 }
                        }
                        transition={{ duration: 0.25, ease: defaultEase }}
                        className="overflow-hidden"
                      >
                        <div className="my-1.5 ml-3 flex flex-col gap-1 border-l border-slate-200 pl-3">
                          {previewDepartments.map((dept) => (
                            <Link
                              key={dept.slug}
                              href={`/departments/${dept.slug}`}
                              onClick={closeMobileMenu}
                              className="flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-sm text-gray-600 transition-colors duration-150 hover:bg-primary-light/60 hover:text-primary"
                            >
                              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-primary-light text-primary">
                                <DepartmentIcon
                                  name={dept.icon}
                                  className="h-3.5 w-3.5"
                                  aria-hidden="true"
                                />
                              </span>
                              <span className="truncate">{dept.name}</span>
                            </Link>
                          ))}

                          <Link
                            href="/departments"
                            onClick={closeMobileMenu}
                            className="mt-1 flex items-center justify-between rounded-lg px-2.5 py-1.5 text-xs font-semibold text-primary transition-colors duration-150 hover:bg-primary-light/60 hover:text-primary-dark"
                          >
                            <span>View All Departments</span>
                            <ArrowRight
                              className="h-3.5 w-3.5"
                              aria-hidden="true"
                            />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:bg-black/5 hover:text-primary"
                >
                  {item.label}
                </a>
              )
            )}
            <BookButton className="mt-2 w-full">Book Appointment</BookButton>
          </nav>
        </div>
      ) : null}
    </motion.header>
  );
}
