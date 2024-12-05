const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let emailList = [];
let passwordList = [];
let count = 0;


function askForCredentials() {
    if (count < 5) {
        rl.question(`Enter email ID ${count + 1}: `, (email) => {
            emailList.push(email);
            rl.question(`Enter password for ${email}: `, (password) => {
                passwordList.push(password);
                count++;
                askForCredentials(); 
            });
        });
    } else {
        rl.close();
        console.log("Email List:", emailList);
        console.log("Password List:", passwordList);
    }
}

askForCredentials();