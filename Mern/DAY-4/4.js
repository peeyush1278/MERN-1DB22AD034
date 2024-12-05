function checkInventory(productName, quantity) {
    if (quantity < 10) {
        console.log(`Alert: ${productName} - Restock immediately!`);
    } else if (quantity >= 10 && quantity <= 20) {
        console.log(`Alert: ${productName} - Stock is low.`);
    } else {
        console.log(`${productName} - Inventory is adequate.`);
    }
}

// Example usage:
checkInventory("Apples", 5);   // Alert: Apples - Restock immediately!
checkInventory("Bananas", 15);  // Alert: Bananas - Stock is low.
checkInventory("Oranges", 25);  // Oranges - Inventory is adequate.