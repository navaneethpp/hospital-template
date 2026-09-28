"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import DepartmentIconBadge from "./DepartmentIconBadge";
import { Department } from "../data/departments";

export interface DepartmentCardProps {
  department: Department;
  showWhyNeed?: boolean;
  index?: number;
  cardDelay?: number;
}

export default function DepartmentCard({
  department,
  showWhyNeed = true,
  index,
  cardDelay,
}: DepartmentCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const baseDelay = cardDelay ?? (index !== undefined ? index * 0.08 : 0);
  const badgeDelay = baseDelay + 0.1;
  const rotation = index !== undefined && index % 2 === 1 ? -3 : 3;

  return (
    <Link
      href={`/departments/${department.slug}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      className="group flex h-full cursor-pointer flex-col justify-between rounded-2xl border border-slate-100 bg-card p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lift focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:p-7 sm:shadow-md"
      aria-label={`View details for ${department.name}`}
    >
      <div>
        <DepartmentIconBadge
          iconName={department.icon}
          isHovered={isHovered}
          delay={badgeDelay}
          rotation={rotation}
        />
        <h3 className="text-lg font-bold tracking-tight text-ink transition-colors duration-200 group-hover:text-primary sm:text-xl">
          {department.name}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted sm:mt-2.5">
          {department.shortDescription}
        </p>

        {showWhyNeed && department.whyYouNeedIt ? (
          <div className="mt-3.5 rounded-xl bg-surface/80 p-2.5 text-xs leading-relaxed text-gray-700 sm:mt-4 sm:p-3">
            <span className="font-semibold text-primary">When to visit: </span>
            <span className="line-clamp-2">{department.whyYouNeedIt}</span>
          </div>
        ) : null}
      </div>

      <div className="mt-4 border-t border-slate-100 pt-3 sm:mt-6 sm:pt-4">
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors duration-200 group-hover:text-primary-dark">
          <span>Learn More</span>
          <ArrowRight
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}
