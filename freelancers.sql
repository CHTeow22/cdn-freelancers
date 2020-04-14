/*
SQLyog Community v13.0.1 (64 bit)
MySQL - 5.7.21 : Database - freelancers
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`freelancers` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `freelancers`;

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `skillsets` varchar(255) DEFAULT NULL,
  `hobby` varchar(255) DEFAULT NULL,
  KEY `id` (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

/*Data for the table `users` */

insert  into `users`(`id`,`username`,`email`,`phone`,`skillsets`,`hobby`) values 
(1,'Amy','amy@gmail.com','01834356778','photoshop','drawing'),
(2,'David','david@gmail.com','019332372923','C++, MS office','sport'),
(3,'Ali','ali@yahoo.com','023454546','design','drawing'),
(4,'Devi','devi@gmail.com','0124556789','baker','cooking'),
(5,'Chris','chris@gmail.com','083484656','accounting','jogging, gym'),
(6,'Samantha','sam@yahoo.com','098231434565','design','planting'),
(7,'Sammy','sammy@gmail.com','01278457954','design','drawing'),
(8,'sammy','sammy@yahoo.com','028942323','design','cooking');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
