export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      role="img"
      aria-label="Etimad AI Labs"
    >
      <defs>
        <linearGradient id="etmd-g" x1="0" y1="0" x2="40" y2="40">
          <stop offset="0" stopColor="#5eead4" />
          <stop offset="0.55" stopColor="#38bdf8" />
          <stop offset="1" stopColor="#14b8a6" />
        </linearGradient>
      </defs>
      <rect
        x="1.25"
        y="1.25"
        width="37.5"
        height="37.5"
        rx="11"
        fill="url(#etmd-g)"
        opacity="0.14"
      />
      <rect
        x="1.25"
        y="1.25"
        width="37.5"
        height="37.5"
        rx="11"
        fill="none"
        stroke="url(#etmd-g)"
        strokeWidth="1.4"
        strokeOpacity="0.5"
      />
      {/* Stylized 'e' / shield mark */}
      <path
        d="M27 15.5c-1.4-2.6-4-3.9-7-3.9-4.7 0-8 3.4-8 8.2 0 4.9 3.3 8.3 8.3 8.3 3 0 5.5-1.3 7-3.8"
        fill="none"
        stroke="url(#etmd-g)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M13.5 19.9h11.2"
        stroke="url(#etmd-g)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-8 w-8" />
      <span className="text-[1.05rem] font-semibold tracking-tight text-white">
        Etimad{" "}
        <span className="font-medium text-mist-400">AI&nbsp;Labs</span>
      </span>
    </span>
  );
}
