"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Logo from "./Logo";
import { defaultEase } from "./MotionWrappers";

import { departments } from "../data/departments";

const featuredDepartmentSlugs = [
  "cardiology",
  "pediatrics",
  "emergency-care",
  "gynecology",
  "orthopedics",
];

const departmentLinks = featuredDepartmentSlugs
  .map((slug) => departments.find((d) => d.slug === slug))
  .filter((d): d is NonNullable<typeof d> => Boolean(d))
  .map((dept) => ({
    label: dept.name,
    href: `/departments/${dept.slug}`,
  }));

const hubLinks = [
  { label: "All Departments", href: "/departments" },
  { label: "Diagnostic Imaging", href: "/#services" },
  { label: "Senior Consultants", href: "/#doctors" },
  { label: "Book Appointment", href: "/#contact" },
];

export default function Footer() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.footer
      initial={shouldReduceMotion ? false : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: defaultEase }}
      className="border-t border-surface-alt bg-white px-4 pt-10 pb-8 sm:px-6 sm:pt-16 lg:px-8"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-xs leading-relaxed text-muted sm:mt-4 sm:text-sm">
            Comprehensive, patient-first medical care with specialists and advanced diagnostics under one roof.
          </p>
        </div>

        <div>
          <h2 className="text-xs font-bold tracking-wide text-ink sm:text-sm">DEPARTMENTS</h2>
          <ul className="mt-2.5 space-y-1.5 sm:mt-4 sm:space-y-2">
            {departmentLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs text-muted transition-colors duration-200 hover:text-primary sm:text-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-bold tracking-wide text-ink sm:text-sm">CAREPLUS HUB</h2>
          <ul className="mt-2.5 space-y-1.5 sm:mt-4 sm:space-y-2">
            {hubLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs text-muted transition-colors duration-200 hover:text-primary sm:text-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-bold tracking-wide text-ink sm:text-sm">CENTRAL MEDICAL CAMPUS</h2>
          <address className="mt-2.5 space-y-1 text-xs not-italic leading-relaxed text-muted sm:mt-4 sm:space-y-2 sm:text-sm">
            <p>420 Riverside Healthcare Blvd</p>
            <p>Medical District, Suite 400</p>
            <p>New York, NY 10013</p>
            <p>
              Emergency line:{" "}
              <a href="tel:+18005550199" className="font-medium text-primary hover:text-primary-dark">
                +1 (800) 555-0199
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-6xl flex-col gap-2.5 border-t border-slate-100 pt-5 text-xs text-muted sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:pt-6">
        <p>© 2026 CarePlus Medical. All rights reserved.</p>
        <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Legal">
          <Link href="/privacy" className="transition-colors duration-200 hover:text-primary">
            Privacy Notice
          </Link>
          <Link href="/patient-rights" className="transition-colors duration-200 hover:text-primary">
            Patient Rights
          </Link>
          <Link href="/terms" className="transition-colors duration-200 hover:text-primary">
            Terms of Service
          </Link>
        </nav>
      </div>
    </motion.footer>
  );
}
