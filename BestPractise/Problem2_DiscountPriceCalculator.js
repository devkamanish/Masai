function calculateFinalPrice(price) {
    // Check if the price is negative
    if (price < 0) {
        console.log("Invalid price, the price must be a non-negative number.");
        return;
    }
    
    // Apply a 10% discount if the price is greater than $20
    let finalPrice = price > 20 ? price * 0.9 : price;
    
    // Print the formatted output
    console.log(`The final price of the item is: ${finalPrice.toFixed(1)}`);
}

calculateFinalPrice(25);
