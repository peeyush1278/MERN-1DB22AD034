const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Initialize empty arrays to store email IDs and passwords
let emailList = [];
let passwordList = [];
let count = 0;

// Function to ask for email and password
function askForCredentials() {
    if (count < 5) {
        rl.question(`Enter email ID ${count + 1}: `, (email) => {
            emailList.push(email);
            rl.question(`Enter password for ${email}: `, (password) => {
                passwordList.push(password);
                count++;
                askForCredentials(); // Ask for the next set of credentials
            });
        });
    } else {
        // Close the readline interface and display the results
        rl.close();
        console.log("Email List:", emailList);
        console.log("Password List:", passwordList);
    }
}

// Start asking for credentials
askForCredentials();