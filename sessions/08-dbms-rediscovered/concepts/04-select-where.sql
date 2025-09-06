-- =========================================================
-- 3) SELECT * & WHERE basics
-- =========================================================
-- a) Get all customers
SELECT * FROM customers;

-- b) Filter by city (WHERE)
SELECT * FROM customers
WHERE city = 'Chennai';

-- c) AND / OR
SELECT * FROM customers
WHERE city = 'Chennai' OR city = 'Hyderabad';

SELECT * FROM customers
WHERE city = 'Chennai' AND email IS NOT NULL;

-- d) IS NULL
SELECT * FROM customers
WHERE email IS NULL;

-- e) LIKE (simple pattern matching)
-- % = any length wildcard; _ = single char
SELECT * FROM customers
WHERE full_name LIKE 'A%';   -- names starting with 'A'

-- f) IN / BETWEEN
SELECT * FROM customers
WHERE city IN ('Chennai', 'Bengaluru');

-- For BETWEEN, we’ll use orders (by price_each)
SELECT order_id, product_name, price_each FROM orders
WHERE price_each BETWEEN 50 AND 200;

-- g) ORDER BY & LIMIT (nice to have)
SELECT * FROM orders
ORDER BY price_each DESC
LIMIT 3;