import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function AgentIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="5" y="8" width="14" height="10" rx="2.5" />
      <path d="M12 8V4M9 4h6" />
      <circle cx="9.5" cy="13" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="13" r="1.1" fill="currentColor" stroke="none" />
      <path d="M3 12v3M21 12v3" />
    </svg>
  );
}

export function ServerIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="4" y="4" width="16" height="7" rx="2" />
      <rect x="4" y="13" width="16" height="7" rx="2" />
      <path d="M8 7.5h.01M8 16.5h.01" />
      <path d="M16 7.5h2M16 16.5h2" />
    </svg>
  );
}

export function PipelineIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="12" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <path d="M8.4 6.8h4.6a2.5 2.5 0 0 1 2.5 2.5v.2M8.4 17.2h4.6a2.5 2.5 0 0 0 2.5-2.5v-.2" />
    </svg>
  );
}

export function RagIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="11" cy="11" r="6" />
      <path d="m20 20-3.5-3.5" />
      <path d="M11 8.5v5M8.5 11h5" />
    </svg>
  );
}

export function AppIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="4" y="3" width="16" height="18" rx="3" />
      <path d="M9 7h6M9 11h6M9 15h3" />
    </svg>
  );
}

export function CompassIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m14.8 9.2-1.6 4.2-4.2 1.6 1.6-4.2 4.2-1.6Z" />
    </svg>
  );
}

export function ShieldIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
      <path d="m9.2 12 1.9 1.9 3.7-3.8" />
    </svg>
  );
}

export function ChartIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M4 4v16h16" />
      <path d="m7 14 3-3 3 2 4-5" />
    </svg>
  );
}

export function KeyIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="8" cy="8" r="4" />
      <path d="m11 11 7 7M16 16l2-2M14 14l2-2" />
    </svg>
  );
}

export function LayersIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="m12 3 8 4.5-8 4.5-8-4.5L12 3Z" />
      <path d="m4 12 8 4.5 8-4.5M4 16.5 12 21l8-4.5" />
    </svg>
  );
}

export function ArrowIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function MailIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function PinIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 21c4-4.5 7-7.8 7-11a7 7 0 1 0-14 0c0 3.2 3 6.5 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function SparkIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path d="M12 8a4 4 0 0 0 4 4 4 4 0 0 0-4 4 4 4 0 0 0-4-4 4 4 0 0 0 4-4Z" />
    </svg>
  );
}

export const iconMap: Record<string, (p: IconProps) => React.JSX.Element> = {
  agent: AgentIcon,
  server: ServerIcon,
  pipeline: PipelineIcon,
  rag: RagIcon,
  app: AppIcon,
  compass: CompassIcon,
  shield: ShieldIcon,
  chart: ChartIcon,
  key: KeyIcon,
  layers: LayersIcon,
};
