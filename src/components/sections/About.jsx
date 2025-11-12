import React from "react";
import Fade from "../ui/Fade";
import Stat from "../ui/Stat";
import Section from "../ui/Section";

export default function About({ fade }) {
  return (
    <Section id="about" className="py-20 border-t border-white/10">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <Fade>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6">
            <h2 className="text-2xl font-bold sm:text-3xl text-white">
              About Infinity Ominiverse
            </h2>
            <p className="mt-4 text-white/70">
              We craft irreverent, high-signal commentary blending politics,
              innovation, and culture — with punchlines that land. Each episode
              fuses classic composition and modern motion.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-white/70 sm:grid-cols-2">
              {[
                "Sharp satire & sketch formats",
                "Cinematic edits & sound design",
                "Tech + culture + politics",
                "Respect for accessibility",
              ].map((t) => (
                <li
                  key={t}
                  className="rounded-lg border border-white/10 bg-white/5 p-3"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Fade>

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
                Smart can be funny—and funny can be smart. That balance fuels
                every upload.
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
