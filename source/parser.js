function parse(tokens) {
    let ast = [];
    let i = 0;

    while (i < tokens.length) {
        let token = tokens[i];

        // Variable Declaration (Math expressions allowed)
        if (token === "ts" && tokens[i + 1] && tokens[i + 2] === "=") {
            let name = tokens[i + 1];
            let valueTokens = [];
            i += 3;
            
            while (tokens[i] !== ";" && i < tokens.length) {
                valueTokens.push(tokens[i]);
                i++;
            }

            ast.push({
                type: "VariableDeclaration",
                name,
                value: valueTokens.join(" ") // Store full math expression
            });

            if (tokens[i] === ";") i++;
        } 
        // Print Statement
        else if (token === "ong" && tokens[i + 1] === "(") {
            let valueTokens = [];
            i += 2; // Move inside the parentheses
        
            while (tokens[i] !== ")" && i < tokens.length) {
                valueTokens.push(tokens[i]);
                i++;
            }
        
            ast.push({
                type: "PrintStatement",
                value: valueTokens.join(" ") // Join the entire string
            });
        
            i += 2; // Move past ')' and ';'
        }
        
        // Conditionals (if-else using 'icl')
        else if (token === "icl" && tokens[i + 1] === "(") {
            let condition = [];
            i += 2;

            while (tokens[i] !== ")" && i < tokens.length) {
                condition.push(tokens[i]);
                i++;
            }

            let body = [];
            i += 2; // Skip past '{'

            while (tokens[i] !== "}" && i < tokens.length) {
                body.push(tokens[i]);
                i++;
            }

            ast.push({
                type: "IfStatement",
                condition: condition.join(" "),
                body: parse(body) // Recursively parse inside block
            });

            i++;
        } 
        else if (token === "ts" && tokens[i + 1] && tokens[i + 2] === "=" && tokens[i + 3] === "spit") {
            let name = tokens[i + 1];
            let promptMessage = tokens[i + 5]; // Capture text inside spit("...")
            
            ast.push({
                type: "InputStatement",
                name,
                prompt: promptMessage.slice(1, -1) // Remove quotes
            });
        
            i += 8; // Move past 'ts var = spit("text");'
        }

        
        
        // Loops (while using 'gng')
        else if (token === "gng" && tokens[i + 1] === "(") {
            let condition = [];
            i += 2;

            while (tokens[i] !== ")" && i < tokens.length) {
                condition.push(tokens[i]);
                i++;
            }

            let body = [];
            i += 2; // Skip past '{'

            while (tokens[i] !== "}" && i < tokens.length) {
                body.push(tokens[i]);
                i++;
            }

            ast.push({
                type: "WhileLoop",
                condition: condition.join(" "),
                body: parse(body) // Recursively parse inside block
            });

            i++;
        } else {
            i++;
        }
    }

    return ast;
}

module.exports = { parse };
