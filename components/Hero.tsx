"use client";

import { motion } from "framer-motion";
import { ArrowIcon, SparkIcon } from "./icons";
import { stats } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28"
    >
      {/* Aurora backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-brand-500/20 blur-[120px] animate-aurora" />
        <div className="absolute right-[8%] top-[18%] h-[26rem] w-[26rem] rounded-full bg-accent-500/15 blur-[110px] animate-aurora [animation-delay:-6s]" />
        <div className="absolute left-[6%] bottom-[2%] h-[24rem] w-[24rem] rounded-full bg-brand-400/10 blur-[110px] animate-aurora [animation-delay:-12s]" />
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 grid-faint opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.a
            href="#services"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-mist-200 backdrop-blur transition-colors hover:border-white/20"
          >
            <SparkIcon className="h-4 w-4 text-brand-300" />
            Enterprise AI, deployed inside your perimeter
            <ArrowIcon className="h-3.5 w-3.5 translate-x-0 text-mist-400 transition-transform group-hover:translate-x-0.5" />
          </motion.a>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
          >
            <span className="text-gradient-soft">AI agents that do</span>
            <br className="hidden sm:block" />{" "}
            <span className="text-gradient">enterprise work.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mx-auto mt-6 max-w-2xl text-pretty text-base text-mist-200 sm:text-lg"
          >
            We build agents, fine-tune open-source models, and engineer the
            agentic data pipelines behind them — then deploy it all on-prem or in
            your cloud. Your data, your weights, your stack.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href="#contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.03] active:scale-95 sm:w-auto"
            >
              Start a project
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#services"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/[0.07] sm:w-auto"
            >
              Explore capabilities
            </a>
          </motion.div>
        </div>

        {/* Stat band */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-ink-900/60 px-5 py-6 text-center backdrop-blur"
            >
              <div className="font-display text-2xl font-semibold text-gradient sm:text-3xl">
                {s.value}
              </div>
              <div className="mx-auto mt-2 max-w-[16ch] text-xs leading-relaxed text-mist-400">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
