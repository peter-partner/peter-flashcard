"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { HeaderBar } from "./header-bar";
import { WordCard } from "./word-card";
import { Pronunciation } from "./pronunciation";
import { ExampleSentence } from "./example-sentence";
import { WritingPractice } from "./writing-practice";
import { CulturalTip } from "./cultural-tip";
import { FooterNav } from "./footer-nav";
import type { DeckId, Flashcard } from "@/lib/flashcards";

export function FlashcardView({
  deck,
  cards,
  initialIndex,
  level,
  badge,
}: {
  deck: DeckId;
  cards: Flashcard[];
  initialIndex: number;
  level: string;
  badge: string;
}) {
  const total = cards.length;
  const router = useRouter();
  const [index, setIndex] = useState(initialIndex);
  const [bookmarks, setBookmarks] = useState<Set<number>>(() => new Set());
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const storageKey = `pf:bookmarks:${deck}`;

  // Load persisted bookmarks once on mount.
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(storageKey);
      if (!raw) return;
      const parsed = JSON.parse(raw) as number[];
      if (Array.isArray(parsed)) setBookmarks(new Set(parsed));
    } catch {
      // localStorage unavailable (private mode) — silently skip.
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Persist on change.
  useEffect(() => {
    try {
      window.localStorage.setItem(
        storageKey,
        JSON.stringify(Array.from(bookmarks)),
      );
    } catch {
      // ignore quota / private-mode errors
    }
  }, [bookmarks, storageKey]);

  // Reset scroll on card change.
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [index]);

  // Sync URL without a full navigation (shallow update for shareable card #).
  useEffect(() => {
    const url = `/card/${deck}/${index}`;
    if (typeof window !== "undefined" && window.location.pathname !== url) {
      window.history.replaceState(null, "", url);
    }
  }, [deck, index]);

  // Keyboard nav.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") setIndex((i) => Math.max(1, i - 1));
      if (e.key === "ArrowRight") setIndex((i) => Math.min(total, i + 1));
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [total]);

  const word = cards[index - 1];
  if (!word) {
    // Defensive — should never hit given page-level validation.
    return (
      <div className="p-10 text-brand-slate">
        Card not found. <button onClick={() => router.push("/")}>Go home</button>
      </div>
    );
  }

  const bookmarked = bookmarks.has(index);
  const toggleBookmark = () =>
    setBookmarks((s) => {
      const ns = new Set(s);
      if (ns.has(index)) ns.delete(index);
      else ns.add(index);
      return ns;
    });

  return (
    <div
      ref={scrollRef}
      className="pf-scroll h-dvh overflow-auto overscroll-y-contain bg-brand-bg text-brand-navy font-sans"
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      <HeaderBar
        index={index}
        total={total}
        bookmarked={bookmarked}
        onBookmark={toggleBookmark}
        category={word.cat}
        level={level}
      />
      <div>
        <WordCard word={word} navKey={index} badge={badge} />
        <Pronunciation />
        <ExampleSentence ex={word.ex} />
        <WritingPractice word={word} />
        <CulturalTip tip={word.tip} />
      </div>
      <FooterNav
        index={index}
        total={total}
        onPrev={() => setIndex((i) => Math.max(1, i - 1))}
        onNext={() => setIndex((i) => Math.min(total, i + 1))}
      />
    </div>
  );
}
