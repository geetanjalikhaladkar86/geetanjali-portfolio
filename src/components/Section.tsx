import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, stagger } from "@/animations/variants";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: {
  id: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 ${className}`}>
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        {(eyebrow || title) && (
          <motion.div variants={fadeUp} className="mb-12 max-w-2xl">
            {eyebrow && (
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary">
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
            )}
            {subtitle && <p className="mt-3 text-base text-muted-foreground">{subtitle}</p>}
          </motion.div>
        )}
        {children}
      </motion.div>
    </section>
  );
}
