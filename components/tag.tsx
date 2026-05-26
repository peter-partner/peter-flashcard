import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "solid" | "soft";

export function Tag({
  children,
  variant = "soft",
  className,
}: {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const styles =
    variant === "solid"
      ? "text-white bg-brand-primary"
      : "text-brand-primary bg-brand-accent";
  return (
    <span
      className={cn(
        "inline-flex items-center text-[10px] font-bold tracking-[0.08em] px-2 py-1 rounded-tag",
        styles,
        className,
      )}
    >
      {children}
    </span>
  );
}
