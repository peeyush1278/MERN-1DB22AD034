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
checkInventory("Apples", 5);  
checkInventory("Bananas", 15);  
checkInventory("Oranges", 25);