// Initialize empty arrays to store email IDs and passwords
let emailList = [];
let passwordList = [];

// Function to collect user input
function collectUserData() {
    for (let i = 0; i < 5; i++) {
        // Get email from user
        let email = prompt(`Enter email ID ${i + 1}:`);
        emailList.push(email);

        // Get password from user
        let password = prompt(`Enter password for ${email}:`);
        passwordList.push(password);
    }
}

// Call the function to collect data
collectUserData();

// Display the collected data
console.log("Email List:", emailList);
console.log("Password List:", passwordList);