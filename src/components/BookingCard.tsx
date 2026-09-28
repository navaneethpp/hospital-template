"use client";

import { FormEvent, useState } from "react";
import BookButton from "./BookButton";
import { departments as defaultDeptList } from "../data/departments";

export interface BookingCardProps {
  initialDepartment?: string;
  lockDepartment?: boolean;
  doctorList?: string[];
  selectedDoctor?: string;
  id?: string;
}

export default function BookingCard({
  initialDepartment = "",
  lockDepartment = false,
  doctorList,
  selectedDoctor = "",
  id = "quick-booking",
}: BookingCardProps) {
  const [selectedDeptOverride, setSelectedDeptOverride] = useState<string | null>(null);
  const [selectedDocOverride, setSelectedDocOverride] = useState<string | null>(null);
  const [date, setDate] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Derive department and doctor without triggering cascading renders via effects
  const department = selectedDeptOverride !== null ? selectedDeptOverride : initialDepartment;
  const doctor = selectedDocOverride !== null ? selectedDocOverride : selectedDoctor;

  const availableDoctors =
    doctorList && doctorList.length > 0
      ? doctorList
      : [
          "Dr. Michael Adams",
          "Dr. Sarah Chen",
          "Dr. Rajesh Patel",
          "Dr. Emily Taylor",
        ];

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!department || !doctor || !date) return;
    setSubmitted(true);
  }

  return (
    <form
      id={id}
      onSubmit={onSubmit}
      className="relative z-10 mt-4 grid grid-cols-1 gap-2.5 rounded-2xl bg-white p-3.5 shadow-md sm:mt-6 sm:gap-3 sm:p-5 md:grid-cols-2 lg:absolute lg:bottom-6 lg:left-8 lg:right-8 lg:mt-0 lg:grid-cols-4 lg:items-center lg:shadow-lg"
      aria-label="Quick appointment booking"
    >
      {/* 1. Department Selection */}
      <div className="w-full min-w-0">
        <label className="block w-full min-w-0">
          <span className="sr-only">Department</span>
          {lockDepartment ? (
            <div className="flex h-11 sm:h-12 w-full min-w-0 items-center justify-between gap-2 rounded-xl border border-slate-200 bg-surface px-3 text-sm font-semibold text-primary">
              <span
                className="min-w-0 truncate text-left"
                title={department || initialDepartment}
              >
                {department || initialDepartment}
              </span>
              <span className="flex-shrink-0 shrink-0 whitespace-nowrap rounded bg-primary-light px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                Selected
              </span>
              <input
                type="hidden"
                name="department"
                value={department || initialDepartment}
              />
            </div>
          ) : (
            <select
              value={department}
              onChange={(e) => setSelectedDeptOverride(e.target.value)}
              required
              className="h-11 sm:h-12 w-full min-w-0 truncate rounded-xl border border-slate-200 bg-white px-3 text-sm text-ink outline-none transition-colors duration-200 focus:border-primary"
            >
              <option value="">Select Department</option>
              {defaultDeptList.map((item) => (
                <option key={item.slug} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          )}
        </label>
      </div>

      {/* 2. Doctor Selection */}
      <div className="w-full min-w-0">
        <label className="block w-full min-w-0">
          <span className="sr-only">Doctor</span>
          <select
            value={doctor}
            onChange={(e) => setSelectedDocOverride(e.target.value)}
            required
            className="h-11 sm:h-12 w-full min-w-0 truncate rounded-xl border border-slate-200 bg-white px-3 text-sm text-ink outline-none transition-colors duration-200 focus:border-primary"
          >
            <option value="">Select Doctor</option>
            {availableDoctors.map((docName) => (
              <option key={docName} value={docName}>
                {docName}
              </option>
            ))}
          </select>
        </label>
      </div>

      {/* 3. Date Picker */}
      <div className="w-full min-w-0">
        <label className="block w-full min-w-0">
          <span className="sr-only">Date</span>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="h-11 sm:h-12 w-full min-w-0 rounded-xl border border-slate-200 bg-white px-3 text-sm text-ink outline-none transition-colors duration-200 focus:border-primary"
          />
        </label>
      </div>

      {/* 4. Submit Button */}
      <div className="w-full min-w-0">
        <BookButton
          type="submit"
          showArrow
          className="h-11 sm:h-12 w-full !rounded-xl px-5 text-sm font-semibold whitespace-nowrap"
        >
          Book Now
        </BookButton>
      </div>

      {/* Confirmation Banner */}
      {submitted ? (
        <p
          className="col-span-1 rounded-lg bg-primary-light/80 p-2.5 text-center text-sm font-semibold text-primary sm:col-span-2 lg:col-span-4"
          role="status"
        >
          ✓ Appointment requested with {doctor}. Our clinical team will confirm your visit shortly.
        </p>
      ) : null}
    </form>
  );
}
