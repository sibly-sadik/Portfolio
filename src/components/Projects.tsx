"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Sparkles, ArrowUpRight, X } from "lucide-react";
import { GithubIcon } from "./Icons";

interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "Laravel & PHP" | "REST APIs" | "Full-Stack";
  description: string;
  year: string;
  role: string;
  image: string;
  tags: string[];

  liveUrl: string;
  githubUrl: string;
  accent: string;
}

const PROJECTS: Project[] = [
  {
    id: "shimulApp",
    title: "Hater-Kache",
    tagline: "Personal Developer",
    category: "Full-Stack",
    description: "A high-performance scrollytelling personal portfolio showcasing Laravel development expertise, RESTful API projects, and full-stack capabilities. Built with Next.js, Framer Motion, and deployed on Vercel.",
    year: "2026",
    role: "Full-Stack Developer",
    image: "/projects/chronos.png",
    tags: ["Next.js", "Framer Motion", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://siblysadik-dev.vercel.app/",
    githubUrl: "https://github.com/sibly-sadik",
    accent: "from-amber-500/20 to-cyan-500/20",

  },
  {
    id: "laravel-rest-api",
    title: "LARAVEL API",
    tagline: "RESTful API Backend System",
    category: "REST APIs",
    description:
      "Designed and developed a comprehensive RESTful API system using Laravel and PHP for web and mobile application integration. Includes authentication, CRUD operations, and MySQL database management.",
    year: "2025",
    role: "Backend Developer",
    image: "/projects/Start-Parking.png",
    tags: ["PHP (OOP)", "Laravel", "MySQL", "REST API", "Git"],
    liveUrl: "https://siblysadik-dev.vercel.app/",
    githubUrl: "https://github.com/sibly-sadik",
    accent: "from-cyan-500/20 to-blue-500/20",
  },
  {
    id: "ecommerce-magento",
    title: "ECOMMERCE",
    tagline: "Frontend Development",
    category: "Full-Stack",
    description:
      "Frontend development on an ecommerce platform using Magento, Bootstrap 5, and custom PHP integrations. Implemented responsive product pages, cart flows, and custom theme development.",
    year: "2025",
    role: "Frontend Developer",
    image: "/projects/ShopEasy.png",
    tags: ["Magento", "Bootstrap 5", "PHP", "JavaScript", "MySQL"],
    liveUrl: "https://siblysadik-dev.vercel.app/",
    githubUrl: "https://github.com/sibly-sadik",
    accent: "from-indigo-500/20 to-purple-500/20",
  },
  {
    id: "web-app-docker",
    title: "WEB BG-Remover",
    tagline: "Web Application",
    category: "Laravel & PHP",
    description:
      "Developed a full-featured web application using Laravel with Docker containerization for consistent development and deployment environments. Integrated ReactJS frontend with a Laravel REST API backend.",
    year: "2024",
    role: "Web Developer",
    image: "/projects/BG-Remover.png",
    tags: ["Laravel", "ReactJS", "Vue.js"],
    liveUrl: "https://siblysadik-dev.vercel.app/",
    githubUrl: "https://github.com/sibly-sadik",
    accent: "from-pink-500/20 to-amber-500/20",
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [mousePosition, setMousePosition] = useState<{ [key: string]: { x: number; y: number } }>({});

  const categories = ["All", "Laravel & PHP", "REST APIs", "Full-Stack"];

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition((prev) => ({
      ...prev,
      [id]: {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      },
    }));
  };

  return (
    <section id="projects" className="relative py-28 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto z-20">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">

          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
            Engineering <span className="text-gradient-multi">Excellence</span>.
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg max-w-xl mt-3 font-light">
            Real projects built with Laravel, PHP, MySQL, REST APIs, and modern frontend stacks — shipped in production.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 glass-panel p-1.5 rounded-full border border-white/10 self-start md:self-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-300 ${activeCategory === cat
                ? "bg-amber-400 text-black font-semibold shadow-md shadow-amber-400/20"
                : "text-neutral-400 hover:text-white hover:bg-white/5"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Glass-morphism Cards */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project, idx) => {
            const pos = mousePosition[project.id] || { x: 0, y: 0 };
            return (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onMouseMove={(e) => handleMouseMove(e, project.id)}
                onClick={() => setSelectedProject(project)}
                className="group relative cursor-pointer rounded-3xl overflow-hidden glass-panel border border-white/10 hover:border-amber-400/40 transition-all duration-500 flex flex-col justify-between"
              >
                {/* Mouse-Following Spotlight Radial Glow */}
                <div
                  className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(245, 158, 11, 0.15), transparent 40%)`,
                  }}
                />

                {/* Card Top: Preview Image with Zoom */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/60">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d18] via-transparent to-black/30" />



                  {/* Year Tag */}
                  <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[11px] font-mono text-neutral-400">
                    {project.year}
                  </div>
                </div>

                {/* Card Bottom: Metadata & Copy */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                        {project.category} • {project.role}
                      </span>
                      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/5 border border-white/10 group-hover:bg-amber-400 group-hover:text-black text-white transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                      {project.title}
                      <span className="text-base font-light text-neutral-400 ml-2 font-sans">
                        / {project.tagline}
                      </span>
                    </h3>

                    <p className="text-neutral-300 text-sm leading-relaxed line-clamp-2 mt-2 font-light">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-white/5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] text-neutral-400 border border-white/5 group-hover:border-white/10 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Interactive Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl glass-panel-glow border border-white/20 bg-[#090d18] text-white p-6 sm:p-10 shadow-2xl z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image */}
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-8 border border-white/10">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Modal Content */}
              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 font-mono text-xs border border-amber-400/30">
                    {selectedProject.category}
                  </span>
                  <span className="text-neutral-400 font-mono text-xs">
                    {selectedProject.role} • {selectedProject.year}
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-black">
                  {selectedProject.title} — {selectedProject.tagline}
                </h3>

                <p className="text-neutral-300 text-base sm:text-lg leading-relaxed font-light">
                  {selectedProject.description}
                </p>

                {/* Tech Stack Matrix */}
                <div>
                  <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-3">
                    Technologies & Architecture
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-neutral-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-4 pt-6 border-t border-white/10">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-400 hover:bg-amber-300 text-black font-semibold text-sm transition-colors shadow-lg shadow-amber-400/20"
                  >
                    <span>Launch Live Experience</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 text-white font-medium text-sm transition-colors"
                  >
                    <span>View Architecture</span>
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
