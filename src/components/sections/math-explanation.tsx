import { Section } from "@/components/section";
import { motion } from "framer-motion";
import { Sigma } from "lucide-react";

const snippet = `# Final pipeline
from xgboost import XGBClassifier
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer

preproc = ColumnTransformer([
    ("num", numeric_pipeline, numeric_cols),
    ("cat", categorical_pipeline, categorical_cols),
])

model = Pipeline([
    ("prep", preproc),
    ("clf", XGBClassifier(
        n_estimators=600,
        max_depth=6,
        learning_rate=0.05,
        subsample=0.9,
        colsample_bytree=0.8,
        eval_metric="logloss",
    )),
])

model.fit(X_train, y_train)`;

export function MathExplanation() {
  return (
    <Section
      eyebrow="Mathematical explanation"
      title="Why tree-based ensembles closed the gap."
    >
      <div className="grid lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-border bg-card p-8 shadow-elegant"
        >
          <div className="h-10 w-10 rounded-lg bg-gradient-primary grid place-items-center mb-4">
            <Sigma className="h-5 w-5 text-primary-foreground" />
          </div>
          <p className="text-lg leading-relaxed">
            Tree-based ensemble models such as <span className="font-semibold text-foreground">RandomForest</span> and{" "}
            <span className="font-semibold text-foreground">XGBoost</span> improve performance by reducing variance and
            capturing nonlinear feature interactions that linear models fail to learn.
          </p>
          <div className="mt-6 rounded-xl bg-muted/60 p-5 font-mono text-sm">
            <div className="text-muted-foreground"># Variance reduction via bagging</div>
            <div>Var[ ŷ ] = ρσ² + (1 − ρ) σ² / B</div>
            <div className="text-muted-foreground mt-3"># Boosting objective</div>
            <div>L(ϕ) = Σ l(yᵢ, ŷᵢ) + Σ Ω(fₖ)</div>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            As the number of weakly-correlated trees <em>B</em> grows, variance collapses while bias stays low — which is
            exactly the regime where engineered features pay off the most.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-border bg-card overflow-hidden shadow-elegant"
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/40">
            <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-chart-4" />
            <span className="h-2.5 w-2.5 rounded-full bg-chart-1" />
            <span className="ml-3 text-xs text-muted-foreground font-mono">pipeline.py</span>
          </div>
          <pre className="p-6 text-sm font-mono overflow-x-auto leading-relaxed">
            <code>{snippet}</code>
          </pre>
        </motion.div>
      </div>
    </Section>
  );
}
