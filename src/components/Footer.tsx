import { Mail, Github, Linkedin, Heart } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background/50 backdrop-blur-xs">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center">
        
        {/* Left Side: Made credits */}
        <div className="flex flex-col gap-2">
          <p className="text-sm text-muted-foreground">
            Made with <Heart className="inline h-3.5 w-3.5 text-primary fill-primary animate-pulse" /> by {profile.shortName}
          </p>
          <p className="text-xs text-muted-foreground/60 font-mono">
            Powered by React + TypeScript + Tailwind CSS
          </p>
        </div>

        {/* Right Side: Social links & Copyright */}
        <div className="flex flex-wrap items-center gap-5 sm:gap-6">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground hover:text-white transition-colors"
          >
            <Github className="h-4.5 w-4.5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-white transition-colors"
          >
            <Linkedin className="h-4.5 w-4.5" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-muted-foreground hover:text-white transition-colors"
          >
            <Mail className="h-4.5 w-4.5" />
          </a>
          <span className="text-xs text-muted-foreground/60 border-l border-border/80 pl-5 font-medium">
            © {new Date().getFullYear()} Geetanjali Khaladkar
          </span>
        </div>

      </div>
    </footer>
  );
}
