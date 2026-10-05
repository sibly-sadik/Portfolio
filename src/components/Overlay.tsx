"use client";

import React from "react";
import { motion, useTransform, MotionValue } from "framer-motion";
import { ChevronDown, Sparkles, Terminal, Code2 } from "lucide-react";

interface OverlayProps {
  scrollProgress: MotionValue<number>;
  rawScrollProgress?: MotionValue<number>;
}

export default function Overlay({ scrollProgress }: OverlayProps) {
  // Section 1: Hero Intro (0% - 22%)
  const s1Opacity = useTransform(scrollProgress, [0, 0.14, 0.22], [1, 1, 0]);
  const s1Y = useTransform(scrollProgress, [0, 0.22], [0, -80]);
  const s1Scale = useTransform(scrollProgress, [0, 0.22], [1, 0.92]);

  // Section 2: Narrative 1 - Left Aligned (22% - 48%)
  const s2Opacity = useTransform(scrollProgress, [0.22, 0.30, 0.42, 0.48], [0, 1, 1, 0]);
  const s2Y = useTransform(scrollProgress, [0.22, 0.30, 0.42, 0.48], [60, 0, 0, -60]);

  // Section 3: Narrative 2 - Right Aligned (50% - 75%)
  const s3Opacity = useTransform(scrollProgress, [0.50, 0.58, 0.68, 0.75], [0, 1, 1, 0]);
  const s3Y = useTransform(scrollProgress, [0.50, 0.58, 0.68, 0.75], [60, 0, 0, -60]);

  // Section 4: Lead-in to Selected Works (78% - 100%)
  const s4Opacity = useTransform(scrollProgress, [0.78, 0.86, 0.95, 1], [0, 1, 1, 0.2]);
  const s4Y = useTransform(scrollProgress, [0.78, 0.86, 0.95, 1], [50, 0, 0, -30]);

  // Progress Bar / Scroll Indicator
  const progressPercent = useTransform(scrollProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-between p-6 sm:p-12 md:p-16">
      {/* SECTION 1: 0% Scroll - Hero (Center) */}
      <motion.div
        style={{ opacity: s1Opacity, y: s1Y, scale: s1Scale }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
      >
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-white/10 mb-6 shadow-lg shadow-black/40">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[11px] font-mono tracking-widest text-neutral-300 uppercase">
            Open to Mid-Level Opportunities — Dhaka, BD
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight text-white mb-4">
          <span className="block text-gradient-multi">Shimul.</span>
          <span className="block text-neutral-300 text-3xl sm:text-5xl md:text-6xl font-light tracking-normal mt-1">
            Laravel Developer.
          </span>
        </h1>

        <p className="max-w-xl text-neutral-400 text-sm sm:text-base md:text-lg font-light leading-relaxed mt-2 text-balance">
          Motivated Laravel Developer with 2+ years building secure, scalable web applications using PHP, MySQL, REST APIs, and MVC architecture.
        </p>

        {/* Scroll Indicator */}
        <div className="mt-12 flex flex-col items-center gap-2">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-neutral-400 uppercase">
            <span>Scroll to explore</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          </div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1"
          >
            <div className="w-1.5 h-2 rounded-full bg-amber-400" />
          </motion.div>
        </div>
      </motion.div>

      {/* SECTION 2: ~30% Scroll - Narrative 1 (Left Aligned) */}
      <motion.div
        style={{ opacity: s2Opacity, y: s2Y }}
        className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-12 md:px-24 max-w-4xl"
      >
        <div className="glass-panel p-6 sm:p-10 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl bg-black/40">
          <div className="flex items-center gap-2 mb-4">


          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4 leading-tight">
            I build <span className="text-gradient-cyan">robust backends</span>.
          </h2>

          <p className="text-neutral-300 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-xl">
            Designing, developing, and documenting RESTful APIs for web and mobile applications — with security, scalability, and clean MVC architecture at the core.
          </p>

          <div className="flex flex-wrap gap-2.5 mt-6">
            <span className="px-3 py-1 text-xs font-mono rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-300">
              PHP & Laravel
            </span>
            <span className="px-3 py-1 text-xs font-mono rounded-full bg-white/5 border border-white/10 text-neutral-300">
              REST APIs
            </span>
            <span className="px-3 py-1 text-xs font-mono rounded-full bg-white/5 border border-white/10 text-neutral-300">
              MySQL
            </span>
          </div>
        </div>
      </motion.div>

      {/* SECTION 3: ~60% Scroll - Narrative 2 (Right Aligned) */}
      <motion.div
        style={{ opacity: s3Opacity, y: s3Y }}
        className="absolute inset-0 flex flex-col justify-center items-end px-6 sm:px-12 md:px-24"
      >
        <div className="glass-panel p-6 sm:p-10 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl bg-black/40 max-w-2xl text-right">
          <div className="flex items-center justify-end gap-2 mb-4">

          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4 leading-tight">
            Bridging <span className="text-gradient-amber">frontend</span> and{" "}
            <span className="text-white">backend</span>.
          </h2>

          <p className="text-neutral-300 text-base sm:text-lg md:text-xl font-light leading-relaxed">
            From ReactJS and Vue.js interfaces to Laravel-powered APIs and Docker deployments — building complete, production-ready applications with Git workflows and JIRA collaboration.
          </p>

          <div className="flex flex-wrap justify-end gap-2.5 mt-6">
            <span className="px-3 py-1 text-xs font-mono rounded-full bg-amber-950/60 border border-amber-800/50 text-amber-300">
              ReactJS & Vue.js
            </span>
            <span className="px-3 py-1 text-xs font-mono rounded-full bg-white/5 border border-white/10 text-neutral-300">
              Docker
            </span>
            <span className="px-3 py-1 text-xs font-mono rounded-full bg-white/5 border border-white/10 text-neutral-300">
              Git & JIRA
            </span>
          </div>
        </div>
      </motion.div>

      {/* SECTION 4: ~85% - 100% Scroll - Transition to Work */}
      <motion.div
        style={{ opacity: s4Opacity, y: s4Y }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
      >
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/15 shadow-2xl backdrop-blur-2xl bg-black/50 max-w-xl">

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
            Curated archive of web applications, kinetic interfaces, and creative engineering experiments.
          </p>
          <a
            href="#projects"
            className="pointer-events-auto inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-semibold text-sm transition-all duration-300 shadow-lg shadow-amber-500/25 group"
          >
            <span>Explore Archive</span>
            <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
          </a>
        </div>
      </motion.div>

      {/* Persistent Minimal Scroll Indicator at bottom corner */}
      <div className="absolute bottom-6 right-6 hidden sm:flex items-center gap-3 glass-panel px-3.5 py-1.5 rounded-full border border-white/10 pointer-events-none">
        <span className="text-[10px] font-mono tracking-wider text-neutral-400 uppercase">
          Scrolly Progress
        </span>
        <div className="w-16 h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-amber-400"
            style={{ width: progressPercent }}
          />
        </div>
      </div>
    </div>
  );
}
