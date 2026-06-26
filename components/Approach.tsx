"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Stagger, staggerItem, Reveal } from "./Reveal";
import { iconMap } from "./icons";
import { principles, company } from "@/lib/content";

export function Approach() {
  return (
    <section id="approach" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 grid-faint opacity-30 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="The Etimad way"
              title={
                <>
                  Trust isn&apos;t a tagline.{" "}
                  <span className="text-gradient">
                    It&apos;s our architecture.
                  </span>
                </>
              }
              intro={company.meaning}
            />

            <Reveal delay={0.15}>
              <div className="mt-8 overflow-hidden rounded-2xl border-hair p-6">
                <p className="text-sm leading-relaxed text-mist-200">
                  Most AI projects stall between a flashy demo and a system you
                  can actually trust with production data. We close that gap —
                  with security, evals, and ownership built in from the first
                  commit.
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className="h-8 w-8 rounded-full border border-ink-900 bg-gradient-to-br from-brand-400/40 to-accent-500/40"
                      />
                    ))}
                  </div>
                  <span className="text-xs text-mist-400">
                    Founder-led delivery, end to end
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          <Stagger className="grid gap-4 sm:grid-cols-2">
            {principles.map((p) => {
              const Icon = iconMap[p.icon];
              return (
                <motion.div
                  key={p.title}
                  variants={staggerItem}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-850/60 p-6 transition-colors hover:border-white/20"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-300 ring-1 ring-brand-400/20">
                    <Icon className="h-5.5 w-5.5" />
                  </div>
                  <h3 className="mt-4 font-semibold text-white">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist-400">
                    {p.body}
                  </p>
                </motion.div>
              );
            })}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
