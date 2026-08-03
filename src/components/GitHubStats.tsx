import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Github, Folder, Star, GitFork, BookOpen } from "lucide-react";
import { Section } from "./Section";
import { fadeUp, scaleIn } from "@/animations/variants";
import { profile } from "@/data/profile";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / 1400, 1);
      setValue(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref} className="text-3xl font-extrabold text-foreground">
      {value}
      {suffix}
    </span>
  );
}

const counters = [
  { label: "Public Repositories", to: 18 },
  { label: "Projects Delivered", to: 10 },
  { label: "Team Members Led", to: 8 },
  { label: "PRs Merged & Shipped", to: 88 },
];

const contributionCells: number[] = Array.from({ length: 371 }, (_, i) => {
  const seed = Math.sin(i * 12.9898) * 43758.5453;
  const r = seed - Math.floor(seed);
  return r > 0.8 ? 4 : r > 0.65 ? 3 : r > 0.45 ? 2 : r > 0.25 ? 1 : 0;
});

const languages = [
  { name: "Java (JVM)", pct: 90, color: "bg-primary" },
  { name: "Spring Boot Framework", pct: 88, color: "bg-emerald-600" },
  { name: "SQL (MySQL)", pct: 75, color: "bg-accent" },
  { name: "TypeScript / JavaScript", pct: 50, color: "bg-amber-500" },
  { name: "Others (XML, YAML, HTML)", pct: 85, color: "bg-amber-700" },
];

const pinnedRepos = [
  {
    name: "caryanam-core-api",
    description: "Core REST engine for the vehicle marketplace. Implements JWT validation, inspection allocation algorithms, and S3 file streaming.",
    language: "Java",
    langColor: "bg-red-500",
    stars: 12,
    forks: 4
  },
  {
    name: "dealskb-auction-service",
    description: "Real-time websocket bidding backend. Handles concurrent transactions with DB-level pessimistic locks ('SELECT FOR UPDATE').",
    language: "Java",
    langColor: "bg-red-500",
    stars: 18,
    forks: 6
  },
  {
    name: "hms-appointment-scheduler",
    description: "Multi-threaded scheduling system for clinic reservations, doctor rosters, and electronic prescription PDF generators.",
    language: "Java",
    langColor: "bg-red-500",
    stars: 9,
    forks: 2
  },
  {
    name: "vahan-finserv-engine",
    description: "Auto loan processing workflow automation engine mapping custom state pattern validations in Spring Data JPA.",
    language: "Java",
    langColor: "bg-red-500",
    stars: 15,
    forks: 5
  }
];

export function GitHubStats() {
  const user = profile.githubUser;

  return (
    <Section
      id="github"
      eyebrow="GitHub Contributions"
      title="Engineering Consistent Solutions."
      subtitle="Public repository footprint, contribution schedules, and language ratios."
    >
      <div className="grid gap-6 lg:grid-cols-12">
        
        {/* Left: Graph & Languages (col-span-8) */}
        <div className="lg:col-span-8 grid gap-6">
          
          {/* Card: Contribution Grid */}
          <motion.div variants={fadeUp} className="glass border-white/[0.05] rounded-3xl p-6">
            <h3 className="text-sm font-bold text-foreground uppercase tracking-widest flex items-center gap-2 mb-5">
              <Github className="h-4.5 w-4.5 text-accent" /> Activity Heatmap
            </h3>
            
            <div
              role="img"
              aria-label={`GitHub contribution activity for ${user}`}
              className="grid grid-flow-col grid-rows-7 gap-[3px] overflow-hidden pr-2"
            >
              {contributionCells.map((level, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: (i % 120) * 0.003 }}
                  className="aspect-square w-full rounded-[2px]"
                  style={{
                    background:
                      level === 0
                        ? "var(--surface)"
                        : level === 1
                        ? "rgba(37, 99, 235, 0.25)"
                        : level === 2
                        ? "rgba(37, 99, 235, 0.55)"
                        : level === 3
                        ? "rgba(37, 99, 235, 0.85)"
                        : "var(--accent)",
                  }}
                />
              ))}
            </div>
            
            <div className="mt-4.5 flex items-center justify-between text-xs text-muted-foreground">
              <span>Last 12 months activity scheduler</span>
              <div className="flex items-center gap-1.5">
                <span>Less</span>
                <span className="h-2.5 w-2.5 rounded-[2px] bg-surface" />
                <span className="h-2.5 w-2.5 rounded-[2px] bg-[rgba(37,99,235,0.15)]" />
                <span className="h-2.5 w-2.5 rounded-[2px] bg-[rgba(37,99,235,0.4)]" />
                <span className="h-2.5 w-2.5 rounded-[2px] bg-[rgba(37,99,235,0.75)]" />
                <span className="h-2.5 w-2.5 rounded-[2px] bg-[var(--accent)]" />
                <span>More</span>
              </div>
            </div>
          </motion.div>

          {/* Grid: Pinned Repositories */}
          <div>
            <h3 className="text-sm font-bold text-foreground uppercase tracking-widest flex items-center gap-2 mb-4">
              <BookOpen className="h-4.5 w-4.5 text-accent" /> Pinned Repositories
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {pinnedRepos.map((repo, idx) => (
                <motion.div
                  key={idx}
                  variants={scaleIn}
                  className="glass border-white/[0.05] hover:border-primary/45 rounded-2xl p-5 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <a
                        href={`${profile.github}/${repo.name}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-bold text-foreground hover:text-accent flex items-center gap-2 transition-colors"
                      >
                        <Folder className="h-4 w-4 text-primary" />
                        {repo.name}
                      </a>
                      <span className="text-[10px] font-semibold text-muted-foreground uppercase border border-border bg-surface px-2 py-0.5 rounded-full">
                        Public
                      </span>
                    </div>
                    <p className="mt-3.5 text-xs text-muted-foreground leading-normal min-h-[48px]">
                      {repo.description}
                    </p>
                  </div>

                  <div className="mt-5 border-t border-border/40 pt-3 flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <span className={`h-2.5 w-2.5 rounded-full ${repo.langColor}`} />
                      <span>{repo.language}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Star className="h-3.5 w-3.5" /> {repo.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork className="h-3.5 w-3.5" /> {repo.forks}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* Right: Language Metrics & Counters (col-span-4) */}
        <div className="lg:col-span-4 grid gap-6">
          
          {/* Card: Languages */}
          <motion.div variants={fadeUp} className="glass border-white/[0.05] rounded-3xl p-5">
            <h3 className="text-sm font-bold text-foreground uppercase tracking-widest mb-4">
              Most Used Languages & Frameworks
            </h3>
            
            <ul className="space-y-3.5">
              {languages.map((l) => (
                <li key={l.name}>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-foreground">{l.name}</span>
                    <span className="text-accent font-mono">{l.pct}%</span>
                  </div>
                  <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-surface">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${l.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                      className={`h-full rounded-full ${l.color}`}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Grid: Stats Counter items */}
          <div className="grid gap-4 grid-cols-2">
            {counters.map((c, idx) => (
              <motion.div
                key={idx}
                variants={scaleIn}
                className="glass border-white/[0.05] rounded-2xl p-5 flex flex-col justify-between"
              >
                <Counter to={c.to} suffix="+" />
                <p className="mt-2.5 text-[10px] text-muted-foreground uppercase font-bold tracking-wider leading-none">
                  {c.label}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>

      <div className="mt-8 flex justify-center">
        <motion.a
          variants={fadeUp}
          whileHover={{ scale: 1.03 }}
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-primary text-primary-foreground shadow-[var(--shadow-glow)] px-6 py-3 text-sm font-semibold cursor-pointer"
        >
          <Github className="h-4.5 w-4.5" /> View GitHub Profile
        </motion.a>
      </div>
    </Section>
  );
}
