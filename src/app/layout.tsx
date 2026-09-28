import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CarePlus Medical | Compassionate Hospital Care",
  description:
    "CarePlus Medical delivers 24/7 premium healthcare, urgent care, and specialist treatment for your family.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full antialiased`}>
      <body className="min-h-full bg-surface font-sans text-ink">
        {children}
      </body>
    </html>
  );
}
