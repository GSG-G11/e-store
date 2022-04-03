BEGIN;

DROP TABLE IF EXISTS products CASCADE;

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name TEXT DEFAULT 'omen',
    img TEXT,
    category TEXT DEFAULT 'laptop',
    price DECIMAL DEFAULT 1200,
    description TEXT DEFAULT 'laptop beautiful and nice'
);

COMMIT;