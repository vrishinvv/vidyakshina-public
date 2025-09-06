-- =========================================================
-- 1) CREATE TABLE (two simple tables we will keep using)
-- =========================================================
CREATE TABLE customers (
  customer_id   SERIAL PRIMARY KEY,     -- auto-incremented integer
  full_name     TEXT NOT NULL,
  email         TEXT UNIQUE,
  city          TEXT,
  created_at    TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE orders (
  order_id      INT PRIMARY KEY,
  customer_id   INT,
  product_name  TEXT,
  quantity      INT,
  price_each    NUMERIC,
  ordered_at    TIMESTAMPTZ DEFAULT NOW()
);