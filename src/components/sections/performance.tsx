import { Section } from "@/components/section";
import { StatsDashboard } from "./stats-dashboard";
import {
  Bar, BarChart, CartesianGrid, Legend, Line, LineChart,
  ResponsiveContainer, Tooltip, XAxis, YAxis,
} from "recharts";
import { metrics } from "@/data/project";
import { motion } from "framer-motion";

const chartData = metrics.map(m => ({
  name: m.name,
  Baseline: m.name === "Accuracy" ? m.baseline : m.baseline * 100,
  Improved: m.name === "Accuracy" ? m.improved : m.improved * 100,
}));

const trend = [
  { iter: "Baseline", score: 69 },
  { iter: "+Imputation", score: 73 },
  { iter: "+Scaling", score: 75 },
  { iter: "+Features", score: 82 },
  { iter: "+RF", score: 86 },
  { iter: "+XGB", score: 88 },
  { iter: "+Tuning", score: 90 },
];

export function Performance() {
  return (
    <Section
      id="performance"
      eyebrow="Performance"
      title="From a 72% baseline to a 91.8% production model."
      subtitle="The numbers tell the story — every iteration measurably moved the needle."
    >
      <StatsDashboard />

      <div className="grid lg:grid-cols-2 gap-6 mt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-border bg-card p-6 shadow-elegant"
        >
          <h3 className="font-semibold mb-1">Metric comparison</h3>
          <p className="text-xs text-muted-foreground mb-4">Baseline vs improved model across key metrics</p>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis dataKey="name" stroke="var(--color-muted-foreground)" fontSize={12} />
              <YAxis stroke="var(--color-muted-foreground)" fontSize={12} />
              <Tooltip
                contentStyle={{
                  background: "var(--color-card)",
                  border: "1px solid var(--color-border)",
                  borderRadius: 12,
                  color: "var(--color-foreground)",
                }}
              />
              <Legend />
              <Bar dataKey="Baseline" fill="var(--color-chart-4)" radius={[6, 6, 0, 0]} />
              <Bar dataKey="Improved" fill="var(--color-chart-1)" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl border border-border bg-card p-6 shadow-elegant"
        >
          <h3 className="font-semibold mb-1">F1 score across iterations</h3>
          <p className="text-xs text-muted-foreground mb-4">Each step compounded into the final lift</p>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={trend}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis dataKey="iter" stroke="var(--color-muted-foreground)" fontSize={11} />
              <YAxis stroke="var(--color-muted-foreground)" fontSize={12} domain={[60, 100]} />
              <Tooltip
                contentStyle={{
                  background: "var(--color-card)",
                  border: "1px solid var(--color-border)",
                  borderRadius: 12,
                }}
              />
              <Line
                type="monotone"
                dataKey="score"
                stroke="var(--color-chart-1)"
                strokeWidth={3}
                dot={{ r: 5, fill: "var(--color-chart-1)" }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </Section>
  );
}
