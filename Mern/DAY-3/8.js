// Function to print both uppercase and lowercase alphabets in reverse order with spaces
function printAlphabetsReverseWithSpaces() {
    // Create empty strings to hold the reversed alphabets
    let reversedUppercase = '';
    let reversedLowercase = '';

    // Loop for uppercase letters from 'Z' to 'A'
    for (let i = 90; i >= 65; i--) {
        reversedUppercase += String.fromCharCode(i) + ' ';
    }

    // Loop for lowercase letters from 'z' to 'a'
    for (let i = 122; i >= 97; i--) {
        reversedLowercase += String.fromCharCode(i) + ' ';
    }

    // Print the reversed alphabets
    console.log('Uppercase: ' + reversedUppercase.trim()); // Use trim() to remove the trailing space
    console.log('Lowercase: ' + reversedLowercase.trim()); // Use trim() to remove the trailing space
}

// Call the function to execute
printAlphabetsReverseWithSpaces();