"use client";

import React from "react";
import { motion } from "framer-motion";
import { Box, Code, Sliders, Zap, Terminal } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: { name: string; level: number; note: string }[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Backend Development",
    icon: Code,
    skills: [
      { name: "PHP (OOP)", level: 90, note: "Object-oriented PHP for scalable backend logic" },
      { name: "Laravel Framework", level: 92, note: "MVC architecture, Eloquent ORM, routing & middleware" },
      { name: "MySQL & SQL Database", level: 88, note: "Schema design, complex queries, database optimization" },
      { name: "RESTful API Development", level: 90, note: "API design, documentation, and mobile integration" },
    ],
  },
  {
    title: "Frontend & UI",
    icon: Sliders,
    skills: [
      { name: "ReactJS", level: 82, note: "Component-based UI development and state management" },
      { name: "Vue.js", level: 80, note: "Reactive frontend apps integrated with Laravel backends" },
      { name: "Bootstrap 5", level: 85, note: "Responsive layouts and UI component design" },
      { name: "HTML, CSS & JavaScript", level: 88, note: "Semantic HTML, modern CSS, and vanilla JS" },
    ],
  },
  {
    title: "DevOps & Tooling",
    icon: Terminal,
    skills: [
      { name: "Git Version Control", level: 85, note: "Branching, PRs, code reviews & team collaboration" },
      { name: "Docker", level: 75, note: "Containerized development and deployment environments" },
      { name: "JIRA", level: 85, note: "Agile project tracking, sprint management, and issue logging" },
      { name: "MCP", level: 80, note: "Multi-channel platform integration and workflows" },
    ],
  },
  {
    title: "Ecommerce & Custom Dev",
    icon: Box,
    skills: [
      { name: "Magento (Frontend)", level: 72, note: "Ecommerce frontend development and theming" },
      { name: "MVC Framework", level: 90, note: "Model-View-Controller pattern for clean architecture" },
      { name: "Custom Web Development", level: 88, note: "Full-cycle custom application development" },
      { name: "Testing & Debugging", level: 82, note: "Feature testing, debugging, and production deployment" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto z-20">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">

          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
            Technical <span className="text-gradient-multi">Arsenal</span>.
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg max-w-xl mt-3 font-light">
            Deep expertise in PHP, Laravel, MySQL, and REST API development — alongside modern frontend tools and DevOps workflows.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 glass-panel px-4 py-2 rounded-full border border-white/10">
          <Terminal className="w-3.5 h-3.5 text-cyan-400" />
          <span>PHP • Laravel • MySQL • REST API</span>
        </div>
      </div>

      {/* Grid of Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SKILL_CATEGORIES.map((category, catIdx) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="p-6 sm:p-8 rounded-3xl glass-panel border border-white/10 hover:border-white/20 transition-all group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-amber-400 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">{category.title}</h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex justify-between items-baseline">
                      <span className="text-sm font-medium text-neutral-200">{skill.name}</span>
                      <span className="text-xs font-mono text-amber-400">{skill.level}%</span>
                    </div>

                    {/* Progress Track */}
                    <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-amber-500 to-cyan-400 rounded-full"
                      />
                    </div>

                    <p className="text-[11px] font-mono text-neutral-500 leading-tight">
                      {skill.note}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
