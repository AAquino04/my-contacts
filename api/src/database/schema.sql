-- psql -U root -> Logs into postgres (execute via docker)
-- \l -> List databases
-- \c <db Name> -> Connects to a database
-- \dt -> Lists tables in database

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE DATABASE mycontacts;

CREATE TABLE IF NOT EXISTS categories (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS contacts (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL,
  email VARCHAR UNIQUE,
  phone VARCHAR,
  category_id UUID,
  FOREIGN KEY(category_id) REFERENCES categories(id)
);
