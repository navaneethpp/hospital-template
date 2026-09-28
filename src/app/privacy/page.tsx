import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Privacy Notice | CarePlus Medical",
  description: "Learn about how CarePlus Medical protects your personal health information and privacy.",
};

export default function PrivacyPage() {
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
              <li className="font-semibold text-primary">Privacy Notice</li>
            </ol>
          </nav>

          <div className="rounded-3xl bg-white p-8 shadow-sm sm:p-12 border border-slate-100">
            <p className="text-xs font-bold tracking-[0.22em] text-primary">LEGAL & COMPLIANCE</p>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Privacy Notice
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              CarePlus Medical is committed to safeguarding patient confidentiality and maintaining compliance with all federal and state healthcare privacy laws (HIPAA).
            </p>
            <div className="mt-8 rounded-2xl bg-surface p-6 border border-slate-200/60">
              <p className="text-sm font-medium text-ink">
                Full policy document coming soon.
              </p>
              <p className="mt-1 text-xs text-muted">
                Our updated comprehensive privacy guidelines are currently undergoing periodic legal review and will be published shortly. For immediate privacy inquiries or records requests, please contact our compliance office at compliance@careplusmedical.org.
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
