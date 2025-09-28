// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// Built-in function documentation
const builtInFunctions = new Map<string, { signature: string; description: string; category: string }>([
	// Core Functions
	['print', { signature: 'print(...values)', description: 'Prints values to the console', category: 'Core' }],
	['writestdout', { signature: 'writestdout(...values)', description: 'Prints to stdout without new line', category: 'Core' }],
	['input', { signature: 'input(prompt?)', description: 'Gets user input from terminal (synchronous, blocks execution)', category: 'Core' }],
	['coolPrint', { signature: 'coolPrint(msg)', description: 'Prints message with "[COOL PRINT]" prefix', category: 'Core' }],
	['fancyLog', { signature: 'fancyLog(msg)', description: 'Prints message with "✨ FANCY LOG:" prefix', category: 'Core' }],
	['stylishWarn', { signature: 'stylishWarn(msg)', description: 'Prints warning with "⚠️ STYLISH WARNING:" prefix', category: 'Core' }],
	['errorPop', { signature: 'errorPop(msg)', description: 'Prints error with "❌ ERROR POP:" prefix', category: 'Core' }],
	['errorlog', { signature: 'errorlog(...msg)', description: 'Prints error messages to console', category: 'Core' }],
	['rand', { signature: 'rand(min?, max?)', description: 'Returns random number (0-1 if no params, or between min-max)', category: 'Core' }],
	['randInt', { signature: 'randInt(min?, max?)', description: 'Returns random integer between min and max', category: 'Core' }],
	['round', { signature: 'round(num, precision?)', description: 'Rounds number to specified decimal places (default 0)', category: 'Core' }],
	
	// Math Functions - Basic
	['abs', { signature: 'abs(x)', description: 'Returns absolute value', category: 'Math' }],
	['max', { signature: 'max(...numbers)', description: 'Returns the largest of given numbers', category: 'Math' }],
	['min', { signature: 'min(...numbers)', description: 'Returns the smallest of given numbers', category: 'Math' }],
	['pow', { signature: 'pow(base, exponent)', description: 'Returns base raised to exponent', category: 'Math' }],
	['sqrt', { signature: 'sqrt(x)', description: 'Returns square root', category: 'Math' }],
	['floor', { signature: 'floor(x)', description: 'Rounds down to nearest integer', category: 'Math' }],
	['ceil', { signature: 'ceil(x)', description: 'Rounds up to nearest integer', category: 'Math' }],
	['exp', { signature: 'exp(x)', description: 'Returns e raised to the power of x', category: 'Math' }],
	['log', { signature: 'log(x)', description: 'Returns natural logarithm', category: 'Math' }],
	['log10', { signature: 'log10(x)', description: 'Returns base-10 logarithm', category: 'Math' }],
	['log2', { signature: 'log2(x)', description: 'Returns base-2 logarithm', category: 'Math' }],
	
	// Trigonometric Functions
	['sin', { signature: 'sin(x)', description: 'Returns sine (radians)', category: 'Trigonometry' }],
	['cos', { signature: 'cos(x)', description: 'Returns cosine (radians)', category: 'Trigonometry' }],
	['tan', { signature: 'tan(x)', description: 'Returns tangent (radians)', category: 'Trigonometry' }],
	['sind', { signature: 'sind(degrees)', description: 'Returns sine of degrees', category: 'Trigonometry' }],
	['cosd', { signature: 'cosd(degrees)', description: 'Returns cosine of degrees', category: 'Trigonometry' }],
	['tand', { signature: 'tand(degrees)', description: 'Returns tangent of degrees', category: 'Trigonometry' }],
	['toRadians', { signature: 'toRadians(degrees)', description: 'Converts degrees to radians', category: 'Trigonometry' }],
	['toDegrees', { signature: 'toDegrees(radians)', description: 'Converts radians to degrees', category: 'Trigonometry' }],
	['pi', { signature: 'pi()', description: 'Returns π (3.14159...)', category: 'Constants' }],
	['e', { signature: 'e()', description: 'Returns Euler\'s number (2.71828...)', category: 'Constants' }],
	
	// String Functions
	['len', { signature: 'len(str)', description: 'Returns length of string (also works with arrays)', category: 'String/Array' }],
	['upper', { signature: 'upper(str)', description: 'Converts to uppercase', category: 'String' }],
	['lower', { signature: 'lower(str)', description: 'Converts to lowercase', category: 'String' }],
	['split', { signature: 'split(str, delimiter)', description: 'Splits string into array', category: 'String' }],
	['reverse', { signature: 'reverse(str)', description: 'Reverses a string', category: 'String' }],
	['join', { signature: 'join(arr, delimiter)', description: 'Joins array elements into a string', category: 'String/Array' }],
	['includes', { signature: 'includes(arr, value)', description: 'Checks if array contains value (also works with strings)', category: 'String/Array' }],
	
	// Array Functions
	['push', { signature: 'push(arr, ...items)', description: 'Adds items to array and returns modified array', category: 'Array' }],
	['pop', { signature: 'pop(arr)', description: 'Removes last item and returns modified array', category: 'Array' }],
	['sort', { signature: 'sort(arr, compareFn?)', description: 'Sorts array and returns it', category: 'Array' }],
	['filter', { signature: 'filter(arr, callback)', description: 'Returns new filtered array', category: 'Array' }],
	['map', { signature: 'map(arr, callback)', description: 'Returns new mapped array', category: 'Array' }],
	['slice', { signature: 'slice(arr, start, end)', description: 'Returns new sliced array', category: 'Array' }],
	['splice', { signature: 'splice(arr, start, deleteCount, ...items)', description: 'Modifies array and returns it', category: 'Array' }],
	
	// HTTP Functions
	['httpGet', { signature: 'httpGet(url, parseType?)', description: 'Makes HTTP GET request (parseType: json, text, blob, arrayBuffer, formData)', category: 'HTTP' }],
	['httpPost', { signature: 'httpPost(url, data)', description: 'Makes HTTP POST request with JSON data', category: 'HTTP' }],
	['httpPut', { signature: 'httpPut(url, data)', description: 'Makes HTTP PUT request with JSON data', category: 'HTTP' }],
	['httpDelete', { signature: 'httpDelete(url)', description: 'Makes HTTP DELETE request', category: 'HTTP' }],
	['createHttpServer', { signature: 'createHttpServer(port)', description: 'Creates HTTP server on specified port', category: 'HTTP' }],
	['parseJson', { signature: 'parseJson(jsonString)', description: 'Parses JSON string safely', category: 'HTTP/Utility' }],
	['stringifyJson', { signature: 'stringifyJson(obj)', description: 'Converts object to JSON string safely', category: 'HTTP/Utility' }],
	
	// Date/Time Functions
	['now', { signature: 'now()', description: 'Returns current Date object', category: 'Date/Time' }],
	['timestamp', { signature: 'timestamp()', description: 'Returns current timestamp in milliseconds', category: 'Date/Time' }],
	['dateToISO', { signature: 'dateToISO(date)', description: 'Converts date to ISO string', category: 'Date/Time' }],
	['dateToLong', { signature: 'dateToLong(date)', description: 'Converts date to long readable format', category: 'Date/Time' }],
	['dateAdd', { signature: 'dateAdd(date, value, unit)', description: 'Adds time to date (units: years, months, days, hours, minutes, seconds)', category: 'Date/Time' }],
	['dateDiffInDays', { signature: 'dateDiffInDays(date1, date2)', description: 'Returns difference in days', category: 'Date/Time' }],
	
	// Timer Functions
	['Timeout', { signature: 'Timeout(fn, delay)', description: 'Sets a timeout to execute function after delay (milliseconds)', category: 'Timer' }],
	['Interval', { signature: 'Interval(fn, interval)', description: 'Sets an interval to execute function repeatedly', category: 'Timer' }],
	
	// File Functions
	['read', { signature: 'read(path, options?)', description: 'Reads file content (default encoding: utf-8)', category: 'File' }],
	['write', { signature: 'write(file, data)', description: 'Writes content to file', category: 'File' }],
]);

// Keywords documentation
const keywords = new Map<string, { description: string; example: string }>([
	['l', { description: 'Variable declaration keyword (primary)', example: 'l myVariable = "hello";' }],
	['var', { description: 'Variable declaration keyword (alternative)', example: 'var myVariable = "hello";' }],
	['f', { description: 'Function declaration keyword', example: 'f myFunction(param) { return param; }' }],
	['def', { description: 'Alias definition keyword', example: 'def var -> l' }],
	['if', { description: 'Conditional statement', example: 'if (condition) { ... }' }],
	['else', { description: 'Else clause for conditionals', example: 'if (condition) { ... } else { ... }' }],
	['while', { description: 'While loop', example: 'while (condition) { ... }' }],
	['for', { description: 'For loop', example: 'for (l i = 0; i < 10; i++) { ... }' }],
	['return', { description: 'Return statement', example: 'return value;' }],
	['break', { description: 'Break out of loop', example: 'break;' }],
	['continue', { description: 'Continue to next iteration', example: 'continue;' }],
	['true', { description: 'Boolean true value', example: 'l isTrue = true;' }],
	['false', { description: 'Boolean false value', example: 'l isFalse = false;' }],
	['null', { description: 'Null value', example: 'l nothing = null;' }],
]);

// Interface for user-defined symbols
interface UserDefinedSymbol {
	type: 'function' | 'variable';
	signature?: string;
	declaration?: string;
	declarationType?: string;
	value?: string;
	location?: number;
}

// Function to find user-defined functions and variables
function findUserDefinedSymbol(document: vscode.TextDocument, symbolName: string): UserDefinedSymbol | null {
	const text = document.getText();
	const lines = text.split('\n');
	
	// Look for function definitions: f functionName(params) or alias -> f
	const functionRegex = new RegExp(`\\b(?:f|fn|function)\\s+${symbolName}\\s*\\(([^)]*)\\)`, 'g');
	const aliasedFunctionRegex = new RegExp(`\\b\\w+\\s+${symbolName}\\s*\\(([^)]*)\\)`, 'g');
	
	// Look for variable declarations: l varName = value, var varName = value
	const variableRegex = new RegExp(`\\b(?:l|var|let|const)\\s+${symbolName}\\s*=\\s*([^;\\n]+)`, 'g');
	
	// Search line by line for better location tracking
	for (let i = 0; i < lines.length; i++) {
		const line = lines[i];
		
		// Check for function definition
		functionRegex.lastIndex = 0; // Reset regex
		let match = functionRegex.exec(line);
		if (match) {
			const params = match[1].trim();
			return {
				type: 'function',
				signature: `${symbolName}(${params})`,
				location: i
			};
		}
		
		// Check for aliased function (when def is used)
		aliasedFunctionRegex.lastIndex = 0;
		match = aliasedFunctionRegex.exec(line);
		if (match) {
			const params = match[1].trim();
			return {
				type: 'function',
				signature: `${symbolName}(${params})`,
				location: i
			};
		}
		
		// Check for variable declaration
		variableRegex.lastIndex = 0;
		match = variableRegex.exec(line);
		if (match) {
			let value = match[1].trim().replace(/[;,]$/, ''); // Remove trailing semicolon/comma
			const declarationType = line.match(/\b(l|var|let|const)\b/)?.[1] || 'var';
			
			// Handle arrays specially - don't show all elements
			let displayValue = value;
			if (value.startsWith('[') && value.endsWith(']')) {
				// It's an array
				const arrayContent = value.slice(1, -1).trim();
				if (arrayContent.length === 0) {
					displayValue = 'Array<unknown>[]';
				} else {
					// Try to infer element type from first element
					const firstElement = arrayContent.split(',')[0].trim();
					let elementType = 'unknown';
					
					if (firstElement.startsWith('"') || firstElement.startsWith("'") || firstElement.startsWith('`')) {
						elementType = 'string';
					} else if (/^\d+\.?\d*$/.test(firstElement)) {
						elementType = 'number';
					} else if (firstElement === 'true' || firstElement === 'false') {
						elementType = 'boolean';
					} else if (firstElement.startsWith('{')) {
						elementType = 'object';
					}
					
					displayValue = `Array<${elementType}>[]`;
				}
			} else if (value.startsWith('{') && value.endsWith('}')) {
				// It's an object
				displayValue = 'Object{}';
			}
			
			return {
				type: 'variable',
				declaration: `${declarationType} ${symbolName}: ${displayValue}`,
				declarationType: declarationType === 'l' ? 'AY' : declarationType,
				value: displayValue,
				location: i
			};
		}
	}
	
	return null;
}

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "ayscript" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('ayscript.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from AYScript!');
	});

	// Register hover provider for AY language
	const hoverProvider = vscode.languages.registerHoverProvider('ayscript', {
		provideHover(document, position, token) {
			const range = document.getWordRangeAtPosition(position);
			const word = document.getText(range);
			
			// Check if it's a built-in function
			if (builtInFunctions.has(word)) {
				const func = builtInFunctions.get(word)!;
				const markdown = new vscode.MarkdownString();
				markdown.appendCodeblock(`${func.signature}`, 'ayscript');
				markdown.appendMarkdown(`**${func.category}**\n\n${func.description}`);
				return new vscode.Hover(markdown, range);
			}
			
			// Check if it's a keyword
			if (keywords.has(word)) {
				const keyword = keywords.get(word)!;
				const markdown = new vscode.MarkdownString();
				markdown.appendMarkdown(`**${word}** - ${keyword.description}\n\n`);
				markdown.appendCodeblock(keyword.example, 'ayscript');
				return new vscode.Hover(markdown, range);
			}
			
			// Check for user-defined functions and variables
			const userDefinedInfo = findUserDefinedSymbol(document, word);
			if (userDefinedInfo) {
				const markdown = new vscode.MarkdownString();
				if (userDefinedInfo.type === 'function') {
					markdown.appendCodeblock(`f ${userDefinedInfo.signature}`, 'ayscript');
					markdown.appendMarkdown(`**User Function**\n\n`);
					if (userDefinedInfo.location) {
						markdown.appendMarkdown(`*Defined at line ${userDefinedInfo.location + 1}*`);
					}
				} else if (userDefinedInfo.type === 'variable') {
					markdown.appendCodeblock(`${userDefinedInfo.declaration}`, 'ayscript');
					markdown.appendMarkdown(`**${userDefinedInfo.declarationType} Variable**\n\n`);
					if (userDefinedInfo.value) {
						markdown.appendMarkdown(`Initial value: \`${userDefinedInfo.value}\`\n\n`);
					}
					if (userDefinedInfo.location) {
						markdown.appendMarkdown(`*Declared at line ${userDefinedInfo.location + 1}*`);
					}
				}
				return new vscode.Hover(markdown, range);
			}
			
			return undefined;
		}
	});

	context.subscriptions.push(disposable, hoverProvider);
}

// This method is called when your extension is deactivated
export function deactivate() {}
