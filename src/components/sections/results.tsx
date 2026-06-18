import { Section } from "@/components/section";
import { metrics, insights } from "@/data/project";
import { motion } from "framer-motion";
import { TrendingUp, Quote } from "lucide-react";

export function Results() {
  return (
    <Section
      id="results"
      eyebrow="Results"
      title="Side-by-side: where the gains landed."
    >
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-2xl border border-border bg-card p-6 shadow-elegant overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-muted-foreground border-b border-border">
                <th className="py-3 font-medium">Metric</th>
                <th className="py-3 font-medium">Baseline</th>
                <th className="py-3 font-medium">Improved</th>
                <th className="py-3 font-medium text-right">Lift</th>
              </tr>
            </thead>
            <tbody>
              {metrics.map(m => {
                const lift = ((m.improved - m.baseline) / m.baseline) * 100;
                return (
                  <tr key={m.name} className="border-b border-border last:border-0">
                    <td className="py-3 font-medium">{m.name}</td>
                    <td className="py-3 text-muted-foreground">{m.baseline}</td>
                    <td className="py-3 font-semibold text-gradient-primary">{m.improved}</td>
                    <td className="py-3 text-right">
                      <span className="inline-flex items-center gap-1 text-primary font-semibold">
                        <TrendingUp className="h-3.5 w-3.5" />
                        +{lift.toFixed(1)}%
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="space-y-4">
          {insights.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-5 shadow-elegant"
            >
              <Quote className="h-4 w-4 text-primary mb-2" />
              <h4 className="font-semibold">{c.title}</h4>
              <p className="text-sm text-muted-foreground mt-1">{c.description}</p>
              <div className="mt-3 text-xs text-muted-foreground">
                <span className="font-medium text-foreground">{c.author}</span> · {c.role}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
