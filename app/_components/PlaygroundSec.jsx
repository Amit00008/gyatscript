"use client";

import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { motion } from "framer-motion";
import { Play, Trash2, Terminal, AlertCircle, Loader2 } from "lucide-react";

const PlaygroundSec = () => {
  const [code, setCode] = useState(`// GyatScript Example
sup sigma
  ts message = "Hello, World!";
  ong(message);
duh sigma`);
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const runCode = async () => {
    if (!code.trim()) {
      setError("Please enter some code to run.");
      return;
    }

    setLoading(true);
    setError("");
    setOutput("");
    
    try {
      const response = await fetch("/api/run-gyatscript", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to execute code");
      }

      if (data.error) {
        setError(data.error);
      } else {
        setOutput(data.output ? data.output.join("\n") : "No output");
      }
    } catch (err) {
      setError(err.message || "Failed to execute code. Please try again.");
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
    <section id="playground" className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Playground
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Write and test your GyatScript code in real-time.
          </p>
        </motion.div>

        {/* Code Editor Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {/* Editor */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-gray-300">
                <Terminal size={18} />
                <span>Editor</span>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={clearCode}
                  className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 
                    text-gray-300 hover:text-white transition-colors border border-gray-700"
                >
                  <Trash2 size={16} />
                  <span className="hidden sm:inline">Clear</span>
                </button>
                <button
                  onClick={runCode}
                  disabled={loading || !code.trim()}
                  className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg transition-colors
                    ${loading || !code.trim()
                      ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                      : "bg-blue-500 hover:bg-blue-600 text-white"
                    }`}
                >
                  {loading ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <Play size={16} />
                  )}
                  <span className="hidden sm:inline">Run</span>
                </button>
              </div>
            </div>
            <div className="border border-gray-700 rounded-lg overflow-hidden bg-gray-900/50 backdrop-blur">
              <CodeMirror
                value={code}
                height="400px"
                theme="dark"
                extensions={[javascript()]}
                onChange={(value) => setCode(value)}
                className="text-sm"
                basicSetup={{
                  lineNumbers: true,
                  foldGutter: true,
                  highlightActiveLine: true,
                  highlightSelectionMatches: true,
                  syntaxHighlighting: true,
                }}
              />
            </div>
          </div>

          {/* Output */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-gray-300">
              <Terminal size={18} />
              <span>Output</span>
            </div>
            <div className="h-[400px] border border-gray-700 rounded-lg bg-gray-900 p-4 overflow-auto">
              {error ? (
                <div className="flex items-start space-x-2 text-red-400">
                  <AlertCircle size={18} className="mt-1 flex-shrink-0" />
                  <pre className="font-mono text-sm whitespace-pre-wrap">{error}</pre>
                </div>
              ) : output ? (
                <pre className="font-mono text-sm text-gray-300 whitespace-pre-wrap">{output}</pre>
              ) : (
                <div className="text-gray-500 text-sm">
                  Output will appear here after running your code...
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlaygroundSec;
