import React from "react";
import { motion } from "framer-motion";

export default function Stat({ kpi, label }) {
  return (
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
}
