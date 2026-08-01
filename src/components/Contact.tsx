import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Check, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { Section } from "./Section";
import { fadeUp } from "@/animations/variants";
import { profile } from "@/data/profile";

const details = [
  { Icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { Icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
  { Icon: Linkedin, label: "LinkedIn", value: "geetanjali-khaladkar", href: profile.linkedin },
  { Icon: Github, label: "GitHub", value: profile.githubUser, href: profile.github },
  { Icon: MapPin, label: "Location", value: profile.location },
];

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1200);
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact Me"
      title="Start a Backend conversation."
      subtitle="Available for team coordinator roles, system design audits, or Java backend engineering positions."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr] max-w-6xl mx-auto">
        
        {/* Contact Info Cards */}
        <motion.div
          variants={fadeUp}
          className="glass border-white/[0.05] rounded-3xl p-6.5 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-lg font-bold text-foreground tracking-wide mb-6">Contact Channels</h3>
            
            <ul className="space-y-4">
              {details.map(({ Icon, label, value, href }, idx) => (
                <li key={idx} className="flex items-center gap-4 bg-surface/40 hover:bg-surface border border-border/40 hover:border-primary/20 rounded-2xl p-3.5 transition-all duration-300">
                  <div className="h-10 w-10 shrink-0 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider leading-none">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-1.5 block truncate text-sm font-semibold text-foreground hover:text-accent transition-colors flex items-center gap-1"
                      >
                        {value}
                        <ArrowUpRight className="h-3 w-3 text-muted-foreground" />
                      </a>
                    ) : (
                      <p className="mt-1.5 truncate text-sm font-semibold text-foreground">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </motion.div>

        {/* Contact Form */}
        <motion.form
          variants={fadeUp}
          onSubmit={onSubmit}
          className="glass border-white/[0.05] rounded-3xl p-6.5 sm:p-8 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-lg font-bold text-foreground tracking-wide mb-6">Send an Inquiry</h3>
            
            <div className="grid gap-4.5 sm:grid-cols-2">
              <label className="grid gap-2 text-xs font-bold uppercase text-muted-foreground tracking-wider">
                <span>Your Name</span>
                <input
                  required
                  name="name"
                  type="text"
                  className="rounded-xl border border-border bg-surface px-4 py-3.5 text-sm font-medium text-foreground outline-hidden focus:border-primary focus:bg-surface-elevated transition-colors"
                  placeholder="e.g. John Doe"
                />
              </label>
              
              <label className="grid gap-2 text-xs font-bold uppercase text-muted-foreground tracking-wider">
                <span>Your Email</span>
                <input
                  required
                  name="email"
                  type="email"
                  className="rounded-xl border border-border bg-surface px-4 py-3.5 text-sm font-medium text-foreground outline-hidden focus:border-primary focus:bg-surface-elevated transition-colors"
                  placeholder="e.g. name@company.com"
                />
              </label>
            </div>

            <label className="mt-4.5 grid gap-2 text-xs font-bold uppercase text-muted-foreground tracking-wider">
              <span>Message</span>
              <textarea
                required
                name="message"
                rows={5}
                className="resize-none rounded-xl border border-border bg-surface px-4 py-3.5 text-sm font-medium text-foreground outline-hidden focus:border-primary focus:bg-surface-elevated transition-colors"
                placeholder="Write your role details or integration requirement here..."
              />
            </label>
          </div>

          <div className="mt-8">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={status !== "idle"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary/95 text-primary-foreground font-bold text-sm shadow-[var(--shadow-glow)] px-6 py-4 cursor-pointer disabled:opacity-60"
            >
              {status === "sent" ? (
                <>
                  <Check className="h-4.5 w-4.5 text-emerald-400" />
                  Inquiry Dispatched Successfully
                </>
              ) : status === "sending" ? (
                <>
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="h-4.5 w-4.5 rounded-full border-2 border-white/20 border-t-white"
                  />
                  Encrypting & Sending
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Transmit Message
                </>
              )}
            </motion.button>
          </div>
        </motion.form>

      </div>
    </Section>
  );
}
