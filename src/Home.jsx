import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Youtube,
  Instagram,
  Twitter,
  Facebook,
  Play,
  Sparkles,
  ChevronRight,
  Film,
  Zap,
  BadgeCheck,
  Info,
} from "lucide-react";

// =============================================================
// Infinity Ominiverse — Refined React Website
// Elegant | Cinematic | Professional | Animated | Black & White
// Tagline: "God's Own Channel"
// =============================================================

// ---------------------------- Content ----------------------------
const HERO_IMAGES = ["/imagee.jpg", "/image2.jpg", "/logo1.png"];
// 🎥 Carousel slides — mix of images and videos
const SLIDES = [
  { type: "video", src: "https://www.youtube.com/embed/3JZ_D3ELwOQ" },
  { type: "image", src: "/imagee.jpg" },
  { type: "video", src: "/video.mp4" },
  { type: "image", src: "/image2.jpg" },
];

const TRENDING_VIDEOS = [
  {
    id: "tVj0ZTS4WF4",
    title: "Humor in Chaos",
    tag: "Trending Now",
    duration: "5:42",
    description:
      "A sharp and witty breakdown of modern chaos through the lens of humor and satire.",
    credits: {
      director: "James Carter",
      actors: ["Olivia Brooks", "Ethan Cooper"],
      music: "Noah Turner",
      editor: "Sophia Reed",
    },
  },
  {
    id: "hY7m5jjJ9mM",
    title: "Satirical Innovations",
    tag: "Tech Satire",
    duration: "4:18",
    description:
      "Where technology meets sarcasm — exploring innovation with a comic twist.",
    credits: {
      director: "Olivia Brooks",
      actors: ["Liam Foster", "Ava Mitchell"],
      music: "Emma Davis",
      editor: "Ethan Cooper",
    },
  },
];

const Fade = ({ children, y = 20, duration = 0.6, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration, delay }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

// ✅ Simple animated stat card
const Stat = ({ kpi, label }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="rounded-lg border border-white/10 bg-gradient-to-br from-cyan-500/10 to-transparent p-4 text-center"
  >
    <div className="text-2xl font-bold text-cyan-400">{kpi}</div>
    <div className="text-sm text-white/70">{label}</div>
  </motion.div>
);

// ✅ Simple section wrapper (if not already defined elsewhere)
const Section = ({ id, className = "", children }) => (
  <section id={id} className={`px-6 ${className}`}>
    {children}
  </section>
);

const FEATURED_VIDEOS = [
  {
    id: "dQw4w9WgXcQ",
    title: "The Politics of Humor",
    tag: "Political Satire",
    duration: "5:42",
  },
  {
    id: "kJQP7kiw5Fk",
    title: "Tech Meets Irony",
    tag: "Innovation",
    duration: "5:42",
  },
  {
    id: "3JZ_D3ELwOQ",
    title: "The Art of Sarcasm",
    tag: "Comedy",
    duration: "5:42",
  },
];

const THEMES = [
  { name: "Funny", icon: <Zap className="w-4 h-4" aria-hidden /> },
  { name: "Sarcastic", icon: <Sparkles className="w-4 h-4" aria-hidden /> },
  { name: "Political", icon: <Film className="w-4 h-4" aria-hidden /> },
  { name: "Innovative", icon: <BadgeCheck className="w-4 h-4" aria-hidden /> },
  { name: "Satirical", icon: <Play className="w-4 h-4" aria-hidden /> },
];

// ---------------------------- App ----------------------------
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
          <VideoModal
            video={activeVideo}
            onClose={() => setActiveVideo(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

// ---------------------------- Navbar ----------------------------
function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo and Brand Name */}
        <a
          href="#home"
          className="flex items-center gap-3 text-xl font-bold tracking-tight"
        >
          {/* Logo Image */}
          <img
            src="/logo1.png" // 👈 change this path to your logo image
            alt="Infinity Ominiverse Logo"
            className="w-10 h-10 object-contain rounded-full border border-white/20"
          />
          <span>
            Infinity <span className="font-light opacity-80">Ominiverse</span>
          </span>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-6 text-sm items-center">
          {[
            ["Home", "#home"],
            ["Videos", "#videos"],
            ["About", "#about"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="opacity-75 hover:opacity-100 transition-all focus:outline-none focus:ring-2 focus:ring-white/40 rounded px-1"
            >
              {label}
            </a>
          ))}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all"
          >
            <Youtube className="w-4 h-4" aria-hidden />
            Watch
          </a>
        </nav>
      </div>
    </header>
  );
}

// ---------------------------- Hero (slideshow) ----------------------------
function Hero({ setActiveVideo }) {
  const prefersReducedMotion = useReducedMotion();
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-slide (paused for video or on hover)
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
      className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-16 text-center overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* === Background Carousel === */}
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
                src={`${
                  SLIDES[current].src
                }?autoplay=1&mute=1&controls=0&loop=1&playlist=${
                  SLIDES[current].src.split("/embed/")[1]
                }`}
                title={`Video ${current + 1}`}
                allow="autoplay; encrypted-media"
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  pointerEvents: "none", // disable clicks on background video
                }}
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

      {/* === Dark overlay for text visibility === */}
      <div className="absolute inset-0 bg-black/60 z-[1]" />

      {/* === Foreground Content === */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-[2]"
      >
        <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 border border-white/20 rounded-full text-xs uppercase tracking-wider text-white/70 backdrop-blur-sm">
          <Sparkles className="w-3 h-3" aria-hidden /> God’s Own Channel
        </div>

        <h1 className="text-5xl md:text-7xl font-semibold leading-tight mb-6">
          The Infinity <span className="font-light">Ominiverse</span>
        </h1>

        <p className="max-w-2xl mx-auto text-white/80 mb-8">
          A cinematic blend of satire, politics, and innovation — where humor
          meets intelligence and imagination takes center stage.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() =>
              setActiveVideo({ id: "dQw4w9WgXcQ", title: "Cinematic Trailer" })
            }
            className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition"
          >
            <Play className="w-4 h-4" aria-hidden /> Watch Trailer
          </button>

          <a
            href="#videos"
            className="flex items-center gap-2 border border-white/20 px-6 py-2 rounded-full hover:bg-white hover:text-black transition"
          >
            Explore <ChevronRight className="w-4 h-4" aria-hidden />
          </a>
        </div>
      </motion.div>

      {/* === Navigation Arrows === */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-[3] p-2 rounded-full bg-black/40 hover:bg-black/60 border border-white/20 transition"
      >
        <ChevronRight className="w-6 h-6 rotate-180 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-[3] p-2 rounded-full bg-black/40 hover:bg-black/60 border border-white/20 transition"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* === Slide Indicators === */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-[3]">
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

// ---------------------------- Themes (FIX: add missing component) ----------------------------
function Themes() {
  return (
    <section
      aria-labelledby="themes-heading"
      className="border-y border-white/10 py-12 bg-gradient-to-b from-white/5 to-transparent"
    >
      {/* 🎬 Improved Marquee Section */}
      <div className="relative mb-12 ">
        <div className="border border-white/10 overflow-hidden py-4 backdrop-blur-sm ">
          <div className="mask-image:[linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] overflow-hidden">
            <motion.div
              className="flex gap-8 whitespace-nowrap text-sm tracking-widest  items-center"
              aria-hidden
              initial={{ x: 0 }}
              animate={{ x: [0, -400] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {Array.from({ length: 25 }).map((_, i) => (
                <span key={i} className="inline-flex items-center gap-2 px-2">
                  <Film className="h-4 w-4 " /> GOD’S OWN CHANNEL
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Rest of your code unchanged */}
      <div className="max-w-6xl mx-auto px-6">
        <h2
          id="themes-heading"
          className="text-sm tracking-widest text-white/60 uppercase mb-6"
        >
          Content Spectrum
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {THEMES.map((t) => (
            <div
              key={t.name}
              className="group border border-white/10 rounded-2xl p-5 hover:bg-white hover:text-black transition-all"
            >
              <div className="flex items-center justify-center mb-3 w-10 h-10 border border-current/30 rounded-full mx-auto">
                {t.icon}
              </div>
              <div className="text-center text-sm font-medium">{t.name}</div>
              <div className="text-center text-xs opacity-60">
                Sharp, clever, and bold.
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ------------------------------------------------------
// 🎬 VideoCard — Modern & Sleek
// ------------------------------------------------------
// ------------------------------------------------------
// 🎞️ Compact & Modern Video Card
// ------------------------------------------------------
function VideoCard({ video, onPlay }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="relative group overflow-hidden rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all shadow-[0_0_8px_rgba(255,255,255,0.04)]"
    >
      {/* Thumbnail */}
      <div className="relative h-32 sm:h-36 md:h-40 overflow-hidden">
        <motion.img
          src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
          alt={video.title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Floating Play Button */}
        <motion.button
          onClick={() => onPlay(video)}
          whileHover={{ scale: 1.1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 group-hover:bg-white/40 transition">
            <Play className="w-3.5 h-3.5 text-white" />
          </div>
        </motion.button>

        {/* Duration */}
        {video.duration && (
          <span className="absolute top-1.5 right-1.5 bg-black/70 text-white text-[9px] font-medium px-1.5 py-[1px] rounded">
            {video.duration}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-2.5">
        <h3 className="font-medium text-[13px] mb-[2px] leading-snug line-clamp-1">
          {video.title}
        </h3>
        <p className="text-[10.5px] text-white/60 mb-2 line-clamp-2">
          {video.description || "Click to watch this episode"}
        </p>

        <div className="flex gap-1.5">
          <button
            onClick={() => onPlay(video)}
            className="flex items-center gap-1 bg-white text-black px-2 py-[3px] rounded-full text-[10.5px] font-medium hover:bg-gray-200 transition"
          >
            <Play className="w-3 h-3" /> Play
          </button>
          <a
            href={`/video/${video.id}`}
            className="flex items-center gap-1 border border-white/20 px-2 py-[3px] rounded-full text-[10.5px] font-medium hover:bg-white hover:text-black transition"
          >
            <Info className="w-3 h-3" /> Info
          </a>
        </div>
      </div>
    </motion.div>
  );
}

// ------------------------------------------------------
// 🌟 Featured Section — Super Compact
// ------------------------------------------------------
function Featured({ setActiveVideo }) {
  return (
    <section
      id="featured"
      className="py-8 border-t border-white/10 bg-gradient-to-b from-black via-black/90 to-black/70"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
            Featured <span className="text-cyan-400">Episodes</span>
          </h2>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            className="text-[12px] opacity-75 hover:opacity-100 hover:text-cyan-300 transition"
          >
            View all →
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURED_VIDEOS.map((video) => (
            <VideoCard key={video.id} video={video} onPlay={setActiveVideo} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ------------------------------------------------------
// 🔥 Trending Section — Super Compact
// ------------------------------------------------------
function Trending({ setActiveVideo }) {
  return (
    <section
      id="trending"
      className="py-8 border-t border-white/10 bg-gradient-to-b from-white/5 via-white/10 to-transparent"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-xl md:text-2xl font-semibold text-cyan-400 tracking-tight">
            Trending <span className="text-white">Now</span>
          </h2>
          <a
            href="https://youtube.com/trending"
            target="_blank"
            rel="noreferrer"
            className="text-[12px] opacity-75 hover:opacity-100 hover:text-cyan-300 transition"
          >
            See more →
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TRENDING_VIDEOS.map((video) => (
            <VideoCard key={video.id} video={video} onPlay={setActiveVideo} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------- About ----------------------------
function About({ fade }) {
  return (
    <Section id="about" className="py-20 border-t border-white/10">
      <div className="grid items-center gap-10 md:grid-cols-2">
        {/* Left Column */}
        <Fade>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6">
            <h2 className="text-2xl font-bold sm:text-3xl text-white">
              About International Ominiverse
            </h2>
            <p className="mt-4 text-white/70">
              We craft irreverent, high-signal commentary that splices politics,
              innovation, and culture—with punchlines that land. Every episode
              balances classic composition with modern motion, all wrapped in a
              bold black-and-cyan palette.
            </p>

            <ul className="mt-6 grid gap-3 text-sm text-white/70 sm:grid-cols-2">
              <li className="rounded-lg border border-white/10 bg-white/5 p-3">
                Sharp satire & sketch formats
              </li>
              <li className="rounded-lg border border-white/10 bg-white/5 p-3">
                Cinematic edits & sound design
              </li>
              <li className="rounded-lg border border-white/10 bg-white/5 p-3">
                Tech + culture + politics
              </li>
              <li className="rounded-lg border border-white/10 bg-white/5 p-3">
                Respect for accessibility
              </li>
            </ul>
          </div>
        </Fade>

        {/* Right Column */}
        <Fade y={0}>
          <div className="relative">
            <div
              className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-cyan-500/20 via-transparent to-transparent blur-xl"
              aria-hidden
            />
            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
              <blockquote className="text-lg font-medium text-white">
                “Comedy that thinks. Commentary that winks.”
              </blockquote>
              <p className="mt-3 text-sm text-white/70">
                We believe smart can be funny—and funny can be smart. That
                tension powers every upload.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <Stat kpi="100K+" label="Monthly Views" />
                <Stat kpi="500+" label="Total Minutes" />
                <Stat kpi="100%" label="Cyan Energy" />
                <Stat kpi="24 FPS" label="Cinematic" />
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </Section>
  );
}

// ---------------------------- Contact ----------------------------
function Contact() {
  return (
    <section id="contact" className="py-20 border-t border-white/10 bg-white/5">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Connect With Us</h2>
          <p className="text-white/70 mb-6">
            Follow Infinity Ominiverse for bold content drops, behind-the-scenes
            satire, and cultural commentary that matters.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-sm hover:opacity-90"
            >
              <Youtube className="w-4 h-4" aria-hidden /> YouTube
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 border border-white/20 px-4 py-2 rounded-full text-sm hover:bg-white hover:text-black"
            >
              <Twitter className="w-4 h-4" aria-hidden /> Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 border border-white/20 px-4 py-2 rounded-full text-sm hover:bg-white hover:text-black"
            >
              <Instagram className="w-4 h-4" aria-hidden /> Instagram
            </a>
          </div>
        </div>
        <form
          className="border border-white/10 rounded-3xl bg-black/40 p-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="email" className="text-sm text-white/70">
            Subscribe for updates
          </label>
          <div className="mt-2 flex gap-2">
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="flex-1 bg-transparent border border-white/20 rounded-xl px-3 py-2 text-sm placeholder:text-white/40 focus:ring-2 focus:ring-white/30 outline-none"
            />
            <button className="bg-white text-black px-4 py-2 rounded-xl text-sm font-medium hover:opacity-90">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-white/50 mt-2">We respect your inbox.</p>
        </form>
      </div>
    </section>
  );
}

// ---------------------------- Footer ----------------------------
function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 text-center text-xs text-white/60">
      © {new Date().getFullYear()} Infinity Ominiverse — God’s Own Channel
    </footer>
  );
}

// ---------------------------- Video Modal ----------------------------
function VideoModal({ video, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 grid place-items-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="dialog"
      aria-modal
      aria-label={`Playing ${video?.title ?? "video"}`}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 150, damping: 18 }}
        className="relative w-full max-w-3xl bg-black border border-white/20 rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-white text-black rounded-full text-xs px-2 py-1"
        >
          Close
        </button>
        <div className="aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
            title={video.title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="p-4 text-sm border-t border-white/10">
          <h4 className="font-medium">{video.title}</h4>
          <p className="text-white/60">Infinity Ominiverse</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ---------------------------- Cast & Crew ----------------------------
function CastCrew() {
  const TEAM = [
    {
      name: "James Carter",
      role: "Founder & Creative Head",
      subtitle: "Writer, Director, Editor",
      img: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
    },
    {
      name: "Olivia Brooks",
      role: "Writer, Director, Actor",
      img: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
    },
    {
      name: "Ethan Cooper",
      role: "Writer, Director, Actor",
      img: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
    },
    {
      name: "Sophia Reed",
      role: "Editor, Actor",
      img: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
    },
    {
      name: "Liam Foster",
      role: "Writer, Director, Actor",
      img: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
    },
    {
      name: "Ava Mitchell",
      role: "Writer, Actor",
      img: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
    },
    {
      name: "Noah Turner",
      role: "Writer, Director, Actor",
      img: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
    },
    {
      name: "Emma Davis",
      role: "Actor",
      img: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
    },
  ];

  return (
    <section
      id="crew"
      className="py-20 border-t border-white/10 bg-gradient-to-b from-black via-[#020617] to-black"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Meet the <span className="text-cyan-400">Cast & Crew</span>
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
          {TEAM.map((member, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className={`relative w-full max-w-[250px] rounded-2xl border border-white/10 bg-white/5 p-4 text-center transition-all duration-300 ${
                member.highlight
                  ? "bg-cyan-500 text-black"
                  : "hover:bg-white/10"
              }`}
            >
              <div className="w-24 h-24 mx-auto overflow-hidden rounded-full border border-white/20 mb-4">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3
                className={`font-semibold text-lg ${
                  member.highlight ? "text-black" : "text-white"
                }`}
              >
                {member.name}
              </h3>
              <p
                className={`text-sm mt-1 ${
                  member.highlight ? "text-black/70" : "text-white/60"
                }`}
              >
                {member.role}
              </p>

              {member.subtitle && (
                <p
                  className={`text-xs mt-1 ${
                    member.highlight ? "text-black/60" : "text-white/50"
                  }`}
                >
                  {member.subtitle}
                </p>
              )}

              <div className="flex justify-center gap-3 mt-3">
                <a
                  href="#"
                  className={`${
                    member.highlight
                      ? "text-black/70 hover:text-black"
                      : "text-white/70 hover:text-cyan-400"
                  } transition`}
                >
                  <Facebook />
                </a>
                <a
                  href="#"
                  className={`${
                    member.highlight
                      ? "text-black/70 hover:text-black"
                      : "text-white/70 hover:text-cyan-400"
                  } transition`}
                >
                  <Instagram />
                </a>
                <a
                  href="#"
                  className={`${
                    member.highlight
                      ? "text-black/70 hover:text-black"
                      : "text-white/70 hover:text-cyan-400"
                  } transition`}
                >
                  <Twitter />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// simple placeholder facebook icon using lucide

// ---------------------------- Background FX ----------------------------
function BackdropFX() {
  return (
    <div aria-hidden>
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_70%)]" />
      <div className="fixed inset-0 -z-10 opacity-[0.05] [background:repeating-linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px_4px)]" />
      <div className="fixed inset-0 -z-10 opacity-[0.07] [background:repeating-linear-gradient(180deg,rgba(255,255,255,0.15)_1px,transparent_1px_3px)]" />
    </div>
  );
}

// ---------------------------- Dev Sanity Checks ("tests") ----------------------------
// These run in development to help catch common setup mistakes.
if (
  typeof window !== "undefined" &&
  import.meta &&
  import.meta.env &&
  import.meta.env.MODE !== "production"
) {
  console.assert(
    Array.isArray(HERO_IMAGES) && HERO_IMAGES.length > 0,
    "HERO_IMAGES must contain at least one image path."
  );
  console.assert(
    Array.isArray(FEATURED_VIDEOS) && FEATURED_VIDEOS.length > 0,
    "FEATURED_VIDEOS must contain at least one video."
  );
  console.assert(
    typeof Themes === "function",
    "Themes component should be defined."
  );
}
