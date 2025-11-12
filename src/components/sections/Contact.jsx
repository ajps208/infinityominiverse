import React from "react";
import { Youtube, Twitter, Instagram } from "lucide-react";

export default function Contact() {
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
              <Youtube className="w-4 h-4" /> YouTube
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 border border-white/20 px-4 py-2 rounded-full text-sm hover:bg-white hover:text-black"
            >
              <Twitter className="w-4 h-4" /> Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 border border-white/20 px-4 py-2 rounded-full text-sm hover:bg-white hover:text-black"
            >
              <Instagram className="w-4 h-4" /> Instagram
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
