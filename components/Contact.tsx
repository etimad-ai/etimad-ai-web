"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { ArrowIcon, MailIcon, PinIcon } from "./icons";
import { company } from "@/lib/content";

// Cloud Run notification endpoint (notifies the sales team).
const NOTIFY_URL =
  process.env.NEXT_PUBLIC_NOTIFY_URL ??
  "https://etimad-notification-23987395973.asia-south1.run.app/";

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    try {
      const res = await fetch(NOTIFY_URL, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          company: form.company.trim(),
          message: form.message.trim(),
        }),
      });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      setStatus("success");
      setForm({ name: "", company: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  const field =
    "w-full rounded-xl border border-white/10 bg-ink-950/60 px-4 py-3 text-sm text-white placeholder:text-mist-500 outline-none transition-colors focus:border-brand-400/50 focus:ring-2 focus:ring-brand-400/15";

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink-900/50">
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-brand-500/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-accent-500/15 blur-[100px]" />
          <div className="pointer-events-none absolute inset-0 grid-faint opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

          <div className="relative grid gap-12 p-8 sm:p-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
                  <span className="h-px w-6 bg-brand-400/60" />
                  Let&apos;s build
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Tell us what you want to{" "}
                  <span className="text-gradient">automate.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-4 max-w-md text-pretty text-mist-200">
                  Send us the problem — a workflow, a backlog of documents, a
                  process that should run itself. We&apos;ll come back with a
                  concrete, evaluated path to production.
                </p>
              </Reveal>

              <div className="mt-8 space-y-4">
                <a
                  href={`mailto:${company.email}`}
                  className="group flex items-start gap-3.5 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-white/20"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-300 ring-1 ring-brand-400/20">
                    <MailIcon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-mist-500">
                      Email
                    </span>
                    <span className="mt-0.5 block font-medium text-white transition-colors group-hover:text-brand-200">
                      {company.email}
                    </span>
                  </span>
                </a>

                <div className="flex items-start gap-3.5 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-300 ring-1 ring-brand-400/20">
                    <PinIcon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-mist-500">
                      Studio
                    </span>
                    <address className="mt-0.5 block text-sm not-italic leading-relaxed text-mist-200">
                      {company.address.line1}
                      <br />
                      {company.address.line2}
                      <br />
                      {company.address.line3}
                      <br />
                      {company.address.line4}
                    </address>
                  </span>
                </div>
              </div>
            </div>

            <Reveal delay={0.15}>
              <form
                className="rounded-2xl border border-white/10 bg-ink-950/40 p-6 backdrop-blur sm:p-7"
                onSubmit={handleSubmit}
              >
                <div className="space-y-4">
                  <div>
                    <label className="mb-1.5 block text-sm text-mist-200">
                      Name
                    </label>
                    <input
                      required
                      className={field}
                      placeholder="Jane Doe"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm text-mist-200">
                      Company
                    </label>
                    <input
                      className={field}
                      placeholder="Acme Corp"
                      value={form.company}
                      onChange={(e) =>
                        setForm({ ...form, company: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm text-mist-200">
                      What do you want to build?
                    </label>
                    <textarea
                      required
                      rows={4}
                      className={`${field} resize-none`}
                      placeholder="We have thousands of contracts to analyze..."
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.02] active:scale-95 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
                >
                  {status === "submitting" ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-ink-950/30 border-t-ink-950" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send enquiry
                      <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>

                <div
                  className="mt-3 min-h-[1.25rem] text-center text-xs"
                  aria-live="polite"
                >
                  {status === "success" && (
                    <span className="text-brand-300">
                      Thanks — your message is on its way. We&apos;ll be in touch
                      shortly.
                    </span>
                  )}
                  {status === "error" && (
                    <span className="text-amber-300">
                      Something went wrong. Please email us directly at{" "}
                      <a
                        href={`mailto:${company.email}`}
                        className="underline underline-offset-2"
                      >
                        {company.email}
                      </a>
                      .
                    </span>
                  )}
                  {(status === "idle" || status === "submitting") && (
                    <span className="text-mist-500">
                      We&apos;ll never share your details. Goes straight to our
                      team.
                    </span>
                  )}
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
