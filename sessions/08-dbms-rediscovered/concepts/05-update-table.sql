-- =========================================================
-- 4) UPDATE basics
-- =========================================================
-- a) Update ONE person’s city
UPDATE customers
SET city = 'Pune'
WHERE full_name = 'Ravi Kumar';

SELECT * FROM customers WHERE full_name = 'Ravi Kumar';

-- b) Increase price of all 'Notebook' by 10 (no WHERE affects all rows that match condition)
UPDATE orders
SET price_each = price_each + 10
WHERE product_name = 'Notebook';

SELECT order_id, product_name, price_each FROM orders
WHERE product_name = 'Notebook';