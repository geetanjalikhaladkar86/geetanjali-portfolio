import { useEffect, useRef } from "react";

/** Ambient animated background: gradient orbs, particles and subtle code rain. */
export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frame = 0;
    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: (Math.random() * 1.6 + 0.4) * dpr,
      vx: (Math.random() - 0.5) * 0.22 * dpr,
      vy: (Math.random() - 0.5) * 0.22 * dpr,
      a: Math.random() * 0.4 + 0.15,
    }));

    const columns = Math.floor(window.innerWidth / 34);
    const drops = Array.from({ length: columns }, () => Math.random() * -60);
    const glyphs = "01{}();<>ABCDEFabcdef".split("");

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // code rain
      ctx.font = `${13 * dpr}px "JetBrains Mono", monospace`;
      for (let i = 0; i < drops.length; i++) {
        const char = glyphs[Math.floor(Math.random() * glyphs.length)] ?? "0";
        ctx.fillStyle = `rgba(56, 189, 248, 0.10)`;
        ctx.fillText(char, i * 34 * dpr, (drops[i] ?? 0) * 20 * dpr);
        if ((drops[i] ?? 0) * 20 > window.innerHeight && Math.random() > 0.985) drops[i] = 0;
        drops[i] = (drops[i] ?? 0) + 0.06;
      }

      // particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 102, 241, ${p.a})`;
        ctx.fill();
      }

      if (frame % 1 === 0) raf = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 opacity-70" />
      <div className="glow-orb animate-drift absolute -left-32 top-[-10%] h-[36rem] w-[36rem] rounded-full opacity-60" />
      <div className="glow-orb animate-drift absolute -right-40 top-1/3 h-[30rem] w-[30rem] rounded-full opacity-40 [animation-delay:-6s]" />
      <div className="glow-orb animate-drift absolute bottom-0 left-1/3 h-[28rem] w-[28rem] rounded-full opacity-30 [animation-delay:-12s]" />
    </div>
  );
}
