"use client";

import React, { useState } from "react";
import { ChevronsUpDown, Terminal, Code2, FileText, Repeat, Keyboard, Book, AlertCircle, Mail, Twitter, Github } from "lucide-react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import Footer from "./Footer";

const sections = [
  {
    id: "intro",
    title: "Introduction",
    icon: <FileText size={22} className="text-blue-400" />,
    content: `GyatScript is a modern, expressive scripting language designed to make programming accessible and enjoyable. It combines familiar programming concepts with a unique syntax that makes code both readable and fun to write. Perfect for beginners and experienced developers alike who want to explore programming in a fresh way.`,
  },
  {
    id: "basics",
    title: "Basic Structure",
    icon: <Code2 size={22} className="text-purple-400" />,
    content: `Every GyatScript program must be enclosed in code blocks using 'sup sigma' and 'duh sigma'. This ensures proper code organization and scope management.`,
    code: `sup sigma
    // Your code goes here
    ts message = "Hello World";
    ong(message);
duh sigma`,
  },
  {
    id: "ts",
    title: "Variables (ts)",
    icon: <Code2 size={22} className="text-yellow-400" />,
    content: `Variables in GyatScript are declared using the 'ts' keyword. They can store numbers, strings, lists, and boolean values. Variables are dynamically typed and can be reassigned to different types.`,
    code: `// Number variable
ts count = 42;

// String variable
ts message = "Hello World";

// List variable
ts numbers = gyatlist(1, 2, 3);

// Boolean variable
ts isValid = true;

// Variable reassignment
ts value = 10;
ts value = "now a string";`,
  },
  {
    id: "ong",
    title: "Output (ong)",
    icon: <Terminal size={22} className="text-green-400" />,
    content: `The 'ong' command is used for output operations. It can print strings, numbers, variables, and expressions. Multiple values can be concatenated using the + operator.`,
    code: `// Basic output
ong("Hello, GyatScript!");

// Variable output
ts name = "User";
ong("Welcome, " + name);

// Expression output
ts x = 5;
ts y = 10;
ong("Sum: " + (x + y));`,
  },
  {
    id: "icl",
    title: "Conditionals (icl)",
    icon: <FileText size={22} className="text-purple-400" />,
    content: `Control flow in GyatScript uses 'icl' for conditional statements. You can create simple if statements or complex if-else chains. Conditions support all standard comparison operators.`,
    code: `// Simple if statement
ts score = 85;
icl (score >= 80) {
    ong("Great score!");
}

// If-else statement
ts age = 18;
icl (age >= 18) {
    ong("Adult access granted");
} else {
    ong("Access denied: Must be 18+");
}

// Multiple conditions
ts temp = 25;
icl (temp < 0) {
    ong("Freezing!");
} else icl (temp < 20) {
    ong("Cool");
} else {
    ong("Warm");
}`,
  },
  {
    id: "gng",
    title: "Loops (gng)",
    icon: <Repeat size={22} className="text-orange-400" />,
    content: `GyatScript provides 'gng' for creating loops. You can create counted loops or condition-based loops. Loop variables can be modified within the loop body.`,
    code: `// Counter loop
ts i = 0;
gng (i < 3) {
    ong("Loop #" + i);
    ts i = i + 1;
}

// Array iteration
ts list = gyatlist(1, 2, 3);
ts index = 0;
gng (index < 3) {
    ong(list[index]);
    ts index = index + 1;
}`,
  },
  {
    id: "spit",
    title: "Input (spit)",
    icon: <Keyboard size={22} className="text-cyan-400" />,
    content: `User input is handled with the 'spit' command. It displays a prompt and waits for user input, which can then be stored in variables and used in your program.`,
    code: `// Basic input
ts name = spit("Enter your name: ");
ong("Hello, " + name);

// Numeric input processing
ts ageStr = spit("Enter your age: ");
ts age = Number(ageStr);
icl (age >= 18) {
    ong("Welcome!");
} else {
    ong("Sorry, adults only!");
}`,
  },
  {
    id: "lists",
    title: "Lists (gyatlist)",
    icon: <Code2 size={22} className="text-pink-400" />,
    content: `Lists in GyatScript are created using the 'gyatlist' function. They can store multiple values of any type and support index-based access.`,
    code: `// Creating a list
ts numbers = gyatlist(1, 2, 3, 4, 5);

// Accessing elements
ong(numbers[0]);  // First element
ong(numbers[4]);  // Last element

// Mixed-type list
ts mixed = gyatlist("hello", 42, true);
ong(mixed[1]);  // Prints 42`,
  },
  {
    id: "errors",
    title: "Error Handling",
    icon: <Terminal size={22} className="text-red-400" />,
    content: `GyatScript provides clear error messages to help you debug your code. Common errors include syntax errors, undefined variables, and invalid operations.`,
    code: `// Example of error-prone code
ts x = 10;
icl (x > 5) {
    // This will cause an error - undefined variable
    ong(y);
}

// Array bounds error
ts list = gyatlist(1, 2);
ong(list[5]);  // Error: index out of bounds`,
  }
];

const DocumentationSec = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Header Section */}
      <div className="w-full bg-gray-900/50 backdrop-blur-sm py-8 px-4 sticky top-0 z-10 border-b border-gray-700/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 tracking-tight">
            📜 GyatScript Documentation
          </h2>
          <p className="text-gray-300 mt-2 text-base max-w-2xl mx-auto leading-relaxed">
            Learn how to write and execute GyatScript with this comprehensive guide.
          </p>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="max-w-4xl mx-auto px-4 pt-6 pb-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => toggleSection(section.id)}
              className={`cursor-pointer p-3 rounded-lg transition-all duration-300 ${
                openSection === section.id
                ? "bg-blue-500 text-white shadow-lg scale-105"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                {section.icon}
                <span className="text-sm font-medium">{section.title.split(" ")[0]}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Documentation Sections */}
        <div className="space-y-6 cursor-pointer">
          {sections.map((section) => (
            <div
              key={section.id}
              className={`cursor-pointer transform transition-all duration-500 ease-in-out ${
                openSection === section.id ? "opacity-100 translate-y-0" : "opacity-60 translate-y-4"
              }`}
            >
              <div 
                className={`cursor-pointer bg-gray-800/50 backdrop-blur rounded-xl shadow-lg border border-gray-700/50 overflow-hidden
                  ${openSection === section.id ? "ring-2 ring-blue-500/50" : ""}`}
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex justify-between items-center px-6 py-4 hover:bg-gray-700/50 transition-colors duration-200"
                >
                  <div className="flex items-center gap-3">
                    {section.icon}
                    <span className="font-semibold text-lg">{section.title}</span>
                  </div>
                  <ChevronsUpDown 
                    size={20} 
                    className={`transform transition-transform duration-300 ${
                      openSection === section.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openSection === section.id && (
                  <div className="animate-fadeIn">
                    <div className="px-6 py-4 border-t border-gray-700/50">
                      <p className="text-gray-300 text-base leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                    
                    {section.code && (
                      <div className="p-4 bg-gray-900/50">
                        <div className="rounded-lg overflow-hidden border border-gray-700/50 shadow-inner">
                          <div className="bg-gray-800 px-4 py-2 flex items-center gap-2">
                            <Code2 size={16} className="text-gray-400" />
                            <span className="text-sm font-mono text-gray-400">Example</span>
                          </div>
                          <CodeMirror
                            value={section.code}
                            height="auto"
                            extensions={[javascript()]}
                            theme="dark"
                            readOnly
                            className="text-sm"
                            basicSetup={{
                              lineNumbers: false,
                              foldGutter: false,
                              dropCursor: false,
                              allowMultipleSelections: false,
                              indentOnInput: false,
                            }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}

     <div className="mt-10">
     <Footer />
     </div>
      
          
    </section>
  );
};

export default DocumentationSec;
