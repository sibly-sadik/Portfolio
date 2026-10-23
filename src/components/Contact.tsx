"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Copy,
  Check,
  Send,
  ArrowUp,
  Clock,
  Sparkles,
  MapPin,
  Mail,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterXIcon } from "./Icons";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Laravel Web Application",
    message: "",
  });

  const emailAddress = "sadik.dev07@gmail.com";

  // Live time ticker
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);

    // Fire celebratory confetti!
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.8 },
      colors: ["#f59e0b", "#38bdf8", "#ffffff"],
    });

    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);

    confetti({
      particleCount: 120,
      spread: 100,
      origin: { y: 0.6 },
      colors: ["#f59e0b", "#38bdf8", "#10b981"],
    });

    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        projectType: "Laravel Web Application",
        message: "",
      });
      setFormSubmitted(false);
    }, 6000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative pt-24 pb-16 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto z-20">
      {/* Decorative ambient background blur */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Contact Container */}
      <div className="relative rounded-3xl glass-panel-glow border border-white/15 p-8 sm:p-14 md:p-16 mb-20 overflow-hidden">
        {/* Subtle grid accent */}
        <div className="absolute inset-0 noise-overlay pointer-events-none opacity-40" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Headline & Copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">

            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
              Let&apos;s engineer something{" "}
              <span className="text-gradient-multi">unforgettable</span>.
            </h2>

            <p className="text-neutral-300 text-base sm:text-lg font-light leading-relaxed">
              Whether you need an award-winning flagship website, high-performance WebGL graphics, or a senior creative engineer to elevate your product — let&apos;s build it.
            </p>

            {/* Email Copy Card */}
            <div className="pt-2">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-2">
                Direct Contact Channel
              </span>
              <div className="inline-flex items-center gap-3 p-2 pl-4 rounded-2xl glass-panel border border-white/10 hover:border-amber-400/40 transition-all bg-black/40">
                <Mail className="w-4 h-4 text-amber-400" />
                <span className="text-sm sm:text-base font-mono text-white selection:bg-amber-400 selection:text-black">
                  {emailAddress}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-amber-400 hover:text-black text-white text-xs font-mono transition-all flex items-center gap-1.5"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Status pills */}
            <div className="flex flex-wrap gap-4 pt-4 text-xs font-mono text-neutral-400">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span>Local Time: {currentTime || "Loading..."}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Uttara, Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

          {/* Right: Interactive Inquiry Form */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-xl">
              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-4"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Transmission Received</h3>
                  <p className="text-neutral-300 text-sm max-w-sm mx-auto font-light leading-relaxed">
                    Thank you! Your message has been routed directly to Shimul. I will respond within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Vance"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-amber-400 focus:bg-white/10 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@studio.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-amber-400 focus:bg-white/10 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                      Project Scope
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#090d18] border border-white/10 text-white text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    >
                      <option value="Laravel Web Application">Laravel Web Application</option>
                      <option value="RESTful API Development">RESTful API Development</option>
                      <option value="Ecommerce Development">Ecommerce Development (Magento / Custom)</option>
                      <option value="Full-Stack Web App">Full-Stack Web App (ReactJS / Vue.js)</option>
                      <option value="Database Design & MySQL">Database Design & MySQL</option>
                      <option value="Bug Fixing & Code Review">Bug Fixing & Code Review</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                      Project Vision & Details
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your goals, timeline, and deliverables..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-amber-400 focus:bg-white/10 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold text-sm tracking-wide transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
                  >
                    <span>Transmit Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/10 pt-8 text-neutral-400 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span>© {new Date().getFullYear()} Md. Sibly Sadik Shimul. All rights reserved.</span>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/sibly-sadik"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/siblysadik-dev/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
         
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 hover:text-white transition-colors group"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </footer>
  );
}
