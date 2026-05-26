"use client";

import { useEffect, useRef, useState } from "react";
import { Pen, Play, RotateCcw } from "lucide-react";
import { Section } from "./section";
import { WritingCanvas, type WritingCanvasHandle } from "./writing-canvas";
import { StrokeGuide, type StrokeGuideHandle } from "./stroke-guide";
import type { Flashcard } from "@/lib/flashcards";

export function WritingPractice({ word }: { word: Flashcard }) {
  const [showStrokes, setShowStrokes] = useState(false);
  const canvasRef = useRef<WritingCanvasHandle | null>(null);
  const guideRef = useRef<StrokeGuideHandle | null>(null);

  useEffect(() => {
    setShowStrokes(false);
  }, [word.zh]);

  return (
    <Section
      title="Practice writing"
      icon={<Pen size={14} stroke="#1E5BAD" />}
    >
      <div className="bg-white rounded-surface p-4 border border-brand-divider shadow-e1">
        <div
          className="rounded-2xl p-1 transition-colors"
          style={{
            background: "#FCFDFE",
            border: `1.5px solid ${showStrokes ? "#6FA8DC" : "#D6E6F5"}`,
          }}
        >
          <div className="relative">
            <WritingCanvas
              ref={canvasRef}
              char={word.zh}
              showStrokeOrder={showStrokes}
            />
            {showStrokes && (
              <div className="absolute inset-0 pointer-events-none">
                <StrokeGuide ref={guideRef} char={word.zh} autoPlay />
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-2.5 mt-3.5">
          <button
            type="button"
            onClick={() => canvasRef.current?.clear()}
            className="flex-1 min-h-[44px] px-3 rounded-xl bg-transparent text-brand-slate border-[1.5px] border-brand-divider font-semibold text-[13px] inline-flex items-center justify-center gap-1.5 font-sans transition-colors hover:bg-brand-bg"
          >
            <RotateCcw size={14} stroke="#4A5B71" />
            Clear
          </button>
          <button
            type="button"
            onClick={() => setShowStrokes((s) => !s)}
            className="min-h-[44px] px-3 rounded-xl text-white font-semibold text-[13px] font-sans transition-colors"
            style={{
              flex: 1.4,
              background: showStrokes ? "#164685" : "#1E5BAD",
              boxShadow: "0 4px 12px -4px rgba(30, 91, 173, 0.5)",
            }}
          >
            {showStrokes ? "Hide stroke guide" : "Show stroke guide"}
          </button>
        </div>

        <div className="mt-3 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-[11px] text-brand-slate-light">
            <span className="w-[5px] h-[5px] rounded-full bg-brand-secondary" />
            {showStrokes
              ? "Strokes animate in writing order."
              : "Trace each character above. Use the divider as a guide."}
          </div>
          {showStrokes && (
            <button
              type="button"
              onClick={() => guideRef.current?.play()}
              aria-label="Replay stroke order animation"
              className="inline-flex items-center gap-1 text-[12px] font-semibold text-brand-primary px-2 py-1 rounded-control hover:bg-brand-accent transition-colors"
            >
              <Play size={11} fill="#1E5BAD" stroke="#1E5BAD" />
              Replay
            </button>
          )}
        </div>
      </div>
    </Section>
  );
}
