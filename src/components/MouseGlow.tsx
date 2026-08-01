import { useEffect, useState } from "react";

/** Cursor spotlight glow + minimal custom cursor ring (pointer devices only). */
export function MouseGlow() {
  const [pos, setPos] = useState({ x: -500, y: -500 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-40">
      <div
        className="glow-orb absolute h-[26rem] w-[26rem] rounded-full opacity-35 transition-transform duration-300 ease-out"
        style={{ transform: `translate3d(${pos.x - 208}px, ${pos.y - 208}px, 0)` }}
      />
      <div
        className="absolute h-6 w-6 rounded-full border border-secondary/70 transition-transform duration-100 ease-out"
        style={{ transform: `translate3d(${pos.x - 12}px, ${pos.y - 12}px, 0)` }}
      />
    </div>
  );
}
