const { execute } = require("../interpreter");

// Test AST (Abstract Syntax Tree)
const testAST = [
    { type: "VariableDeclaration", name: "x", value: "5 + 3" },  // x = 8
    { type: "VariableDeclaration", name: "y", value: "x * 2" },  // y = 16
    { type: "PrintStatement", value: "y" },  // Should print: 16

    { type: "AssignmentStatement", name: "x", value: "y / 2" },  // x = 8
    { type: "PrintStatement", value: "x" },  // Should print: 8

    { type: "IfStatement", condition: "x == 8", body: [
        { type: "PrintStatement", value: '"Condition is True!"' }  // Should print: Condition is True!
    ] },

    { type: "VariableDeclaration", name: "name", value: 'spit("Enter your name: ")' },  // User input
    { type: "PrintStatement", value: '"Hello, " + name' },  // Should print: Hello, <user-input>

    { type: "WhileLoop", condition: "x > 0", body: [
        { type: "PrintStatement", value: "x" },
        { type: "AssignmentStatement", name: "x", value: "x - 2" }
    ] }
];

// Run tests
execute(testAST);
