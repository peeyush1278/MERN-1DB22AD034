// Function to print the alphabet in reverse order with spaces
function printAlphabetReverseWithSpaces() {
    // Create an empty string to hold the reversed alphabet
    let reversedAlphabet = '';

    // Loop from 'Z' to 'A'
    for (let i = 90; i >= 65; i--) {
        // Convert the ASCII value to a character and append it to the string with a space
        reversedAlphabet += String.fromCharCode(i) + ' ';
    }

    // Print the reversed alphabet
    console.log(reversedAlphabet.trim()); // Use trim() to remove the trailing space
}

// Call the function to execute
printAlphabetReverseWithSpaces();