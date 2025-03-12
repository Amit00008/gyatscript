"use client";
import React, { useState } from "react";
import { Clipboard, Check, Github, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const LandingSec = () => {
  const [copied, setCopied] = useState(false);
  const command = "npm i -g gyatscript";

  // Copy to clipboard function
  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);

    // Reset the icon after 2 seconds
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-purple-500/5" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center">
        <div className="text-center space-y-12 sm:space-y-8">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-7xl sm:text-7xl font-extrabold tracking-tight leading-none font-display">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                GYAT<br className="sm:hidden" />SCRIPT
              </span>
            </h1>
            <p className="text-2xl sm:text-2xl text-gray-300 max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed font-sans">
              A Tik-Tok Brainrot based Programming Language written in JavaScript
            </p>
          </motion.div>

          {/* Install Command */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center space-y-4 px-4 sm:px-0"
          >
            <div
              onClick={handleCopy}
              className="group bg-gray-800/80 backdrop-blur border border-gray-700/50 rounded-xl p-4 cursor-pointer w-full max-w-sm
                hover:bg-gray-700/80 hover:border-gray-600/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between space-x-4">
                <code className="text-lg sm:text-base font-mono text-blue-400">{command}</code>
                <button className="p-2.5 sm:p-1.5 rounded-lg bg-gray-700/50 group-hover:bg-gray-600/50 transition-colors">
                  {copied ? (
                    <Check className="text-green-400" size={24} />
                  ) : (
                    <Clipboard className="text-gray-400 group-hover:text-gray-300" size={24} />
                  )}
                </button>
              </div>
            </div>
            <p className="text-base sm:text-sm text-gray-400 font-sans">Click to copy installation command</p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 px-4 sm:px-0"
          >
            <a
              href="#playground"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('playground').scrollIntoView({ behavior: 'smooth' });
              }}
              className="group flex items-center justify-center gap-3 bg-blue-500 hover:bg-blue-600 text-white px-6 py-4 sm:py-2.5 rounded-xl
                font-semibold transition-all duration-300 shadow-lg shadow-blue-500/25 text-lg sm:text-base font-sans"
            >
              Try Playground
              <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://github.com/Amit00008/gyatscript"
              className="group flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white
                px-6 py-4 sm:py-2.5 rounded-xl font-semibold transition-all duration-300 border border-gray-700/50 text-lg sm:text-base font-sans"
            >
              <Github size={24} />
              View Source
            </a>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 text-center py-8">
        <p className="text-base text-gray-400">
          Made by{" "}
          <a href="https://amitfr.tech" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
            @Amit
          </a>
        </p>
      </div>
    </section>
  );
};

export default LandingSec;
