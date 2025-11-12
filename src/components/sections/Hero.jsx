import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Sparkles, Play, ChevronRight } from "lucide-react";
import { SLIDES } from "../data/slides";

export default function Hero({ setActiveVideo }) {
  const prefersReducedMotion = useReducedMotion();
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-slide logic
  useEffect(() => {
    if (prefersReducedMotion || isHovered || SLIDES[current].type === "video")
      return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [prefersReducedMotion, isHovered, current]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-start px-6 sm:px-10 lg:px-20 pt-28 sm:pt-32 pb-16 text-left overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* === Background === */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0 w-full h-full z-0 overflow-hidden"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          {SLIDES[current].type === "image" && (
            <img
              src={SLIDES[current].src}
              alt={`Slide ${current + 1}`}
              className="w-full h-full object-cover"
            />
          )}

          {SLIDES[current].type === "video" &&
            SLIDES[current].src.includes("youtube.com") && (
              <iframe
                src={`${SLIDES[current].src}?autoplay=1&mute=1&controls=0&loop=1&playlist=${
                  SLIDES[current].src.split("/embed/")[1]
                }`}
                title={`Video ${current + 1}`}
                allow="autoplay; encrypted-media"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              ></iframe>
            )}

          {SLIDES[current].type === "video" &&
            SLIDES[current].src.endsWith(".mp4") && (
              <video
                src={SLIDES[current].src}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}
        </motion.div>
      </AnimatePresence>

      {/* === Cinematic Overlay === */}
      <div className="absolute inset-0 z-[1]">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-gray-900/60 to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(255,255,255,0.05)_20%,transparent_25%,transparent_70%,rgba(255,255,255,0.07)_75%)] mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent mix-blend-overlay" />
      </div>

      {/* === Foreground Content === */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative z-[2] max-w-2xl"
      >
        {/* Tagline */}
        <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 border border-white/20 rounded-full text-xs uppercase tracking-wider text-white/70 backdrop-blur-sm">
          <Sparkles className="w-3 h-3" /> God’s Own Channel
        </div>

        {/* Heading */}
        <h1
          className="
            text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem]
            font-semibold leading-[1.1]
            text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]
            mb-6 
            whitespace-normal lg:whitespace-nowrap
            break-words"
        >
          The Infinity{" "}
          <span className="font-light text-gray-300">Ominiverse</span>
        </h1>

        {/* Description */}
        <p className="text-white/80 mb-8 max-w-lg sm:max-w-xl text-sm sm:text-base leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
          A cinematic blend of satire, politics, and innovation — where humor
          meets intelligence and imagination takes center stage.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() =>
              setActiveVideo({ id: "dQw4w9WgXcQ", title: "Cinematic Trailer" })
            }
            className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition"
          >
            <Play className="w-4 h-4" /> Watch Trailer
          </button>
          <a
            href="#videos"
            className="flex items-center gap-2 border border-white/20 px-6 py-2 rounded-full hover:bg-white hover:text-black transition"
          >
            Explore <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </motion.div>

      {/* === Controls (Adjusted for mobile safety) === */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 md:left-6 top-[55%] sm:top-1/2 -translate-y-1/2 z-[3] p-2 rounded-full bg-black/50 hover:bg-black/70 border border-white/20 transition"
      >
        <ChevronRight className="w-6 h-6 rotate-180 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 md:right-6 top-[55%] sm:top-1/2 -translate-y-1/2 z-[3] p-2 rounded-full bg-black/50 hover:bg-black/70 border border-white/20 transition"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* === Indicators === */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-[3]">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current
                ? "bg-cyan-400 w-5"
                : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
