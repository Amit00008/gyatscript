"use client";

import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { Play, Trash } from "lucide-react";
import { javascript } from "@codemirror/lang-javascript";
import { motion } from "framer-motion";

const PlaygroundSec = () => {
  const [code, setCode] = useState('// GyatScript Example\nong("Hello, Gyat!");');
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const runCode = async () => {
    if (!code.trim()) {
      setError("Code cannot be empty!");
      return;
    }

    setLoading(true);
    setError("");
    setOutput("Running...");

    try {
      const res = await fetch("/api/run-gyatscript", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong while executing the code.");
      }

      setOutput(data.output ? data.output.join("\n") : "No output.");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const clearCode = () => {
    setCode("");
    setOutput("");
    setError("");
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6 py-12">
      <motion.h2 
        initial={{ opacity: 0, y: -10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-blue-500"
      >
        Playground
      </motion.h2>
      <p className="text-gray-400 mt-2">Write and run your GyatScript code below.</p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full max-w-3xl bg-gray-800 mt-6 rounded-lg shadow-lg overflow-hidden"
      >
        <CodeMirror
          value={code}
          height="300px"
          extensions={[javascript()]}
          theme="dark"
          className="text-lg"
          onChange={(value) => setCode(value)}
        />
      </motion.div>

      <div className="flex space-x-4 mt-4">
        <button
          onClick={runCode}
          disabled={loading}
          className={`flex items-center space-x-2 font-bold py-2 px-6 rounded-md ${
            loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          <Play size={18} />
          <span>{loading ? "Running..." : "Run"}</span>
        </button>
        <button 
          onClick={clearCode} 
          className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded-md flex items-center space-x-2"
        >
          <Trash size={18} />
          <span>Clear</span>
        </button>
      </div>

      {error && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full max-w-3xl bg-red-700 text-white mt-4 p-4 rounded-lg shadow-lg"
        >
          <h3 className="text-lg font-semibold">Error:</h3>
          <pre className="mt-2 whitespace-pre-wrap">{error}</pre>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-3xl bg-gray-800 text-green-400 mt-6 p-4 rounded-lg shadow-lg min-h-[100px]"
      >
        <h3 className="text-lg font-semibold text-gray-300">Output:</h3>
        <pre className="mt-2 whitespace-pre-wrap">{output}</pre>
      </motion.div>
    </section>
  );
};

export default PlaygroundSec;
