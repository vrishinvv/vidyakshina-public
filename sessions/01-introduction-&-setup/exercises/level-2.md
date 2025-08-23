# Level 2 Exercises - Combining Concepts

## 🏪 Exercise 1: Building a Smart Store System

### Task 1.1: Product Catalog
Create a product system:
- productName = "Laptop"
- productPrice = "999.99" (string from user input)
- quantity = "2" (string from user input)
- Convert strings to numbers properly

Calculate total and show why type conversion matters.

### Task 1.2: Inventory Management
Enhance with inventory logic:
- inStock = 5
- requestedQty = convert quantity to number
- canFulfill = requestedQty <= inStock
- availableQty = smaller of (requestedQty, inStock)

Display order status based on availability.

### Task 1.3: Dynamic Pricing
Add pricing rules:
- If quantity >= 3, apply 5% bulk discount
- If total > 2000, apply additional 10% discount
- Weekend sale: extra 15% off (isWeekend = true/false)

Calculate final price with all applicable discounts.

### Task 1.4: Order Summary
Create a professional order summary:
```
ORDER SUMMARY
=============
Product: Laptop
Unit Price: $999.99
Quantity: 2
Subtotal: $1999.98
Bulk Discount: -$0.00
Large Order Discount: -$199.99
Weekend Special: -$270.00
Final Total: $1529.99
Order Status: ✓ Confirmed
```
