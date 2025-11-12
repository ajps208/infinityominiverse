import React from "react";
import { motion } from "framer-motion";
import { Zap, Sparkles, Film, BadgeCheck, Play } from "lucide-react";

const THEMES = [
  { name: "Funny", icon: <Zap className="w-4 h-4" /> },
  { name: "Sarcastic", icon: <Sparkles className="w-4 h-4" /> },
  { name: "Political", icon: <Film className="w-4 h-4" /> },
  { name: "Innovative", icon: <BadgeCheck className="w-4 h-4" /> },
  { name: "Satirical", icon: <Play className="w-4 h-4" /> },
];

export default function Themes() {
  return (
    <section className="border-y border-white/10 py-12 bg-gradient-to-b from-white/5 to-transparent">
      <div className="relative mb-12">
        <div className="border border-white/10 overflow-hidden py-4 backdrop-blur-sm">
          <div className="mask-image:[linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] overflow-hidden">
            <motion.div
              className="flex gap-8 whitespace-nowrap text-sm tracking-widest items-center"
              initial={{ x: 0 }}
              animate={{ x: [0, -400] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {Array.from({ length: 25 }).map((_, i) => (
                <span key={i} className="inline-flex items-center gap-2 px-2">
                  <Film className="h-4 w-4" /> GOD’S OWN CHANNEL
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-sm tracking-widest text-white/60 uppercase mb-6">
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
