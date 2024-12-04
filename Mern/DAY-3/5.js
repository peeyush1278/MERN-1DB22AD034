function printNumbers() {
    let numbers = [];

    // First five multiples of 2
    for (let i = 1; i <= 5; i++) {
        numbers.push(i * 2);
    }

    // Next five multiples of 5
    for (let i = 1; i <= 5; i++) {
        numbers.push(i * 5);
    }

    // Next five multiples of 7
    for (let i = 1; i <= 5; i++) {
        numbers.push(i * 7);
    }

    // Final five multiples of 10
    for (let i = 1; i <= 5; i++) {
        numbers.push(i * 10);
    }

    // Print the numbers
    console.log(numbers.join(', '));
}

// Call the function to print the numbers
printNumbers();