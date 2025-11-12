import React from "react";
import VideoCard from "../ui/VideoCard";
import { FEATURED_VIDEOS } from "../data/videos";

export default function Featured({ setActiveVideo }) {
  return (
    <section
      id="videos"
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
