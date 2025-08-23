/* =================================================
   LEVEL 2: Simple Shopping Cart
   ================================================= */

const prompt = require('prompt-sync')();

// Products available in store
const products = [
  { id: 1, name: "Laptop", price: 50000, stock: 10 },
  { id: 2, name: "Mouse", price: 500, stock: 50 },
  { id: 3, name: "Keyboard", price: 1500, stock: 30 },
  { id: 4, name: "Monitor", price: 8000, stock: 20 },
  { id: 5, name: "Headphones", price: 2000, stock: 25 }
];

// Shopping cart
let cart = {
  items: [],
  total: 0,
  discount: 0
};

// Function to display all products
function displayProducts() {
  console.log("\nAvailable Products:");
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    console.log(`${product.id}. ${product.name} - ₹${product.price} (${product.stock} in stock)`);
  }
  console.log("");
}

// Function to find product by ID
function findProduct(id) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      return products[i];
    }
  }
  return null;
}

// Function to add item to cart
function addToCart(productId, quantity) {
  // Find the product
  const product = findProduct(productId);
  
  if (!product) {
    console.log("Product not found!");
    return false;
  }
  
  // Check stock
  if (product.stock < quantity) {
    console.log(`Sorry, only ${product.stock} items available!`);
    return false;
  }
  
  // Check if item already in cart
  let itemFound = false;
  for (let i = 0; i < cart.items.length; i++) {
    if (cart.items[i].productId === productId) {
      // Update quantity
      cart.items[i].quantity += quantity;
      cart.items[i].subtotal = cart.items[i].quantity * cart.items[i].price;
      itemFound = true;
      break;
    }
  }
  
  // If not in cart, add new item
  if (!itemFound) {
    const cartItem = {
      productId: productId,
      name: product.name,
      price: product.price,
      quantity: quantity,
      subtotal: product.price * quantity
    };
    cart.items.push(cartItem);
  }
  
  // Update stock
  product.stock -= quantity;
  
  console.log(`\nAdded ${quantity} x ${product.name} to cart!`);
  return true;
}

// Function to calculate cart total
function calculateCartTotal() {
  let total = 0;
  for (let i = 0; i < cart.items.length; i++) {
    total += cart.items[i].subtotal;
  }
  
  // Apply discount if any
  const discountAmount = total * (cart.discount / 100);
  return total - discountAmount;
}

// Function to apply discount
function applyDiscount(percentage) {
  if (percentage < 0 || percentage > 100) {
    console.log("Invalid discount percentage!");
    return false;
  }
  
  cart.discount = percentage;
  console.log(`\n${percentage}% discount applied!`);
  return true;
}

// Function to display cart
function displayCart() {
  if (cart.items.length === 0) {
    console.log("\nYour cart is empty!");
    return;
  }
  
  console.log("\nYour Cart:");
  for (let i = 0; i < cart.items.length; i++) {
    const item = cart.items[i];
    console.log(`- ${item.name} x ${item.quantity} = ₹${item.subtotal}`);
  }
  
  const subtotal = cart.items.reduce((sum, item) => sum + item.subtotal, 0);
  console.log(`\nSubtotal: ₹${subtotal}`);
  
  if (cart.discount > 0) {
    const discountAmount = subtotal * (cart.discount / 100);
    console.log(`Discount (${cart.discount}%): -₹${discountAmount.toFixed(2)}`);
  }
  
  console.log(`Cart Total: ₹${calculateCartTotal().toFixed(2)}`);
}

// Function to save cart to JSON
function saveCartToJSON() {
  const cartJSON = JSON.stringify(cart, null, 2);
  console.log("\n=== Cart JSON Data ===");
  console.log(cartJSON);
  return cartJSON;
}

// Function to checkout
function checkout() {
  if (cart.items.length === 0) {
    console.log("\nCart is empty! Add items first.");
    return;
  }
  
  displayCart();
  console.log("\n=== Order Confirmed! ===");
  console.log("Thank you for shopping with us!");
  
  // Clear cart after checkout
  cart.items = [];
  cart.total = 0;
  cart.discount = 0;
}

// Main program
function main() {
  let running = true;
  
  while (running) {
    console.log("\n=== SHOPPING SYSTEM ===");
    console.log("1. View Products");
    console.log("2. Add to Cart");
    console.log("3. View Cart");
    console.log("4. Apply Discount");
    console.log("5. Checkout");
    console.log("6. Save Cart");
    console.log("7. Exit");
    
    const choice = Number(prompt("\nChoose option: "));
    
    switch (choice) {
      case 1:
        displayProducts();
        break;
        
      case 2:
        const productId = Number(prompt("Enter product ID: "));
        const quantity = Number(prompt("Enter quantity: "));
        addToCart(productId, quantity);
        break;
        
      case 3:
        displayCart();
        break;
        
      case 4:
        const discount = Number(prompt("Enter discount percentage (0-100): "));
        applyDiscount(discount);
        break;
        
      case 5:
        checkout();
        break;
        
      case 6:
        saveCartToJSON();
        break;
        
      case 7:
        console.log("\nThank you! Goodbye!");
        running = false;
        break;
        
      default:
        console.log("\nInvalid option! Please try again.");
    }
  }
}

// Run the program
main();