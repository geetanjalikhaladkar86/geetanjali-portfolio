import { motion } from "framer-motion";
import { Network, Code, Server, Database, Cpu, ShieldCheck, CreditCard, HeartHandshake } from "lucide-react";
import { Section } from "./Section";
import { scaleIn } from "@/animations/variants";

const services = [
  {
    Icon: Network,
    title: "REST API Development",
    desc: "Designing and developing robust, scalable JSON/REST endpoints with proper HTTP response structures, validation, and full Swagger/OpenAPI specifications."
  },
  {
    Icon: Code,
    title: "Backend Development",
    desc: "Writing clean, modular, and readable core Java business layers adhering to SOLID design principles and standard Java concurrency patterns."
  },
  {
    Icon: Server,
    title: "Spring Boot Development",
    desc: "Building production-ready enterprise applications utilizing Spring MVC, Spring Data JPA, Auto-Configuration, and customizable application properties."
  },
  {
    Icon: Database,
    title: "Database Design",
    desc: "Structuring clean SQL schemas (MySQL) and NoSQL stores (MongoDB). Implementing indexing, complex joins, transactions, and performance optimizations."
  },
  {
    Icon: Cpu,
    title: "Microservices",
    desc: "Architecting decoupled, scalable microservice suites with independent data storage, synchronous/asynchronous inter-service communication, and gateways."
  },
  {
    Icon: ShieldCheck,
    title: "Authentication",
    desc: "Securing applications using Spring Security filter chains, stateless session management, JWT tokens, and field-level encryption protocols."
  },
  {
    Icon: CreditCard,
    title: "Payment Integration",
    desc: "Integrating payment gateway providers (Razorpay, Stripe) with webhook validation, robust security audits, and state-machine transaction logs."
  },
  {
    Icon: HeartHandshake,
    title: "Backend Consulting",
    desc: "Reviewing code, designing application pipelines, recommending schema performance indexes, and mentoring junior developer teams."
  }
];

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="My Services"
      title="Tailored Backend Engineering."
      subtitle="Comprehensive solutions designed for performance, high security, and modular scaling."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, idx) => {
          const ServiceIcon = s.Icon;
          return (
            <motion.div
              key={idx}
              variants={scaleIn}
              className="glass glass-hover border-white/[0.05] rounded-3xl p-6.5 flex flex-col justify-between"
            >
              <div>
                <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4.5">
                  <ServiceIcon className="h-5.5 w-5.5" />
                </div>
                
                <h3 className="text-base font-bold text-foreground tracking-wide">{s.title}</h3>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
