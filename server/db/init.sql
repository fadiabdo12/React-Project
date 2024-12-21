DROP DATABASE IF EXISTS `game`;
CREATE DATABASE game;
USE game;
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(255),
  password VARCHAR(255),
  name VARCHAR(255)
);

CREATE TABLE characters (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    role VARCHAR(255),
    deathblow int
    );
    
INSERT INTO characters (name, role, deathblow) VALUES ('Magician', 'boss', 2), ('Hermit', 'enemy', 1);

CREATE TABLE forms (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    email VARCHAR(255),
    content VARCHAR(100)
    );