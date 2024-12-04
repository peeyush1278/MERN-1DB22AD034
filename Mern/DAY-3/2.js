function getStringLength(str) {
    let length = 0; // Initialize a counter

    // Iterate through each character in the string
    for (let i = 0; str[i] !== undefined; i++) {
        length++; // Increment the counter for each character
    }

    return length; // Return the final count
}

// Example usage
const myString = "Hello, World!";
const lengthOfString = getStringLength(myString);
console.log("Length of the string:", lengthOfString);