import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Youtube, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Videos", href: "#videos" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* ======= TOP NAVBAR ======= */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 text-xl font-bold">
            <img
              src="/logo1.png"
              alt="Infinity Ominiverse Logo"
              className="w-10 h-10 object-contain rounded-full border border-white/20"
            />
            <span>
              Infinity <span className="font-light opacity-80">Ominiverse</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex gap-6 text-sm items-center">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="opacity-75 hover:opacity-100 transition-all focus:ring-2 focus:ring-white/40 rounded px-1"
              >
                {label}
              </a>
            ))}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all"
            >
              <Youtube className="w-4 h-4" /> Watch
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-white/20 hover:bg-white/10 transition"
          >
            <Menu className="w-5 h-5 text-white" />
          </button>
        </div>
      </header>

      {/* ======= MOBILE SIDEBAR ======= */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar Drawer */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
              className="fixed top-0 left-0 h-full w-72 bg-black/90 backdrop-blur-md border-r border-white/10 z-50 flex flex-col justify-between"
            >
              <div>
                {/* Sidebar Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <img
                      src="/logo1.png"
                      alt="Infinity Ominiverse Logo"
                      className="w-10 h-10 rounded-full border border-white/20"
                    />
                    <h2 className="font-semibold text-lg">Infinity Ominiverse</h2>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg hover:bg-white/10 transition"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>
                </div>

                {/* Sidebar Links */}
                <nav className="flex flex-col gap-4 p-6 text-sm">
                  {navLinks.map(({ label, href }) => (
                    <a
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className="block py-2 px-3 rounded-lg hover:bg-white/10 transition"
                    >
                      {label}
                    </a>
                  ))}

                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 border border-white/20 px-4 py-2 mt-4 rounded-full hover:bg-white hover:text-black transition"
                  >
                    <Youtube className="w-4 h-4" /> Watch
                  </a>
                </nav>
              </div>

              {/* Footer */}
              <div className="border-t border-white/10 px-6 py-4 text-xs text-white/50">
                © {new Date().getFullYear()} Infinity Ominiverse
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
