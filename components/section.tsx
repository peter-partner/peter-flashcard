import type { ReactNode } from "react";

export function Section({
  title,
  icon,
  children,
}: {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="px-4 mt-6">
      <div className="flex items-center gap-2 mb-2.5 pl-1">
        <div className="w-[22px] h-[22px] rounded-[7px] bg-brand-accent grid place-items-center">
          {icon}
        </div>
        <span className="text-[11px] font-bold tracking-[0.08em] text-brand-navy uppercase">
          {title}
        </span>
      </div>
      {children}
    </div>
  );
}
