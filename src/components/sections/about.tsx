import { Section } from "@/components/section";
import { motion } from "framer-motion";
import { Database, Target, Layers } from "lucide-react";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About the project"
      title="A measured experiment in lifting model performance."
      subtitle="Baseline Beater is a structured ML case study that documents every decision behind a 20%+ improvement over a fair baseline — from data hygiene to ensemble selection."
    >
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: Target, title: "Problem Statement", body: "Predict the target class on a tabular dataset where the naive baseline plateaued at ~72% accuracy with poor recall on the minority class." },
          { icon: Database, title: "Dataset", body: "A medium-sized supervised dataset with mixed numeric and categorical features, mild class imbalance, and several columns containing missing values." },
          { icon: Layers, title: "Approach", body: "Treat the baseline as a contract: keep evaluation fixed, then iterate on preprocessing, features, and models to lift the metric honestly." },
        ].map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="rounded-2xl border border-border bg-card p-6 shadow-elegant hover:-translate-y-1 transition-transform"
          >
            <div className="h-10 w-10 rounded-lg bg-gradient-primary grid place-items-center mb-4">
              <c.icon className="h-5 w-5 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold">{c.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
