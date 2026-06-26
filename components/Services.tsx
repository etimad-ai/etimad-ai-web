"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Stagger, staggerItem } from "./Reveal";
import { iconMap, ArrowIcon } from "./icons";
import { services } from "@/lib/content";

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              Six disciplines, one outcome:{" "}
              <span className="text-gradient">AI in production.</span>
            </>
          }
          intro="From the model to the pipeline to the application, we own the full stack so your AI works the day it ships — and keeps working."
        />

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <motion.article
                key={s.id}
                variants={staggerItem}
                className="group relative flex flex-col overflow-hidden rounded-2xl border-hair p-6 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-500/0 blur-3xl transition-all duration-500 group-hover:bg-brand-500/20" />

                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-transparent text-brand-300">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="relative mt-5 text-lg font-semibold text-white">
                  {s.title}
                </h3>
                <p className="relative mt-2.5 flex-1 text-sm leading-relaxed text-mist-200">
                  {s.blurb}
                </p>

                <ul className="relative mt-5 space-y-2 border-t border-white/10 pt-4">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2.5 text-[0.82rem] text-mist-400"
                    >
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-brand-400"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m5 13 4 4L19 7" />
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </Stagger>

        <div className="mt-10 flex justify-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm font-medium text-brand-300 transition-colors hover:text-brand-200"
          >
            Not sure where to start? Let&apos;s scope it together
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
