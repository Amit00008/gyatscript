# 🚀 GyatScript

Welcome to **GyatScript**, the ultimate Tik-Tok Brainrot Scripting Language! This project is a custom scripting language designed for fun and educational purposes, combining modern internet slang with programming concepts.

[![NPM Version](https://img.shields.io/npm/v/gyatscript.svg)](https://www.npmjs.com/package/gyatscript)
  [![NPM Downloads](https://img.shields.io/npm/dt/gyatscript.svg)](https://www.npmjs.com/package/gyatscript)
  [![GitHub License](https://img.shields.io/github/license/Amit00008/gyatscript)](https://github.com/Amit00008/gyatscript/blob/main/LICENSE)
  [![Website](https://img.shields.io/badge/website-gyatscript.felixify.in-blue)](https://gyatscript.felixify.in)

## 🌟 Introduction

GyatScript is a simple yet scripting language with syntax inspired by popular trends and memes. It is designed for fun purposes only

## ✨ Features

- **Code Blocks**: All code must be wrapped in `sup sigma` and `duh sigma` blocks
- **Variable Declarations**: Declare variables using `ts`
- **Print Statements**: Output to console using `ong`
- **Conditional Statements**: Use `icl` for if-else conditions
- **Loops**: Create loops with `gng`
- **User Input**: Get user input with `spit`
- **Lists**: Create and manipulate lists using `gyatlist`
- **Math Operations**: Full support for arithmetic operations
- **String Operations**: String concatenation and manipulation
- **Based Error Messages**: Get roasted with slang-filled error messages when you mess up

## ⚙️ Installation

To install GyatScript globally (recommended):

```bash
npm install -g gyatscript
```

For use in a project:

```bash
npm install gyatscript
```

## 🚀 Usage

Run a GyatScript file:

```bash
gyat <filename.gyat>
```

Example:
```bash
gyat index.gyat
```

## 💡 Examples

### 1. Basic Code Structure
```gyat
sup sigma
    ts message = "Hello World";
    ong(message);
duh sigma

// This code outside the block will be ignored
ts ignored = "This won't run";
```

### 2. Math Operations
```gyat
sup sigma
    ts x = 10;
    ts y = 5;
    ts result = x + y;
    ong("Sum is:");
    ong(result);
duh sigma
```

### 3. Lists and Indexing
```gyat
sup sigma
    ts numbers = gyatlist(1, 2, 3, 4, 5);
    ong(numbers[2]);  // Prints 3 (zero-based indexing)
duh sigma
```

### 4. Conditional Statements
```gyat
sup sigma
    ts age = 20;
    icl (age >= 18) {
        ong("You are an adult");
    }
duh sigma
```

### 5. Loops
```gyat
sup sigma
    ts counter = 0;
    gng (counter < 3) {
        ong("Counter is:");
        ong(counter);
        ts counter = counter + 1;
    }
duh sigma
```

### 6. User Input
```gyat
sup sigma
    ong("What's your name?");
    ts name = spit("Enter name:");
    ong("Hello,");
    ong(name);
duh sigma
```

### 7. String Concatenation
```gyat
sup sigma
    ts greeting = "gyat";
    ts fullGreeting = greeting + " script";
    ong(fullGreeting);  // Prints "gyat script"
duh sigma
```

## 🚨 Error Messages

GyatScript provides entertaining error messages in internet slang:

| Error Type | Example Message |
|------------|----------------|
| Missing Code Block | "U aint no sigma fr fr... where's your sup sigma and duh sigma at? 💀" |
| Empty Code | "hell no dude skill issue... your code block empty af 💀" |
| Syntax Error | "ur gyat level is too low... can't even write proper code smh 🤦‍♂️" |
| Variable Not Found | "skill issue detected: using variables that don't exist 💀" |
| Invalid Expression | "no cap fr fr... that expression ain't it chief 🚫" |
| Loop Error | "ur loop game weak af no cap 🔄❌" |
| Invalid Declaration | "bruh moment... that variable declaration is bussin't 😤" |
| Print Error | "ong fr fr... can't even print properly 🖨️❌" |
| Input Error | "my brother in christ... your input game weak 📉" |
| Condition Error | "that condition looking real sus rn 👀" |

## 📜 Language Reference

| Command     | Description                          | Example                                |
|------------|--------------------------------------|----------------------------------------|
| `ts`       | Declare or assign variables          | `ts x = 42;`                          |
| `ong`      | Print output                         | `ong("Hello World");`                 |
| `icl`      | Conditional statement (if-else)      | `icl (x > 5) { ... }`                |
| `gng`      | Loop statement                       | `gng (i < 10) { ... }`               |
| `spit`     | Get user input                      | `ts input = spit("Enter value:");`    |
| `gyatlist` | Create a list                       | `ts list = gyatlist(1, 2, 3);`       |

## 🔍 Data Types

GyatScript supports:
- Numbers (integers and decimals)
- Strings (text enclosed in quotes)
- Lists (created using `gyatlist`)
- Boolean expressions (for conditions)

## 🤝 Contributing

Contributions are welcome! Here's how you can help:
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Submit a pull request

## 🐛 Bug Reporting

Found a bug? Please open an issue with:
- Description of the bug
- Steps to reproduce
- Expected vs actual behavior
- Code sample demonstrating the issue

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🔄 Upcoming Features

Stay tuned for:
- Functions and procedures
- More built-in list operations
- File I/O operations
- Advanced math functions
- Custom type definitions
- More based error messages
