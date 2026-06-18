export interface MLMetric {
  name: string;
  baseline: number;
  improved: number;
}

export interface ProjectStat {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

export interface TimelineItem {
  step: number;
  title: string;
  description: string;
  tag: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface TechItem {
  name: string;
  category: string;
}

export interface InsightCard {
  title: string;
  description: string;
  author: string;
  role: string;
}
