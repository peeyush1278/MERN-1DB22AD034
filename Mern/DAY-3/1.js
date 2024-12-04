const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y === 0) {
        return 'Error: cannot divide by zero!';
    }
    return x / y;
}

function calculate(num1, num2, operator) {
    let result;
    switch (operator) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
        default:
            result = 'Error: invalid operator!';
    }
    return result;
}

// Function to ask questions
function askQuestion(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

// Main function to run the calculator
async function runCalculator() {
    const num1 = parseFloat(await askQuestion("Enter the first number: "));
    const num2 = parseFloat(await askQuestion("Enter the second number: "));
    const operator = await askQuestion("Enter the operator (+, -, *, /): ");

    const result = calculate(num1, num2, operator);
    console.log(`Result of ${num1} ${operator} ${num2} = ${result}`);

    rl.close(); // Close the readline interface
}

// Start the calculator
runCalculator();