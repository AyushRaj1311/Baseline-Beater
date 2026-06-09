import { motion } from "framer-motion";
import { ArrowRight, Github, Download, Activity } from "lucide-react";
import { GITHUB_URL } from "@/data/project";
import { toast } from "sonner";

export function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      <div className="absolute inset-0 [background-image:linear-gradient(to_right,oklch(0.55_0.21_254_/_0.08)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.55_0.21_254_/_0.08)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)] pointer-events-none" />

      <div className="relative mx-auto max-w-5xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-4 py-1.5 text-xs font-medium text-muted-foreground"
        >
          <Activity className="h-3.5 w-3.5 text-primary" />
          NSAIC Task 3 — Machine Learning case study
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]"
        >
          We beat the baseline by{" "}
          <span className="text-gradient-primary">over 26%</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground"
        >
          A deep dive into the preprocessing, feature engineering, and model choices that turned a
          mediocre Logistic Regression into a production-grade XGBoost classifier.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          
          <button
            onClick={() => toast.success("Report download started", { description: "A PDF summary will be available shortly." })}
            className="inline-flex items-center gap-2 h-12 px-6 rounded-full border border-border bg-card hover:bg-accent transition-colors font-medium"
          >
            <Download className="h-4 w-4" /> Download Report
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 mx-auto max-w-3xl rounded-2xl border border-border bg-card/70 backdrop-blur-xl shadow-elegant p-6 grid grid-cols-3 divide-x divide-border"
        >
          {[
            { k: "Baseline F1", v: "0.69" },
            { k: "Improved F1", v: "0.90" },
            { k: "Lift", v: "+30.4%" },
          ].map(s => (
            <div key={s.k} className="px-4 first:pl-0 last:pr-0">
              <div className="text-2xl sm:text-3xl font-bold font-display text-gradient-primary">{s.v}</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.k}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
