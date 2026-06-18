import type { MLMetric, ProjectStat, TimelineItem, FAQItem, TechItem, InsightCard } from "@/types";

export const GITHUB_URL = "https://github.com/KurianJose7586/Task3-NSAIC.git";

export const metrics: MLMetric[] = [
  { name: "Accuracy", baseline: 72.4, improved: 91.8 },
  { name: "F1 Score", baseline: 0.69, improved: 0.9 },
  { name: "Precision", baseline: 0.71, improved: 0.92 },
  { name: "Recall", baseline: 0.67, improved: 0.88 },
  { name: "ROC-AUC", baseline: 0.75, improved: 0.95 },
];

export const stats: ProjectStat[] = [
  { label: "Performance Gain", value: 26, suffix: "%" },
  { label: "Features Engineered", value: 38 },
  { label: "Models Compared", value: 7 },
  { label: "CV Folds", value: 10 },
];

export const timeline: TimelineItem[] = [
  { step: 1, title: "Exploratory Data Analysis", description: "Distribution checks, correlation matrices, and target leakage detection across all features.", tag: "EDA" },
  { step: 2, title: "Handling Missing Values", description: "Median imputation for numeric and mode imputation for categorical fields with missing-indicator flags.", tag: "Preprocessing" },
  { step: 3, title: "Feature Scaling", description: "Standardization for linear models and tree-friendly raw values for ensembles.", tag: "Preprocessing" },
  { step: 4, title: "Feature Engineering", description: "Interaction terms, polynomial features, target encoding, and domain-derived ratios.", tag: "Engineering" },
  { step: 5, title: "Model Switching", description: "Migrated from Logistic Regression baseline to RandomForest and XGBoost ensembles.", tag: "Modeling" },
  { step: 6, title: "Hyperparameter Tuning", description: "RandomizedSearchCV followed by Bayesian optimization for the top two candidates.", tag: "Tuning" },
];

export const faqs: FAQItem[] = [
  { q: "What was the baseline model?", a: "A Logistic Regression trained on the raw dataset with minimal preprocessing — used as a fair benchmark." },
  { q: "Which model produced the best results?", a: "An XGBoost classifier with engineered interaction features and Bayesian-tuned hyperparameters." },
  { q: "How was overfitting prevented?", a: "10-fold stratified cross-validation, early stopping, and a held-out test set never touched during tuning." },
  { q: "Is the project reproducible?", a: "Yes — fixed random seeds, pinned dependencies, and a documented training script in the GitHub repo." },
  { q: "Can I use this on my own dataset?", a: "The pipeline is modular: swap the loader and target column and the preprocessing + modeling steps run end-to-end." },
];

export const technologies: TechItem[] = [
  { name: "Python", category: "Language" },
  { name: "scikit-learn", category: "ML" },
  { name: "XGBoost", category: "ML" },
  { name: "Pandas", category: "Data" },
  { name: "NumPy", category: "Data" },
  { name: "Matplotlib", category: "Viz" },
  { name: "Seaborn", category: "Viz" },
  { name: "Jupyter", category: "Tooling" },
  { name: "Optuna", category: "Tuning" },
  { name: "Git", category: "Tooling" },
];

export const insights: InsightCard[] = [
  { title: "Feature engineering > model complexity", description: "Hand-crafted interaction features lifted F1 more than any single model swap.", author: "Pipeline notes", role: "Engineering" },
  { title: "Validation strategy matters", description: "Stratified k-fold caught a silent class imbalance the baseline split missed entirely.", author: "Pipeline notes", role: "Validation" },
  { title: "Tuning has diminishing returns", description: "After Bayesian search the gains flattened — signal that the data, not the model, was the ceiling.", author: "Pipeline notes", role: "Tuning" },
];
