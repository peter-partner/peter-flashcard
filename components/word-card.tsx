import type { Flashcard } from "@/lib/flashcards";

function Meta({
  label,
  value,
  tight,
}: {
  label: string;
  value: string;
  tight?: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-0.5">
      <span className="text-[9px] font-bold text-brand-slate-light tracking-[0.08em]">
        {label.toUpperCase()}
      </span>
      <span
        className="text-brand-navy font-semibold"
        style={{
          fontSize: tight ? 11 : 12,
          letterSpacing: tight ? "0" : "normal",
        }}
      >
        {value}
      </span>
    </div>
  );
}

export function WordCard({
  word,
  navKey,
  badge = "HSK 1",
}: {
  word: Flashcard;
  navKey: number | string;
  badge?: string;
}) {
  const len = word.zh.length;
  const charSize = len <= 2 ? 92 : len === 3 ? 72 : 56;
  const stars = "★".repeat(word.freq) + "☆".repeat(5 - word.freq);

  return (
    <div
      key={navKey}
      className="relative overflow-hidden mt-4 mx-4 bg-white rounded-[20px] border border-brand-divider animate-pf-flip-in"
      style={{
        padding: "28px 22px 24px",
        boxShadow:
          "0 4px 20px -8px rgba(15, 44, 77, 0.12), 0 1px 0 rgba(255,255,255,0.6) inset",
        transformOrigin: "center 30%",
      }}
    >
      <div className="absolute top-4 right-4 flex items-center gap-1.5">
        <div className="text-[10px] font-bold text-white bg-brand-primary px-2.5 py-1 rounded-md tracking-[0.04em]">
          {badge}
        </div>
      </div>

      <div
        className="font-zh font-medium text-brand-navy mt-1.5"
        style={{
          fontSize: charSize,
          lineHeight: 1.05,
          letterSpacing: "0.04em",
        }}
      >
        {word.zh}
      </div>

      <div className="mt-3.5 text-[22px] font-medium text-brand-primary tracking-[0.02em] font-sans">
        {word.py}
      </div>

      <div className="h-px bg-brand-divider my-4" />

      <div className="flex items-baseline gap-2.5">
        <span className="text-[10px] font-bold text-brand-slate-light tracking-[0.1em] min-w-[22px]">
          TH
        </span>
        <span className="font-thai text-[22px] text-brand-navy font-medium">
          {word.th}
        </span>
      </div>
      <div className="flex items-baseline gap-2.5 mt-2">
        <span className="text-[10px] font-bold text-brand-slate-light tracking-[0.1em] min-w-[22px]">
          EN
        </span>
        <span className="text-[16px] text-brand-slate font-medium">
          {word.en}
        </span>
      </div>

      <div className="mt-4 p-2.5 rounded-xl bg-brand-bg flex justify-between items-center">
        <Meta label="Part" value={word.pos} />
        <div className="w-px h-[22px] bg-brand-divider" />
        <Meta label="Frequency" value={stars} tight />
        <div className="w-px h-[22px] bg-brand-divider" />
        <Meta label="Tones" value={word.tones} />
      </div>
    </div>
  );
}
