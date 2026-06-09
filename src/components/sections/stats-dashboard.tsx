import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { stats } from "@/data/project";
import { useCountUp } from "@/hooks/use-count-up";

function StatCard({ value, label, suffix, inView }: { value: number; label: string; suffix?: string; inView: boolean }) {
  const v = useCountUp(value, 1400, inView);
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-elegant">
      <div className="text-4xl font-bold font-display text-gradient-primary">
        {Math.round(v)}{suffix ?? ""}
      </div>
      <div className="text-sm text-muted-foreground mt-2">{label}</div>
    </div>
  );
}

export function StatsDashboard() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: i * 0.08 }}
        >
          <StatCard value={s.value} label={s.label} suffix={s.suffix} inView={inView} />
        </motion.div>
      ))}
    </div>
  );
}
