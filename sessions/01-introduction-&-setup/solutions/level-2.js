/* =================================================
   LEVEL 2 SOLUTIONS - COMBINING CONCEPTS
   ================================================= */

// Import prompt-sync for user input
const prompt = require('prompt-sync')();

// ===== Exercise 1: Building a Smart Store System =====

console.log("Welcome to the Smart Store System!");
console.log("===================================\n");

// Task 1.1: Product Catalog
const productName = prompt("Enter product name: ");
const productPrice = prompt("Enter product price: ");  // String from user input
const quantity = prompt("Enter quantity: ");            // String from user input

// Convert strings to numbers
const priceNum = Number(productPrice);
const qtyNum = Number(quantity);
const total = priceNum * qtyNum;

console.log("\n=== Product Order ===");
console.log(`Product: ${productName}`);
console.log(`Price (string): "${productPrice}" | Type: ${typeof productPrice}`);
console.log(`Price (number): ${priceNum} | Type: ${typeof priceNum}`);
console.log(`Quantity: ${qtyNum}`);
console.log(`Total: $${total.toFixed(2)}`);

// Task 1.2: Inventory Management
const inStock = parseInt(prompt("\nEnter current stock quantity: "));
const requestedQty = qtyNum;  // Already converted
const canFulfill = requestedQty <= inStock;
const availableQty = Math.min(requestedQty, inStock);

console.log("\n--- Inventory Check ---");
console.log(`In stock: ${inStock}`);
console.log(`Requested: ${requestedQty}`);
console.log(`Can fulfill: ${canFulfill}`);
console.log(`Will ship: ${availableQty} units`);

// Task 1.3: Dynamic Pricing
let subtotal = priceNum * availableQty;
let bulkDiscount = 0;
let largeOrderDiscount = 0;
let weekendDiscount = 0;

// Ask if it's weekend
const isWeekendInput = prompt("\nIs it weekend? (yes/no): ").toLowerCase();
const isWeekend = isWeekendInput === 'yes' || isWeekendInput === 'y';

// Apply bulk discount
if (availableQty >= 3) {
    bulkDiscount = subtotal * 0.05;  // 5%
}

// Apply large order discount
if (subtotal > 2000) {
    largeOrderDiscount = subtotal * 0.10;  // 10%
}

// Apply weekend discount
if (isWeekend) {
    weekendDiscount = subtotal * 0.15;  // 15%
}

const totalDiscount = bulkDiscount + largeOrderDiscount + weekendDiscount;
const finalPrice = subtotal - totalDiscount;

// Task 1.4: Order Summary
console.log(`
ORDER SUMMARY
=============
Product: ${productName}
Unit Price: $${priceNum.toFixed(2)}
Quantity: ${availableQty}
Subtotal: $${subtotal.toFixed(2)}
Bulk Discount: -$${bulkDiscount.toFixed(2)}
Large Order Discount: -$${largeOrderDiscount.toFixed(2)}
Weekend Special: -$${weekendDiscount.toFixed(2)}
Final Total: $${finalPrice.toFixed(2)}
Order Status: ${canFulfill ? '✓ Confirmed' : '⚠ Partial fulfillment'}
`);