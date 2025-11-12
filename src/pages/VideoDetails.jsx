import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Play,
  Clock,
  User,
  Music,
  Scissors,
  Star,
  Film,
} from "lucide-react";
import BackdropFX from "../components/layout/BackdropFX";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function VideoDetails() {
  const { id } = useParams();

  const video = {
    id,
    title: "Humor in Chaos",
    description:
      "A sharp and witty breakdown of modern chaos through the lens of humor and satire — blending intellect, art, and a touch of absurdity for a truly cinematic experience.",
    duration: "5:42",
    rating: "9.1/10",
    genre: "Comedy · Satire · Modern Life",
    credits: {
      director: "James Carter",
      actors: ["Olivia Brooks", "Ethan Cooper"],
      music: "Noah Turner",
      editor: "Sophia Reed",
    },
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <BackdropFX />
      <Navbar />

      {/* === BACKGROUND LAYERS === */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-[url('https://img.youtube.com/vi/2g811Eo7K8U/maxresdefault.jpg')] bg-cover bg-center blur-3xl opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black"></div>
      </div>

      {/* === MAIN CONTENT === */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-28">
        {/* === VIDEO PLAYER === */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_80px_-20px_rgba(0,255,255,0.3)]"
        >
          <iframe
            src={`https://www.youtube.com/embed/${video.id}`}
            className="w-full h-full"
            allowFullScreen
            title={video.title}
          ></iframe>

          {/* Glow Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
        </motion.div>

        {/* === TITLE & META === */}
        <div className="mt-10 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between"
          >
            <h1 className="text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-300 to-white drop-shadow-[0_2px_8px_rgba(0,255,255,0.3)]">
              {video.title}
            </h1>
            <div className="flex items-center gap-2 mt-4 sm:mt-0">
              <Star className="text-yellow-400 w-5 h-5" />
              <span className="text-white/80">{video.rating}</span>
            </div>
          </motion.div>

          <p className="text-white/70 text-lg leading-relaxed max-w-3xl">
            {video.description}
          </p>

          <p className="text-cyan-400/80 text-sm tracking-wide uppercase font-semibold">
            {video.genre}
          </p>
        </div>

        {/* === DETAILS GRID === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {[
            {
              icon: <Clock className="w-5 h-5 text-cyan-400" />,
              label: "Duration",
              value: video.duration,
            },
            {
              icon: <User className="w-5 h-5 text-cyan-400" />,
              label: "Director",
              value: video.credits.director,
            },
            {
              icon: <User className="w-5 h-5 text-cyan-400" />,
              label: "Actors",
              value: video.credits.actors.join(", "),
            },
            {
              icon: <Music className="w-5 h-5 text-cyan-400" />,
              label: "Music",
              value: video.credits.music,
            },
            {
              icon: <Scissors className="w-5 h-5 text-cyan-400" />,
              label: "Editor",
              value: video.credits.editor,
            },
            {
              icon: <Film className="w-5 h-5 text-cyan-400" />,
              label: "Production",
              value: "Infinity Studios",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5 backdrop-blur-xl transition-all shadow-[0_0_30px_-10px_rgba(0,255,255,0.1)]"
            >
              <div className="flex items-center gap-3 text-white/80">
                {item.icon}
                <div>
                  <div className="text-cyan-400 font-medium">{item.label}</div>
                  <div className="text-white/70 text-sm">{item.value}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* === WATCH BUTTON === */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-14 flex justify-center"
        >
          <motion.a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 40px rgba(34,211,238,0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-600 text-black font-semibold text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300"
          >
            <Play className="w-5 h-5" /> Watch Now
          </motion.a>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
