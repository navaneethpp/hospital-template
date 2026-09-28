import Link from "next/link";

export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="CarePlus Medical home">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-sm">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
          <path
            d="M12 5v14M5 12h14"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="leading-tight">
        <span className="block text-[13px] font-extrabold tracking-[0.14em] text-ink">
          CAREPLUS
        </span>
        {!compact && (
          <span className="block text-[10px] font-medium tracking-[0.28em] text-muted">
            MEDICAL
          </span>
        )}
      </span>
    </Link>
  );
}
