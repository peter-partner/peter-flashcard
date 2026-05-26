"use client";

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

// Subset of hanzi-writer's CharacterJson — only the fields we render.
type CharacterJson = {
  strokes: string[];
  medians: number[][][];
};

type ScalingTransform = {
  x: number;
  y: number;
  scale: number;
  transform: string;
};

export type StrokeGuideHandle = {
  play: () => void;
};

const VIEWPORT = 100; // SVG viewBox is always 0 0 100 100; the SVG scales to its container.
const PADDING = 8;
const STROKE_STEP_MS = 340;
const INTER_CHAR_DELAY_MS = 260;

// hanzi-writer's default loader uses XMLHttpRequest, which silently fails
// in some browser sandboxes (status 0 on cross-origin XHR). Use fetch
// against the same jsdelivr CDN — more robust and identical data source.
const HANZI_DATA_VERSION = "2.0.1";
async function loadCharJson(c: string): Promise<CharacterJson> {
  const url = `https://cdn.jsdelivr.net/npm/hanzi-writer-data@${HANZI_DATA_VERSION}/${encodeURIComponent(c)}.json`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${c}: HTTP ${res.status}`);
  return (await res.json()) as CharacterJson;
}

export const StrokeGuide = forwardRef<
  StrokeGuideHandle,
  { char: string; autoPlay?: boolean }
>(function StrokeGuide({ char, autoPlay = true }, ref) {
  const chars = Array.from(char);
  // One CharacterJson per char, or null while loading / on error.
  const [data, setData] = useState<(CharacterJson | null)[]>(() =>
    chars.map(() => null),
  );
  // Highest stroke index revealed per char, -1 = nothing revealed yet.
  const [revealed, setRevealed] = useState<number[]>(() => chars.map(() => -1));
  const [transform, setTransform] = useState<ScalingTransform | null>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const autoPlayedFor = useRef<string | null>(null);

  function clearTimers() {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }

  // Animate strokes using a caller-supplied data snapshot to avoid reading
  // stale state from a closure during the initial autoPlay.
  function playWithData(snapshot: (CharacterJson | null)[]) {
    clearTimers();
    setRevealed(chars.map(() => -1));

    let offset = 200;
    chars.forEach((_, ci) => {
      const charData = snapshot[ci];
      if (!charData) return;
      const total = charData.strokes.length;
      for (let si = 0; si < total; si++) {
        const charIndex = ci;
        const strokeIndex = si;
        timers.current.push(
          setTimeout(() => {
            setRevealed((cur) => {
              const next = [...cur];
              next[charIndex] = strokeIndex;
              return next;
            });
          }, offset),
        );
        offset += STROKE_STEP_MS;
      }
      offset += INTER_CHAR_DELAY_MS;
    });
  }

  // Load data when char changes.
  useEffect(() => {
    let cancelled = false;
    setData(chars.map(() => null));
    setRevealed(chars.map(() => -1));
    clearTimers();

    (async () => {
      const HanziWriter = (await import("hanzi-writer")).default;
      if (cancelled) return;
      setTransform(HanziWriter.getScalingTransform(VIEWPORT, VIEWPORT, PADDING));

      const loaded = await Promise.all(
        chars.map((c) => loadCharJson(c).catch(() => null)),
      );
      if (cancelled) return;
      const cleaned = loaded.map((d) => (d ? (d as CharacterJson) : null));
      setData(cleaned);

      if (autoPlay && autoPlayedFor.current !== char) {
        autoPlayedFor.current = char;
        // Slight delay so the user perceives the animation starting, not a
        // sudden mid-render flash.
        const t = setTimeout(() => {
          if (!cancelled) playWithData(cleaned);
        }, 150);
        timers.current.push(t);
      }
    })();

    return () => {
      cancelled = true;
      clearTimers();
    };
    // chars is derived from char — only re-run when the source string changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [char, autoPlay]);

  // Manual replay button uses the latest loaded data from state.
  useImperativeHandle(ref, () => ({
    play() {
      playWithData(data);
    },
  }));

  return (
    <div className="flex w-full h-full" aria-hidden="true">
      {chars.map((_, ci) => {
        const charData = data[ci];
        const revealedIndex = revealed[ci] ?? -1;
        return (
          <div key={ci} className="flex-1 relative">
            {transform && (
              <svg
                viewBox={`0 0 ${VIEWPORT} ${VIEWPORT}`}
                preserveAspectRatio="xMidYMid meet"
                className="w-full h-full"
              >
                {/* Strokes live in MMH coord space; the parent <g> flips Y and
                    scales to the viewport. Each stroke fades from "ghost" to
                    "filled" as it gets revealed. */}
                <g transform={transform.transform}>
                  {charData?.strokes.map((path, si) => {
                    const isRevealed = si <= revealedIndex;
                    const isActive = si === revealedIndex;
                    return (
                      <path
                        key={si}
                        d={path}
                        fill="#1E5BAD"
                        // Three-step opacity: faint outline → settled stroke → active stroke.
                        opacity={isActive ? 0.95 : isRevealed ? 0.6 : 0.13}
                        style={{ transition: "opacity 280ms ease" }}
                      />
                    );
                  })}
                </g>
                {/* Number badge for the active (most recently revealed) stroke,
                    drawn in screen space so the digit renders right-side-up. */}
                {charData &&
                  revealedIndex >= 0 &&
                  (() => {
                    const median = charData.medians[revealedIndex];
                    if (!median || !median[0]) return null;
                    const [mx, my] = median[0];
                    if (mx === undefined || my === undefined) return null;
                    const sx = transform.x + mx * transform.scale;
                    const sy = transform.y - my * transform.scale;
                    return (
                      <g>
                        <circle
                          cx={sx}
                          cy={sy}
                          r={6}
                          fill="#1E5BAD"
                          stroke="#fff"
                          strokeWidth={1.4}
                        />
                        <text
                          x={sx}
                          y={sy}
                          fill="#fff"
                          fontSize={7.4}
                          fontWeight={700}
                          fontFamily="Inter, system-ui, sans-serif"
                          textAnchor="middle"
                          dominantBaseline="central"
                        >
                          {revealedIndex + 1}
                        </text>
                      </g>
                    );
                  })()}
              </svg>
            )}
          </div>
        );
      })}
    </div>
  );
});
