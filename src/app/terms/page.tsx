import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | CarePlus Medical",
  description: "Terms and conditions governing the use of CarePlus Medical web services and patient portals.",
};

export default function TermsPage() {
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
              <li className="font-semibold text-primary">Terms of Service</li>
            </ol>
          </nav>

          <div className="rounded-3xl bg-white p-8 shadow-sm sm:p-12 border border-slate-100">
            <p className="text-xs font-bold tracking-[0.22em] text-primary">LEGAL AGREEMENT</p>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Terms of Service
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              These terms govern your access to CarePlus Medical informational websites, appointment request tools, and affiliated patient services.
            </p>
            <div className="mt-8 rounded-2xl bg-surface p-6 border border-slate-200/60">
              <p className="text-sm font-medium text-ink">
                Terms documentation coming soon.
              </p>
              <p className="mt-1 text-xs text-muted">
                Our complete legal terms of service are currently being formalized for our upcoming digital portal release. By accessing our appointment scheduling features, you acknowledge that online requests do not substitute for emergency 911 intervention.
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
