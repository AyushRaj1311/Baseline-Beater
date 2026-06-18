import { Section } from "@/components/section";
import { technologies } from "@/data/project";
import { motion } from "framer-motion";

export function Tech() {
  return (
    <Section
      id="tech"
      eyebrow="Technologies"
      title="The stack behind every iteration."
      subtitle="Battle-tested Python ML tooling — nothing exotic, everything reproducible."
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {technologies.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-border bg-card p-5 text-center shadow-elegant"
          >
            <div className="font-semibold">{t.name}</div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{t.category}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
