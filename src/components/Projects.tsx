import { motion } from "framer-motion";
import { Github, ExternalLink, Cpu, AlertTriangle, Calendar, Layers, CheckSquare } from "lucide-react";
import { Section } from "./Section";
import { scaleIn } from "@/animations/variants";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="My Projects"
      title="Enterprise Backend Systems."
      subtitle="Selected platforms designed around secure REST controllers, real-time data flows, and optimized queries."
    >
      <div className="grid gap-8">
        {projects.map((p, i) => (
          <motion.article
            key={p.name}
            variants={scaleIn}
            className="glass border-white/[0.05] relative overflow-hidden rounded-3xl p-5 sm:p-8 group hover:shadow-[var(--shadow-glow)] transition-all duration-500"
          >
            {/* Ambient background glow on hover */}
            <div
              aria-hidden
              className="glow-orb absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-40"
            />

            <div className="grid gap-6 lg:grid-cols-12 relative z-10">
              
              {/* Left Side: Banner & Metadata (col-span-4) */}
              <div className="lg:col-span-4 flex flex-col justify-between">
                <div>
                  <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border/60">
                    <img
                      src={p.bannerUrl}
                      alt={`${p.name} marketplace banner`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                    
                    <span className="absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-lg bg-background/90 backdrop-blur-xs px-2.5 py-1 text-[10px] font-semibold text-accent border border-white/[0.08]">
                      <Calendar className="h-3 w-3" />
                      {p.duration}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl sm:text-2xl font-bold tracking-tight text-foreground">{p.name}</h3>
                  <p className="mt-1 text-xs sm:text-sm font-medium text-accent">{p.tagline}</p>
                </div>

                {/* Tech tags */}
                <div className="mt-5 sm:mt-6 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-border/80 bg-surface/50 px-2.5 py-1 font-mono text-[10px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Middle: Features & Responsibilities (col-span-4) */}
              <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-border/40 pt-5 lg:pt-0 lg:pl-6">
                <div>
                  <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {p.features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 sm:mt-6">
                  <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-3">My Responsibilities</h4>
                  <ul className="space-y-2">
                    {p.responsibilities.map((r, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                        <CheckSquare className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Side: Architecture & Challenges & Buttons (col-span-4) */}
              <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-border/40 pt-5 lg:pt-0 lg:pl-6 flex flex-col justify-between">
                
                <div>
                  <div className="rounded-2xl bg-surface/40 border border-border/40 p-3.5 sm:p-4">
                    <h4 className="text-xs font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5 mb-2">
                      <Cpu className="h-4 w-4 text-accent" />
                      Architecture Layer
                    </h4>
                    <p className="text-xs text-muted-foreground font-mono leading-relaxed">{p.architecture}</p>
                  </div>

                  <div className="mt-3.5 sm:mt-4 rounded-2xl bg-primary/5 border border-primary/20 p-3.5 sm:p-4">
                    <h4 className="text-xs font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5 mb-2">
                      <AlertTriangle className="h-4 w-4 text-accent animate-pulse" />
                      Engineering Challenge
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{p.challenges}</p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row gap-2.5 sm:gap-3 w-full">
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-surface border border-border hover:border-primary/50 text-foreground font-medium text-xs px-4.5 py-3 cursor-pointer w-full sm:w-auto"
                  >
                    <Github className="h-3.5 w-3.5" />
                    GitHub Source
                  </a>
                  <a
                    href={p.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-xs px-4.5 py-3 cursor-pointer w-full sm:w-auto"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Live Demo
                  </a>
                </div>

              </div>

            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
