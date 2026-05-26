"use client";

import { useState } from "react";
import { Play, Sparkles } from "lucide-react";
import type { FlashcardExample } from "@/lib/flashcards";
import { Section } from "./section";

export function ExampleSentence({ ex }: { ex: FlashcardExample }) {
  const [playing, setPlaying] = useState(false);

  function play() {
    if (playing) return;
    setPlaying(true);
    setTimeout(() => setPlaying(false), 1800);
  }

  return (
    <Section
      title="In a sentence"
      icon={<Sparkles size={15} stroke="#1E5BAD" />}
    >
      <div
        className="bg-white rounded-[18px] p-[18px] border border-brand-divider"
        style={{ boxShadow: "0 4px 20px -8px rgba(15, 44, 77, 0.08)" }}
      >
        <div className="flex items-start gap-3">
          <button
            type="button"
            onClick={play}
            aria-label="Play example sentence"
            className="shrink-0 w-9 h-9 rounded-[10px] grid place-items-center transition-all"
            style={{
              background: playing ? "#1E5BAD" : "#E8F1FA",
              transform: playing ? "scale(1.05)" : "scale(1)",
              cursor: "pointer",
            }}
          >
            <Play
              size={13}
              stroke={playing ? "#FFFFFF" : "#1E5BAD"}
              fill={playing ? "#FFFFFF" : "#1E5BAD"}
            />
          </button>
          <div className="flex-1 min-w-0">
            <div
              className="font-zh font-medium text-brand-navy"
              style={{ fontSize: 20, lineHeight: 1.35, wordBreak: "keep-all" }}
            >
              {ex.zh}
            </div>
            <div className="text-[12px] text-brand-primary mt-1 font-medium">
              {ex.py}
            </div>
            <div className="h-px bg-brand-divider my-3" />
            <div className="flex gap-2 items-baseline">
              <span className="text-[9px] font-bold text-brand-slate-light tracking-[0.1em] min-w-[18px]">
                TH
              </span>
              <span className="font-thai text-[14px] text-brand-navy leading-[1.4]">
                {ex.th}
              </span>
            </div>
            <div className="flex gap-2 items-baseline mt-1">
              <span className="text-[9px] font-bold text-brand-slate-light tracking-[0.1em] min-w-[18px]">
                EN
              </span>
              <span className="text-[13px] text-brand-slate leading-[1.4]">
                {ex.en}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
