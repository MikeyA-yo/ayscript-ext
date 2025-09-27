# AY Language VS Code Extension

A Visual Studio Code extension that provides comprehensive syntax highlighting and language support for the AY programming language.

## Features

This extension provides:
- **Syntax Highlighting**: Complete syntax highlighting for AY language files (`.ay`, `.ays`)
- **Hover Tooltips**: Rich hover information for built-in functions, keywords, and user-defined symbols
- **Language Support**: Proper recognition of AY language constructs
- **Code Formatting**: Basic indentation and bracket matching
- **Comment Support**: Line comments (`//`) and block comments (`/* */`)
- **Auto-completion**: Bracket and quote auto-closing

### Supported Language Features

The extension recognizes and highlights:
- **AY Keywords**: `l` (variables), `f` (functions), `def` (aliases), `var`, `if`, `else`, `while`, `for`, etc.
- **Built-in Functions**: Comprehensive support for AY's extensive standard library including:
  - **Core Functions**: `print`, `input`, `coolPrint`, `fancyLog`, `stylishWarn`, `errorPop`
  - **Math Functions**: `abs`, `max`, `min`, `pow`, `sqrt`, `sin`, `cos`, `tan`, `pi`, `e`
  - **String Functions**: `upper`, `lower`, `split`, `reverse`, `join`, `len`
  - **Array Functions**: `push`, `pop`, `sort`, `filter`, `map`, `slice`
  - **HTTP Functions**: `httpGet`, `httpPost`, `createHttpServer`, `parseJson`
  - **Date/Time Functions**: `now`, `timestamp`, `dateAdd`, `dateDiffInDays`
  - **File Functions**: `read`, `write`
- **Operators**: Arithmetic, comparison, logical, assignment, and arrow (`->`) operators
- **String Literals**: Single quotes, double quotes, and template literals
- **Numbers**: Integers, floats, hex, binary, and octal numbers
- **Alias Definitions**: `def alias -> target` syntax with proper highlighting

## File Extensions

The extension automatically activates for files with the following extensions:
- `.ay` - Standard AY language files
- `.ays` - AY language files (alternative extension)

## Sample Code

Here's a sample of AY language code with syntax highlighting and hover support:

```ay
// AY Language Sample
// Define aliases for better readability
def var -> l
def fn -> f

// Variable declarations
var message = "Hello, AY Language!";
l numbers = [1, 2, 3, 4, 5];

// Function definition
f greet(name) {
    if (name) {
        coolPrint("Hello, " + name + "!");
    } else {
        print("Hello, World!");
    }
}

// Using built-in functions
l maxNumber = max(numbers);
l upperMessage = upper(message);
l currentTime = now();

greet("Developer");
```

## Hover Information

The extension provides rich hover tooltips for:

### Built-in Functions
Hover over any built-in function to see:
- Function signature with parameters
- Function category (Core, Math, String, etc.)
- Detailed description

### User-Defined Symbols
Hover over your own functions and variables to see:
- Function signatures with parameters
- Variable declarations with initial values
- Location where symbols are defined

### Keywords
Hover over AY keywords to see:
- Keyword description
- Usage examples

## Installation

1. Open VS Code
2. Install the extension from the Extensions marketplace
3. Create or open an `.ay` or `.ays` file
4. Enjoy full AY language support with syntax highlighting and hover information!

## Development

To contribute to this extension:

1. Clone the repository
2. Run `npm install` to install dependencies
3. Press `F5` to open a new Extension Development Host window
4. Create a test file with `.ay` extension to test all features

### Building

- `npm run compile` - Compile TypeScript
- `npm run watch` - Compile in watch mode (recommended for development)
- `npm run lint` - Run ESLint

## Release Notes

### 0.0.1

Initial release featuring:
- Complete syntax highlighting for AY language
- Support for `.ay` and `.ays` file extensions
- Language configuration for comments and brackets
- Hover tooltips for built-in functions, keywords, and user-defined symbols
- Support for AY-specific syntax (`l`, `f`, `def` keywords)
- Recognition of AY's extensive built-in function library

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests to improve AY language support.

## License

This extension is released under the MIT License.
