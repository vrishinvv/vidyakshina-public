-- =========================================================
-- 6) Very simple JOIN
-- Goal: See each order with the customer’s name (1:N)
-- =========================================================
SELECT
  o.order_id,
  c.full_name,
  o.product_name,
  o.quantity,
  o.price_each,
  o.ordered_at
FROM orders AS o
JOIN customers AS c
  ON o.customer_id = c.customer_id
ORDER BY o.order_id;

-- Add a couple more orders to make the JOIN feel richer
INSERT INTO orders (customer_id, product_name, quantity, price_each) VALUES
  (2, 'Notebook', 2, 89.50),
  (1, 'Pen',      4, 25.00);

-- Re-run the JOIN:
SELECT
  o.order_id,
  c.full_name,
  o.product_name,
  o.quantity,
  o.price_each
FROM orders o
JOIN customers c ON o.customer_id = c.customer_id
ORDER BY o.order_id;

-- Bonus: filter on JOINed data (customers in Chennai only)
SELECT
  c.full_name,
  o.product_name,
  o.quantity
FROM orders o
JOIN customers c ON o.customer_id = c.customer_id
WHERE c.city = 'Chennai'
ORDER BY c.full_name;