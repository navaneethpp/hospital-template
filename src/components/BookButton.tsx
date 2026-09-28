import { ArrowRight } from "lucide-react";

type BookButtonProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
  type?: "button" | "submit";
  size?: "sm" | "md";
};

export default function BookButton({
  href = "#contact",
  children,
  className = "",
  showArrow = false,
  type = "button",
  size = "md",
}: BookButtonProps) {
  const sizeClasses =
    size === "sm" ? "px-3.5 py-1.5 text-xs min-h-[36px]" : "px-5 py-2.5 text-sm";
  const classes = `inline-flex items-center justify-center gap-2 rounded-full bg-primary font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primary-dark hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${sizeClasses} ${className}`;

  if (type === "submit") {
    return (
      <button type="submit" className={classes}>
        {children}
        {showArrow ? <ArrowRight className="h-4 w-4" aria-hidden="true" /> : null}
      </button>
    );
  }

  return (
    <a href={href} className={classes}>
      {children}
      {showArrow ? <ArrowRight className="h-4 w-4" aria-hidden="true" /> : null}
    </a>
  );
}
