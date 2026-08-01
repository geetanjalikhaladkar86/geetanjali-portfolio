import { motion } from "framer-motion";
import { Cpu, Database, Terminal, Cloud, Layers, Check } from "lucide-react";
import { Section } from "./Section";
import { fadeUp, scaleIn, stagger } from "@/animations/variants";
import { skillGroups } from "@/data/skills";

const iconMap: Record<string, any> = {
  Backend: Cpu,
  Database: Database,
  Tools: Terminal,
  Cloud: Cloud,
  Integrations: Layers,
};

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="My Skills"
      title="Backend Architecture & JVM Engineering."
      subtitle="A collection of core languages, database systems, and integration protocols built for enterprise scaling."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => {
          const Icon = iconMap[group.title] || Cpu;
          
          return (
            <motion.div
              key={group.title}
              variants={scaleIn}
              className="glass glass-hover border-white/[0.05] rounded-3xl p-6 flex flex-col justify-between"
            >
              <div>
                {/* Group Header */}
                <div className="flex items-center gap-3 border-b border-border/40 pb-4">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-foreground tracking-wide uppercase">
                    {group.title}
                  </h3>
                </div>

                {/* Skills tags */}
                <motion.ul variants={stagger} className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <motion.li
                      key={item}
                      variants={fadeUp}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-border/80 bg-surface/50 hover:bg-surface hover:border-primary/40 px-3.5 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground transition-all duration-300"
                    >
                      <Check className="h-3 w-3 text-accent shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
