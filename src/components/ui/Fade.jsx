import React from "react";
import { motion } from "framer-motion";

export default function Fade({ children, y = 20, duration = 0.6, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
