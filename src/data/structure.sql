
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema petshop
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema petshop
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `petshop` DEFAULT CHARACTER SET utf8 ;
USE `petshop` ;

-- -----------------------------------------------------
-- Table `petshop`.`discounts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `petshop`.`discounts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `percentage` INT(2) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `petshop`.`colors`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `petshop`.`colors` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `value` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `petshop`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `petshop`.`categories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `product_type` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `petshop`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `petshop`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `description` VARCHAR(45) NULL,
  `price` DECIMAL(9,2) NULL,
  `image_url` VARCHAR(45) NULL,
  `discount_id` INT NULL,
  `inStock` INT NOT NULL,
  `flavor` VARCHAR(45) NULL,
  `material` VARCHAR(45) NULL,
  `category_id` INT NOT NULL,
  `fragrance` VARCHAR(45) NULL,
  `color_id` INT NULL,
  `size` CHAR(1) NULL,
  PRIMARY KEY (`id`),
  INDEX `discount_id_idx` (`discount_id` ASC) VISIBLE,
  INDEX `color_id_idx` (`color_id` ASC) VISIBLE,
  INDEX `category_id_idx` (`category_id` ASC) VISIBLE,
  CONSTRAINT `discount_id`
    FOREIGN KEY (`discount_id`)
    REFERENCES `petshop`.`discounts` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `color_id`
    FOREIGN KEY (`color_id`)
    REFERENCES `petshop`.`colors` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `category_id`
    FOREIGN KEY (`category_id`)
    REFERENCES `petshop`.`categories` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `petshop`.`roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `petshop`.`roles` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `role` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `petshop`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `petshop`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `avatar_url` VARCHAR(45) NULL,
  `id_role` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `id_role_idx` (`id_role` ASC) VISIBLE,
  CONSTRAINT `id_role`
    FOREIGN KEY (`id_role`)
    REFERENCES `petshop`.`roles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `petshop`.`cart`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `petshop`.`cart` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `created_at` DATE NOT NULL,
  `user_id` INT NULL,
  `total` DECIMAL(9,2) NULL,
  PRIMARY KEY (`id`),
  INDEX `user_id_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `petshop`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `petshop`.`cart_item`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `petshop`.`cart_item` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `quantity` INT(2) NULL,
  `cart_id` INT NOT NULL,
  `product_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `cart_id_idx` (`cart_id` ASC) VISIBLE,
  INDEX `product_id_idx` (`product_id` ASC) VISIBLE,
  CONSTRAINT `cart_id`
    FOREIGN KEY (`cart_id`)
    REFERENCES `petshop`.`cart` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `product_id`
    FOREIGN KEY (`product_id`)
    REFERENCES `petshop`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `petshop`.`orders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `petshop`.`orders` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `status` INT NOT NULL,
  `cart_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `cart_id_idx` (`cart_id` ASC) VISIBLE,
  CONSTRAINT `cart_id`
    FOREIGN KEY (`cart_id`)
    REFERENCES `petshop`.`cart` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `petshop`.`materials`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `petshop`.`materials` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `value` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `petshop`.`product_images`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `petshop`.`product_images` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `url` VARCHAR(45) NULL,
  `product_id` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `user_id_idx` (`product_id` ASC) VISIBLE,
  CONSTRAINT `product_id`
    FOREIGN KEY (`product_id`)
    REFERENCES `petshop`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
