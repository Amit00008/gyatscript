"use client";

import React from "react";
import { Github,  Mail } from "lucide-react";
import { FaNpm } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className=" right-0 w-full bg-gray-900/80 backdrop-blur-sm border-t border-gray-800">
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16">
        {/* Left Section */}
        <div className="text-center sm:text-left space-y-4">
          <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            GYATSCRIPT
          </h3>
          <p className="text-gray-400 text-sm max-w-xs mx-auto sm:mx-0">
            A modern programming language that brings TikTok culture to coding. Built with ❤️ and memes.
          </p>
        </div>

        {/* Right Section */}
        <div className="text-center sm:text-right">
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-end gap-4">
              <a
                href="https://github.com/Amit00008/gyatscript"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Github size={20} />
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href="https://npmjs.com/package/gyatscript"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <FaNpm size={20} />
                <span className="text-sm">Npm</span>
              </a>
              <a
                href="mailto:amit@felixify.in"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={20} />
                <span className="text-sm">Contact</span>
              </a>
            </div>
            <div className="text-gray-500 text-sm pt-4 border-t border-gray-800/50">
              <p>
                Made by{" "}
                <a
                  href="https://amitfr.tech"
                  className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
                >
                  @Amit
                </a>{" "}
                © {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
</footer>
  );
};

export default Footer; 