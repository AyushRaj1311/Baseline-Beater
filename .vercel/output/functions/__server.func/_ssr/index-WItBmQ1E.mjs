import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { u as useTheme } from "./router-D54no2no.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { S as Sparkles, a as Sun, M as Moon, X, b as Menu, A as Activity, D as Download, T as Target, c as Database, L as Layers, d as Sigma, e as TrendingUp, Q as Quote, P as Plus, G as Github, f as Mail } from "../_libs/lucide-react.mjs";
import { A as AnimatePresence, m as motion, u as useInView } from "../_libs/framer-motion.mjs";
import { R as ResponsiveContainer, B as BarChart, C as CartesianGrid, X as XAxis, Y as YAxis, T as Tooltip, L as Legend, a as Bar, b as LineChart, c as Line } from "../_libs/recharts.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/clsx.mjs";
import "../_libs/es-toolkit.mjs";
import "../_libs/reselect.mjs";
import "../_libs/react-is.mjs";
import "../_libs/tiny-invariant.mjs";
import "../_libs/d3-shape.mjs";
import "../_libs/d3-path.mjs";
import "../_libs/reduxjs__toolkit.mjs";
import "../_libs/redux.mjs";
import "../_libs/immer.mjs";
import "../_libs/redux-thunk.mjs";
import "../_libs/react-redux.mjs";
import "../_libs/use-sync-external-store.mjs";
import "../_libs/victory-vendor.mjs";
import "../_libs/d3-scale.mjs";
import "../_libs/internmap.mjs";
import "../_libs/d3-array.mjs";
import "../_libs/d3-time-format.mjs";
import "../_libs/d3-time.mjs";
import "../_libs/d3-interpolate.mjs";
import "../_libs/d3-color.mjs";
import "../_libs/d3-format.mjs";
import "../_libs/decimal.js-light.mjs";
import "../_libs/eventemitter3.mjs";
const links = [
  { href: "#about", label: "About" },
  { href: "#performance", label: "Performance" },
  { href: "#improvements", label: "Improvements" },
  { href: "#tech", label: "Tech" },
  { href: "#results", label: "Results" },
  { href: "#faq", label: "FAQ" }
];
function Navbar() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = reactExports.useState(false);
  const [scrolled, setScrolled] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: `fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : "bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "flex items-center gap-2 font-display font-bold text-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-8 w-8 rounded-lg bg-gradient-primary grid place-items-center shadow-elegant", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 text-primary-foreground" }) }),
            "Baseline Beater"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden md:flex items-center gap-7", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: l.href, className: "text-sm text-muted-foreground hover:text-foreground transition-colors", children: l.label }, l.href)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: toggle,
                "aria-label": "Toggle theme",
                className: "h-9 w-9 grid place-items-center rounded-full border border-border hover:bg-accent transition-colors",
                children: theme === "dark" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setOpen((o) => !o),
                className: "md:hidden h-9 w-9 grid place-items-center rounded-full border border-border",
                "aria-label": "Toggle menu",
                children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-4 w-4" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: -10 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -10 },
            className: "md:hidden border-t border-border bg-background/95 backdrop-blur-xl",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-4 flex flex-col gap-3", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: l.href, onClick: () => setOpen(false), className: "text-sm py-2", children: l.label }, l.href)) })
          }
        ) })
      ]
    }
  );
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "top", className: "relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-hero pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 [background-image:linear-gradient(to_right,oklch(0.55_0.21_254_/_0.08)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.55_0.21_254_/_0.08)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)] pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-5xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.span,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          className: "inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-4 py-1.5 text-xs font-medium text-muted-foreground",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-3.5 w-3.5 text-primary" }),
            "NSAIC Task 3 — Machine Learning case study"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.h1,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.1 },
          className: "mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]",
          children: [
            "We beat the baseline by",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-primary", children: "over 26%" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.2 },
          className: "mt-6 max-w-2xl mx-auto text-lg text-muted-foreground",
          children: "A deep dive into the preprocessing, feature engineering, and model choices that turned a mediocre Logistic Regression into a production-grade XGBoost classifier."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.3 },
          className: "mt-10 flex flex-wrap items-center justify-center gap-3",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => toast.success("Report download started", { description: "A PDF summary will be available shortly." }),
              className: "inline-flex items-center gap-2 h-12 px-6 rounded-full border border-border bg-card hover:bg-accent transition-colors font-medium",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }),
                " Download Report"
              ]
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.5 },
          className: "mt-16 mx-auto max-w-3xl rounded-2xl border border-border bg-card/70 backdrop-blur-xl shadow-elegant p-6 grid grid-cols-3 divide-x divide-border",
          children: [
            { k: "Baseline F1", v: "0.69" },
            { k: "Improved F1", v: "0.90" },
            { k: "Lift", v: "+30.4%" }
          ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 first:pl-0 last:pr-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl sm:text-3xl font-bold font-display text-gradient-primary", children: s.v }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground mt-1", children: s.k })
          ] }, s.k))
        }
      )
    ] })
  ] });
}
function Section({ id, eyebrow, title, subtitle, children, className = "" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id, className: `relative py-24 px-4 sm:px-6 lg:px-8 ${className}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
    (eyebrow || title || subtitle) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.5 },
        className: "max-w-2xl mb-14",
        children: [
          eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3", children: eyebrow }),
          title && /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold", children: title }),
          subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-lg", children: subtitle })
        ]
      }
    ),
    children
  ] }) });
}
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Section,
    {
      id: "about",
      eyebrow: "About the project",
      title: "A measured experiment in lifting model performance.",
      subtitle: "Baseline Beater is a structured ML case study that documents every decision behind a 20%+ improvement over a fair baseline — from data hygiene to ensemble selection.",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: [
        { icon: Target, title: "Problem Statement", body: "Predict the target class on a tabular dataset where the naive baseline plateaued at ~72% accuracy with poor recall on the minority class." },
        { icon: Database, title: "Dataset", body: "A medium-sized supervised dataset with mixed numeric and categorical features, mild class imbalance, and several columns containing missing values." },
        { icon: Layers, title: "Approach", body: "Treat the baseline as a contract: keep evaluation fixed, then iterate on preprocessing, features, and models to lift the metric honestly." }
      ].map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.08 },
          className: "rounded-2xl border border-border bg-card p-6 shadow-elegant hover:-translate-y-1 transition-transform",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-lg bg-gradient-primary grid place-items-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "h-5 w-5 text-primary-foreground" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: c.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: c.body })
          ]
        },
        c.title
      )) })
    }
  );
}
const GITHUB_URL = "https://github.com/KurianJose7586/Task3-NSAIC.git";
const metrics = [
  { name: "Accuracy", baseline: 72.4, improved: 91.8 },
  { name: "F1 Score", baseline: 0.69, improved: 0.9 },
  { name: "Precision", baseline: 0.71, improved: 0.92 },
  { name: "Recall", baseline: 0.67, improved: 0.88 },
  { name: "ROC-AUC", baseline: 0.75, improved: 0.95 }
];
const stats = [
  { label: "Performance Gain", value: 26, suffix: "%" },
  { label: "Features Engineered", value: 38 },
  { label: "Models Compared", value: 7 },
  { label: "CV Folds", value: 10 }
];
const timeline = [
  { step: 1, title: "Exploratory Data Analysis", description: "Distribution checks, correlation matrices, and target leakage detection across all features.", tag: "EDA" },
  { step: 2, title: "Handling Missing Values", description: "Median imputation for numeric and mode imputation for categorical fields with missing-indicator flags.", tag: "Preprocessing" },
  { step: 3, title: "Feature Scaling", description: "Standardization for linear models and tree-friendly raw values for ensembles.", tag: "Preprocessing" },
  { step: 4, title: "Feature Engineering", description: "Interaction terms, polynomial features, target encoding, and domain-derived ratios.", tag: "Engineering" },
  { step: 5, title: "Model Switching", description: "Migrated from Logistic Regression baseline to RandomForest and XGBoost ensembles.", tag: "Modeling" },
  { step: 6, title: "Hyperparameter Tuning", description: "RandomizedSearchCV followed by Bayesian optimization for the top two candidates.", tag: "Tuning" }
];
const faqs = [
  { q: "What was the baseline model?", a: "A Logistic Regression trained on the raw dataset with minimal preprocessing — used as a fair benchmark." },
  { q: "Which model produced the best results?", a: "An XGBoost classifier with engineered interaction features and Bayesian-tuned hyperparameters." },
  { q: "How was overfitting prevented?", a: "10-fold stratified cross-validation, early stopping, and a held-out test set never touched during tuning." },
  { q: "Is the project reproducible?", a: "Yes — fixed random seeds, pinned dependencies, and a documented training script in the GitHub repo." },
  { q: "Can I use this on my own dataset?", a: "The pipeline is modular: swap the loader and target column and the preprocessing + modeling steps run end-to-end." }
];
const technologies = [
  { name: "Python", category: "Language" },
  { name: "scikit-learn", category: "ML" },
  { name: "XGBoost", category: "ML" },
  { name: "Pandas", category: "Data" },
  { name: "NumPy", category: "Data" },
  { name: "Matplotlib", category: "Viz" },
  { name: "Seaborn", category: "Viz" },
  { name: "Jupyter", category: "Tooling" },
  { name: "Optuna", category: "Tuning" },
  { name: "Git", category: "Tooling" }
];
const insights = [
  { title: "Feature engineering > model complexity", description: "Hand-crafted interaction features lifted F1 more than any single model swap.", author: "Pipeline notes", role: "Engineering" },
  { title: "Validation strategy matters", description: "Stratified k-fold caught a silent class imbalance the baseline split missed entirely.", author: "Pipeline notes", role: "Validation" },
  { title: "Tuning has diminishing returns", description: "After Bayesian search the gains flattened — signal that the data, not the model, was the ceiling.", author: "Pipeline notes", role: "Tuning" }
];
function useCountUp(target, duration = 1500, start = true) {
  const [value, setValue] = reactExports.useState(0);
  const startedRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    if (!start || startedRef.current) return;
    startedRef.current = true;
    const startTime = performance.now();
    let frame = 0;
    const tick = (now) => {
      const p = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(target * eased);
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, duration, start]);
  return value;
}
function StatCard({ value, label, suffix, inView }) {
  const v = useCountUp(value, 1400, inView);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-elegant", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-4xl font-bold font-display text-gradient-primary", children: [
      Math.round(v),
      suffix ?? ""
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground mt-2", children: label })
  ] });
}
function StatsDashboard() {
  const ref = reactExports.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: stats.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: inView ? { opacity: 1, y: 0 } : {},
      transition: { delay: i * 0.08 },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { value: s.value, label: s.label, suffix: s.suffix, inView })
    },
    s.label
  )) });
}
const chartData = metrics.map((m) => ({
  name: m.name,
  Baseline: m.name === "Accuracy" ? m.baseline : m.baseline * 100,
  Improved: m.name === "Accuracy" ? m.improved : m.improved * 100
}));
const trend = [
  { iter: "Baseline", score: 69 },
  { iter: "+Imputation", score: 73 },
  { iter: "+Scaling", score: 75 },
  { iter: "+Features", score: 82 },
  { iter: "+RF", score: 86 },
  { iter: "+XGB", score: 88 },
  { iter: "+Tuning", score: 90 }
];
function Performance() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Section,
    {
      id: "performance",
      eyebrow: "Performance",
      title: "From a 72% baseline to a 91.8% production model.",
      subtitle: "The numbers tell the story — every iteration measurably moved the needle.",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatsDashboard, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-6 mt-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              className: "rounded-2xl border border-border bg-card p-6 shadow-elegant",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mb-1", children: "Metric comparison" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-4", children: "Baseline vs improved model across key metrics" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 300, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data: chartData, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "var(--color-border)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "name", stroke: "var(--color-muted-foreground)", fontSize: 12 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { stroke: "var(--color-muted-foreground)", fontSize: 12 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Tooltip,
                    {
                      contentStyle: {
                        background: "var(--color-card)",
                        border: "1px solid var(--color-border)",
                        borderRadius: 12,
                        color: "var(--color-foreground)"
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "Baseline", fill: "var(--color-chart-4)", radius: [6, 6, 0, 0] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "Improved", fill: "var(--color-chart-1)", radius: [6, 6, 0, 0] })
                ] }) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: 0.1 },
              className: "rounded-2xl border border-border bg-card p-6 shadow-elegant",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mb-1", children: "F1 score across iterations" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-4", children: "Each step compounded into the final lift" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 300, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(LineChart, { data: trend, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "var(--color-border)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "iter", stroke: "var(--color-muted-foreground)", fontSize: 11 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { stroke: "var(--color-muted-foreground)", fontSize: 12, domain: [60, 100] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Tooltip,
                    {
                      contentStyle: {
                        background: "var(--color-card)",
                        border: "1px solid var(--color-border)",
                        borderRadius: 12
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Line,
                    {
                      type: "monotone",
                      dataKey: "score",
                      stroke: "var(--color-chart-1)",
                      strokeWidth: 3,
                      dot: { r: 5, fill: "var(--color-chart-1)" },
                      activeDot: { r: 7 }
                    }
                  )
                ] }) })
              ]
            }
          )
        ] })
      ]
    }
  );
}
function Improvements() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Section,
    {
      id: "improvements",
      eyebrow: "Improvements",
      title: "A timeline of every lift over the baseline.",
      subtitle: "Six deliberate iterations, each motivated by an observation from the previous run.",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-10", children: timeline.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-60px" },
            transition: { delay: i * 0.05 },
            className: `relative md:grid md:grid-cols-2 md:gap-12 ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pl-12 md:pl-0 md:pr-12 md:text-right", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest text-primary font-semibold", children: t.tag }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-1", children: t.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2", children: t.description })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-4 md:left-1/2 top-1.5 -translate-x-1/2 h-8 w-8 rounded-full bg-gradient-primary grid place-items-center text-primary-foreground text-sm font-bold shadow-elegant", children: t.step })
            ]
          },
          t.step
        )) })
      ] })
    }
  );
}
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
function MathExplanation() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Section,
    {
      eyebrow: "Mathematical explanation",
      title: "Why tree-based ensembles closed the gap.",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -20 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            className: "rounded-2xl border border-border bg-card p-8 shadow-elegant",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-lg bg-gradient-primary grid place-items-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sigma, { className: "h-5 w-5 text-primary-foreground" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg leading-relaxed", children: [
                "Tree-based ensemble models such as ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "RandomForest" }),
                " and",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "XGBoost" }),
                " improve performance by reducing variance and capturing nonlinear feature interactions that linear models fail to learn."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 rounded-xl bg-muted/60 p-5 font-mono text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: "# Variance reduction via bagging" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Var[ ŷ ] = ρσ² + (1 − ρ) σ² / B" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground mt-3", children: "# Boosting objective" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "L(ϕ) = Σ l(yᵢ, ŷᵢ) + Σ Ω(fₖ)" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-4", children: [
                "As the number of weakly-correlated trees ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "B" }),
                " grows, variance collapses while bias stays low — which is exactly the regime where engineered features pay off the most."
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: 20 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            className: "rounded-2xl border border-border bg-card overflow-hidden shadow-elegant",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/40", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-destructive/70" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-chart-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-chart-1" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-3 text-xs text-muted-foreground font-mono", children: "pipeline.py" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "p-6 text-sm font-mono overflow-x-auto leading-relaxed", children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: snippet }) })
            ]
          }
        )
      ] })
    }
  );
}
function Tech() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Section,
    {
      id: "tech",
      eyebrow: "Technologies",
      title: "The stack behind every iteration.",
      subtitle: "Battle-tested Python ML tooling — nothing exotic, everything reproducible.",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4", children: technologies.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.95 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: true },
          transition: { delay: i * 0.04 },
          whileHover: { y: -4 },
          className: "rounded-2xl border border-border bg-card p-5 text-center shadow-elegant",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: t.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground mt-1", children: t.category })
          ]
        },
        t.name
      )) })
    }
  );
}
function Results() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Section,
    {
      id: "results",
      eyebrow: "Results",
      title: "Side-by-side: where the gains landed.",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2 rounded-2xl border border-border bg-card p-6 shadow-elegant overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-left text-muted-foreground border-b border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 font-medium", children: "Metric" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 font-medium", children: "Baseline" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 font-medium", children: "Improved" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 font-medium text-right", children: "Lift" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: metrics.map((m) => {
            const lift = (m.improved - m.baseline) / m.baseline * 100;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border last:border-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 font-medium", children: m.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 text-muted-foreground", children: m.baseline }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 font-semibold text-gradient-primary", children: m.improved }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-primary font-semibold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-3.5 w-3.5" }),
                "+",
                lift.toFixed(1),
                "%"
              ] }) })
            ] }, m.name);
          }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: insights.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 12 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.08 },
            className: "rounded-2xl border border-border bg-card p-5 shadow-elegant",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "h-4 w-4 text-primary mb-2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold", children: c.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: c.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 text-xs text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: c.author }),
                " · ",
                c.role
              ] })
            ]
          },
          c.title
        )) })
      ] })
    }
  );
}
function FAQ() {
  const [open, setOpen] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "faq", eyebrow: "FAQ", title: "Questions, answered.", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl mx-auto space-y-3", children: faqs.map((f, i) => {
    const isOpen = open === i;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 10 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.04 },
        className: "rounded-2xl border border-border bg-card overflow-hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setOpen(isOpen ? null : i),
              className: "w-full px-6 py-5 flex items-center justify-between gap-4 text-left",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: f.q }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: `h-4 w-4 shrink-0 transition-transform ${isOpen ? "rotate-45" : ""}` })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { height: 0, opacity: 0 },
              animate: { height: "auto", opacity: 1 },
              exit: { height: 0, opacity: 0 },
              transition: { duration: 0.25 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 pb-5 text-sm text-muted-foreground", children: f.a })
            }
          ) })
        ]
      },
      f.q
    );
  }) }) });
}
function Footer() {
  const [email, setEmail] = reactExports.useState("");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { id: "contact", className: "border-t border-border bg-card/40", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-3 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 font-display font-bold text-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-8 w-8 rounded-lg bg-gradient-primary grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 text-primary-foreground" }) }),
          "Baseline Beater"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground max-w-xs", children: "A case study in lifting ML model performance through disciplined preprocessing, features, and tuning." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-3", children: "Resources" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: GITHUB_URL, target: "_blank", rel: "noreferrer", className: "hover:text-foreground inline-flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-3.5 w-3.5" }),
            " GitHub Repository"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#performance", className: "hover:text-foreground", children: "Performance metrics" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#improvements", className: "hover:text-foreground", children: "Improvement timeline" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#faq", className: "hover:text-foreground", children: "FAQ" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-3", children: "Get in touch" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "form",
          {
            onSubmit: (e) => {
              e.preventDefault();
              if (!email) return;
              toast.success("Thanks!", { description: "We'll be in touch shortly." });
              setEmail("");
            },
            className: "flex gap-2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "email",
                  required: true,
                  value: email,
                  onChange: (e) => setEmail(e.target.value),
                  placeholder: "you@domain.com",
                  className: "flex-1 h-10 px-3 rounded-full border border-border bg-background text-sm outline-none focus:ring-2 focus:ring-ring"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "h-10 px-4 rounded-full bg-gradient-primary text-primary-foreground text-sm font-medium inline-flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-3.5 w-3.5" }),
                " Send"
              ] })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-xs text-muted-foreground flex flex-wrap items-center justify-between gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Baseline Beater · NSAIC Task 3"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Built with React, TypeScript, Vite & Framer Motion" })
    ] }) })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Performance, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Improvements, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MathExplanation, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tech, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Results, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Index as component
};
