"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Stagger, staggerItem } from "./Reveal";
import { process } from "@/lib/content";

export function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          eyebrow="How we work"
          title={
            <>
              From idea to owned system,{" "}
              <span className="text-gradient">in weeks not quarters.</span>
            </>
          }
          intro="A delivery model designed to de-risk AI: prove value early, harden relentlessly, and hand you the keys."
        />

        <Stagger className="relative mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:grid-cols-4">
          {process.map((p) => (
            <motion.div
              key={p.step}
              variants={staggerItem}
              className="group relative bg-ink-900/60 p-7 backdrop-blur transition-colors hover:bg-ink-850/80"
            >
              <div className="font-display text-5xl font-semibold text-white/[0.07] transition-colors group-hover:text-brand-400/20">
                {p.step}
              </div>
              <div className="mt-2 h-px w-10 bg-gradient-to-r from-brand-400 to-transparent" />
              <h3 className="mt-4 text-lg font-semibold text-white">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mist-400">
                {p.body}
              </p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
