import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CTABanner from "../../components/CTABanner";
import DepartmentCard from "../../components/DepartmentCard";
import { FadeInSection, AnimatedCard } from "../../components/MotionWrappers";
import { departments } from "../../data/departments";

export const metadata: Metadata = {
  title: "Specialized Medical Departments | CarePlus Medical",
  description:
    "Explore our 8 specialized medical departments with world-class physicians, modern diagnostic suites, and compassionate patient care.",
};

export default function DepartmentsPage() {
  return (
    <div className="min-h-screen bg-surface">
      <Header />
      <main className="pt-24 pb-16 sm:pt-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-muted">
              <li>
                <Link href="/" className="transition-colors hover:text-primary">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-slate-300">
                /
              </li>
              <li className="font-semibold text-primary">Departments</li>
            </ol>
          </nav>

          {/* Centered Page Hero */}
          <FadeInSection className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold tracking-[0.22em] text-primary">
              CLINICAL EXCELLENCE
            </p>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
              Our Departments
            </h1>
            <p className="mt-4 text-base text-muted sm:text-lg">
              Comprehensive specialist care across every stage of life, backed by accredited
              fellowship-trained clinicians and advanced diagnostic technologies.
            </p>
          </FadeInSection>

          {/* Departments Grid: 3 cols desktop, 2 cols tablet, 1 col mobile */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map((dept, index) => (
              <AnimatedCard key={dept.slug} delay={index * 0.07}>
                <DepartmentCard
                  department={dept}
                  showWhyNeed={true}
                  index={index}
                  cardDelay={index * 0.07}
                />
              </AnimatedCard>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner for Conversion Consistency */}
        <div className="mt-20">
          <CTABanner />
        </div>
      </main>
      <Footer />
    </div>
  );
}
