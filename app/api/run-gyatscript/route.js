import { NextResponse } from "next/server";
import { tokenize } from "@/gyatscript/lexer";
import { parse } from "@/gyatscript/parser";
import { execute } from "@/gyatscript/interpreter";

export async function POST(req) {
    try {
        // Parse request body
        const { code } = await req.json();
        if (!code || typeof code !== "string") {
            return NextResponse.json({ error: "Invalid or missing code input" }, { status: 400 });
        }

        let output = [];
        const originalLog = console.log;
        console.log = (msg) => output.push(msg);

        try {
            // Tokenization
            const tokens = tokenize(code);
            if (!tokens || tokens.length === 0) {
                throw new Error("Failed to tokenize code. Check your syntax.");
            }

            // Parsing
            const ast = parse(tokens);
            if (!ast) {
                throw new Error("Parsing error. The code structure might be incorrect.");
            }

            // Execution
            execute(ast);
        } catch (executionError) {
            console.log = originalLog; // Ensure console.log is restored
            return NextResponse.json({ error: executionError.message }, { status: 400 });
        }

        console.log = originalLog; // Restore console.log after successful execution
        return NextResponse.json({ output }, { status: 200 });

    } catch (serverError) {
        console.error("Server Error:", serverError);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
