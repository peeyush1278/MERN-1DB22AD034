function withdraw(amount, balance) {
    // Check if the amount is a multiple of 10
    if (amount % 10 !== 0) {
        alert("The amount must be a multiple of 10.");
        return;
    }

    // Check if the amount is greater than zero
    if (amount <= 0) {
        alert("The amount must be greater than zero.");
        return;
    }

    // Check if the balance is sufficient for the withdrawal
    if (amount > balance) {
        alert("Insufficient balance for this withdrawal.");
        return;
    }

    // If all checks pass, proceed with the withdrawal
    balance -= amount; // Deduct the amount from the balance
    console.log("Withdrawal successful! New balance: Rs" + balance);
    return "Withdrawal successful! New balance: Rs" + balance;
}

// Example usage:
let currentBalance = 100; // Example balance
let withdrawalAmount = 30; // Example withdrawal amount

withdraw(withdrawalAmount, currentBalance);