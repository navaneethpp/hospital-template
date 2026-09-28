import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FadeInSection, AnimatedCard } from "./MotionWrappers";

const doctors = [
  {
    name: "Dr. Michael Adams",
    specialty: "Chief Cardiologist",
    credential: "Interventional cardiology · 18 years",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80",
    alt: "Portrait of Dr. Michael Adams, chief cardiologist",
  },
  {
    name: "Dr. Sarah Chen",
    specialty: "Medical Pediatrics",
    credential: "Neonatal and childhood development care",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
    alt: "Portrait of Dr. Sarah Chen, pediatric consultant",
  },
  {
    name: "Dr. Rajesh Patel",
    specialty: "Medical Radiology",
    credential: "Advanced diagnostic imaging specialist",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
    alt: "Portrait of Dr. Rajesh Patel, radiology consultant",
  },
  {
    name: "Dr. Emily Taylor",
    specialty: "Internal Medicine",
    credential: "Preventive care and chronic disease management",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=80",
    alt: "Portrait of Dr. Emily Taylor, internal medicine consultant",
  },
];

export default function DoctorsSection() {
  return (
    <section id="doctors" className="px-4 py-10 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <FadeInSection className="flex flex-row items-end justify-between gap-3">
          <div>
            <p className="text-[11px] font-bold tracking-[0.22em] text-primary sm:text-xs">MEET OUR TEAM</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-ink sm:mt-2 sm:text-4xl">
              Senior Medical Consultants
            </h2>
          </div>
          <a
            href="#doctors"
            className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-primary transition-colors duration-200 hover:text-primary-dark sm:text-sm"
          >
            <span>View all <span className="hidden sm:inline">120+ doctors</span></span>
            <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
          </a>
        </FadeInSection>

        <div className="mt-8 grid grid-cols-2 gap-3.5 sm:mt-10 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {doctors.map((doctor, index) => (
            <AnimatedCard
              key={doctor.name}
              delay={index * 0.08}
              className="text-left"
            >
              <article>
                <div className="relative mb-2.5 aspect-[4/5] overflow-hidden rounded-xl sm:mb-4">
                  <Image
                    src={doctor.image}
                    alt={doctor.alt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <h3 className="text-sm font-bold text-ink sm:text-base">{doctor.name}</h3>
                <p className="mt-0.5 text-xs font-medium text-primary sm:mt-1 sm:text-sm">{doctor.specialty}</p>
                <p className="mt-0.5 text-[11px] leading-snug text-muted line-clamp-2 sm:mt-1 sm:text-sm">{doctor.credential}</p>
              </article>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
