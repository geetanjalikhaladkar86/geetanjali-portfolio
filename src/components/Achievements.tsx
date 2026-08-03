import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Coins, Users, CheckCircle, Server, Code } from "lucide-react";
import { Section } from "./Section";
import { fadeUp, scaleIn } from "@/animations/variants";

const achievementsDetails = [
  {
    title: "Enterprise Backend Applications",
    desc: "Designed and engineered low-latency, scalable JVM enterprise structures.",
    Icon: Server,
    color: "text-primary"
  },
  {
    title: "100+ APIs Developed",
    desc: "Shipped secure, standard-compliant REST/JSON endpoints to production.",
    Icon: Code,
    color: "text-accent"
  },
  {
    title: "Production Deployments",
    desc: "Successfully deployed server applications to public cloud systems.",
    Icon: CheckCircle,
    color: "text-emerald-400"
  },
  {
    title: "Payment Gateway Integration",
    desc: "Configured secure merchant transaction APIs (Razorpay) with webhooks.",
    Icon: Coins,
    color: "text-yellow-400"
  },
  {
    title: "JWT Authentication",
    desc: "Enforced secure stateless session tokens via Spring Security filters.",
    Icon: ShieldCheck,
    color: "text-purple-400"
  },
  {
    title: "Microservices",
    desc: "Deconstructed monolithic architectures into decoupled scaling instances.",
    Icon: Cpu,
    color: "text-pink-400"
  },
  {
    title: "Team Coordination",
    desc: "Managed sprint cycle allocations, review boards, and deployment handoffs.",
    Icon: Users,
    color: "text-teal-400"
  }
];

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="Achievements" title="Commercial & Technical Milestones.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {achievementsDetails.map((a, idx) => {
          const AchIcon = a.Icon;
          return (
            <motion.div
              key={idx}
              variants={scaleIn}
              className="glass glass-hover border-white/[0.05] rounded-3xl p-6.5 flex flex-col justify-between"
            >
              <div>
                <div className={`h-11 w-11 rounded-xl bg-surface border border-border flex items-center justify-center ${a.color} mb-4.5`}>
                  <AchIcon className="h-5.5 w-5.5" />
                </div>
                
                <h3 className="text-base font-bold text-foreground tracking-wide">{a.title}</h3>
                <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">{a.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
