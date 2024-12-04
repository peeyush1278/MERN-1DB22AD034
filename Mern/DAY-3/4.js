// Function to process the first 100 natural numbers
function processNaturalNumbers() {
    const results = []; // Use an array to include all results

    for (let i = 1; i <= 100; i++) {
        let result = i;

        // Check if the number is a multiple of 2
        if (result % 2 === 0) {
            result *= 5; // Multiply by 5
        }

        // Check if the number is a multiple of 3
        if (result % 3 === 0) {
            result /= 3; // Divide by 3
        }

        results.push(result); // Add the result to the array
    }

    return results; // Return the array of results
}

// Get the results
const processedNumbers = processNaturalNumbers();

// Display the results in a single line
console.log(processedNumbers.join(', '));