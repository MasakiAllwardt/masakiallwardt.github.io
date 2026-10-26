import type { Entry } from './types';

export const industry: Entry[] = [
  {
    name: 'Capital One',
    role: 'Software Engineer Intern',
    meta: 'Jun – Aug 2026',
    points: [
      'Built an AI-assisted data migration platform (CLI + MCP-enabled automation) used across 22,000+ datasets: 11× faster migrations and 55% less manual effort. Adopted by 3 organizations.',
      'Shipped an automated tool that detects and fixes mismatched metadata across 6,000+ datasets, saving ~460 engineering hours.',
      'Built an autonomous agent that monitors Jenkins builds and searches Slack threads and build history for known fixes, cutting failure triage time by ~40%.',
    ],
  },
  {
    name: 'Apple',
    role: 'Machine Learning Engineer (Contract)',
    meta: 'Jan – May 2026',
    points: [
      'Architected an agentic validation platform that replaced manual QA for large-scale computer vision training pipelines, cutting validation cycle time by 67% across 6 pipeline stages.',
      'Designed an LLM-driven orchestration engine with dependency-aware async execution: 83% lower end-to-end latency, 10,000+ images/day.',
      'Designed a modular "toolbox" of validation filters, from image-quality checks to semantic vision classifiers, so new validation workflows ship without new infrastructure.',
    ],
  },
];

export const education: Entry[] = [
  {
    name: 'UC Berkeley',
    role: 'B.A. Computer Science',
    meta: 'Class of 2028',
  },
];
