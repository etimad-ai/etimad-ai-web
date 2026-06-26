export const company = {
  name: "Etimad AI Labs",
  legalName: "Etimad AI Labs Private Limited",
  domain: "etimad.ai",
  email: "contact@etimad.ai",
  tagline: "Enterprise AI, engineered for trust.",
  meaning:
    "Etimad (اعتماد) — trust, reliance. The principle we build every system on.",
  address: {
    line1: "Workflo, Hitex Bizness Square",
    line2: "4th Floor, Unit 405–411, Bizness Square",
    line3: "H.No. 1-98/3/5/23 to 27, Jubilee Enclave",
    line4: "Madhapur, Hyderabad, Telangana 500081",
    country: "India",
  },
};

export type Service = {
  id: string;
  title: string;
  blurb: string;
  points: string[];
  icon: string;
};

export const services: Service[] = [
  {
    id: "agents",
    title: "Enterprise AI Agents",
    blurb:
      "Autonomous and human-in-the-loop agents that execute real work across your systems — not demos, but production workflows with guardrails, observability, and audit trails.",
    points: [
      "Tool-using, multi-step agentic workflows",
      "Human-in-the-loop approval gates",
      "Full tracing, evals & guardrails",
    ],
    icon: "agent",
  },
  {
    id: "oss",
    title: "Fine-Tuned OSS, Deployed On-Prem",
    blurb:
      "We fine-tune and deploy open-source models inside your perimeter — your data never leaves the building. Own your weights, own your stack, eliminate per-token risk.",
    points: [
      "On-prem & private-cloud deployment",
      "LoRA / full fine-tuning on your data",
      "Quantization & inference optimization",
    ],
    icon: "server",
  },
  {
    id: "pipelines",
    title: "Agentic Data Pipelines",
    blurb:
      "The unglamorous foundation that makes agents reliable: ingestion, cleaning, embedding, and governance pipelines purpose-built to feed agentic workflows at scale.",
    points: [
      "Ingestion from any enterprise source",
      "Embedding & vector infrastructure",
      "Lineage, quality & governance",
    ],
    icon: "pipeline",
  },
  {
    id: "rag",
    title: "RAG & Fine-Tuning",
    blurb:
      "Retrieval that actually retrieves the right thing, paired with fine-tuning when prompting isn't enough. We pick the right tool — and prove it with evals.",
    points: [
      "Hybrid & re-ranked retrieval",
      "Domain & instruction fine-tuning",
      "Eval-driven accuracy gains",
    ],
    icon: "rag",
  },
  {
    id: "apps",
    title: "Enterprise Applications",
    blurb:
      "End-to-end products that put AI in the hands of your teams — secure, branded, and built to integrate with the systems your business already runs on.",
    points: [
      "Custom AI-native applications",
      "SSO, RBAC & enterprise integration",
      "Designed for adoption, not novelty",
    ],
    icon: "app",
  },
  {
    id: "consulting",
    title: "Strategy & Consulting",
    blurb:
      "Digital transformation that ships. We help you find the highest-leverage use cases, de-risk them, and build a roadmap your board and your engineers both believe in.",
    points: [
      "AI readiness & opportunity mapping",
      "Architecture & build-vs-buy guidance",
      "Hands-on delivery, not slideware",
    ],
    icon: "compass",
  },
];

export const stats = [
  { value: "100%", label: "On-prem capable — your data stays yours" },
  { value: "OSS", label: "Open-weight models you fully own" },
  { value: "24/7", label: "Agentic workflows that never sleep" },
  { value: "0", label: "Per-token lock-in on owned deployments" },
];

export const principles = [
  {
    title: "Security by default",
    body: "On-prem and private-cloud first. Your data, your weights, your perimeter — air-gapped when it needs to be.",
    icon: "shield",
  },
  {
    title: "Evidence over hype",
    body: "Every system ships with evals. We measure accuracy, latency, and cost before we call anything done.",
    icon: "chart",
  },
  {
    title: "Built to be owned",
    body: "No black boxes. You get the models, the pipelines, and the documentation to run it all yourself.",
    icon: "key",
  },
  {
    title: "Engineered to last",
    body: "Production-grade from day one — observability, CI, and guardrails, not throwaway prototypes.",
    icon: "layers",
  },
];

export const process = [
  {
    step: "01",
    title: "Discover",
    body: "We map your workflows, data, and constraints to find where AI creates real leverage — and where it doesn't.",
  },
  {
    step: "02",
    title: "Prototype",
    body: "A working, evaluated proof-of-value in weeks. We prove the accuracy and ROI before scaling spend.",
  },
  {
    step: "03",
    title: "Harden",
    body: "Guardrails, security review, observability, and fine-tuning to take the system to production quality.",
  },
  {
    step: "04",
    title: "Deploy & Own",
    body: "Shipped into your environment with the docs and training for your team to operate it independently.",
  },
];

export const founders = [
  { name: "Mohammad Suhail", role: "Founder & Director" },
  { name: "Abdul Jabbar", role: "Founder & Director" },
  { name: "Tanveer Iqbal", role: "Founder & Director" },
  { name: "Zafar Iqbal", role: "Founder & Director" },
];

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Process", href: "#process" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];
