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
        className="glass gradient-border grid gap-6 sm:gap-8 rounded-3xl p-5 sm:p-10 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center"
      >
        <span className="grid h-14 w-14 sm:h-16 sm:w-16 shrink-0 place-items-center rounded-2xl bg-primary/15 text-xl sm:text-2xl text-primary">
          <FiFileText />
        </span>
        <div className="min-w-0">
          <h3 className="text-base sm:text-lg font-semibold">{profile.name} — {profile.role}</h3>
          <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-muted-foreground">
            {profile.experience} · Java, Spring Boot, REST APIs, MySQL, MongoDB ·{" "}
            {profile.location}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3 w-full sm:w-auto">
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            href={profile.resumeUrl}
            download
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground w-full sm:w-auto"
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
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface px-5 py-3 text-sm font-medium w-full sm:w-auto"
          >
            <FiEye /> Preview
          </motion.a>
        </div>
      </motion.div>
    </Section>
  );
}
