import React from "react";
import { useParams } from "react-router-dom";
import { Play } from "lucide-react";

export default function VideoDetails() {
  const { id } = useParams();

  // You can later fetch from API, but for now mock:
  const video = {
    id,
    title: "Humor in Chaos",
    description:
      "A sharp and witty breakdown of modern chaos through the lens of humor and satire.",
    duration: "5:42",
    credits: {
      director: "James Carter",
      actors: ["Olivia Brooks", "Ethan Cooper"],
      music: "Noah Turner",
      editor: "Sophia Reed",
    },
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 mb-6">
          <iframe
            src={`https://www.youtube.com/embed/${video.id}`}
            className="w-full h-full"
            allowFullScreen
          ></iframe>
        </div>

        <h1 className="text-3xl font-semibold mb-3">{video.title}</h1>
        <p className="text-white/70 mb-6">{video.description}</p>

        <div className="text-sm border border-white/10 rounded-xl p-4 bg-white/5 space-y-2">
          <div>
            <span className="font-medium text-cyan-400">Duration:</span>{" "}
            {video.duration}
          </div>
          <div>
            <span className="font-medium text-cyan-400">Director:</span>{" "}
            {video.credits.director}
          </div>
          <div>
            <span className="font-medium text-cyan-400">Actors:</span>{" "}
            {video.credits.actors.join(", ")}
          </div>
          <div>
            <span className="font-medium text-cyan-400">Music:</span>{" "}
            {video.credits.music}
          </div>
          <div>
            <span className="font-medium text-cyan-400">Editor:</span>{" "}
            {video.credits.editor}
          </div>
        </div>

        <a
          href="https://youtube.com"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full mt-6 hover:bg-gray-200 transition"
        >
          <Play className="w-4 h-4" /> Watch on YouTube
        </a>
      </div>
    </div>
  );
}
