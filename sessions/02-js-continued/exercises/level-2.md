## 📗 Level 2: Simple Shopping Cart

### Problem Statement
Build a shopping system where users can:
1. View available products
2. Add items to cart
3. Apply discounts
4. View cart total

### Initial Data
```javascript
// Products available in store
const products = [
  { id: 1, name: "Laptop", price: 50000, stock: 10 },
  { id: 2, name: "Mouse", price: 500, stock: 50 },
  { id: 3, name: "Keyboard", price: 1500, stock: 30 },
  { id: 4, name: "Monitor", price: 8000, stock: 20 },
  { id: 5, name: "Headphones", price: 2000, stock: 25 }
];

// Empty cart to start
let cart = {
  items: [],
  total: 0,
  discount: 0
};
```

### Program Flow
```
=== SHOPPING SYSTEM ===
1. View Products
2. Add to Cart
3. View Cart
4. Apply Discount
5. Checkout
6. Exit

Choose option: 1

Available Products:
1. Laptop - ₹50000 (10 in stock)
2. Mouse - ₹500 (50 in stock)
3. Keyboard - ₹1500 (30 in stock)
4. Monitor - ₹8000 (20 in stock)
5. Headphones - ₹2000 (25 in stock)

Choose option: 2
Enter product ID: 2
Enter quantity: 3

Added 3 x Mouse to cart!

Choose option: 3

Your Cart:
- Mouse x 3 = ₹1500
Cart Total: ₹1500
```

### Cart Item Structure
```javascript
// Each cart item should look like:
{
  productId: 2,
  name: "Mouse",
  price: 500,
  quantity: 3,
  subtotal: 1500
}
```

### Functions to Implement
1. `displayProducts()` - Shows all products with details
2. `findProduct(id)` - Returns product by ID or null
3. `addToCart(productId, quantity)` - Adds item to cart
4. `calculateCartTotal()` - Returns sum of all items
5. `applyDiscount(percentage)` - Applies discount to total
6. `displayCart()` - Shows cart contents and total

### Features to Include
- Check if product exists before adding
- Check if enough stock available
- Update stock when adding to cart
- Allow updating quantity if item already in cart
- Calculate discount amount correctly

### Bonus Features
- Remove item from cart
- Save cart to JSON string
- Load cart from JSON string
- Sort products by price

---