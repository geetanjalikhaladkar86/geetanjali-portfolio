import { useEffect, useState } from "react";

/** Cursor spotlight glow + minimal custom cursor ring (pointer devices only). */
export function MouseGlow() {
  const [pos, setPos] = useState({ x: -500, y: -500 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    let rafId: number;
    let nextPos = { x: -500, y: -500 };

    const onMove = (e: MouseEvent) => {
      nextPos = { x: e.clientX, y: e.clientY };
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => setPos(nextPos));
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
      <div
        className="glow-orb absolute h-[24rem] w-[24rem] rounded-full opacity-25"
        style={{ transform: `translate3d(${pos.x - 192}px, ${pos.y - 192}px, 0)` }}
      />
    </div>
  );
}
