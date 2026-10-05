"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Flame, Compass, Cpu, Palette } from "lucide-react";

export default function About() {
  const metrics = [
    { label: "Years of Experience", value: "2+", unit: "Yrs", desc: "Building secure & scalable web apps", icon: Flame },
    { label: "Current Role", value: "Web", unit: "Dev", desc: "Web Developer @ Systema, Uttara, Dhaka", icon: Zap },
    { label: "Education", value: "BSc", unit: "CSE", desc: "Uttara University — Expected 2027", icon: Compass },
  ];

  return (
    <section id="about" className="relative py-24 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto z-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Manifesto */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-2">

          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
            I build <span className="text-gradient-multi">secure & scalable</span> web applications.
          </h2>

          <div className="space-y-4 text-neutral-300 text-base sm:text-lg font-light leading-relaxed">
            <p>
              I am Shimul — a Laravel Developer with 2 years of professional experience developing and maintaining web applications using PHP and Laravel, currently working at Systema in Uttara, Dhaka.
            </p>
            <p>
              Passionate about building RESTful APIs, architecting MySQL databases, and writing clean, maintainable MVC-based code. I collaborate closely with teams using Git, JIRA, and Docker to deliver features on time.
            </p>
          </div>

          {/* Interactive Core Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="p-5 rounded-2xl glass-panel border border-white/10 hover:border-amber-400/30 transition-all group">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-amber-400/10 text-amber-400 group-hover:scale-110 transition-transform">
                  <Palette className="w-4 h-4" />
                </div>
                <h4 className="font-semibold text-white text-sm">Backend Mastery</h4>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                Skilled in RESTful API design, MySQL schema architecture, and Laravel MVC patterns for clean, maintainable backends.
              </p>
            </div>

            <div className="p-5 rounded-2xl glass-panel border border-white/10 hover:border-cyan-400/30 transition-all group">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-cyan-400/10 text-cyan-400 group-hover:scale-110 transition-transform">
                  <Cpu className="w-4 h-4" />
                </div>
                <h4 className="font-semibold text-white text-sm">DevOps & Collaboration</h4>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                Proficient with Git version control, Docker containerization, JIRA project management, and agile team workflows.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Key Metrics Bento Cards */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-3xl glass-panel border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between aspect-square group"
              >
                <div className="flex justify-between items-start">
                  <Icon className="w-5 h-5 text-neutral-400 group-hover:text-amber-400 transition-colors" />
                  <span className="text-[10px] font-mono text-neutral-500 uppercase">
                    KPI 0{idx + 1}
                  </span>
                </div>

                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-gradient-amber transition-all">
                      {m.value}
                    </span>
                    <span className="text-xs font-mono text-neutral-400">{m.unit}</span>
                  </div>
                  <h3 className="text-xs font-semibold text-neutral-200 mt-1">{m.label}</h3>
                  <p className="text-[11px] text-neutral-400 leading-tight mt-1 line-clamp-2 font-light">
                    {m.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
