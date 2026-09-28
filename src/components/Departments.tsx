import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeInSection, AnimatedCard } from "./MotionWrappers";
import DepartmentCard from "./DepartmentCard";
import { departments } from "../data/departments";

export default function Departments() {
  const featuredDepartments = departments.slice(0, 3);

  return (
    <section id="departments" className="px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <FadeInSection className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-[0.22em] text-primary">SPECIALIST CARE</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-ink sm:text-4xl">Our Departments</h2>
          <p className="mt-2.5 text-sm text-muted sm:mt-3 sm:text-base">
            Comprehensive specialist care designed to meet every family health need.
          </p>
        </FadeInSection>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-12 sm:gap-6 md:grid-cols-3">
          {featuredDepartments.map((dept, index) => (
            <AnimatedCard key={dept.slug} delay={index * 0.1}>
              <DepartmentCard department={dept} index={index} cardDelay={index * 0.1} />
            </AnimatedCard>
          ))}
        </div>

        <div className="mt-8 text-center sm:mt-10">
          <Link
            href="/departments"
            className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full border border-primary/30 bg-primary-light/60 px-6 py-2.5 text-sm font-semibold text-primary transition-all duration-200 hover:bg-primary hover:text-white sm:w-auto sm:py-3"
          >
            <span>Explore All 8 Medical Departments</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
