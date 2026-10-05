"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  achievements: string[];
  skills: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    period: "Aug 2024 — Present",
    role: "Web Developer",
    company: "Systema",
    location: "Sector 13, Road 13, Uttara, Dhaka",
    description:
      "Developing and maintaining web applications using PHP and the Laravel framework. Building RESTful APIs, MySQL database schemas, and collaborating with the team via Git and JIRA to deliver features on time.",
    achievements: [
      "Designed, developed, and documented RESTful APIs for web and mobile applications",
      "Built MySQL database schemas and complex queries for scalable data management",
      "Used Git for version control, code reviews, and cross-functional team collaboration",
      "Performed testing, debugging, and deployment of new features within project deadlines",
      "Contributed to frontend development using ReactJS and Vue.js alongside backend work",
    ],
    skills: ["PHP (OOP)", "Laravel", "MySQL", "REST API", "Docker", "Git", "ReactJS", "Vue.js", "JIRA"],
  },
  {
    period: "2022 (6 months)",
    role: "Web Application Development Trainee",
    company: "Web Design & Dev Skill",
    location: "Dhaka, Bangladesh",
    description:
      "Completed a 6-month professional training in Web Design & Development, gaining hands-on skills in HTML, CSS, and foundational web development workflows.",
    achievements: [
      "Completed Web Design & Development professional qualification",
      "Obtained BSc in CSE certification from Uttara University (Nov 2022 — Jan 2027)",
    ],
    skills: ["HTML", "CSS", "Bootstrap 5", "JavaScript", "Web Design"],
  },
  {
    period: "2021 (6 months)",
    role: "Web Development with Laravel Trainee",
    company: "Star Computer",
    location: "Dhaka, Bangladesh",
    description:
      "Completed a 6-month training program specializing in Laravel web development, building foundational expertise in PHP, MVC architecture, and backend development practices.",
    achievements: [
      "Gained foundational Laravel and PHP (OOP) development skills",
      "Learned MVC architecture and database-driven web application design",
    ],
    skills: ["PHP", "Laravel", "MVC Framework", "MySQL", "SQL Database"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto z-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">

          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
            Real <span className="text-gradient-multi">Experience</span>.
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg max-w-xl mt-3 font-light">
            A track record of building and shipping production web applications with Laravel, PHP, MySQL, and REST APIs.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 glass-panel px-4 py-2 rounded-full border border-white/10">
          <Briefcase className="w-3.5 h-3.5 text-amber-400" />
          <span>2.3 Yrs Total Experience</span>
        </div>
      </div>

      {/* Timeline items */}
      <div className="space-y-6">
        {EXPERIENCES.map((exp, idx) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-6 sm:p-10 rounded-3xl glass-panel border border-white/10 hover:border-amber-400/30 transition-all group"
          >
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                  {exp.period} • {exp.location}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1 group-hover:text-amber-300 transition-colors">
                  {exp.role}{" "}
                  <span className="text-neutral-400 font-light">@ {exp.company}</span>
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-neutral-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-neutral-300 text-base leading-relaxed font-light mb-6">
              {exp.description}
            </p>

            {/* Achievements */}
            <div className="space-y-2 pt-4 border-t border-white/5">
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-2">
                Key Milestones & Deliverables
              </span>
              {exp.achievements.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-neutral-300 font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
