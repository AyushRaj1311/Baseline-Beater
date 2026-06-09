import { Section } from "@/components/section";
import { timeline } from "@/data/project";
import { motion } from "framer-motion";

export function Improvements() {
  return (
    <Section
      id="improvements"
      eyebrow="Improvements"
      title="A timeline of every lift over the baseline."
      subtitle="Six deliberate iterations, each motivated by an observation from the previous run."
    >
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
        <div className="space-y-10">
          {timeline.map((t, i) => (
            <motion.div
              key={t.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.05 }}
              className={`relative md:grid md:grid-cols-2 md:gap-12 ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`}
            >
              <div className="pl-12 md:pl-0 md:pr-12 md:text-right">
                <span className="text-xs uppercase tracking-widest text-primary font-semibold">{t.tag}</span>
                <h3 className="text-xl font-semibold mt-1">{t.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{t.description}</p>
              </div>
              <div className="hidden md:block" />
              <div className="absolute left-4 md:left-1/2 top-1.5 -translate-x-1/2 h-8 w-8 rounded-full bg-gradient-primary grid place-items-center text-primary-foreground text-sm font-bold shadow-elegant">
                {t.step}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
