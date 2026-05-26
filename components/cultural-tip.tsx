import { Lightbulb } from "lucide-react";
import type { FlashcardTip } from "@/lib/flashcards";

export function CulturalTip({ tip }: { tip: FlashcardTip | null }) {
  if (!tip) return null;
  return (
    <div className="px-4 mt-7">
      <div
        className="relative overflow-hidden rounded-surface p-[18px] border border-brand-accent-deep"
        style={{
          background: "linear-gradient(135deg, #E8F1FA 0%, #DCE9F5 100%)",
        }}
      >
        <div className="flex items-center gap-2.5 mb-2">
          <div
            className="w-7 h-7 rounded-[9px] bg-white grid place-items-center"
            style={{ boxShadow: "0 2px 6px rgba(30, 91, 173, 0.12)" }}
          >
            <Lightbulb size={15} stroke="#1E5BAD" />
          </div>
          <span className="text-[12px] font-bold text-brand-primary tracking-[0.04em]">
            DID YOU KNOW?
          </span>
        </div>
        <p className="m-0 text-[13.5px] leading-[1.55] text-brand-navy font-medium">
          {tip.en}
        </p>
        {tip.th && (
          <p className="mt-2.5 text-[12px] font-thai text-brand-slate leading-[1.5]">
            {tip.th}
          </p>
        )}
      </div>
    </div>
  );
}
