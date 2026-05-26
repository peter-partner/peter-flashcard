"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export function FooterNav({
  index,
  total,
  onPrev,
  onNext,
}: {
  index: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
}) {
  const dots: number[] = [];
  const start = Math.max(1, Math.min(index - 2, total - 4));
  for (let i = 0; i < 5; i++) dots.push(start + i);

  const disablePrev = index <= 1;
  const disableNext = index >= total;

  return (
    <div
      className="sticky bottom-0 border-t border-brand-divider"
      style={{
        background: "rgba(244, 248, 252, 0.92)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 12,
        // Clear the iOS home indicator without dead space on home-button phones.
        paddingBottom: "max(12px, env(safe-area-inset-bottom))",
        marginTop: 28,
      }}
    >
      <div className="flex items-center gap-2.5">
        <button
          type="button"
          onClick={onPrev}
          disabled={disablePrev}
          className="flex-1 min-w-0 h-[46px] rounded-[14px] bg-white border border-brand-divider inline-flex items-center justify-center gap-1.5 font-semibold text-[13px] font-sans"
          style={{
            color: disablePrev ? "#7C8AA0" : "#4A5B71",
            cursor: disablePrev ? "not-allowed" : "pointer",
            opacity: disablePrev ? 0.5 : 1,
          }}
        >
          <ChevronLeft size={16} stroke={disablePrev ? "#7C8AA0" : "#4A5B71"} />
          Previous
        </button>

        <div className="flex items-center gap-1.5 px-1 shrink-0">
          {dots.map((d) => (
            <span
              key={d}
              className="rounded-full transition-all"
              style={{
                width: d === index ? 18 : 6,
                height: 6,
                background: d === index ? "#1E5BAD" : "#D6E6F5",
              }}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={onNext}
          disabled={disableNext}
          className="flex-1 min-w-0 h-[46px] rounded-[14px] border-0 inline-flex items-center justify-center gap-1.5 text-white font-semibold text-[13px] font-sans"
          style={{
            background: disableNext ? "#D6E6F5" : "#1E5BAD",
            cursor: disableNext ? "not-allowed" : "pointer",
            boxShadow: disableNext
              ? "none"
              : "0 4px 12px -4px rgba(30, 91, 173, 0.6)",
            opacity: disableNext ? 0.6 : 1,
          }}
        >
          Next
          <ChevronRight size={16} stroke="#FFFFFF" />
        </button>
      </div>
    </div>
  );
}
