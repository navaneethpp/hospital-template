import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Patient Rights & Responsibilities | CarePlus Medical",
  description: "Understand your rights, protections, and responsibilities as a patient at CarePlus Medical.",
};

export default function PatientRightsPage() {
  return (
    <div className="min-h-screen bg-surface">
      <Header />
      <main className="pt-24 pb-16 sm:pt-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
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
              <li className="font-semibold text-primary">Patient Rights</li>
            </ol>
          </nav>

          <div className="rounded-3xl bg-white p-8 shadow-sm sm:p-12 border border-slate-100">
            <p className="text-xs font-bold tracking-[0.22em] text-primary">PATIENT ADVOCACY</p>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Patient Rights & Responsibilities
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              Every patient at CarePlus Medical has the right to considerate, respectful, and nondiscriminatory care delivered by skilled clinicians.
            </p>
            <div className="mt-8 rounded-2xl bg-surface p-6 border border-slate-200/60">
              <p className="text-sm font-medium text-ink">
                Detailed statement coming soon.
              </p>
              <p className="mt-1 text-xs text-muted">
                Our complete patient rights charter, including translation services, grievance procedures, and billing dispute processes, will be published here. Please speak with our clinical triage or patient relation desk for any immediate assistance.
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary-dark"
              >
                Return Home
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
