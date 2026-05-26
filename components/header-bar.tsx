"use client";

import { Bookmark } from "lucide-react";
import { Tag } from "./tag";

export function HeaderBar({
  index,
  total,
  bookmarked,
  onBookmark,
  category,
  level,
}: {
  index: number;
  total: number;
  bookmarked: boolean;
  onBookmark: () => void;
  category: string;
  level: string;
}) {
  return (
    <div
      className="sticky top-0 z-10 border-b border-brand-divider"
      style={{
        background: "rgba(244, 248, 252, 0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        // Push content below the notch / Dynamic Island in PWA + full-screen.
        paddingTop: "env(safe-area-inset-top)",
      }}
    >
      <div className="flex items-center justify-between px-5 py-3.5">
        <div className="flex items-center gap-2.5">
          <div
            className="w-[30px] h-[30px] rounded-[9px] grid place-items-center"
            style={{
              background: "linear-gradient(135deg, #1E5BAD, #164685)",
              boxShadow: "0 2px 6px rgba(30, 91, 173, 0.3)",
            }}
          >
            <span className="text-white font-bold text-[13px] font-sans">P</span>
          </div>
          <div className="flex flex-col leading-[1.1]">
            <span className="text-[13px] font-semibold text-brand-navy tracking-[-0.01em]">
              Peter Flashcard
            </span>
            <span className="text-[10px] text-brand-slate-light font-thai">
              พีเตอร์ แฟลชการ์ด
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={onBookmark}
            aria-pressed={bookmarked}
            aria-label="Bookmark this card"
            className="w-11 h-11 rounded-[10px] grid place-items-center transition-all"
            style={{
              background: bookmarked ? "#E8F1FA" : "transparent",
              color: bookmarked ? "#1E5BAD" : "#4A5B71",
            }}
          >
            <Bookmark
              size={18}
              fill={bookmarked ? "#1E5BAD" : "none"}
              stroke={bookmarked ? "#1E5BAD" : "#4A5B71"}
              strokeWidth={2}
            />
          </button>
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-white border border-brand-divider text-[11px] font-semibold text-brand-slate tracking-[0.02em]">
            <span className="text-brand-primary">
              {String(index).padStart(2, "0")}
            </span>
            <span className="text-brand-slate-light">/ {total}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 px-5 pb-2.5">
        <Tag>{level}</Tag>
        <div className="text-[11px] text-brand-slate-light font-thai">
          {category}
        </div>
      </div>
    </div>
  );
}
