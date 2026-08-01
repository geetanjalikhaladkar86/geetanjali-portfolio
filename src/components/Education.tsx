import { motion } from "framer-motion";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";
import { Section } from "./Section";
import { fadeUp } from "@/animations/variants";

const education = [
  {
    degree: "Master of Computer Science (MCS)",
    institution: "Pune University (SPPU)",
    period: "2021 — 2023",
    description: "Specialized in advanced database systems, system architecture, object-oriented software engineering, and core JVM computing architectures.",
    courses: ["Advanced Java", "Distributed Systems", "SQL Databases", "Network Security"]
  },
  {
    degree: "Bachelor of Computer Science (BCS)",
    institution: "Pune University (SPPU)",
    period: "2018 — 2021",
    description: "Built strong foundations in structural programming, object-oriented concepts (C++/Java), compiler designs, discrete mathematics, and database management.",
    courses: ["Data Structures", "OOPs Concepts", "RDBMS Concepts", "Software Engineering Foundations"]
  }
];

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="Academic Foundations."
    >
      <div className="relative pl-6 sm:pl-10 max-w-4xl mx-auto">
        {/* Timeline Line */}
        <span
          aria-hidden
          className="absolute left-1 top-3 h-[calc(100%-1rem)] w-[2px] bg-gradient-to-b from-primary via-accent to-transparent sm:left-3"
        />

        <div className="space-y-8">
          {education.map((edu, idx) => (
            <motion.article
              key={idx}
              variants={fadeUp}
              className="glass border-white/[0.05] relative rounded-3xl p-6 sm:p-8 hover:shadow-[var(--shadow-glow)] transition-all duration-300"
            >
              {/* Timeline Dot */}
              <span
                aria-hidden
                className="absolute -left-[1.5rem] top-9 h-4 w-4 rounded-full bg-primary border-4 border-background shadow-md sm:-left-[2.2rem]"
              />

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-accent" />
                    {edu.degree}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-muted-foreground">{edu.institution}</p>
                </div>
                
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-muted-foreground shrink-0 w-fit">
                  <Calendar className="h-3.5 w-3.5 text-primary" />
                  {edu.period}
                </span>
              </div>

              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                {edu.description}
              </p>

              <div className="mt-5 border-t border-border/40 pt-4">
                <span className="text-[10px] font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5 mb-2.5">
                  <BookOpen className="h-3.5 w-3.5 text-accent" /> Key Focus Domains
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {edu.courses.map((course, cIdx) => (
                    <span
                      key={cIdx}
                      className="rounded-lg bg-surface px-2.5 py-1 text-[10px] font-semibold text-muted-foreground"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}
