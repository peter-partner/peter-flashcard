import Link from "next/link";
import { ArrowRight, Sparkles, Pen, Volume2 } from "lucide-react";
import { HSK1, TOEIC } from "@/lib/flashcards";

export default function Home() {
  const features = [
    {
      icon: <Volume2 size={18} stroke="#1E5BAD" />,
      title: "Native pronunciation",
      body: "Native Beijing audio at normal and slow speeds.",
    },
    {
      icon: <Pen size={18} stroke="#1E5BAD" />,
      title: "Writing practice",
      body: "Trace each character with optional stroke-order guide.",
    },
    {
      icon: <Sparkles size={18} stroke="#1E5BAD" />,
      title: "Cultural tips",
      body: "Context, etymology, and usage notes for every word.",
    },
  ];

  return (
    <main
      className="min-h-dvh text-brand-navy font-sans"
      style={{
        background:
          "radial-gradient(circle at 30% 0%, #EAF2FA 0%, #DCE7F2 50%, #CDDBE9 100%)",
      }}
    >
      <div className="max-w-3xl mx-auto px-6 py-16 sm:py-24">
        <div className="flex items-center gap-3 mb-8">
          <div
            className="w-11 h-11 rounded-[12px] grid place-items-center"
            style={{
              background: "linear-gradient(135deg, #1E5BAD, #164685)",
              boxShadow: "0 4px 12px rgba(30, 91, 173, 0.35)",
            }}
          >
            <span className="text-white font-bold text-lg">P</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-base font-semibold">Peter Flashcard</span>
            <span className="text-xs text-brand-slate-light font-thai">
              พีเตอร์ แฟลชการ์ด
            </span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-brand-navy leading-[1.1] break-words">
          Learn Chinese
          <br />
          <span className="font-zh text-brand-primary">一字 一卡</span>
          <span className="text-brand-slate-light"> · </span>
          <span className="whitespace-nowrap">one word,</span>{" "}
          <span className="whitespace-nowrap">one card.</span>
        </h1>

        <p className="mt-5 text-[15px] sm:text-base text-brand-slate max-w-xl leading-relaxed">
          A focused flashcard experience for Thai learners — every HSK1 word
          comes with pinyin, tones, a sample sentence, native audio, and writing
          practice.
        </p>

        <div className="flex flex-wrap gap-3 mt-8">
          <Link
            href="/card/hsk/1"
            className="inline-flex items-center gap-2 rounded-[14px] px-5 py-3 text-white font-semibold text-[14px]"
            style={{
              background: "#1E5BAD",
              boxShadow: "0 6px 18px -6px rgba(30, 91, 173, 0.65)",
            }}
          >
            View sample card
            <ArrowRight size={16} stroke="#fff" />
          </Link>
          <Link
            href="/card/toeic/1"
            className="inline-flex items-center gap-2 rounded-[14px] px-5 py-3 font-semibold text-[14px] bg-white border border-brand-divider text-brand-slate"
          >
            TOEIC (coming soon)
          </Link>
        </div>

        <div className="mt-12 grid sm:grid-cols-3 gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white rounded-surface p-4 border border-brand-divider shadow-e1 transition-all motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-e3"
            >
              <div className="w-9 h-9 rounded-[10px] bg-brand-accent grid place-items-center mb-3">
                {f.icon}
              </div>
              <div className="text-[14px] font-semibold text-brand-navy">
                {f.title}
              </div>
              <div className="text-[12.5px] text-brand-slate-light mt-1 leading-relaxed">
                {f.body}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center gap-6 text-[12px] text-brand-slate-light">
          <div>
            <span className="font-semibold text-brand-navy">{HSK1.length}</span>{" "}
            HSK1 cards
          </div>
          <div>
            <span className="font-semibold text-brand-navy">
              {TOEIC.length}
            </span>{" "}
            TOEIC cards
          </div>
        </div>
      </div>
    </main>
  );
}
