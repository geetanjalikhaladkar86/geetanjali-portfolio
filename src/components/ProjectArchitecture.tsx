import { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Cpu, Database, Network, ArrowRight, ShieldCheck, Layers, HelpCircle } from "lucide-react";
import { Section } from "./Section";

const flowSteps = [
  {
    id: "frontend",
    title: "React UI Layer",
    tech: "React, TypeScript, Tailwind",
    Icon: Terminal,
    desc: "The client-side interface. Captures user actions and dispatches HTTP requests containing JSON payloads. Stores and appends the JWT bearer token in request headers for authentication.",
    detail: "Sends REST calls, holds state via context, formats JSON payloads"
  },
  {
    id: "rest",
    title: "REST API Gateway",
    tech: "Spring RestController",
    Icon: Network,
    desc: "Ingress point for backend requests. Routes HTTP endpoints (@PostMapping, @GetMapping), performs Bean Validation (@Valid), and returns standardized JSON ResponseEntity objects.",
    detail: "Validates JSON structure, handles exceptions, returns HTTP status codes"
  },
  {
    id: "security",
    title: "Spring Security Core",
    tech: "JWT Filter, AuthenticationProvider",
    Icon: ShieldCheck,
    desc: "The gatekeeper layer. Intercepts incoming requests via a custom JWT filter, extracts the token, validates the signature, and establishes SecurityContext context for role authorization.",
    detail: "Validates JWT signature, populates SecurityContext, blocks unauthorized calls"
  },
  {
    id: "service",
    title: "Service Layer",
    tech: "Spring Services, @Transactional",
    Icon: Layers,
    desc: "Contains the core business rules. Manages transactional scopes (@Transactional), handles logical mapping, invokes external payment or messaging APIs, and coordinates data.",
    detail: "Runs core algorithms, wraps database actions in transactions"
  },
  {
    id: "repository",
    title: "Repository (ORM)",
    tech: "Spring Data JPA, Hibernate",
    Icon: Cpu,
    desc: "The database access abstraction. Translates Java method queries into SQL statements, manages object persistence states (JPA entities), and handles mapping configurations.",
    detail: "Executes JPQL / native queries, maps rows to Java objects (Entities)"
  },
  {
    id: "database",
    title: "MySQL Persistence",
    tech: "MySQL Server, Indexed Tables",
    Icon: Database,
    desc: "Relational database storage. Manages index lookups (e.g., idx_user_email), ensures ACID transactional compliance, and executes optimized queries containing subqueries and joins.",
    detail: "Persists entity states, locks rows for transaction safety, runs fast index searches"
  }
];

export function ProjectArchitecture() {
  const [activeStep, setActiveStep] = useState<string>("frontend");

  return (
    <Section
      id="architecture"
      eyebrow="Architecture Flow"
      title="Request Execution Pipeline."
      subtitle="Interactive map of a standard Spring Boot execution pipeline, from the client interface to the SQL transaction."
    >
      <div className="grid gap-8 lg:grid-cols-12">
        
        {/* Left Side: Interactive Step Flow (col-span-8) */}
        <div className="lg:col-span-8 flex flex-col justify-center">
          
          {/* Horizontal Flow for Large Screens / Vertical Stack for Small Screens */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between relative">
            
            {/* Horizontal Connector Line for Desktop */}
            <div className="absolute top-7 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/30 via-accent/30 to-primary/10 -translate-y-1/2 hidden lg:block -z-10" />

            {flowSteps.map((step, idx) => {
              const StepIcon = step.Icon;
              const isActive = activeStep === step.id;

              return (
                <div
                  key={step.id}
                  className="flex flex-col items-center lg:flex-1 relative cursor-pointer group"
                  onClick={() => setActiveStep(step.id)}
                >
                  {/* Glowing Node Button */}
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-300 ${
                      isActive
                        ? "bg-primary border-primary shadow-[var(--shadow-glow)] text-primary-foreground"
                        : "bg-surface border-border hover:border-accent text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <StepIcon className="h-6 w-6" />
                    
                    {/* Active dynamic ring indicator */}
                    {isActive && (
                      <span className="absolute -inset-1 rounded-2xl border border-accent/40 animate-ping opacity-60" />
                    )}
                  </motion.div>

                  {/* Flow Arrow (only desktop, except last) */}
                  {idx < flowSteps.length - 1 && (
                    <div className="absolute left-[calc(50%+2rem)] top-7 -translate-y-1/2 hidden lg:flex items-center text-accent/60 animate-pulse">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  )}

                  {/* Node Title */}
                  <h4 className="mt-3.5 text-center text-xs font-bold text-foreground uppercase tracking-wider group-hover:text-accent transition-colors">
                    {step.title}
                  </h4>
                  <p className="mt-1 text-[10px] text-muted-foreground font-mono">{step.tech}</p>
                </div>
              );
            })}
          </div>

          {/* Particle Flow Simulation Canvas or Web representation */}
          <div className="mt-12 rounded-2xl bg-surface/30 border border-border/40 p-4 flex items-center justify-center gap-3">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <p className="text-xs text-muted-foreground font-mono">
              Click on any system component above to inspect its execution mechanics and specifications.
            </p>
          </div>
        </div>

        {/* Right Side: Step Inspector Card (col-span-4) */}
        <div className="lg:col-span-4">
          {flowSteps.map((step) => {
            if (step.id !== activeStep) return null;
            const StepIcon = step.Icon;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35 }}
                className="glass border-primary/20 rounded-3xl p-6.5 h-full flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3.5 border-b border-border/40 pb-4">
                    <div className="h-11 w-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                      <StepIcon className="h-5.5 w-5.5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-foreground tracking-wide">{step.title}</h3>
                      <span className="text-[10px] font-mono text-accent uppercase">{step.tech}</span>
                    </div>
                  </div>

                  <div className="mt-5">
                    <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-1.5">
                      <HelpCircle className="h-3.5 w-3.5 text-primary" />
                      Function Description
                    </h4>
                    <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-6 border-t border-border/40 pt-4.5">
                  <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                    Process Payload Details
                  </h4>
                  <p className="mt-2 text-xs text-accent font-mono leading-relaxed bg-surface/50 border border-border/45 rounded-xl p-3">
                    {step.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </Section>
  );
}
