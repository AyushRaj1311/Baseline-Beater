import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, Github, Sparkles } from "lucide-react";
import { useTheme } from "./theme-provider";
import { GITHUB_URL } from "@/data/project";

const links = [
  { href: "#about", label: "About" },
  { href: "#performance", label: "Performance" },
  { href: "#improvements", label: "Improvements" },
  { href: "#tech", label: "Tech" },
  { href: "#results", label: "Results" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display font-bold text-lg">
          <span className="h-8 w-8 rounded-lg bg-gradient-primary grid place-items-center shadow-elegant">
            <Sparkles className="h-4 w-4 text-primary-foreground" />
          </span>
          Baseline Beater
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="h-9 w-9 grid place-items-center rounded-full border border-border hover:bg-accent transition-colors"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 h-9 px-4 rounded-full bg-gradient-primary text-primary-foreground text-sm font-medium shadow-elegant hover:opacity-90 transition"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <button
            onClick={() => setOpen(o => !o)}
            className="md:hidden h-9 w-9 grid place-items-center rounded-full border border-border"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm py-2">
                  {l.label}
                </a>
              ))}
              <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 h-10 px-4 rounded-full bg-gradient-primary text-primary-foreground text-sm font-medium justify-center">
                <Github className="h-4 w-4" /> View Repo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
