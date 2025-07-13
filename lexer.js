function tokenize(expression) {
    const tokenSpecs = [
        { type: "NUMBER", regex: /^\d+/ },
        { type: "IDENTIFIER", regex: /^[a-zA-Z_]\w*/ },
        { type: "OPERATOR", regex: /^[+\-*/]/ },
        { type: "PARENTHESIS", regex: /^[()]/ },
        { type: "WHITESPACE", regex: /^\s+/, skip: true }
    ];

    let tokens = [];
    let input = expression;

    console.log("Debug: Input received ->", expression); // Debug line

    while (input.length > 0) {
        let matched = false;

        for (let spec of tokenSpecs) {
            const match = input.match(spec.regex);
            if (match) {
                matched = true;
                if (!spec.skip) {
                    tokens.push(`${spec.type}: ${match[0]}`);
                }
                input = input.slice(match[0].length);
                break;
            }
        }

        if (!matched) {
            console.log("Error: Unrecognized token ->", input[0]);
            return []; // Exit early
        }
    }

    return tokens;
}

// Main runner
const args = process.argv.slice(2);
if (args.length === 0) {
    console.log("Usage: node lexer.js \"your expression here\"");
} else {
    const expression = args.join(" ");
    const result = tokenize(expression);

    if (result.length === 0) {
        console.log("No tokens found.");
    } else {
        result.forEach(token => console.log(token));
    }
}
