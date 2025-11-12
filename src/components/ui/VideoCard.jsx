import React from "react";
import { motion } from "framer-motion";
import { Play, Info } from "lucide-react";

export default function VideoCard({ video, onPlay }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="relative group overflow-hidden rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all shadow-[0_0_8px_rgba(255,255,255,0.04)]"
    >
      <div className="relative h-32 sm:h-36 md:h-40 overflow-hidden">
        <motion.img
          src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
          alt={video.title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        <motion.button
          onClick={() => onPlay(video)}
          whileHover={{ scale: 1.1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-8 h-8 rounded-full bg-white/20 border border-white/30 flex items-center justify-center group-hover:bg-white/40 transition">
            <Play className="w-3.5 h-3.5 text-white" />
          </div>
        </motion.button>

        {video.duration && (
          <span className="absolute top-1.5 right-1.5 bg-black/70 text-white text-[9px] px-1.5 py-[1px] rounded">
            {video.duration}
          </span>
        )}
      </div>

      <div className="p-2.5">
        <h3 className="font-medium text-[13px] mb-[2px] line-clamp-1">
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
