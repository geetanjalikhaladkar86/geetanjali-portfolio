import { motion } from "framer-motion";
import { Briefcase, Calendar, Check, Layers } from "lucide-react";
import { Section } from "./Section";
import { fadeUp } from "@/animations/variants";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="My Experience"
      title="Where I've Shipped Enterprise Systems."
    >
      <div className="relative pl-6 sm:pl-10 max-w-5xl mx-auto">
        {/* Timeline Line */}
        <span
          aria-hidden
          className="absolute left-1 top-3 h-[calc(100%-1rem)] w-[2px] bg-gradient-to-b from-primary via-accent to-transparent sm:left-3"
        />

        <div className="space-y-10">
          {experiences.map((exp, idx) => (
            <motion.article
              key={idx}
              variants={fadeUp}
              className="glass border-white/[0.05] relative rounded-3xl p-6 sm:p-8 hover:shadow-[var(--shadow-glow)] transition-all duration-300"
            >
              {/* Timeline dot */}
              <span
                aria-hidden
                className="absolute -left-[1.5rem] top-9 h-4 w-4 rounded-full bg-accent border-4 border-background shadow-md sm:-left-[2.2rem]"
              />

              {/* Title & Metadata */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-primary" /> {exp.role}
                  </h3>
                  
                  <div className="mt-1.5 flex items-center gap-2 flex-wrap">
                    <span className="text-base font-semibold text-accent">{exp.company}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-border" />
                    <span className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-semibold border ${
                      exp.type === "Full-time"
                        ? "bg-primary/10 border-primary/20 text-primary"
                        : "bg-accent/10 border-accent/20 text-accent"
                    }`}>
                      {exp.type}
                    </span>
                  </div>
                </div>
                
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold text-muted-foreground shrink-0 w-fit h-fit">
                  <Calendar className="h-3.5 w-3.5 text-primary" />
                  {exp.period}
                </span>
              </div>

              {/* Company Description */}
              <p className="mt-5 text-xs leading-relaxed text-muted-foreground/90 border-l-2 border-primary/20 pl-4">
                {exp.description}
              </p>

              {/* Responsibilities list */}
              <div className="mt-6 border-t border-border/40 pt-5">
                <h4 className="text-xs font-bold text-foreground uppercase tracking-wider flex items-center gap-2 mb-4">
                  <Layers className="h-4 w-4 text-accent" /> Key Contributions
                </h4>
                
                <ul className="grid gap-3 sm:grid-cols-2">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2.5 text-xs text-muted-foreground leading-relaxed">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}
