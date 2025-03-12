class GyatError extends Error {
    constructor(message, slangMessage) {
        super(message);
        this.name = 'GyatError';
        this.slangMessage = slangMessage;
    }
}

function tokenize(code) {
    // First, extract the code between sup sigma and duh sigma
    const regex = /sup\s+sigma([\s\S]*?)duh\s+sigma/;
    const match = code.match(regex);
    
    if (!match) {
        throw new GyatError(
            "Missing 'sup sigma' and 'duh sigma' block",
            "U aint no sigma fr fr... where's your sup sigma and duh sigma at? 💀"
        );
    }
    
    // Only tokenize the code within the block
    const codeBlock = match[1];
    
    try {
        const tokens = codeBlock
            .replace(/;/g, " ; ")
            .replace(/\(/g, " ( ")
            .replace(/\)/g, " ) ")
            .replace(/{/g, " { ")
            .replace(/}/g, " } ")
            .split(/\s+/)
            .map(token => token.trim())
            .filter(token => token.length > 0);

        if (tokens.length === 0) {
            throw new GyatError(
                "Empty code block",
                "hell no dude skill issue... your code block empty af 💀"
            );
        }

        return tokens;
    } catch (error) {
        if (error instanceof GyatError) throw error;
        throw new GyatError(
            "Invalid syntax",
            "ur gyat level is too low... can't even write proper code smh 🤦‍♂️"
        );
    }
}

module.exports = { tokenize, GyatError };
