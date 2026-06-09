import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({ id, eyebrow, title, subtitle, children, className = "" }: {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative py-24 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mb-14"
          >
            {eyebrow && (
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">
                {eyebrow}
              </span>
            )}
            {title && <h2 className="text-3xl sm:text-4xl font-bold">{title}</h2>}
            {subtitle && <p className="mt-4 text-muted-foreground text-lg">{subtitle}</p>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
