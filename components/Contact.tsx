"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { ArrowIcon, MailIcon, PinIcon } from "./icons";
import { company } from "@/lib/content";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    message: "",
  });

  const mailto = `mailto:${company.email}?subject=${encodeURIComponent(
    `Project enquiry — ${form.company || form.name || "Etimad AI Labs"}`
  )}&body=${encodeURIComponent(
    `Name: ${form.name}\nCompany: ${form.company}\n\n${form.message}`
  )}`;

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
                onSubmit={(e) => {
                  e.preventDefault();
                  window.location.href = mailto;
                }}
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
                  className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.02] active:scale-95"
                >
                  Send enquiry
                  <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
                <p className="mt-3 text-center text-xs text-mist-500">
                  Opens your mail client — or write us directly at{" "}
                  {company.email}
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
