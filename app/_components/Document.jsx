"use client";

import React, { useState } from "react";
import { ChevronsUpDown, Terminal, Code2, FileText, Repeat, Keyboard } from "lucide-react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

const sections = [
  {
    id: "intro",
    title: "Introduction",
    icon: <FileText size={22} className="text-blue-400" />,
    content: `GyatScript is a lightweight and beginner-friendly scripting language. It allows simple scripting using easy-to-remember commands.`,
  },
  {
    id: "ts",
    title: "Variable Declaration (ts)",
    icon: <Code2 size={22} className="text-yellow-400" />,
    content: `In GyatScript, you can declare variables using the 'ts' keyword.`,
    code: `// Declare a variable
ts name = "Amit";
ong("Hello, " + name + "!");`,
  },
  {
    id: "ong",
    title: "Print Statements (ong)",
    icon: <Terminal size={22} className="text-green-400" />,
    content: `The 'ong' command prints output to the console, similar to 'console.log()' in JavaScript.`,
    code: `// Print text
ong("Hello, GyatScript!");

// Print numbers
ts age = 16;
ong("I am " + age + " years old.");`,
  },
  {
    id: "icl",
    title: "Conditional Statements (icl)",
    icon: <FileText size={22} className="text-purple-400" />,
    content: `GyatScript supports conditional statements using 'icl' (if-else).`,
    code: `// If-Else example
ts age = 18;

icl (age >= 18) {
    ong("You are an adult.");
} else {
    ong("You are a minor.");
}`,
  },
  {
    id: "gng",
    title: "Loops (gng)",
    icon: <Repeat size={22} className="text-orange-400" />,
    content: `Use 'gng' to create loops that repeat code execution.`,
    code: `// Loop 3 times
gng (3) {
    ong("Keep going!");
}`,
  },
  {
    id: "spit",
    title: "User Input (spit)",
    icon: <Keyboard size={22} className="text-cyan-400" />,
    content: `The 'spit' command takes input from the user.`,
    code: `// Ask for user input
ts name = spit("Enter your name: ");
ong("Hello, " + name + "!");`,
  },
];

const DocumentationSec = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6 py-12">
      <h2 className="text-5xl font-extrabold text-blue-500 text-center tracking-wide">
        📜 GyatScript Documentation
      </h2>
      <p className="text-gray-400 mt-3 text-center max-w-2xl text-lg">
        Learn how to write and execute GyatScript with this structured and easy-to-follow guide.
      </p>

      <div className="w-full max-w-3xl mt-8 space-y-4">
        {sections.map((section) => (
          <div
            key={section.id}
            className={`bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-700 transition-all duration-300 ${
              openSection === section.id ? "scale-105 shadow-xl" : "scale-100"
            }`}
          >
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full flex justify-between items-center bg-gray-700 hover:bg-gray-600 transition-all duration-300 text-white font-semibold py-4 px-6 text-lg rounded-lg"
            >
              <div className="flex items-center gap-3">
                {section.icon}
                {section.title}
              </div>
              <ChevronsUpDown size={20} />
            </button>
            {openSection === section.id && (
              <div className="p-6 animate-fadeIn">
                <p className="text-gray-300 text-base">{section.content}</p>
                {section.code && (
                  <div className="mt-4 border border-gray-700 rounded-md overflow-hidden shadow-md">
                    <CodeMirror
                      value={section.code}
                      height="180px"
                      extensions={[javascript()]}
                      theme="dark"
                      readOnly
                      className="text-sm"
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default DocumentationSec;
