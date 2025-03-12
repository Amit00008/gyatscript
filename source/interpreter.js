const readline = require("readline-sync");
const { GyatError } = require("./lexer");

// Define global functions that will be available in the evaluation context
const globalFunctions = {
    gyatlist: (...args) => args
};

function evaluate(expression, variables) {
    try {
        // Handle `spit("Enter your name: ")` for user input
        if (/spit\s*\(\s*".*"\s*\)/.test(expression)) {
            const match = expression.match(/spit\s*\(\s*"([^"]+)"\s*\)/);
            if (match) {
                return readline.question(match[1] + " ");
            }
        }

        // Combine global functions with variables for evaluation context
        const context = { ...globalFunctions, ...variables };
        return Function(...Object.keys(context), `"use strict"; return (${expression});`)(...Object.values(context));
    } catch (error) {
        throw new GyatError(
            `Error evaluating expression: ${expression}`,
            "no cap fr fr... that expression ain't it chief 🚫"
        );
    }
}

function execute(ast, variables = {}) {
    try {
        for (let node of ast) {
            if (node.type === "VariableDeclaration") {
                try {
                    variables[node.name] = evaluate(node.value, variables);
                } catch (error) {
                    throw new GyatError(
                        `Invalid variable declaration: ${node.name}`,
                        "bruh moment... that variable declaration is bussin't 😤"
                    );
                }
            } 
            else if (node.type === "AssignmentStatement") {  
                if (variables.hasOwnProperty(node.name)) {
                    try {
                        variables[node.name] = evaluate(node.value, variables);
                    } catch (error) {
                        throw new GyatError(
                            `Invalid assignment to ${node.name}`,
                            "nah fam, that assignment ain't it 🙅‍♂️"
                        );
                    }
                } else {
                    throw new GyatError(
                        `Variable '${node.name}' is not defined`,
                        "skill issue detected: using variables that don't exist 💀"
                    );
                }
            }
            else if (node.type === "InputStatement") {
                try {
                    variables[node.name] = readline.question(node.prompt + " ");
                } catch (error) {
                    throw new GyatError(
                        "Input operation failed",
                        "my brother in christ... your input game weak 📉"
                    );
                }
            }
            else if (node.type === "PrintStatement") {
                try {
                    const evaluatedValue = evaluate(node.value, variables);
                    console.log(evaluatedValue);
                } catch (error) {
                    throw new GyatError(
                        "Print operation failed",
                        "ong fr fr... can't even print properly 🖨️❌"
                    );
                }
            } 
            else if (node.type === "IfStatement") {
                try {
                    if (evaluate(node.condition, variables)) {
                        execute(node.body, variables);
                    }
                } catch (error) {
                    throw new GyatError(
                        "Condition evaluation failed",
                        "that condition looking real sus rn 👀"
                    );
                }
            } 
            else if (node.type === "WhileLoop") {
                try {
                    while (evaluate(node.condition, variables)) {
                        execute(node.body, variables);
                    }
                } catch (error) {
                    throw new GyatError(
                        "Loop execution failed",
                        "ur loop game weak af no cap 🔄❌"
                    );
                }
            }
        }
    } catch (error) {
        if (error instanceof GyatError) {
            console.error("\x1b[31m%s\x1b[0m", `${error.slangMessage}`);
            console.error("\x1b[33m%s\x1b[0m", `Technical details: ${error.message}`);
        } else {
            throw new GyatError(
                error.message,
                "hell no dude skill issue... something went terribly wrong 💀"
            );
        }
    }
}

module.exports = { execute };
