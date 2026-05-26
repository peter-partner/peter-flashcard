"use client";

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  type PointerEvent as ReactPointerEvent,
} from "react";

export type WritingCanvasHandle = {
  clear: () => void;
};

type Props = {
  char: string;
  showStrokeOrder: boolean;
};

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.arcTo(x + w, y, x + w, y + r, r);
  ctx.lineTo(x + w, y + h - r);
  ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
  ctx.lineTo(x + r, y + h);
  ctx.arcTo(x, y + h, x, y + h - r, r);
  ctx.lineTo(x, y + r);
  ctx.arcTo(x, y, x + r, y, r);
  ctx.closePath();
}

function drawHint(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  text: string,
  withOrder: boolean,
) {
  ctx.clearRect(0, 0, w, h);
  const chars = (text || "").split("");
  const n = Math.max(1, chars.length);

  ctx.strokeStyle = "rgba(30, 91, 173, 0.16)";
  ctx.setLineDash([4, 6]);
  ctx.lineWidth = 1;
  if (n === 1) {
    ctx.beginPath();
    ctx.moveTo(w / 2, 8);
    ctx.lineTo(w / 2, h - 8);
    ctx.moveTo(8, h / 2);
    ctx.lineTo(w - 8, h / 2);
    ctx.stroke();
  } else {
    ctx.beginPath();
    for (let i = 1; i < n; i++) {
      const x = (w * i) / n;
      ctx.moveTo(x, 8);
      ctx.lineTo(x, h - 8);
    }
    ctx.moveTo(8, h / 2);
    ctx.lineTo(w - 8, h / 2);
    ctx.stroke();
  }
  ctx.setLineDash([]);

  const cell = w / n;
  const fontSize = Math.floor(Math.min(cell, h) * 0.78);
  ctx.fillStyle = withOrder
    ? "rgba(30, 91, 173, 0.18)"
    : "rgba(15, 44, 77, 0.10)";
  ctx.font = `${fontSize}px "Noto Sans SC", system-ui, sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  chars.forEach((ch, i) => {
    const cx = cell * (i + 0.5);
    const cy = h / 2 + h * 0.03;
    ctx.fillText(ch, cx, cy);
  });

  if (withOrder) {
    ctx.font = '600 11px Inter, system-ui, sans-serif';
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    chars.forEach((_, i) => {
      const cx = cell * i + 8;
      const cy = 8;
      ctx.fillStyle = "#1E5BAD";
      roundRect(ctx, cx, cy, 22, 16, 4);
      ctx.fill();
      ctx.fillStyle = "#fff";
      ctx.fillText(`${i + 1}`, cx + 7, cy + 2);
    });
  }
}

export const WritingCanvas = forwardRef<WritingCanvasHandle, Props>(
  function WritingCanvas({ char, showStrokeOrder }, ref) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const overlayRef = useRef<HTMLCanvasElement | null>(null);
    const drawing = useRef(false);
    const lastPt = useRef<{ x: number; y: number } | null>(null);

    // Init main canvas — runs once.
    useEffect(() => {
      const c = canvasRef.current;
      if (!c) return;
      const dpr = window.devicePixelRatio || 1;
      const rect = c.getBoundingClientRect();
      c.width = rect.width * dpr;
      c.height = rect.height * dpr;
      const ctx = c.getContext("2d");
      if (!ctx) return;
      ctx.scale(dpr, dpr);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.strokeStyle = "#0F2C4D";
      ctx.lineWidth = 6;
    }, []);

    // Clear strokes when character changes.
    useEffect(() => {
      const c = canvasRef.current;
      if (!c) return;
      const ctx = c.getContext("2d");
      if (!ctx) return;
      ctx.clearRect(0, 0, c.width, c.height);
    }, [char]);

    // Draw hint overlay.
    useEffect(() => {
      const c = overlayRef.current;
      if (!c) return;
      const dpr = window.devicePixelRatio || 1;
      const rect = c.getBoundingClientRect();
      c.width = rect.width * dpr;
      c.height = rect.height * dpr;
      const ctx = c.getContext("2d");
      if (!ctx) return;
      ctx.scale(dpr, dpr);
      drawHint(ctx, rect.width, rect.height, char, showStrokeOrder);
    }, [showStrokeOrder, char]);

    useImperativeHandle(ref, () => ({
      clear() {
        const c = canvasRef.current;
        if (!c) return;
        const ctx = c.getContext("2d");
        if (!ctx) return;
        ctx.clearRect(0, 0, c.width, c.height);
      },
    }));

    function getPt(e: ReactPointerEvent<HTMLCanvasElement>) {
      const c = canvasRef.current;
      if (!c) return { x: 0, y: 0 };
      const rect = c.getBoundingClientRect();
      return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }

    function start(e: ReactPointerEvent<HTMLCanvasElement>) {
      e.preventDefault();
      e.currentTarget.setPointerCapture(e.pointerId);
      drawing.current = true;
      lastPt.current = getPt(e);
    }
    function move(e: ReactPointerEvent<HTMLCanvasElement>) {
      if (!drawing.current) return;
      e.preventDefault();
      const c = canvasRef.current;
      if (!c) return;
      const ctx = c.getContext("2d");
      if (!ctx) return;
      const p = getPt(e);
      const last = lastPt.current;
      if (!last) {
        lastPt.current = p;
        return;
      }
      ctx.beginPath();
      ctx.moveTo(last.x, last.y);
      ctx.lineTo(p.x, p.y);
      ctx.stroke();
      lastPt.current = p;
    }
    function end() {
      drawing.current = false;
      lastPt.current = null;
    }

    return (
      <div className="relative w-full" style={{ aspectRatio: "1 / 1" }}>
        <canvas
          ref={overlayRef}
          className="absolute inset-0 w-full h-full pointer-events-none rounded-2xl"
        />
        <canvas
          ref={canvasRef}
          onPointerDown={start}
          onPointerMove={move}
          onPointerUp={end}
          onPointerCancel={end}
          onPointerLeave={end}
          className="absolute inset-0 w-full h-full rounded-2xl"
          style={{
            cursor: "crosshair",
            touchAction: "none",
            background: "transparent",
          }}
        />
      </div>
    );
  },
);
