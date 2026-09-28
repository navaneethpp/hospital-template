"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, ShieldCheck, Stethoscope } from "lucide-react";
import { Department } from "../data/departments";
import BookingCard from "./BookingCard";
import DepartmentIcon from "./DepartmentIcon";
import { FadeInSection, AnimatedCard } from "./MotionWrappers";

export default function DepartmentDetailView({ department }: { department: Department }) {
  const [selectedDoctor, setSelectedDoctor] = useState("");

  const handleBookWithDoctor = (doctorName: string) => {
    setSelectedDoctor(doctorName);
    const bookingElement = document.getElementById("dept-booking");
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <main className="pt-24 pb-16 sm:pt-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation & Back Link */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-muted">
              <li>
                <Link href="/" className="transition-colors hover:text-primary">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-slate-300">
                /
              </li>
              <li>
                <Link href="/departments" className="transition-colors hover:text-primary">
                  Departments
                </Link>
              </li>
              <li aria-hidden="true" className="text-slate-300">
                /
              </li>
              <li className="font-semibold text-primary">{department.name}</li>
            </ol>
          </nav>

          <Link
            href="/departments"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-colors hover:text-primary-dark"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            Back to All Departments
          </Link>
        </div>

        {/* Department Hero Section */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-surface to-surface-alt px-6 pb-8 pt-10 sm:px-10 lg:px-12 lg:pb-24 lg:pt-14">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 lg:pb-12">
            <div>
              {/* Eyebrow Badge */}
              <p className="inline-flex items-center gap-2 rounded-full bg-primary-light px-3.5 py-1.5 text-xs font-semibold text-primary">
                <DepartmentIcon name={department.icon} className="h-4 w-4" aria-hidden="true" />
                Specialist Department · CarePlus Medical
              </p>

              {/* Headline */}
              <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-[50px]">
                {department.name}
              </h1>

              {/* Tagline / Full Description */}
              <p className="mt-4 max-w-lg text-base leading-relaxed text-gray-600 sm:text-lg">
                {department.fullDescription}
              </p>

              {/* Highlighted "Why You Need This Department" Callout Card */}
              <div className="mt-6 rounded-2xl border border-primary/20 bg-white/90 p-4 shadow-sm backdrop-blur-sm sm:p-5">
                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
                    <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h2 className="text-sm font-bold text-ink">
                      When to Consult {department.name}
                    </h2>
                    <p className="mt-1 text-xs leading-relaxed text-gray-600 sm:text-sm">
                      {department.whyYouNeedIt}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Department Hero Image */}
            <div className="relative">
              <div className="relative aspect-[5/4] overflow-hidden rounded-2xl shadow-lift sm:aspect-[4/3] lg:aspect-[5/4]">
                <Image
                  src={department.heroImage}
                  alt={`${department.name} clinical suite and specialists`}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 540px"
                />
              </div>
            </div>
          </div>

          {/* Embedded Department-Locked Booking Card Widget */}
          <BookingCard
            id="dept-booking"
            initialDepartment={department.name}
            lockDepartment={true}
            doctorList={department.doctors.map((d) => d.name)}
            selectedDoctor={selectedDoctor}
          />
        </section>

        {/* Available Doctors Section */}
        <section className="mt-20">
          <FadeInSection className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold tracking-[0.22em] text-primary">
                DEPARTMENT FACULTY
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                Available Specialists in {department.name}
              </h2>
            </div>
            <p className="text-sm text-muted">
              Board-certified clinicians accepting new patient appointments
            </p>
          </FadeInSection>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {department.doctors.map((doctor, index) => (
              <AnimatedCard key={doctor.name} delay={index * 0.1}>
                <article className="flex flex-col gap-5 rounded-2xl border border-slate-100 bg-card p-6 shadow-md transition-all duration-200 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lift sm:flex-row sm:items-center">
                  <div className="relative h-44 w-full shrink-0 overflow-hidden rounded-xl sm:h-36 sm:w-36">
                    <Image
                      src={doctor.photo}
                      alt={doctor.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 100vw, 150px"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-ink">{doctor.name}</h3>
                      <p className="mt-1 text-sm font-medium text-primary">{doctor.title}</p>
                      <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
                        {doctor.experience}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <button
                        type="button"
                        onClick={() => handleBookWithDoctor(doctor.name)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-colors hover:text-primary-dark"
                      >
                        <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Book with {doctor.name.split(" ")[1] || doctor.name}</span>
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </article>
              </AnimatedCard>
            ))}
          </div>
        </section>

        {/* Related Clinical Services Section */}
        {department.relatedServices && department.relatedServices.length > 0 ? (
          <section className="mt-20">
            <FadeInSection>
              <p className="text-xs font-bold tracking-[0.22em] text-primary">
                CLINICAL CAPABILITIES
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                Diagnostic & Treatment Services
              </h2>
            </FadeInSection>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {department.relatedServices.map((service, index) => (
                <AnimatedCard key={service.title} delay={index * 0.1}>
                  <div className="flex h-full flex-col justify-between rounded-2xl border border-slate-100 bg-card p-6 shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-lift">
                    <div>
                      <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-light text-primary">
                        <Stethoscope className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <h3 className="text-base font-bold text-ink">{service.title}</h3>
                      <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </main>
  );
}
