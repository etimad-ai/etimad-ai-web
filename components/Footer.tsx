import { Wordmark } from "./Logo";
import { nav, company } from "@/lib/content";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink-950">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Wordmark />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist-400">
              {company.tagline} We design, fine-tune, and deploy AI systems the
              enterprise can actually trust.
            </p>
            <a
              href={`mailto:${company.email}`}
              className="mt-4 inline-block text-sm text-brand-300 transition-colors hover:text-brand-200"
            >
              {company.email}
            </a>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-mist-500">
              Explore
            </h4>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-mist-200 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-mist-500">
              Registered office
            </h4>
            <address className="mt-4 text-sm not-italic leading-relaxed text-mist-400">
              {company.legalName}
              <br />
              {company.address.line1}
              <br />
              {company.address.line2}
              <br />
              {company.address.line3}
              <br />
              {company.address.line4}, {company.address.country}
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-mist-500">
            © {2026} {company.legalName}. All rights reserved.
          </p>
          <p className="text-xs text-mist-500">
            Designed &amp; engineered in Hyderabad, India.
          </p>
        </div>
      </div>
    </footer>
  );
}
