const items = [
  "LLM Fine-Tuning",
  "On-Prem Deployment",
  "Agentic Workflows",
  "RAG Pipelines",
  "Vector Infrastructure",
  "Open-Weight Models",
  "Eval-Driven Delivery",
  "Private Cloud",
  "Guardrails & Observability",
  "Digital Transformation",
];

export function Marquee() {
  return (
    <section className="relative border-y border-white/10 bg-ink-900/40 py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-950 to-transparent" />
      <div className="flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10">
          {[...items, ...items].map((item, i) => (
            <span
              key={i}
              className="flex shrink-0 items-center gap-3 whitespace-nowrap text-sm font-medium text-mist-400"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400/70" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
