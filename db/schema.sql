DROP DATABASE IF EXISTS burger_db;
CREATE DATABSE burger_db;
USE burger_db;
CREATE TABLE burgers(
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(20) NOT NULL,
    eaten BOOLEAN DEFAULT FALSE NOT NULL
);