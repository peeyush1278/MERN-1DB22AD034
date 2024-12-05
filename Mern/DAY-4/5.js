function withdraw(amount, balance) {
    if (amount % 10 !== 0) {
        alert("The amount must be a multiple of 10.");
        return;
    }

    // Check if the amount is greater than zero
    if (amount <= 0) {
        alert("The amount must be greater than zero.");
        return;
    }

    if (amount > balance) {
        alert("Insufficient balance for this withdrawal.");
        return;
    }

    balance -= amount; 
    console.log("Withdrawal successful! New balance: Rs" + balance);
    return "Withdrawal successful! New balance: Rs" + balance;
}

// Example usage:
let currentBalance = 100;
let withdrawalAmount = 30; 

withdraw(withdrawalAmount, currentBalance);