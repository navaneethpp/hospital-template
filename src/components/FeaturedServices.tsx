import Image from "next/image";
import { FadeInSection, AnimatedCard } from "./MotionWrappers";

const services = [
  {
    title: "Advanced Diagnostics",
    description: "High-precision MRI, CT, and lab services with same-day reporting.",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
    alt: "MRI scanner in a modern diagnostic imaging suite",
  },
  {
    title: "Specialized Surgeries",
    description: "Minimally invasive procedures led by board-certified surgical teams.",
    image:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80",
    alt: "Surgical team performing an operation in a hospital theatre",
  },
  {
    title: "Preventive Wellness",
    description: "Personalized annual health checks, nutrition, and lifestyle programs.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    alt: "Clinician discussing preventive health results with a patient",
  },
];

export default function FeaturedServices() {
  return (
    <section id="services" className="px-4 pb-10 sm:pb-20 lg:px-8 lg:pb-24">
      <div className="mx-auto max-w-6xl">
        <FadeInSection className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-4xl">
            Featured Services
          </h2>
          <p className="mt-2 text-sm text-muted sm:mt-3 sm:text-base">
            Equipped with leading-edge medical technologies for accurate treatment.
          </p>
        </FadeInSection>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-12 sm:gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <AnimatedCard
              key={service.title}
              delay={index * 0.1}
              className="overflow-hidden rounded-2xl bg-card shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lift sm:shadow-md"
            >
              <article>
                <div className="relative h-40 sm:h-48">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="rounded-t-2xl object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-base font-bold text-ink sm:text-lg">{service.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted sm:mt-2">{service.description}</p>
                </div>
              </article>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
