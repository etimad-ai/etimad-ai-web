"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Stagger, staggerItem } from "./Reveal";
import { founders } from "@/lib/content";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function Team() {
  return (
    <section id="team" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Who we are"
          title={
            <>
              Founder-led, <span className="text-gradient">hands on the keyboard.</span>
            </>
          }
          intro="Etimad AI Labs is built and run by four engineers and operators who ship the work themselves — not a layer of account managers between you and the build."
        />

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {founders.map((f) => (
            <motion.div
              key={f.name}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-2xl border-hair p-6 text-center transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-brand-500/10 to-transparent" />
              <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400/25 via-accent-500/20 to-transparent ring-1 ring-white/10">
                <span className="font-display text-2xl font-semibold text-white">
                  {initials(f.name)}
                </span>
              </div>
              <h3 className="relative mt-5 font-semibold text-white">{f.name}</h3>
              <p className="relative mt-1 text-sm text-brand-300">{f.role}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
