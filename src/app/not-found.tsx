import Link from "next/link";
import { ArrowRight, Home, Stethoscope } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-surface flex flex-col justify-between">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 pt-24 pb-16 sm:pt-28">
        <div className="mx-auto w-full max-w-xl text-center">
          <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm sm:p-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-light px-3.5 py-1.5 text-xs font-semibold text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
              404 · Navigation Notice
            </span>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Page Not Found
            </h1>

            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              The clinical department, doctor profile, or medical resource you are looking for may have been moved or does not exist.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primary-dark"
              >
                <Home className="h-4 w-4" aria-hidden="true" />
                <span>Return Home</span>
              </Link>
              <Link
                href="/departments"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-primary/30 bg-primary-light/60 px-6 py-2.5 text-sm font-semibold text-primary transition-all duration-200 hover:bg-primary hover:text-white"
              >
                <Stethoscope className="h-4 w-4" aria-hidden="true" />
                <span>Browse Departments</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
