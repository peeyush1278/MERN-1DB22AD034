function printOddPositionedAlphabets() {
    const totalAlphabets = 26; // Total number of alphabets (A-Z)

    // Outer loop for positions (0, 1, 2, ..., 25)
    for (let i = 0; i < totalAlphabets; i++) {
        // Check if the position is odd
        if (i % 2 !== 0) {
            // Calculate the character for the current position
            const char = String.fromCharCode(65 + i); // 65 is 'A'
            console.log(char); // Print the character on a new line
        }
    }
}

// Call the function to print the odd-positioned alphabets
printOddPositionedAlphabets();