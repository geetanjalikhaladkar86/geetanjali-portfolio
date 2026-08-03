import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { navLinks, profile } from "@/data/profile";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let prevScrolled = false;
    const onScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== prevScrolled) {
        prevScrolled = isScrolled;
        setScrolled(isScrolled);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 px-2.5 sm:px-4 md:px-6"
      >
        <nav
          className={`mx-auto mt-2 sm:mt-4 flex max-w-7xl items-center justify-between gap-2 rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2 sm:py-2.5 transition-all duration-300 ${
            scrolled
              ? "glass border-white/[0.08] shadow-[var(--shadow-card)] backdrop-blur-md"
              : "border-transparent bg-transparent"
          }`}
        >
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group shrink-0">
            <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent font-mono text-sm font-bold text-white shadow-md shadow-primary/20 group-hover:scale-105 transition-transform duration-300">
              GK
              <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="truncate text-xs font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors hidden sm:inline max-w-[130px] md:max-w-none">
              {profile.shortName}
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden items-center gap-0.5 xl:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative rounded-lg px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-normal text-muted-foreground transition-all hover:bg-surface hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex shrink-0 items-center gap-2">
            <a
              href={profile.resumeUrl}
              download
              className="hidden rounded-xl bg-primary hover:bg-primary/95 text-primary-foreground shadow-[var(--shadow-glow)] px-4 py-2 text-[11px] font-bold transition-all hover:scale-[1.03] active:scale-[0.98] sm:flex items-center gap-1.5"
            >
              <Download className="h-3.5 w-3.5" />
              Resume
            </a>

            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-border bg-surface text-foreground xl:hidden hover:border-primary/50 cursor-pointer"
            >
              {open ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Backdrop & Modal Drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-md xl:hidden"
            />

            {/* Mobile Drawer Menu Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              className="glass fixed inset-x-3 top-16 z-50 mx-auto max-w-md rounded-2xl p-4 shadow-2xl border border-border bg-card max-h-[85vh] overflow-y-auto xl:hidden"
            >
              <div className="flex items-center justify-between border-b border-border/40 pb-3 mb-2">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent font-mono text-xs font-bold text-white">
                    GK
                  </div>
                  <span className="text-xs font-bold text-foreground">Navigation</span>
                </div>
                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="grid h-8 w-8 place-items-center rounded-lg bg-surface text-foreground hover:bg-surface-elevated cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="grid gap-1">
                {navLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3.5 py-2.5 text-sm font-semibold text-muted-foreground hover:bg-surface hover:text-foreground transition-colors flex items-center justify-between"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
              
              <a
                href={profile.resumeUrl}
                download
                onClick={() => setOpen(false)}
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground shadow-md"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
