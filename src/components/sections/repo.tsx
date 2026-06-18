import { Section } from "@/components/section";
import { Github, Star, GitFork, ExternalLink } from "lucide-react";
import { GITHUB_URL } from "@/data/project";
import { motion } from "framer-motion";

export function Repo() {
  return (
    <Section eyebrow="Repository" title="Explore the full implementation on GitHub.">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl border border-border bg-card shadow-elegant overflow-hidden"
      >
        <div className="p-8 md:p-10 grid md:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-gradient-primary grid place-items-center">
                <Github className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <div className="font-mono text-sm text-muted-foreground">KurianJose7586</div>
                <h3 className="text-xl font-semibold">Task3-NSAIC</h3>
              </div>
            </div>
            <p className="mt-4 text-muted-foreground max-w-xl">
              The complete notebook, preprocessing pipeline, model training scripts, and evaluation
              artifacts that produced the 20%+ lift over the baseline.
            </p>
            <div className="mt-5 flex items-center gap-5 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><Star className="h-4 w-4" /> Open source</span>
              <span className="inline-flex items-center gap-1.5"><GitFork className="h-4 w-4" /> Reproducible</span>
            </div>
          </div>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-elegant hover:shadow-glow transition justify-self-start md:justify-self-end"
          >
            Open repository <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </motion.div>
    </Section>
  );
}
