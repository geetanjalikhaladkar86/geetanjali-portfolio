import { motion } from "framer-motion";
import { FiDownload, FiEye, FiFileText } from "react-icons/fi";
import { Section } from "./Section";
import { fadeUp } from "@/animations/variants";
import { profile } from "@/data/profile";

export function Resume() {
  return (
    <Section id="resume" eyebrow="Resume" title="Take the details with you.">
      <motion.div
        variants={fadeUp}
        className="glass gradient-border grid gap-8 rounded-3xl p-8 sm:p-10 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center"
      >
        <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-primary/15 text-2xl text-secondary">
          <FiFileText />
        </span>
        <div className="min-w-0">
          <h3 className="text-lg font-semibold">{profile.name} — {profile.role}</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            {profile.experience} · Java, Spring Boot, REST APIs, MySQL, MongoDB ·{" "}
            {profile.location}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
          >
            <FiDownload /> Download
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Preview resume"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-5 py-3 text-sm font-medium"
          >
            <FiEye /> Preview
          </motion.a>
        </div>
      </motion.div>
    </Section>
  );
}
