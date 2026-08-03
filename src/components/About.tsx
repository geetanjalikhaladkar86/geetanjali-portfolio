import { motion } from "framer-motion";
import { Shield, Database, Zap, Users, Code, CheckCircle2, Cpu, Activity, Briefcase } from "lucide-react";
import { Section } from "./Section";
import { fadeUp, scaleIn } from "@/animations/variants";
import { profile } from "@/data/profile";

const specializations = [
  {
    Icon: Code,
    title: "Enterprise Backend Dev",
    description: "Designing secure, high-throughput microservices using Java and Spring Boot.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    Icon: Shield,
    title: "Authentication & Security",
    description: "Implementing stateless JWT sessions, authorization filters, and secure encryption.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
  {
    Icon: Database,
    title: "Database Architecture",
    description: "Modeling MySQL and MongoDB schemas, query optimization, indexing, and transactions.",
    color: "text-violet-500",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
  },
  {
    Icon: Zap,
    title: "Integrations & API Design",
    description: "Connecting Razorpay Payment Gateways, WhatsApp Cloud APIs, and Swagger documentation.",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
  },
  {
    Icon: Users,
    title: "Team Coordination",
    description: "Leading sprints, reviewing code, mentoring junior devs, and aligning with QA/DevOps.",
    color: "text-rose-500",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
  },
  {
    Icon: Cpu,
    title: "Performance Optimization",
    description: "Asynchronous task execution, connection pool tuning, and query speedups.",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
  },
];

const responsibilities = [
  "Production Support & Live Bug Resolving",
  "REST API Design & Security Layering",
  "Sprint Planning & Task Assignment",
  "Mentoring Junior Developers",
  "Database Indexing & Query Tuning",
  "Payment & Third-party Integrations",
];

const industries = ["Automotive Marketplace", "Live Auctions & Bidding", "Healthcare Systems", "Vehicle Financing"];

export function About() {
  return (
    <Section id="about" eyebrow="About Me" title="Engineered for Performance and Security.">
      <div className="grid gap-6 lg:grid-cols-12">

        {/* Left side: Bio + Stats + Responsibilities */}
        <motion.div
          variants={scaleIn}
          className="lg:col-span-7 flex flex-col gap-5"
        >
          {/* Bio Card */}
          <div className="glass border-white/[0.05] rounded-3xl p-5 sm:p-8 relative overflow-hidden">
            {/* Decorative gradient blob */}
            <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-10 w-10 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground tracking-tight">Who I Am &amp; What I Do</h3>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                I am a specialized{" "}
                <strong className="font-bold text-foreground bg-primary/10 px-1.5 py-0.5 rounded-md">Java Backend Developer</strong>
                {" "}and{" "}
                <strong className="font-bold text-foreground bg-primary/10 px-1.5 py-0.5 rounded-md">Backend Team Coordinator</strong>
                {" "}with {profile.experience} of experience architecting secure, reliable systems. I design and build the core engines that power high-traffic enterprise platforms.
              </p>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                Currently, at{" "}
                <strong className="font-bold text-primary">Caryanam India Pvt Ltd</strong>
                , I coordinate the backend engineering sprint cycles, code reviews, and cross-team integration tasks (QA, Frontend, DevOps) while actively writing code for complex payment and notification systems.
              </p>
            </div>
          </div>

          {/* Industries Worked Card */}
          <div className="glass border-white/[0.05] rounded-3xl p-5 sm:p-6.5 relative overflow-hidden">
            <div className="absolute -top-8 -right-8 h-28 w-28 rounded-full bg-accent/10 blur-2xl pointer-events-none" />
            <h3 className="text-xs sm:text-sm font-bold text-foreground uppercase tracking-widest flex items-center gap-2 relative">
              <Activity className="h-4.5 w-4.5 text-accent" /> Industries Worked
            </h3>
            <div className="mt-4 flex flex-wrap gap-2 relative">
              {industries.map((ind, i) => (
                <span
                  key={i}
                  className="rounded-xl bg-primary/10 border border-primary/25 text-primary text-xs font-semibold px-3 py-1.5 sm:px-4 sm:py-2 hover:bg-primary/20 hover:border-primary/40 transition-all cursor-default"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>

          {/* Responsibilities Card */}
          <div className="glass border-white/[0.05] rounded-3xl p-5 sm:p-7">
            <h4 className="text-xs sm:text-sm font-bold text-foreground uppercase tracking-wider mb-4 sm:mb-5 flex items-center gap-2">
              <span className="h-1.5 w-5 rounded-full bg-primary inline-block" />
              Current Core Responsibilities
            </h4>
            <ul className="grid gap-3 sm:grid-cols-2 text-xs sm:text-sm">
              {responsibilities.map((resp, i) => (
                <li key={i} className="flex items-center gap-2.5 group">
                  <CheckCircle2 className="h-4 w-4 sm:h-4.5 sm:w-4.5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Right side: Specializations */}
        <motion.div
          variants={scaleIn}
          className="lg:col-span-5 flex flex-col gap-5"
        >
          {/* Specializations Card */}
          <div className="glass border-white/[0.05] rounded-3xl p-5 sm:p-6.5 flex-1">
            <h3 className="text-sm font-bold text-foreground uppercase tracking-widest mb-5">Technical Focus</h3>
            <div className="grid gap-3">
              {specializations.map((spec, i) => {
                const SpecIcon = spec.Icon;
                return (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="flex gap-3.5 p-3.5 rounded-2xl bg-surface hover:bg-surface-elevated transition-all border border-transparent hover:border-border/40 group hover:-translate-y-0.5"
                  >
                    <div className={`h-9 w-9 shrink-0 rounded-xl ${spec.bg} border ${spec.border} flex items-center justify-center`}>
                      <SpecIcon className={`h-4 w-4 ${spec.color}`} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{spec.title}</h4>
                      <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">{spec.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

      </div>
    </Section>
  );
}
