import { Github, Mail, Sparkles } from "lucide-react";
import { GITHUB_URL } from "@/data/project";
import { toast } from "sonner";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  return (
    <footer id="contact" className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="h-8 w-8 rounded-lg bg-gradient-primary grid place-items-center">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </span>
            Baseline Beater
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            A case study in lifting ML model performance through disciplined preprocessing, features, and tuning.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Resources</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href={GITHUB_URL} target="_blank" rel="noreferrer" className="hover:text-foreground inline-flex items-center gap-1.5"><Github className="h-3.5 w-3.5" /> GitHub Repository</a></li>
            <li><a href="#performance" className="hover:text-foreground">Performance metrics</a></li>
            <li><a href="#improvements" className="hover:text-foreground">Improvement timeline</a></li>
            <li><a href="#faq" className="hover:text-foreground">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Get in touch</h4>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!email) return;
              toast.success("Thanks!", { description: "We'll be in touch shortly." });
              setEmail("");
            }}
            className="flex gap-2"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@domain.com"
              className="flex-1 h-10 px-3 rounded-full border border-border bg-background text-sm outline-none focus:ring-2 focus:ring-ring"
            />
            <button className="h-10 px-4 rounded-full bg-gradient-primary text-primary-foreground text-sm font-medium inline-flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5" /> Send
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-xs text-muted-foreground flex flex-wrap items-center justify-between gap-2">
          <div>© {new Date().getFullYear()} Baseline Beater · NSAIC Task 3</div>
          <div>Built with React, TypeScript, Vite & Framer Motion</div>
        </div>
      </div>
    </footer>
  );
}
