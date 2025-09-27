# ayscri# AYScript VS Code Extension

A Visual Studio Code extension that provides comprehensive syntax highlighting support for the AYScript programming language.

## Features

This extension provides:
- **Syntax Highlighting**: Full syntax highlighting for AYScript files (`.ay`, `.ays`)
- **Language Support**: Proper recognition of AYScript language constructs
- **Code Formatting**: Basic indentation and bracket matching
- **Comment Support**: Line comments (`//`) and block comments (`/* */`)
- **Auto-completion**: Bracket and quote auto-closing

### Supported Language Features

The extension recognizes and highlights:
- **Keywords**: `if`, `else`, `while`, `for`, `function`, `var`, `let`, `const`, `class`, `extends`, etc.
- **Data Types**: `string`, `number`, `boolean`, `object`, `array`, `void`
- **Operators**: Arithmetic, comparison, logical, and assignment operators
- **Built-in Functions**: `print`, `println`, `input`, `len`, `push`, `pop`, etc.
- **String Literals**: Single quotes, double quotes, and template literals with `${}`
- **Numbers**: Integers, floats, hex, binary, and octal numbers
- **Comments**: Both single-line and multi-line comments

## File Extensions

The extension automatically activates for files with the following extensions:
- `.ay` - Standard AYScript files
- `.ays` - AYScript files (alternative extension)

## Installation

1. Open VS Code
2. Install the extension from the Extensions marketplace
3. Create or open an `.ay` or `.ays` file
4. Enjoy syntax highlighting!

## Sample Code

Here's a sample of AYScript code with syntax highlighting:

```ayscript
// AYScript Sample
function greet(name) {
    if (name) {
        println(`Hello, ${name}!`);
    } else {
        println("Hello, World!");
    }
}

class Calculator {
    add(a, b) {
        return a + b;
    }
}

var calc = new Calculator();
var result = calc.add(5, 3);
greet("AYScript Developer");
```

## Development

To contribute to this extension:

1. Clone the repository
2. Run `npm install` to install dependencies
3. Press `F5` to open a new Extension Development Host window
4. Create a test file with `.ay` extension to test syntax highlighting

### Building

- `npm run compile` - Compile TypeScript
- `npm run watch` - Compile in watch mode
- `npm run lint` - Run ESLint

## Known Issues

- Advanced language features like IntelliSense and error checking are not yet implemented
- Code completion suggestions are basic

## Release Notes

### 0.0.1

Initial release with:
- Basic syntax highlighting for AYScript
- Support for `.ay` and `.ays` file extensions
- Language configuration for comments and brackets

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

## License

This extension is released under the MIT License.README

This is the README for your extension "ayscript". After writing up a brief description, we recommend including the following sections.

## Features

Describe specific features of your extension including screenshots of your extension in action. Image paths are relative to this README file.

For example if there is an image subfolder under your extension project workspace:

\!\[feature X\]\(images/feature-x.png\)

> Tip: Many popular extensions utilize animations. This is an excellent way to show off your extension! We recommend short, focused animations that are easy to follow.

## Requirements

If you have any requirements or dependencies, add a section describing those and how to install and configure them.

## Extension Settings

Include if your extension adds any VS Code settings through the `contributes.configuration` extension point.

For example:

This extension contributes the following settings:

* `myExtension.enable`: Enable/disable this extension.
* `myExtension.thing`: Set to `blah` to do something.

## Known Issues

Calling out known issues can help limit users opening duplicate issues against your extension.

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Initial release of ...

### 1.0.1

Fixed issue #.

### 1.1.0

Added features X, Y, and Z.

---

## Following extension guidelines

Ensure that you've read through the extensions guidelines and follow the best practices for creating your extension.

* [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)

## Working with Markdown

You can author your README using Visual Studio Code. Here are some useful editor keyboard shortcuts:

* Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux).
* Toggle preview (`Shift+Cmd+V` on macOS or `Shift+Ctrl+V` on Windows and Linux).
* Press `Ctrl+Space` (Windows, Linux, macOS) to see a list of Markdown snippets.

## For more information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**
