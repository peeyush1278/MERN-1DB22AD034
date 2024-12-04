// Simple Calculator in JavaScript

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

// Function to perform calculation based on user input
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

// Example usage
const num1 = 10;
const num2 = 5;
const operator = '+';

const result = calculate(num1, num2, operator);
console.log(`Result of ${num1} ${operator} ${num2} = ${result}`);