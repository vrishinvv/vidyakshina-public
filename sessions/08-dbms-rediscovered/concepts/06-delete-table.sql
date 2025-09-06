-- =========================================================
-- 5) DELETE basics
-- =========================================================
-- a) Delete orders with quantity = 1
DELETE FROM orders
WHERE quantity = 1;

SELECT * FROM orders;

-- b) Caution demo (commented out): DELETE without WHERE wipes the table!
-- DELETE FROM orders; -- <- don’t run now
