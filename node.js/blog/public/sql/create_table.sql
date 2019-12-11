CREATE DATABASE IF NOT EXISTS blog CHARACTER SET utf8;

USE blog;

CREATE TABLE IF NOT EXISTS `author`(
     `authorID` INT KEY AUTO_INCREMENT,
     `authorName` VARCHAR(20) NOT NULL UNIQUE,
     `authorPassword` VARCHAR(32) NOT NULL
);

CREATE TABLE IF NOT EXISTS `article`(
    `articleID` INT KEY AUTO_INCREMENT,
    `articleTitle` VARCHAR(100) NOT NULL UNIQUE,
    `articleAuthor` VARCHAR(20) NOT NULL,
    `articleContent` LONGTEXT NOT NULL,
    `articleTime` DATE NOT NULL,
    `articleClick` INT NOT NULL DEFAULT 0
);

INSERT author VALUES(DEFAULT, 'node' ,'0123');