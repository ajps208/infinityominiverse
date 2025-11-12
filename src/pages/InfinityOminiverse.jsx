import React, { useState, useMemo } from "react";
import { AnimatePresence, useReducedMotion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import BackdropFX from "../components/layout/BackdropFX";
import Hero from "../components/sections/Hero";
import Themes from "../components/sections/Themes";
import Featured from "../components/sections/Featured";
import Trending from "../components/sections/Trending";
import About from "../components/sections/About";
import CastCrew from "../components/sections/CastCrew";
import Contact from "../components/sections/Contact";
import VideoModal from "../components/ui/VideoModal";

export default function InfinityOminiverse() {
  const prefersReducedMotion = useReducedMotion();
  const [activeVideo, setActiveVideo] = useState(null);

  const fade = useMemo(
    () => ({
      initial: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
      whileInView: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      },
      viewport: { once: true, amount: 0.4 },
    }),
    [prefersReducedMotion]
  );

  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased overflow-x-hidden">
      <BackdropFX />
      <Navbar />
      <main>
        <Hero setActiveVideo={setActiveVideo} />
        <Themes />
        <Featured setActiveVideo={setActiveVideo} />
        <Trending setActiveVideo={setActiveVideo} />
        <About fade={fade} />
        <CastCrew />
        <Contact />
      </main>
      <Footer />

      <AnimatePresence>
        {activeVideo && (
          <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
