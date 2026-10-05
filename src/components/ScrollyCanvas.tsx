"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, motion, useSpring } from "framer-motion";
import Overlay from "./Overlay";

const TOTAL_FRAMES = 75;

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(0);
  const animationFrameIdRef = useRef<number | null>(null);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loadProgress, setLoadProgress] = useState<number>(0);

  // Track scroll progress along the 500vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Use a slight spring for buttery smooth scrubbing
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 35,
    restDelta: 0.0001,
  });

  // Object-fit: cover rendering logic
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[frameIndex];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth || img.width;
    const ih = img.naturalHeight || img.height;

    const hRatio = cw / iw;
    const vRatio = ch / ih;
    const ratio = Math.max(hRatio, vRatio);

    const drawW = iw * ratio;
    const drawH = ih * ratio;
    const offsetX = (cw - drawW) / 2;
    const offsetY = (ch - drawH) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(img, 0, 0, iw, ih, offsetX, offsetY, drawW, drawH);
    currentFrameRef.current = frameIndex;
  }, []);

  // Update canvas resolution with Device Pixel Ratio for Retina displays
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    // Redraw the current frame after resize
    drawFrame(currentFrameRef.current);
  }, [drawFrame]);

  // Preload all sequence frames
  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    const handleSingleImageLoad = (index: number) => {
      loadedCount++;
      const percent = Math.round((loadedCount / TOTAL_FRAMES) * 100);
      setLoadProgress(percent);

      // Render the very first frame as soon as it's ready
      if (index === 0) {
        drawFrame(0);
      }

      if (loadedCount >= TOTAL_FRAMES) {
        setIsLoading(false);
      }
    };

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      const paddedIndex = i.toString().padStart(2, "0");
      img.src = `/sequence/frame_${paddedIndex}_delay-0.067s.webp`;

      img.onload = () => handleSingleImageLoad(i);
      img.onerror = () => {
        // Fallback to png if webp fails for any reason
        img.src = `/sequence/frame_${paddedIndex}_delay-0.067s.png`;
        img.onload = () => handleSingleImageLoad(i);
      };

      images.push(img);
    }

    imagesRef.current = images;

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [handleResize, drawFrame]);

  // Synchronize scroll progress to image sequence
  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (latest) => {
      const clamped = Math.min(1, Math.max(0, latest));
      const targetIndex = Math.min(
        TOTAL_FRAMES - 1,
        Math.max(0, Math.floor(clamped * (TOTAL_FRAMES - 1)))
      );

      if (targetIndex !== currentFrameRef.current) {
        if (animationFrameIdRef.current) {
          cancelAnimationFrame(animationFrameIdRef.current);
        }
        animationFrameIdRef.current = requestAnimationFrame(() => {
          drawFrame(targetIndex);
        });
      }
    });

    return () => {
      unsubscribe();
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [smoothProgress, drawFrame]);

  return (
    <div
      ref={containerRef}
      id="hero-scroll"
      className="relative h-[500vh] w-full bg-[#05070d]"
    >
      {/* Sticky full-screen viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Canvas for 60FPS Video Sequence Rendering */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full block object-cover z-0 pointer-events-none"
        />

        {/* Cinematic Ambient Edge Blending Gradient */}
        <div className="absolute inset-0 pointer-events-none z-[5] bg-gradient-to-t from-[#05070d] via-transparent to-[#05070d]/60 opacity-70" />
        <div className="absolute inset-0 pointer-events-none z-[5] bg-gradient-to-r from-[#05070d]/40 via-transparent to-[#05070d]/40" />

        {/* Loading HUD Screen */}
        {isLoading && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#05070d]/90 backdrop-blur-md transition-opacity duration-700">
            <div className="flex flex-col items-center space-y-4 max-w-xs w-full px-6">
              <div className="relative w-16 h-16 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-2 border-amber-500/20 border-t-amber-400 animate-spin" />
                <span className="text-xs font-mono font-bold tracking-widest text-amber-400">
                  {loadProgress}%
                </span>
              </div>
              <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-amber-500 to-cyan-400"
                  style={{ width: `${loadProgress}%` }}
                />
              </div>
              <p className="text-xs font-mono tracking-widest text-neutral-400 uppercase text-center">
                Preloading Sequence • {loadProgress}%
              </p>
            </div>
          </div>
        )}

        {/* Parallax Overlay Text Sections */}
        <Overlay scrollProgress={smoothProgress} rawScrollProgress={scrollYProgress} />
      </div>
    </div>
  );
}
