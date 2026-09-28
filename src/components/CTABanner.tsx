import { Phone } from "lucide-react";
import { FadeInSection } from "./MotionWrappers";

export default function CTABanner() {
  return (
    <section id="contact" className="px-4 pb-10 sm:pb-16 sm:px-6 lg:px-8">
      <FadeInSection
        distance={24}
        duration={0.55}
        className="mx-auto flex max-w-6xl flex-col gap-6 rounded-2xl bg-primary px-5 py-6 text-white shadow-md sm:gap-8 sm:px-10 sm:py-10 lg:flex-row lg:items-center lg:justify-between"
      >
        <div className="max-w-xl h-auto">
          <p className="text-[11px] font-semibold tracking-[0.18em] text-white/80 sm:text-xs">
            EMERGENCY OR NEED GUIDANCE?
          </p>
          <h2 className="mt-2 text-xl font-bold leading-snug text-white sm:text-3xl sm:leading-normal">
            Speak directly with our clinical triage nurse
          </h2>
          <p className="mt-2 text-xs leading-relaxed text-white/85 sm:text-sm">
            Available 24 hours a day for urgent questions, referrals, and bed coordination.
          </p>
        </div>
        <div className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row sm:gap-3">
          <a
            href="tel:+18005550199"
            className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-primary shadow-sm transition-all duration-200 hover:bg-primary-light sm:w-auto"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            +1 (800) 555-0199
          </a>
          <a
            href="#home"
            className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full border border-white/70 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-primary-dark sm:w-auto"
          >
            Online Booking
          </a>
        </div>
      </FadeInSection>
    </section>
  );
}
