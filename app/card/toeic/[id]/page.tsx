import Link from "next/link";
import { notFound } from "next/navigation";
import { FlashcardView } from "@/components/flashcard-view";
import { TOEIC } from "@/lib/flashcards";

export default function ToeicCardPage({
  params,
}: {
  params: { id: string };
}) {
  const id = Number(params.id);
  if (!Number.isInteger(id) || id < 1) notFound();

  // Placeholder until TOEIC content is added.
  if (TOEIC.length === 0) {
    return (
      <main
        className="min-h-screen grid place-items-center text-brand-navy font-sans px-6"
        style={{
          background:
            "radial-gradient(circle at 30% 0%, #EAF2FA 0%, #DCE7F2 50%, #CDDBE9 100%)",
        }}
      >
        <div className="max-w-md text-center bg-white rounded-2xl border border-brand-divider p-8 shadow-sm">
          <div className="text-[11px] font-bold tracking-[0.08em] text-brand-primary bg-brand-accent inline-block px-2.5 py-1 rounded-md mb-3">
            TOEIC · COMING SOON
          </div>
          <h1 className="text-2xl font-semibold mb-2">TOEIC deck is empty</h1>
          <p className="text-brand-slate text-[14px] leading-relaxed mb-5">
            We&rsquo;re building out the TOEIC vocabulary set next. In the
            meantime, try the HSK1 cards.
          </p>
          <Link
            href="/card/hsk/1"
            className="inline-flex items-center gap-2 rounded-[12px] px-4 py-2.5 text-white font-semibold text-[13px] bg-brand-primary"
          >
            Open HSK1 sample
          </Link>
        </div>
      </main>
    );
  }

  if (id > TOEIC.length) notFound();
  return (
    <FlashcardView
      deck="toeic"
      cards={TOEIC}
      initialIndex={id}
      level="TOEIC"
      badge="TOEIC"
    />
  );
}
