-- =========================================================
-- 2) INSERT INTO
-- =========================================================
INSERT INTO customers (full_name, email, city) VALUES
  ('Asha Rao',     'asha@example.com',   'Chennai'),
  ('Arjun Mehta',  'arjun@example.com',  'Bengaluru'),
  ('Fatima Khan',  NULL,                 'Hyderabad'),   -- show NULLs
  ('Ravi Kumar',   'ravi@example.com',   'Chennai');

-- Inspect what we have so far
SELECT * FROM customers;

-- A few orders
INSERT INTO orders (customer_id, product_name, quantity, price_each) VALUES
  (1, 'Notebook',      3,  79.50),
  (1, 'Pencil',        5,  10.00),
  (2, 'Backpack',      1, 999.00),
  (3, 'Water Bottle',  2, 199.00),
  (4, 'Notebook',      1,  79.50);

SELECT * FROM orders;