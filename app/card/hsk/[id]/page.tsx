import { notFound } from "next/navigation";
import { FlashcardView } from "@/components/flashcard-view";
import { HSK1 } from "@/lib/flashcards";

export function generateStaticParams() {
  return HSK1.map((_, i) => ({ id: String(i + 1) }));
}

export default function HskCardPage({
  params,
}: {
  params: { id: string };
}) {
  const id = Number(params.id);
  if (!Number.isInteger(id) || id < 1 || id > HSK1.length) {
    notFound();
  }
  return (
    <FlashcardView
      deck="hsk"
      cards={HSK1}
      initialIndex={id}
      level="HSK · LEVEL 1"
      badge="HSK 1"
    />
  );
}
