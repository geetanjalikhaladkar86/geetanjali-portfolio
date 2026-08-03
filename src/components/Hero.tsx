import { motion } from "framer-motion";
import { Download, ArrowRight, Server, Shield, Database, Cpu, Code2, Terminal } from "lucide-react";
import { profile } from "@/data/profile";
import { useTypingText } from "@/hooks/useTypingText";
import { fadeUp, stagger } from "@/animations/variants";

const TYPED = [
  "Java Backend Developer",
  "Spring Boot Expert",
  "Microservices Developer",
  "REST API Developer",
  "Backend Team Coordinator",
];

const floaters = [
  { Icon: Code2, className: "left-[5%] top-[15%] text-primary/30", delay: "0s" },
  { Icon: Server, className: "right-[8%] top-[12%] text-accent/30", delay: "-1.5s" },
  { Icon: Database, className: "left-[10%] bottom-[20%] text-primary/20", delay: "-3s" },
  { Icon: Shield, className: "right-[12%] bottom-[15%] text-accent/20", delay: "-2.2s" },
  { Icon: Cpu, className: "right-[4%] top-[45%] text-primary/25", delay: "-4s" },
  { Icon: Terminal, className: "left-[3%] top-[50%] text-accent/25", delay: "-5s" },
];

const statistics = [
  { value: "2+", label: "Years Experience" },
  { value: "10+", label: "Projects Delivered" },
  { value: "8+", label: "Team Members Led" },
  { value: "100+", label: "REST APIs Developed" },
  { value: "JWT", label: "Authentication" },
  { value: "Secure", label: "Payment Gateway" },
];

export function Hero() {
  const typed = useTypingText(TYPED);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-24 pb-12 sm:px-8 lg:pt-32"
    >
      {/* Floating Background Icons */}
      {floaters.map(({ Icon, className, delay }, i) => (
        <span
          key={i}
          aria-hidden
          className={`animate-float pointer-events-none absolute hidden text-4xl md:block ${className}`}
          style={{ animationDelay: delay, animationDuration: "7s" }}
        >
          <Icon />
        </span>
      ))}

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Content */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="lg:col-span-7 text-left"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-primary/60 bg-primary/15 px-3.5 sm:px-5 py-2 sm:py-2.5 text-[11px] sm:text-xs font-semibold text-primary shadow-sm max-w-full leading-tight"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="tracking-wide">Available for Backend Coordinator &amp; Dev Roles</span>
            </motion.div>

            <motion.p variants={fadeUp} className="mt-5 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Welcome to my space
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="mt-2 text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight text-foreground"
            >
              Hi, I&apos;m{" "}
              <span className="text-gradient block bg-gradient-to-r from-primary via-accent to-amber-600 bg-clip-text text-transparent">
                {profile.name}
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 sm:mt-5 min-h-[32px] sm:min-h-[36px] font-mono text-base font-medium text-accent sm:text-xl md:text-2xl"
              aria-live="polite"
            >
              <span>{typed}</span>
              <span className="animate-caret ml-1 font-bold text-primary">|</span>
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-4 sm:mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-lg"
            >
              Specializing in building secure, high-performance distributed systems, robust database engines, and microservices for modern enterprises.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={fadeUp}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href={profile.resumeUrl}
                download
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary/95 text-primary-foreground font-semibold text-sm shadow-[var(--shadow-glow)] px-6 py-3.5 sm:py-4 cursor-pointer w-full sm:w-auto text-center"
              >
                <Download className="h-4.5 w-4.5" /> Download Resume
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface hover:bg-surface-elevated text-foreground font-semibold text-sm px-6 py-3.5 sm:py-4 cursor-pointer w-full sm:w-auto text-center"
              >
                View Projects <ArrowRight className="h-4.5 w-4.5" />
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary/20 bg-primary/10 hover:bg-primary/20 text-accent font-semibold text-sm px-6 py-3.5 sm:py-4 cursor-pointer w-full sm:w-auto text-center"
              >
                Contact Me / Hire
              </motion.a>
            </motion.div>

            {/* Statistics */}
            <motion.div
              variants={fadeUp}
              className="mt-8 grid grid-cols-2 gap-2.5 sm:gap-3 sm:grid-cols-3 border-t border-border/60 pt-6"
            >
              {statistics.map((stat, i) => (
                <div key={i} className="flex flex-col p-3 rounded-2xl bg-surface/40 border border-border/30">
                  <span className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">
                    {stat.value}
                  </span>
                  <span className="mt-0.5 text-[10px] sm:text-[11px] text-muted-foreground tracking-wide font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

          </motion.div>

          {/* Right Column: Premium Server/API flow illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:col-span-5 lg:block relative"
          >
            <div className="relative mx-auto w-full max-w-[420px] aspect-square rounded-3xl glass p-8 flex flex-col justify-between overflow-hidden group border-white/[0.05]">
              {/* Radial gradient backing */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 pointer-events-none" />
              
              {/* Floating tech background nodes */}
              <svg className="absolute inset-0 w-full h-full opacity-35" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="grid-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M 0,50 L 400,50 M 0,150 L 400,150 M 0,250 L 400,250 M 0,350 L 400,350 M 50,0 L 50,400 M 150,0 L 150,400 M 250,0 L 250,400 M 350,0 L 350,400" stroke="url(#grid-grad)" strokeWidth="1" fill="none" />
              </svg>

              {/* API Request Node */}
              <div className="relative flex items-center justify-between border border-primary/20 bg-surface rounded-2xl p-4.5 z-10 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    <Terminal className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-foreground tracking-wide uppercase">REST Endpoint</h4>
                    <p className="text-[10px] font-mono text-accent">POST /api/v1/auth/login</p>
                  </div>
                </div>
                <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-[9px] font-medium text-emerald-400 border border-emerald-500/20">
                  200 OK
                </span>
              </div>

              {/* Data streams / particles flowing down */}
              <div className="flex justify-center items-center my-4 relative h-28 w-full z-10">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {/* Dynamic path lines */}
                  <path d="M 20,0 L 20,40 Q 20,50 50,50 Q 80,50 80,60 L 80,100" stroke="rgba(37, 99, 235, 0.4)" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
                  <path d="M 50,0 L 50,100" stroke="rgba(56, 189, 248, 0.5)" strokeWidth="2" fill="none" />
                  <path d="M 80,0 L 80,40 Q 80,50 50,50 Q 20,50 20,60 L 20,100" stroke="rgba(37, 99, 235, 0.4)" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />

                  {/* Flowing balls */}
                  <motion.circle r="3" fill="var(--accent)"
                    animate={{
                      cx: [50, 50],
                      cy: [0, 100]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <motion.circle r="2" fill="var(--primary)"
                    animate={{
                      cx: [20, 20, 50, 80, 80],
                      cy: [0, 40, 50, 60, 100]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                      delay: 1
                    }}
                  />
                </svg>
              </div>

              {/* Spring Boot App Container */}
              <div className="relative border border-primary/20 bg-surface rounded-2xl p-4.5 z-10 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                    <Server className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-foreground tracking-wide uppercase">Spring Service</h4>
                    <p className="text-[10px] font-mono text-muted-foreground">Spring Security Filter Chain</p>
                  </div>
                </div>
              </div>

              {/* Flowing balls part 2 */}
              <div className="flex justify-center items-center my-4 relative h-16 w-full z-10">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M 50,0 L 50,100" stroke="rgba(56, 189, 248, 0.5)" strokeWidth="2" fill="none" />
                  <motion.circle r="3" fill="var(--accent)"
                    animate={{ cx: [50, 50], cy: [0, 100] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "linear", delay: 0.5 }}
                  />
                </svg>
              </div>

              {/* Database Layer */}
              <div className="relative border border-primary/20 bg-surface rounded-2xl p-4.5 z-10 shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                      <Database className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-foreground tracking-wide uppercase">MySQL Cluster</h4>
                      <p className="text-[10px] font-mono text-muted-foreground">Index Lookup: idx_user_email</p>
                    </div>
                  </div>
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
