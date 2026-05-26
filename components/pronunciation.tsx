"use client";

import { useState } from "react";
import { Volume2, Play, Turtle } from "lucide-react";
import { Section } from "./section";

type Mode = "normal" | "slow" | null;

export function Pronunciation() {
  const [playing, setPlaying] = useState<Mode>(null);

  function play(kind: Exclude<Mode, null>) {
    if (playing) return;
    setPlaying(kind);
    setTimeout(() => setPlaying(null), 2000);
  }

  return (
    <Section
      title="Listen to native speaker"
      icon={<Volume2 size={15} stroke="#1E5BAD" />}
    >
      <div
        className="bg-white rounded-[18px] border border-brand-divider"
        style={{
          padding: "22px 18px 18px",
          boxShadow: "0 4px 20px -8px rgba(15, 44, 77, 0.08)",
        }}
      >
        <div className="flex flex-col items-center">
          <button
            type="button"
            onClick={() => play("normal")}
            disabled={!!playing}
            aria-label="Play normal speed"
            className="relative w-[88px] h-[88px] rounded-full grid place-items-center transition-all"
            style={{
              background: "linear-gradient(135deg, #1E5BAD, #164685)",
              boxShadow:
                playing === "normal"
                  ? "0 0 0 8px rgba(30, 91, 173, 0.18), 0 8px 24px -8px rgba(30, 91, 173, 0.6)"
                  : "0 8px 24px -8px rgba(30, 91, 173, 0.55), 0 0 0 0 rgba(30, 91, 173, 0)",
              transform: playing === "normal" ? "scale(1.04)" : "scale(1)",
              cursor: playing ? "default" : "pointer",
            }}
          >
            {playing === "normal" && (
              <span
                className="absolute rounded-full animate-pf-ripple"
                style={{
                  inset: -4,
                  border: "2px solid #6FA8DC",
                }}
              />
            )}
            <Play size={32} fill="#fff" stroke="#fff" className="ml-1" />
          </button>

          <div className="flex items-center gap-1 h-[22px] mt-3.5">
            {[0.3, 0.6, 0.9, 0.7, 1, 0.5, 0.8, 0.4, 0.7, 0.3].map((h, i) => (
              <span
                key={i}
                className="rounded-[2px]"
                style={{
                  width: 3,
                  height: `${h * 100}%`,
                  background: playing === "normal" ? "#1E5BAD" : "#D6E6F5",
                  animation:
                    playing === "normal"
                      ? `pf-wave 0.9s ease-in-out ${i * 0.06}s infinite`
                      : "none",
                }}
              />
            ))}
          </div>

          <div className="mt-2 text-[12px] text-brand-slate-light font-medium">
            {playing === "normal"
              ? "Playing…"
              : "Native Beijing pronunciation"}
          </div>

          <button
            type="button"
            onClick={() => play("slow")}
            disabled={!!playing}
            className="mt-4 inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-full font-semibold text-[13px] transition-all font-sans"
            style={{
              background: playing === "slow" ? "#1E5BAD" : "#E8F1FA",
              color: playing === "slow" ? "#FFFFFF" : "#1E5BAD",
              cursor: playing ? "default" : "pointer",
            }}
          >
            <Turtle
              size={16}
              stroke={playing === "slow" ? "#FFFFFF" : "#1E5BAD"}
            />
            {playing === "slow" ? "Playing slow…" : "Slow version"}
          </button>
        </div>
      </div>
    </Section>
  );
}
