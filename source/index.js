#!/usr/bin/env node

const fs = require("fs");
const { tokenize } = require("./lexer");
const { parse } = require("./parser");
const { execute } = require("./interpreter");

const args = process.argv.slice(2);
if (args.length === 0) {
    console.log("Usage: gyat <filename>");
    process.exit(1);
}

const filename = args[0];

try {
    if (!fs.existsSync(filename)) {
        console.error(`Error: File '${filename}' not found`);
        process.exit(1);
    }

    const code = fs.readFileSync(filename, "utf-8");
    const tokens = tokenize(code);
    const ast = parse(tokens);
    execute(ast);
} catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
}
