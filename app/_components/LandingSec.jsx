"use client";
import React, { useState } from "react";
import { Clipboard, Check } from "lucide-react";

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
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6">
      {/* Logo and Title */}
      <h1 className="text-6xl md:text-7xl font-extrabold text-blue-500 tracking-wide">
        GYATSCRIPT
      </h1>
      <p className="text-lg md:text-xl mt-4 text-gray-300">
        A powerful yet fun programming language.
      </p>

      {/* Install Command Box (Copy to Clipboard) */}
      <div
        className="bg-gray-800 text-blue-300 px-4 py-2 rounded-md mt-6 text-lg border border-blue-500 flex items-center space-x-3 cursor-pointer hover:bg-gray-700 transition"
        onClick={handleCopy}
      >
        <code>{command}</code>
        {copied ? (
          <Check className="text-green-400" size={20} />
        ) : (
          <Clipboard className="text-gray-400" size={20} />
        )}
      </div>

      {/* Buttons */}
      <div className="mt-8 flex space-x-4">
        <a
          href="/playground"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-md text-lg transition"
        >
          Playground
        </a>
        <a
          href="https://github.com/your-repo"
          className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-md text-lg transition"
        >
          View Source
        </a>
      </div>

      {/* Footer */}
      <p className="mt-10 text-gray-400">
        Made by <a href="https://github.com/Amit00008" className="text-blue-400 hover:underline">@Amit</a>
      </p>
    </section>
  );
};

export default LandingSec;
