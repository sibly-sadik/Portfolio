"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX, Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [audioActive, setAudioActive] = useState(false);
  const [audioCtx, setAudioCtx] = useState<AudioContext | null>(null);
  const [oscillator, setOscillator] = useState<OscillatorNode | null>(null);
  const [gainNode, setGainNode] = useState<GainNode | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Web Audio API ambient synthesizer toggle
  const toggleAudio = () => {
    if (!audioActive) {
      try {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioContextClass();
        
        // Ethereal ambient warm drone
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = "sine";
        osc.frequency.setValueAtTime(110, ctx.currentTime); // Deep A2 note

        filter.type = "lowpass";
        filter.frequency.setValueAtTime(320, ctx.currentTime);

        gain.gain.setValueAtTime(0.01, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.05, ctx.currentTime + 2);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start();

        setAudioCtx(ctx);
        setOscillator(osc);
        setGainNode(gain);
        setAudioActive(true);
      } catch (e) {
        console.error("Audio initialization error:", e);
      }
    } else {
      if (gainNode && audioCtx) {
        gainNode.gain.linearRampToValueAtTime(0.0001, audioCtx.currentTime + 0.5);
        setTimeout(() => {
          oscillator?.stop();
          audioCtx?.close();
          setAudioCtx(null);
          setOscillator(null);
          setGainNode(null);
          setAudioActive(false);
        }, 500);
      } else {
        setAudioActive(false);
      }
    }
  };

  const navLinks = [
    { label: "Vision", href: "#hero-scroll" },
    { label: "Work", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 flex justify-center p-4 sm:p-6 pointer-events-none">
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`pointer-events-auto flex items-center justify-between gap-4 sm:gap-8 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border transition-all duration-300 ${
            scrolled
              ? "glass-panel-glow border-white/15 bg-black/60 shadow-2xl"
              : "glass-panel border-white/10 bg-black/30"
          }`}
        >
          {/* Logo / Monogram */}
          <a
            href="#hero-scroll"
            className="flex items-center gap-2.5 text-white font-mono text-sm tracking-wider font-bold group"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400 group-hover:scale-125 transition-transform shadow-sm shadow-amber-400/50" />
            <span className="group-hover:text-amber-300 transition-colors">
              SHIMUL<span className="text-neutral-500">.DEV</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-mono tracking-widest text-neutral-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions: Ambient Audio & Contact CTA */}
          <div className="flex items-center gap-3">
            {/* Audio Toggle */}
            <button
              onClick={toggleAudio}
              className={`p-2 rounded-full border transition-all duration-300 ${
                audioActive
                  ? "bg-amber-400/20 border-amber-400/50 text-amber-300"
                  : "bg-white/5 border-white/10 text-neutral-400 hover:text-white hover:bg-white/10"
              }`}
              title={audioActive ? "Mute Ambient Synth" : "Play Ambient Sound"}
              aria-label="Toggle ambient audio"
            >
              {audioActive ? <Volume2 className="w-3.5 h-3.5 animate-pulse" /> : <VolumeX className="w-3.5 h-3.5" />}
            </button>

            {/* Quick Inquire Button */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-mono tracking-wide transition-all group"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full bg-white/5 border border-white/10 text-neutral-300"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden bg-black/95 backdrop-blur-2xl flex flex-col justify-center items-center px-6">
          <div className="flex flex-col items-center space-y-6 text-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-bold tracking-tight text-white hover:text-amber-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-6 border-t border-white/10 w-full flex flex-col items-center gap-4">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-full bg-amber-400 text-black font-bold text-sm text-center"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
