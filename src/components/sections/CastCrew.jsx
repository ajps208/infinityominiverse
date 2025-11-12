import React from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter } from "lucide-react";

const TEAM = [
  { name: "James Carter", role: "Founder & Creative Head", subtitle: "Writer, Director, Editor" },
  { name: "Olivia Brooks", role: "Writer, Director, Actor" },
  { name: "Ethan Cooper", role: "Writer, Director, Actor" },
  { name: "Sophia Reed", role: "Editor, Actor" },
  { name: "Liam Foster", role: "Writer, Director, Actor" },
  { name: "Ava Mitchell", role: "Writer, Actor" },
  { name: "Noah Turner", role: "Writer, Director, Actor" },
  { name: "Emma Davis", role: "Actor" },
];

export default function CastCrew() {
  return (
    <section id="crew" className="py-20 border-t border-white/10 bg-gradient-to-b from-black via-[#020617] to-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Meet the <span className="text-cyan-400">Cast & Crew</span>
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
          {TEAM.map((member, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="relative w-full max-w-[250px] rounded-2xl border border-white/10 bg-white/5 p-4 text-center hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-24 h-24 mx-auto overflow-hidden rounded-full border border-white/20 mb-4">
                <img
                  src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-sm mt-1 text-white/60">{member.role}</p>
              {member.subtitle && (
                <p className="text-xs mt-1 text-white/50">{member.subtitle}</p>
              )}

              <div className="flex justify-center gap-3 mt-3 text-white/70 hover:text-cyan-400 transition">
                <Facebook className="w-4 h-4 cursor-pointer" />
                <Instagram className="w-4 h-4 cursor-pointer" />
                <Twitter className="w-4 h-4 cursor-pointer" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
