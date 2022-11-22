-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: webphone
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `accounts`
--

DROP TABLE IF EXISTS `accounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `accounts` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `status` tinyint unsigned NOT NULL,
  `date_start` date NOT NULL,
  `date_end` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accounts`
--

LOCK TABLES `accounts` WRITE;
/*!40000 ALTER TABLE `accounts` DISABLE KEYS */;
INSERT INTO `accounts` VALUES (2,'Foued Hammouda',2,'2022-12-20',NULL),(4,'Foued Sever',3,'2022-11-10',NULL),(6,'Foued Sever',3,'2022-11-10',NULL),(7,'Foued Sever',3,'2022-11-10',NULL),(8,'Foued Sever',3,'2022-11-10',NULL),(9,'Foued Sever',3,'2022-11-10',NULL),(10,'Foued Sever',3,'2022-11-10',NULL),(11,'Foued Sever',3,'2022-11-10',NULL),(12,'Foued Sever',3,'2022-11-10',NULL),(13,'Foued Sever',3,'2022-11-10',NULL),(14,'Foued Sever',3,'2022-11-10',NULL),(15,'Foued Sever',3,'2022-11-10',NULL),(16,'Foued Sever',3,'2022-11-10',NULL),(17,'Foued Sever',3,'2022-11-10',NULL),(18,'Foued Sever',3,'2022-11-10',NULL),(19,'Foued Sever',3,'2022-11-10',NULL),(21,'Foued Sever',3,'2022-11-10',NULL),(22,'Foued Sever',3,'2022-11-10',NULL),(23,'Foued Sever',3,'2022-11-10',NULL),(24,'Foued Sever',3,'2022-11-10',NULL),(25,'Foued Sever',3,'2022-11-10',NULL),(26,'Foued Sever',3,'2022-11-10',NULL),(27,'Foued Sever',3,'2022-11-10',NULL),(28,'Foued Sever',3,'2022-11-10',NULL),(29,'Foued Sever',3,'2022-11-10',NULL),(30,'Foued Sever',3,'2022-11-10',NULL),(31,'Foued Sever',3,'2022-11-10',NULL),(32,'Foued Sever',3,'2022-11-10',NULL),(36,'test test',3,'2022-12-20',NULL),(37,'test loul',1,'2022-11-17',NULL),(38,'test loul',1,'2022-11-17',NULL),(39,'test loul',1,'2022-11-17',NULL),(40,'test loul',1,'2022-11-17',NULL),(41,'test loul',1,'2022-11-17',NULL),(42,'test loul',1,'2022-11-17',NULL),(43,'test loul',1,'2022-11-17',NULL),(45,'test test',3,'2022-12-20',NULL),(46,'test loul',1,'2022-11-17',NULL),(47,'test loul',1,'2022-11-17',NULL),(48,'test loul',1,'2022-11-17',NULL);
/*!40000 ALTER TABLE `accounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_key_acc_permission`
--

DROP TABLE IF EXISTS `api_key_acc_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_key_acc_permission` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `api_key_id` int unsigned NOT NULL,
  `action` varchar(100) NOT NULL,
  `status` tinyint unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `api_key.api_key_id_idx` (`api_key_id`),
  CONSTRAINT `api_key.api_key_id` FOREIGN KEY (`api_key_id`) REFERENCES `api_keys` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=utf8mb4 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_key_acc_permission`
--

LOCK TABLES `api_key_acc_permission` WRITE;
/*!40000 ALTER TABLE `api_key_acc_permission` DISABLE KEYS */;
INSERT INTO `api_key_acc_permission` VALUES (27,8,'GET/accounts/',1),(28,8,'POST/accounts/create/',1),(29,8,'PUT/accounts/update/',1),(30,8,'DELETE/accounts/delete/',1),(31,8,'GET/users/',1),(32,8,'POST/users/create/',1),(33,8,'PUT/users/update/',1),(34,8,'DELETE/users/delete/',1),(35,8,'GET/contacts/',1),(38,8,'POST/contacts/create/',1),(39,8,'PUT/contacts/update/',1),(40,8,'DELETE/contacts/delete/',1),(41,8,'GET/notes/',1),(42,8,'POST/notes/create/',1),(43,8,'PUT/notes/update/',1),(44,8,'DELETE/notes/delete/',1),(45,8,'GET/phoneNumber/',1),(46,8,'POST/phoneNumber/create/',1),(47,8,'PUT/phoneNumber/update/',1),(48,8,'DELETE/phoneNumber/delete/',1),(49,8,'GET/groups/',1),(50,8,'POST/groups/create/',1),(51,8,'PUT/groups/update/',1),(52,8,'DELETE/groups/delete/',1),(53,8,'GET/groupsElement/',1),(54,8,'POST/groupsElement/create/',1),(55,8,'PUT/groupsElement/update/',1),(56,8,'DELETE/groupsElement/delete/',1),(57,8,'GET/integration/account/',1),(58,8,'POST/integration/account/create/',1),(59,8,'PUT/integration/account/update/',1),(60,8,'DELETE/integration/account/delete/',1),(61,8,'GET/line/',1),(62,8,'POST/line/create/',1),(63,8,'PUT/line/update/',1),(64,8,'DELETE/line/delete/',1),(65,8,'GET/tags/',1),(66,8,'POST/tags/create/',1),(67,8,'PUT/tags/update/',1),(68,8,'DELETE/tags/delete/',1),(69,8,'GET/contactTag/',1),(70,8,'POST/contactTag/create/',1),(71,8,'PUT/contactTag/update/',1),(72,8,'DELETE/contactTag/delete/',1),(73,8,'GET/usersLines/',1),(74,8,'POST/usersLines/create/',1),(75,8,'PUT/usersLines/update/',1),(76,8,'DELETE/usersLines/delete/',1),(77,8,'GET/usersPermissions/',1),(78,8,'POST/usersPermissions/create/',1),(79,8,'PUT/usersPermissions/update/',1),(80,8,'DELETE/usersPermissions/delete/',1),(81,8,'GET/userPreference/',1),(82,8,'POST/userPreference/create/',1),(83,8,'PUT/userPreference/update/',1),(84,8,'DELETE/userPreference/delete/',1),(85,8,'GET/accountPermission/',1),(86,8,'POST/accountPermission/create/',1),(87,8,'PUT/account/Permission/update/',1),(88,8,'DELETE/accountPermission/delete/',1),(91,8,'GET/message/',1),(92,8,'POST/message/create/',1),(93,8,'PUT/message/update/',1),(94,8,'DELETE/message/delete/',1),(95,8,'POST/users/login/',1),(96,8,'GET/users/login/',1),(97,8,'GET/message/?sender_id=&receiver_id=',1),(98,8,'PUT/message/update/?sender_id=&receiver_id=',1),(99,8,'GET/message/user_id/',1);
/*!40000 ALTER TABLE `api_key_acc_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_keys`
--

DROP TABLE IF EXISTS `api_keys`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_keys` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `account_id` int unsigned NOT NULL,
  `api_keyscollection` varchar(45) NOT NULL,
  `status` tinyint unsigned NOT NULL,
  `date_start` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `keyaccount_id_idx` (`account_id`),
  CONSTRAINT `keyaccount_id` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_keys`
--

LOCK TABLES `api_keys` WRITE;
/*!40000 ALTER TABLE `api_keys` DISABLE KEYS */;
INSERT INTO `api_keys` VALUES (8,36,'LuQJd5qKr1cC4vLUUQe+WQK8e7fU8TvaEB5wpbeXpww=',1,'2022-11-17 13:36:22'),(15,43,'PfwDfbQ2vvim8R4YPXa80UINtlDeC83HNFIUNpRHmIs=',1,'2022-11-18 11:09:12'),(16,45,'pJuM75W6I3n4oLs5FhzgvAlO+tGnttrpcUxNl7u4kN8=',1,'2022-11-18 11:10:05'),(17,46,'W/T5VLXEpeuFuyZi8ScDbXOgIoC6Fb2uLvcOBAh/4V8=',1,'2022-11-18 11:14:41'),(18,47,'DOBEo0ekfbsMtCo63GJzGi+WptYttJ+eNK13BMQbGs8=',1,'2022-11-18 11:15:13'),(19,48,'6iLUxAIhmBcWpNOmhcavOEq+1ENUQm7piPyXs76VpOo=',1,'2022-11-18 11:15:51');
/*!40000 ALTER TABLE `api_keys` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `application_logs`
--

DROP TABLE IF EXISTS `application_logs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `application_logs` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `account_id` int unsigned NOT NULL,
  `action` varchar(100) NOT NULL,
  `element` tinyint unsigned NOT NULL,
  `element_id` int unsigned NOT NULL,
  `action_date` datetime NOT NULL,
  `ip_address` varchar(32) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `lo_account_id_idx` (`account_id`),
  CONSTRAINT `lo_account_id_logs` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=106 DEFAULT CHARSET=utf8mb4 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `application_logs`
--

LOCK TABLES `application_logs` WRITE;
/*!40000 ALTER TABLE `application_logs` DISABLE KEYS */;
INSERT INTO `application_logs` VALUES (2,36,'CREATE NEW ACCOUNT',15,42,'2022-11-17 14:07:50','192.168.1.1'),(3,2,'Create New User',14,216,'2022-11-17 14:17:21','192.168.1.1'),(4,2,'update User',14,208,'2022-11-17 14:18:49','192.168.1.1'),(5,2,'DELETE User',14,216,'2022-11-17 14:20:24','192.168.1.1'),(6,2,'Create New User',14,217,'2022-11-17 14:58:05','192.168.1.1'),(7,36,'Create New User',14,218,'2022-11-17 14:58:42','192.168.1.1'),(8,36,'Create New User',14,219,'2022-11-17 14:58:59','192.168.1.1'),(9,36,'CREATE NEW CONTACT',1,51,'2022-11-17 15:14:21','192.168.1.1'),(10,36,'Create New User',14,222,'2022-11-17 15:46:31','192.168.1.1'),(11,36,'POST/users/create/',14,252,'2022-11-17 19:53:21','192.168.1.1'),(12,36,'POST/users/create/',14,253,'2022-11-17 19:54:47','192.168.1.1'),(13,36,'POST/users/create/',14,254,'2022-11-18 09:07:04','192.168.1.1'),(14,36,'PUT/users/update/',14,208,'2022-11-18 09:13:39','192.168.1.1'),(15,36,'DELETE/users/delete/',14,254,'2022-11-18 09:14:40','192.168.1.1'),(16,36,'POST/users/create/',14,255,'2022-11-18 09:15:56','192.168.1.1'),(17,36,'POST/contacts/create/',1,64,'2022-11-18 09:20:52','192.168.1.1'),(18,36,'POST/contacts/create/',1,65,'2022-11-18 09:22:41','192.168.1.1'),(19,36,'POST/contacts/create/',1,66,'2022-11-18 09:23:47','192.168.1.1'),(20,36,'PUT/contacts/update/',1,36,'2022-11-18 09:32:02','192.168.1.1'),(21,36,'DELETE/contacts/delete/',1,36,'2022-11-18 09:32:18','192.168.1.1'),(22,36,'POST/notes/create/',2,16,'2022-11-18 09:40:21','192.168.1.1'),(23,36,'PUT/notes/update/',2,16,'2022-11-18 09:41:47','192.168.1.1'),(24,36,'DELETE/notes/delete/',2,16,'2022-11-18 09:42:47','192.168.1.1'),(25,36,'POST/phoneNumber/create/',3,26,'2022-11-18 09:51:08','192.168.1.1'),(26,36,'PUT/phoneNumber/update/',3,26,'2022-11-18 09:52:13','192.168.1.1'),(27,36,'DELETE/phoneNumber/delete/',3,26,'2022-11-18 09:52:23','192.168.1.1'),(28,36,'POST/groups/create/',4,24,'2022-11-18 09:56:25','192.168.1.1'),(29,36,'PUT/groups/update/',4,24,'2022-11-18 09:56:42','192.168.1.1'),(30,36,'DELETE/groups/delete/',4,24,'2022-11-18 09:57:16','192.168.1.1'),(31,36,'POST/groups/create/',4,25,'2022-11-18 09:59:00','192.168.1.1'),(32,36,'POST/groupsElement/create/',5,10,'2022-11-18 10:04:36','192.168.1.1'),(33,36,'PUT/groupsElement/update/',5,10,'2022-11-18 10:04:52','192.168.1.1'),(34,36,'DELETE/groupsElement/delete/',5,10,'2022-11-18 10:04:57','192.168.1.1'),(35,36,'POST/integration/account/create/',7,12,'2022-11-18 10:11:22','192.168.1.1'),(36,36,'PUT/integration/account/update/',7,12,'2022-11-18 10:11:39','192.168.1.1'),(37,36,'DELETE/integration/account/delete/',7,12,'2022-11-18 10:11:45','192.168.1.1'),(38,36,'POST/line/create/',8,13,'2022-11-18 10:17:24','192.168.1.1'),(39,36,'PUT/line/update/',8,12,'2022-11-18 10:17:40','192.168.1.1'),(40,36,'DELETE/line/delete/',8,12,'2022-11-18 10:17:45','192.168.1.1'),(41,36,'POST/tags/create/',9,5,'2022-11-18 10:22:53','192.168.1.1'),(42,36,'POST/tags/create/',9,6,'2022-11-18 10:23:00','192.168.1.1'),(43,36,'PUT/tags/update/',9,5,'2022-11-18 10:23:58','192.168.1.1'),(44,36,'DELETE/tags/delete/',9,5,'2022-11-18 10:24:03','192.168.1.1'),(45,36,'POST/contactTag/create/',10,11,'2022-11-18 10:29:02','192.168.1.1'),(46,36,'PUT/contactTag/update/',10,10,'2022-11-18 10:29:59','192.168.1.1'),(47,36,'DELETE/contactTag/delete/',10,10,'2022-11-18 10:30:04','192.168.1.1'),(48,36,'POST/usersLines/create/',11,16,'2022-11-18 10:36:36','192.168.1.1'),(49,36,'POST/usersLines/create/',11,17,'2022-11-18 10:36:41','192.168.1.1'),(50,36,'PUT/usersLines/update/',11,16,'2022-11-18 10:36:48','192.168.1.1'),(51,36,'DELETE/usersLines/delete/',11,16,'2022-11-18 10:36:56','192.168.1.1'),(52,36,'POST/usersPermissions/create/',13,11,'2022-11-18 10:44:13','192.168.1.1'),(53,36,'POST/usersPermissions/create/',13,12,'2022-11-18 10:44:40','192.168.1.1'),(54,36,'POST/usersPermissions/create/',13,13,'2022-11-18 10:44:52','192.168.1.1'),(55,36,'PUT/usersPermissions/update/',13,11,'2022-11-18 10:45:05','192.168.1.1'),(56,36,'DELETE/usersPermissions/delete/',13,11,'2022-11-18 10:45:28','192.168.1.1'),(57,36,'DELETE/accountPermission/delete/',14,90,'2022-11-18 11:07:17','192.168.1.1'),(58,36,'POST/accounts/create/',15,45,'2022-11-18 11:10:05','192.168.1.1'),(59,36,'PUT/accounts/update/',15,45,'2022-11-18 11:12:22','192.168.1.1'),(60,36,'DELETE/accounts/delete/',15,44,'2022-11-18 11:12:57','192.168.1.1'),(61,36,'POST/accounts/create/',15,47,'2022-11-18 11:15:13','192.168.1.1'),(62,36,'POST/accounts/create/',15,48,'2022-11-18 11:15:51','192.168.1.1'),(63,36,'POST/usersLines/create/',11,18,'2022-11-18 12:04:08','192.168.1.1'),(64,36,'POST/message/create/',9,5,'2022-11-18 12:32:04','192.168.1.1'),(65,36,'DELETE/message/delete/',9,1,'2022-11-18 12:36:03','192.168.1.1'),(66,36,'POST/users/create/',14,260,'2022-11-18 12:52:08','192.168.1.1'),(67,36,'POST/users/create/',14,261,'2022-11-18 12:55:25','192.168.1.1'),(68,36,'POST/users/login/',14,261,'2022-11-18 13:21:46','192.168.1.1'),(69,36,'POST/usersLines/create/',11,19,'2022-11-18 13:39:22','192.168.1.1'),(70,36,'POST/usersLines/create/',11,20,'2022-11-18 13:39:39','192.168.1.1'),(71,36,'POST/usersLines/create/',11,21,'2022-11-18 13:39:52','192.168.1.1'),(72,36,'POST/usersLines/create/',11,22,'2022-11-18 13:40:13','192.168.1.1'),(73,36,'PUT/usersLines/update/',11,17,'2022-11-18 13:40:39','192.168.1.1'),(74,36,'PUT/usersLines/update/',11,17,'2022-11-18 13:40:57','192.168.1.1'),(75,36,'POST/users/login/',14,261,'2022-11-18 13:43:41','192.168.1.1'),(76,36,'POST/users/login/',14,261,'2022-11-18 13:43:43','192.168.1.1'),(77,36,'POST/users/login/',14,261,'2022-11-18 13:46:24','192.168.1.1'),(78,36,'POST/usersLines/create/',11,23,'2022-11-18 13:48:31','192.168.1.1'),(79,36,'POST/usersLines/create/',11,24,'2022-11-18 13:48:50','192.168.1.1'),(80,36,'POST/usersLines/create/',11,25,'2022-11-18 13:50:58','192.168.1.1'),(81,36,'POST/usersLines/create/',11,26,'2022-11-18 13:51:17','192.168.1.1'),(82,36,'POST/contacts/create/',1,67,'2022-11-18 14:05:03','192.168.1.1'),(83,36,'POST/contacts/create/',1,69,'2022-11-18 14:06:26','192.168.1.1'),(84,36,'POST/contacts/create/',1,70,'2022-11-18 14:06:47','192.168.1.1'),(85,36,'POST/users/login/',14,261,'2022-11-18 14:14:35','192.168.1.1'),(86,36,'POST/groups/create/',4,26,'2022-11-18 14:18:34','192.168.1.1'),(87,36,'POST/groups/create/',4,27,'2022-11-18 14:18:36','192.168.1.1'),(88,36,'PUT/users/update/',14,208,'2022-11-18 14:19:19','192.168.1.1'),(89,36,'POST/users/create/',14,268,'2022-11-18 14:21:06','192.168.1.1'),(90,36,'POST/users/create/',14,269,'2022-11-18 14:32:06','192.168.1.1'),(91,36,'POST/users/create/',14,270,'2022-11-18 14:33:55','192.168.1.1'),(92,36,'POST/users/create/',14,271,'2022-11-18 14:34:16','192.168.1.1'),(93,36,'POST/users/create/',14,271,'2022-11-18 14:34:16','192.168.1.1'),(94,36,'POST/users/create/',14,272,'2022-11-18 14:34:55','192.168.1.1'),(95,36,'POST/users/create/',14,273,'2022-11-18 14:35:36','192.168.1.1'),(96,36,'PUT/users/update/',14,208,'2022-11-18 14:36:56','192.168.1.1'),(97,36,'PUT/users/update/',14,208,'2022-11-21 14:14:04','192.168.1.1'),(98,36,'PUT/users/update/',14,208,'2022-11-21 14:14:12','192.168.1.1'),(99,36,'PUT/users/update/',14,273,'2022-11-21 14:15:03','192.168.1.1'),(100,36,'POST/users/create/',14,274,'2022-11-21 14:15:57','192.168.1.1'),(101,36,'PUT/message/update/',9,5,'2022-11-21 14:55:18','192.168.1.1'),(102,36,'POST/message/create/',9,42,'2022-11-22 16:14:19','192.168.1.1'),(103,36,'PUT/message/update/?sender_id=&receiver_id=',9,42,'2022-11-22 16:14:52','192.168.1.1'),(104,36,'PUT/message/update/?sender_id=&receiver_id=',9,42,'2022-11-22 16:14:52','192.168.1.1'),(105,36,'DELETE/message/delete/',9,8,'2022-11-22 16:15:08','192.168.1.1');
/*!40000 ALTER TABLE `application_logs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contacts`
--

DROP TABLE IF EXISTS `contacts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contacts` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `account_id` int unsigned NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `country` char(2) NOT NULL,
  `source` tinyint unsigned NOT NULL,
  `favorite` tinyint unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `cn_account_id_idx` (`account_id`),
  CONSTRAINT `cn_account_id` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8mb4 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contacts`
--

LOCK TABLES `contacts` WRITE;
/*!40000 ALTER TABLE `contacts` DISABLE KEYS */;
INSERT INTO `contacts` VALUES (33,36,'ADMIN','hammouda','TN',1,1),(34,36,'ADMIN','hammouda','TN',1,1),(35,36,'ADMIN','hammouda','TN',1,1),(37,36,'ADMIN','hammouda','TN',1,1),(38,36,'ADMIN','hammouda','TN',1,1),(39,36,'ADMIN','hammouda','TN',1,1),(40,36,'ADMIN','hammouda','TN',1,1),(41,36,'ADMIN','hammouda','TN',1,1),(42,36,'ADMIN','hammouda','TN',1,1),(43,36,'ADMIN','hammouda','TN',1,1),(44,36,'ADMIN','hammouda','TN',1,1),(45,36,'ADMIN','hammouda','TN',1,1),(46,36,'ADMIN','hammouda','TN',1,1),(47,36,'ADMIN','hammouda','TN',1,1),(48,36,'ADMIN','hammouda','TN',1,1),(49,36,'ADMIN','hammouda','TN',1,1),(50,36,'ADMIN','hammouda','TN',1,1),(51,36,'ADMIN','hammouda','TN',1,1),(52,36,'ADMIN','hammouda','TN',1,1),(53,36,'ADMIN','hammouda','TN',1,1),(55,36,'ADMIN','hammouda','TN',1,1),(56,36,'ADMIN','hammouda','TN',1,1),(57,36,'ADMIN','hammouda','TN',1,1),(58,36,'ADMIN','hammouda','TN',1,1),(59,36,'ADMIN','hammouda','TN',1,1),(60,36,'ADMIN','hammouda','TN',1,1),(61,36,'ADMIN','hammouda','TN',1,1),(62,36,'ADMIN','hammouda','TN',1,1),(63,36,'ADMIN','hammouda','TN',1,1),(64,36,'ADMIN','hammouda','TN',1,1),(65,36,'ADMIN','hammouda','TN',1,1),(66,36,'ADMIN','hammouda','TN',1,1),(67,36,'ADMIN','hammouda','TN',1,1),(68,36,'ADMIN','hammouda','TN',1,1),(69,36,'ADMIN','hammouda','TN',1,1),(70,36,'ADMIN','hammouda','TN',1,1);
/*!40000 ALTER TABLE `contacts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contacts_notes`
--

DROP TABLE IF EXISTS `contacts_notes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contacts_notes` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `contact_id` int unsigned NOT NULL,
  `note` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cn_nt_contact_id_idx` (`contact_id`),
  CONSTRAINT `cn_nt_contact_id` FOREIGN KEY (`contact_id`) REFERENCES `contacts` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contacts_notes`
--

LOCK TABLES `contacts_notes` WRITE;
/*!40000 ALTER TABLE `contacts_notes` DISABLE KEYS */;
INSERT INTO `contacts_notes` VALUES (13,34,'idk bro az2'),(14,34,'idk bro az2'),(15,34,'idk bro az2');
/*!40000 ALTER TABLE `contacts_notes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contacts_numbers`
--

DROP TABLE IF EXISTS `contacts_numbers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contacts_numbers` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `contact_id` int unsigned NOT NULL,
  `class` tinyint unsigned NOT NULL,
  `number` varchar(32) NOT NULL,
  `defaultt` tinyint unsigned DEFAULT NULL,
  `status` tinyint unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cn_nu_contact_id_idx` (`contact_id`),
  CONSTRAINT `cn_nu_contact_id` FOREIGN KEY (`contact_id`) REFERENCES `contacts` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contacts_numbers`
--

LOCK TABLES `contacts_numbers` WRITE;
/*!40000 ALTER TABLE `contacts_numbers` DISABLE KEYS */;
/*!40000 ALTER TABLE `contacts_numbers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `groups`
--

DROP TABLE IF EXISTS `groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `groups` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `account_id` int unsigned NOT NULL,
  `name` varchar(100) NOT NULL,
  `class` tinyint unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `gr_account_id_idx` (`account_id`),
  CONSTRAINT `gr_account_id` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `groups`
--

LOCK TABLES `groups` WRITE;
/*!40000 ALTER TABLE `groups` DISABLE KEYS */;
INSERT INTO `groups` VALUES (25,36,'Foued gangsta',2),(26,36,'Foued gangsta',2),(27,36,'Foued gangsta',2);
/*!40000 ALTER TABLE `groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `groups_elements`
--

DROP TABLE IF EXISTS `groups_elements`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `groups_elements` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `group_id` int unsigned NOT NULL,
  `element` tinyint unsigned NOT NULL,
  `element_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `gr_el_group_id_idx` (`group_id`),
  CONSTRAINT `gr_el_group_id` FOREIGN KEY (`group_id`) REFERENCES `groups` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `groups_elements`
--

LOCK TABLES `groups_elements` WRITE;
/*!40000 ALTER TABLE `groups_elements` DISABLE KEYS */;
/*!40000 ALTER TABLE `groups_elements` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `integrations`
--

DROP TABLE IF EXISTS `integrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `integrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `account_id` int unsigned NOT NULL,
  `app_id` int unsigned NOT NULL,
  `status` tinyint unsigned NOT NULL,
  `date_start` date NOT NULL,
  `date_end` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `in_account_id_idx` (`account_id`),
  CONSTRAINT `in_account_id` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `integrations`
--

LOCK TABLES `integrations` WRITE;
/*!40000 ALTER TABLE `integrations` DISABLE KEYS */;
INSERT INTO `integrations` VALUES (10,6,1,2,'2022-11-09',NULL),(11,6,1,2,'2022-11-09',NULL);
/*!40000 ALTER TABLE `integrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lines`
--

DROP TABLE IF EXISTS `lines`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lines` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `account_id` int unsigned NOT NULL,
  `name` varchar(100) NOT NULL,
  `host` varchar(255) NOT NULL,
  `port` varchar(10) DEFAULT NULL,
  `user` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `status` tinyint unsigned NOT NULL,
  `date_start` date NOT NULL,
  `date_end` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `accl_account_id_idx` (`account_id`),
  CONSTRAINT `accl_account_id` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lines`
--

LOCK TABLES `lines` WRITE;
/*!40000 ALTER TABLE `lines` DISABLE KEYS */;
INSERT INTO `lines` VALUES (13,36,'foued','127.0.0.21','3050az','foued','foued123',2,'2022-10-02',NULL);
/*!40000 ALTER TABLE `lines` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `logs`
--

DROP TABLE IF EXISTS `logs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `logs` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `account_id` int unsigned NOT NULL,
  `user_id` int unsigned NOT NULL,
  `action` varchar(100) NOT NULL,
  `element` tinyint unsigned NOT NULL,
  `element_id` int unsigned NOT NULL,
  `action_date` date NOT NULL,
  `ip_address` varchar(32) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `lo_account_id_idx` (`account_id`),
  KEY `lo_user_id_idx` (`user_id`),
  CONSTRAINT `lo_account_id` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`id`),
  CONSTRAINT `lo_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=434 DEFAULT CHARSET=utf8mb4 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `logs`
--

LOCK TABLES `logs` WRITE;
/*!40000 ALTER TABLE `logs` DISABLE KEYS */;
INSERT INTO `logs` VALUES (2,2,2,'UPDATE CONTACT',1,1,'2022-11-10','192.168.1.1'),(3,2,2,'CREATE NEW CONTACT',1,2,'2022-11-10','192.168.1.1'),(4,2,2,'CREATE NEW CONTACT',1,3,'2022-11-10','192.168.1.1'),(5,2,2,'UPDATE CONTACT',1,3,'2022-11-10','192.168.1.1'),(6,2,2,'UPDATE CONTACT',1,2,'2022-11-10','192.168.1.1'),(7,2,2,'UPDATE CONTACT',1,2,'2022-11-10','192.168.1.1'),(8,2,2,'CREATE NEW NOTE ',2,3,'2022-11-10','192.168.1.1'),(9,2,2,'UPDATE NOTE',2,3,'2022-11-10','192.168.1.1'),(10,2,2,'CREATE NEW NOTE ',2,4,'2022-11-10','192.168.1.1'),(11,2,2,'CREATE NEW NOTE ',2,5,'2022-11-10','192.168.1.1'),(12,2,2,'CREATE NEW NOTE ',2,6,'2022-11-10','192.168.1.1'),(13,2,2,'CREATE NEW NOTE ',2,7,'2022-11-10','192.168.1.1'),(14,2,2,'UPDATE NOTE',2,3,'2022-11-10','192.168.1.1'),(15,2,2,'UPDATE NOTE',2,4,'2022-11-10','192.168.1.1'),(16,2,2,'CREATE NEW CONTACT',1,4,'2022-11-10','192.168.1.1'),(17,2,2,'CREATE NEW PHONE NUMBER',3,1,'2022-11-10','192.168.1.1'),(18,2,2,'CREATE NEW PHONE NUMBER',3,8,'2022-11-10','192.168.1.1'),(19,2,2,'CREATE NEW PHONE NUMBER',3,9,'2022-11-10','192.168.1.1'),(20,2,2,'CREATE NEW PHONE NUMBER',3,10,'2022-11-10','192.168.1.1'),(21,2,2,'CREATE NEW PHONE NUMBER',3,11,'2022-11-10','192.168.1.1'),(22,2,2,'CREATE NEW PHONE NUMBER',3,12,'2022-11-10','192.168.1.1'),(23,2,2,'DELETE PHONE NUMBER',3,12,'2022-11-10','192.168.1.1'),(24,2,2,'DELETE PHONE NUMBER',3,11,'2022-11-10','192.168.1.1'),(25,2,2,'CREATE NEW PHONE NUMBER',3,14,'2022-11-10','192.168.1.1'),(26,2,2,'CREATE NEW PHONE NUMBER',3,15,'2022-11-10','192.168.1.1'),(27,2,2,'CREATE NEW PHONE NUMBER',3,16,'2022-11-10','192.168.1.1'),(28,2,2,'CREATE NEW PHONE NUMBER',3,17,'2022-11-10','192.168.1.1'),(29,2,2,'UPDATE PHONE NUMBER',3,8,'2022-11-10','192.168.1.1'),(30,2,2,'UPDATE PHONE NUMBER',3,8,'2022-11-10','192.168.1.1'),(31,2,2,'CREATE NEW GROUP',4,2,'2022-11-10','192.168.1.1'),(32,2,2,'CREATE NEW GROUP',4,3,'2022-11-10','192.168.1.1'),(33,2,2,'CREATE NEW GROUP',4,4,'2022-11-10','192.168.1.1'),(34,2,2,'UPDATE  GROUP',4,2,'2022-11-10','192.168.1.1'),(35,2,2,'CREATE NEW GROUP',4,7,'2022-11-10','192.168.1.1'),(36,2,2,'UPDATE  GROUP',4,4,'2022-11-10','192.168.1.1'),(37,2,2,'UPDATE  GROUP',4,4,'2022-11-10','192.168.1.1'),(38,2,2,'UPDATE  GROUP',4,4,'2022-11-10','192.168.1.1'),(39,2,2,'UPDATE  GROUP',4,4,'2022-11-10','192.168.1.1'),(40,2,2,'DELETE GROUP',4,4,'2022-11-10','192.168.1.1'),(41,2,2,'CREATE NEW GROUP ELEMENT ',5,1,'2022-11-10','192.168.1.1'),(42,2,2,'CREATE NEW GROUP ELEMENT ',5,3,'2022-11-10','192.168.1.1'),(43,2,2,'CREATE NEW GROUP ELEMENT ',5,4,'2022-11-10','192.168.1.1'),(44,2,2,'CREATE NEW GROUP ELEMENT ',5,5,'2022-11-10','192.168.1.1'),(45,2,2,'UPDATE GROUPE ELEMENT',5,1,'2022-11-10','192.168.1.1'),(46,2,2,'CREATE NEW INTEGRATION',7,1,'2022-11-10','192.168.1.1'),(47,2,2,'CREATE NEW INTEGRATION',7,2,'2022-11-10','192.168.1.1'),(48,2,2,'UPDATE INTEGRATION',7,1,'2022-11-10','192.168.1.1'),(49,2,2,'DELETE  INTEGRATION',7,1,'2022-11-10','192.168.1.1'),(50,2,2,'CREATE NEW LINE ',8,1,'2022-11-10','192.168.1.1'),(51,2,2,'UPDATE LINE ',8,1,'2022-11-10','192.168.1.1'),(52,2,2,'DELETE LINE',8,1,'2022-11-10','192.168.1.1'),(53,2,2,'CREATE NEW TAG',9,1,'2022-11-10','192.168.1.1'),(54,2,2,'UPDATE TAG',9,1,'2022-11-10','192.168.1.1'),(55,2,2,'DELETE TAG',9,1,'2022-11-10','192.168.1.1'),(56,2,2,'CREATE NEW TAG',9,2,'2022-11-10','192.168.1.1'),(57,2,2,'CREATE CONTACT TAG',10,1,'2022-11-10','192.168.1.1'),(58,2,2,'Update  Contact Tag',10,1,'2022-11-10','192.168.1.1'),(59,2,2,'Delete New Contact Tag',10,1,'2022-11-10','192.168.1.1'),(60,2,2,'CREATE NEW LINE ',8,2,'2022-11-10','192.168.1.1'),(61,2,2,'CREATE NEW INTEGRATION',7,3,'2022-11-10','192.168.1.1'),(62,2,2,'CREATE NEW INTEGRATION',7,4,'2022-11-10','192.168.1.1'),(63,2,2,'CREATE NEW user line',11,2,'2022-11-10','192.168.1.1'),(64,2,2,'CREATE NEW user line',11,3,'2022-11-10','192.168.1.1'),(65,2,2,'CREATE NEW user line',11,4,'2022-11-10','192.168.1.1'),(66,2,2,'UPDATE USER LINE',11,2,'2022-11-10','192.168.1.1'),(67,2,2,'DELETE USER LINE',11,2,'2022-11-10','192.168.1.1'),(68,2,2,'UPDATE USER LINE',11,3,'2022-11-10','192.168.1.1'),(69,2,2,'Create New User preference',12,2,'2022-11-10','192.168.1.1'),(70,2,2,'Create New User preference',12,3,'2022-11-10','192.168.1.1'),(71,2,2,'Create New User preference',12,4,'2022-11-10','192.168.1.1'),(72,2,2,'Create New User preference',12,5,'2022-11-10','192.168.1.1'),(73,2,2,'Create New User preference',12,6,'2022-11-10','192.168.1.1'),(74,2,2,'CREATE NEW user line',11,5,'2022-11-10','192.168.1.1'),(75,2,2,'CREATE NEW user line',11,6,'2022-11-10','192.168.1.1'),(76,2,2,'Create New User preference',12,7,'2022-11-10','192.168.1.1'),(77,2,2,'CREATE NEW LINE ',8,3,'2022-11-10','192.168.1.1'),(78,2,2,'Create New User preference',12,8,'2022-11-10','192.168.1.1'),(79,2,2,'UPDATE user Preference',12,2,'2022-11-10','192.168.1.1'),(80,2,2,'Create New User preference',12,9,'2022-11-10','192.168.1.1'),(81,2,2,'UPDATE user Preference',12,2,'2022-11-10','192.168.1.1'),(82,2,2,'DELETE USER PREFERENCE',12,2,'2022-11-10','192.168.1.1'),(83,2,2,'create new user permission',13,4,'2022-11-10','192.168.1.1'),(84,2,2,'create new user permission',13,5,'2022-11-10','192.168.1.1'),(85,2,2,'create new user permission',13,6,'2022-11-10','192.168.1.1'),(86,2,2,'Update user permission ',13,6,'2022-11-10','192.168.1.1'),(87,2,2,'Update user permission ',13,6,'2022-11-10','192.168.1.1'),(88,2,2,'Update user permission ',13,6,'2022-11-10','192.168.1.1'),(89,2,2,'DELETE USER PREFERENCE',12,4,'2022-11-10','192.168.1.1'),(90,2,2,'DELETE LINE',8,3,'2022-11-10','192.168.1.1'),(91,2,2,'CREATE NEW LINE ',8,4,'2022-11-10','192.168.1.1'),(92,2,2,'CREATE NEW LINE ',8,5,'2022-11-10','192.168.1.1'),(93,2,2,'CREATE NEW LINE ',8,6,'2022-11-10','192.168.1.1'),(94,2,2,'CREATE NEW LINE ',8,7,'2022-11-10','192.168.1.1'),(95,2,2,'CREATE NEW LINE ',8,8,'2022-11-10','192.168.1.1'),(96,2,2,'DELETE LINE',8,8,'2022-11-10','192.168.1.1'),(97,2,2,'CREATE NEW TAG',9,3,'2022-11-10','192.168.1.1'),(98,2,2,'DELETE TAG',9,3,'2022-11-10','192.168.1.1'),(99,2,2,'CREATE NEW PHONE NUMBER',3,19,'2022-11-10','192.168.1.1'),(100,2,2,'CREATE NEW PHONE NUMBER',3,20,'2022-11-10','192.168.1.1'),(101,2,2,'CREATE NEW GROUP',4,8,'2022-11-10','192.168.1.1'),(102,2,2,'CREATE NEW GROUP',4,9,'2022-11-10','192.168.1.1'),(103,2,2,'CREATE NEW GROUP',4,10,'2022-11-10','192.168.1.1'),(104,2,2,'CREATE NEW GROUP',4,11,'2022-11-10','192.168.1.1'),(105,2,2,'CREATE NEW GROUP',4,12,'2022-11-11','192.168.1.1'),(106,2,2,'CREATE NEW GROUP',4,22,'2022-11-11','192.168.1.1'),(107,2,2,'UPDATE PHONE NUMBER',3,20,'2022-11-11','192.168.1.1'),(108,2,2,'UPDATE PHONE NUMBER',3,8,'2022-11-11','192.168.1.1'),(109,2,2,'UPDATE PHONE NUMBER',3,8,'2022-11-11','192.168.1.1'),(110,2,2,'UPDATE PHONE NUMBER',3,8,'2022-11-11','192.168.1.1'),(111,2,2,'create new user permission',13,7,'2022-11-11','192.168.1.1'),(112,2,2,'create new user permission',13,8,'2022-11-11','192.168.1.1'),(113,2,2,'create new account permission',14,6,'2022-11-11','192.168.1.1'),(114,2,2,'create new account permission',14,7,'2022-11-11','192.168.1.1'),(115,2,2,'create new account permission',14,8,'2022-11-11','192.168.1.1'),(116,2,2,'Update account permission ',14,6,'2022-11-11','192.168.1.1'),(117,2,2,'Update account permission ',14,8,'2022-11-11','192.168.1.1'),(118,2,2,'Delete account permissions',14,7,'2022-11-11','192.168.1.1'),(119,2,2,'Update account permission ',14,6,'2022-11-14','192.168.1.1'),(120,2,2,'Update account permission ',14,6,'2022-11-14','192.168.1.1'),(121,2,2,'Delete account permissions',14,6,'2022-11-14','192.168.1.1'),(122,2,2,'create new account permission',14,9,'2022-11-14','192.168.1.1'),(123,2,2,'update account_permissions',14,9,'2022-11-14','192.168.1.1'),(124,2,2,'update account_permissions',14,9,'2022-11-14','192.168.1.1'),(125,2,2,'update account_permissions',14,9,'2022-11-14','192.168.1.1'),(126,2,2,'create new account permission',14,10,'2022-11-14','192.168.1.1'),(127,2,2,'create new account permission',14,11,'2022-11-14','192.168.1.1'),(128,2,2,'create new account permission',14,12,'2022-11-14','192.168.1.1'),(129,2,2,'create new account permission',14,13,'2022-11-14','192.168.1.1'),(130,2,2,'create new account permission',14,14,'2022-11-14','192.168.1.1'),(131,2,2,'create new account permission',14,15,'2022-11-14','192.168.1.1'),(132,2,2,'create new account permission',14,16,'2022-11-14','192.168.1.1'),(133,2,2,'create new account permission',14,17,'2022-11-14','192.168.1.1'),(134,2,2,'create new account permission',14,18,'2022-11-14','192.168.1.1'),(135,2,2,'create new account permission',14,19,'2022-11-14','192.168.1.1'),(136,2,2,'create new account permission',14,20,'2022-11-14','192.168.1.1'),(137,2,2,'create new account permission',14,21,'2022-11-14','192.168.1.1'),(138,2,2,'create new account permission',14,22,'2022-11-14','192.168.1.1'),(139,2,2,'update account_permissions',14,10,'2022-11-14','192.168.1.1'),(140,2,2,'update account_permissions',14,11,'2022-11-14','192.168.1.1'),(141,2,2,'update account_permissions',14,11,'2022-11-14','192.168.1.1'),(142,2,2,'Delete account permissions',14,22,'2022-11-14','192.168.1.1'),(143,2,2,'Delete account permissions',14,21,'2022-11-14','192.168.1.1'),(144,2,2,'Delete account permissions',14,20,'2022-11-14','192.168.1.1'),(145,2,2,'Delete account permissions',14,19,'2022-11-14','192.168.1.1'),(146,2,2,'Delete account permissions',14,18,'2022-11-14','192.168.1.1'),(147,2,2,'Delete account permissions',14,17,'2022-11-14','192.168.1.1'),(148,2,2,'Delete account permissions',14,16,'2022-11-14','192.168.1.1'),(149,2,2,'Delete account permissions',14,15,'2022-11-14','192.168.1.1'),(150,2,2,'Delete account permissions',14,14,'2022-11-14','192.168.1.1'),(151,2,2,'Delete account permissions',14,13,'2022-11-14','192.168.1.1'),(152,2,2,'update account_permissions',14,12,'2022-11-14','192.168.1.1'),(153,2,2,'update account_permissions',14,9,'2022-11-14','192.168.1.1'),(154,2,2,'update account_permissions',14,10,'2022-11-14','192.168.1.1'),(155,2,2,'update account_permissions',14,11,'2022-11-14','192.168.1.1'),(156,2,2,'update account_permissions',14,12,'2022-11-14','192.168.1.1'),(157,2,2,'update account_permissions',14,9,'2022-11-14','192.168.1.1'),(158,2,2,'update account_permissions',14,9,'2022-11-14','192.168.1.1'),(159,2,2,'update account_permissions',14,9,'2022-11-14','192.168.1.1'),(160,2,2,'update account_permissions',14,9,'2022-11-14','192.168.1.1'),(161,2,2,'update account_permissions',14,9,'2022-11-14','192.168.1.1'),(162,2,2,'update account_permissions',14,9,'2022-11-14','192.168.1.1'),(163,2,2,'update account_permissions',14,9,'2022-11-14','192.168.1.1'),(164,2,2,'update account_permissions',14,9,'2022-11-14','192.168.1.1'),(165,2,2,'update account_permissions',14,9,'2022-11-14','192.168.1.1'),(166,2,2,'update account_permissions',14,9,'2022-11-14','192.168.1.1'),(167,2,2,'update account_permissions',14,9,'2022-11-14','192.168.1.1'),(168,2,2,'update account_permissions',14,9,'2022-11-14','192.168.1.1'),(169,2,2,'update account_permissions',14,9,'2022-11-14','192.168.1.1'),(170,2,2,'CREATE NEW INTEGRATION',7,5,'2022-11-15','192.168.1.1'),(171,2,2,'CREATE NEW INTEGRATION',7,6,'2022-11-15','192.168.1.1'),(172,2,2,'CREATE NEW INTEGRATION',7,7,'2022-11-15','192.168.1.1'),(173,2,2,'CREATE NEW INTEGRATION',7,8,'2022-11-15','192.168.1.1'),(174,2,2,'UPDATE INTEGRATION',7,2,'2022-11-15','192.168.1.1'),(175,2,2,'CREATE NEW INTEGRATION',7,9,'2022-11-15','192.168.1.1'),(176,2,2,'DELETE  INTEGRATION',7,2,'2022-11-15','192.168.1.1'),(177,2,2,'create new user permission',13,9,'2022-11-15','192.168.1.1'),(178,2,2,'create new user permission',13,10,'2022-11-15','192.168.1.1'),(179,2,2,'Update user permission ',13,3,'2022-11-15','192.168.1.1'),(180,2,2,'Delete user permissions',13,3,'2022-11-15','192.168.1.1'),(181,2,2,'CREATE NEW user line',11,7,'2022-11-15','192.168.1.1'),(182,2,2,'UPDATE USER LINE',11,3,'2022-11-15','192.168.1.1'),(183,2,2,'DELETE USER LINE',11,3,'2022-11-15','192.168.1.1'),(184,2,2,'CREATE NEW user line',11,8,'2022-11-15','192.168.1.1'),(185,2,2,'Create New User preference',12,10,'2022-11-15','192.168.1.1'),(186,2,2,'UPDATE user Preference',12,8,'2022-11-15','192.168.1.1'),(187,2,2,'DELETE USER PREFERENCE',12,8,'2022-11-15','192.168.1.1'),(188,2,2,'Create New User preference',12,11,'2022-11-15','192.168.1.1'),(189,2,2,'Create New User preference',12,12,'2022-11-15','192.168.1.1'),(190,2,2,'Create New User preference',12,13,'2022-11-15','192.168.1.1'),(191,2,2,'Create New User preference',12,14,'2022-11-15','192.168.1.1'),(192,2,2,'CREATE NEW TAG',9,4,'2022-11-15','192.168.1.1'),(193,2,2,'UPDATE TAG',9,2,'2022-11-15','192.168.1.1'),(194,2,2,'DELETE TAG',9,2,'2022-11-15','192.168.1.1'),(195,2,2,'CREATE NEW GROUP',4,23,'2022-11-15','192.168.1.1'),(196,2,2,'UPDATE  GROUP',4,2,'2022-11-15','192.168.1.1'),(197,2,2,'CREATE NEW GROUP ELEMENT ',5,7,'2022-11-15','192.168.1.1'),(198,2,2,'UPDATE GROUPE ELEMENT',5,1,'2022-11-15','192.168.1.1'),(199,2,2,'UPDATE GROUPE ELEMENT',5,1,'2022-11-15','192.168.1.1'),(200,2,2,'UPDATE GROUPE ELEMENT',5,1,'2022-11-15','192.168.1.1'),(201,2,2,'DELETE GROUPE ELEMENT',5,1,'2022-11-15','192.168.1.1'),(202,2,2,'CREATE NEW LINE ',8,9,'2022-11-15','192.168.1.1'),(203,2,2,'UPDATE LINE ',8,2,'2022-11-15','192.168.1.1'),(204,2,2,'CREATE NEW LINE ',8,10,'2022-11-15','192.168.1.1'),(205,2,2,'CREATE NEW CONTACT',1,5,'2022-11-15','192.168.1.1'),(206,2,2,'UPDATE CONTACT',1,2,'2022-11-15','192.168.1.1'),(207,2,2,'UPDATE CONTACT',1,5,'2022-11-15','192.168.1.1'),(208,2,2,'CREATE NEW PHONE NUMBER',3,23,'2022-11-15','192.168.1.1'),(209,2,2,'UPDATE PHONE NUMBER',3,16,'2022-11-15','192.168.1.1'),(210,2,2,'DELETE PHONE NUMBER',3,16,'2022-11-15','192.168.1.1'),(211,2,2,'CREATE CONTACT TAG',10,7,'2022-11-15','192.168.1.1'),(212,2,2,'Update  Contact Tag',10,7,'2022-11-15','192.168.1.1'),(213,2,2,'Delete New Contact Tag',10,7,'2022-11-15','192.168.1.1'),(214,2,2,'CREATE NEW NOTE ',2,11,'2022-11-15','192.168.1.1'),(215,2,2,'UPDATE NOTE',2,11,'2022-11-15','192.168.1.1'),(216,2,2,'create new account permission',14,24,'2022-11-15','192.168.1.1'),(217,2,2,'create new account permission',14,25,'2022-11-15','192.168.1.1'),(218,2,2,'CREATE NEW CONTACT',1,6,'2022-11-15','192.168.1.1'),(219,2,2,'CREATE NEW CONTACT',1,7,'2022-11-15','192.168.1.1'),(220,2,2,'CREATE NEW CONTACT',1,8,'2022-11-15','192.168.1.1'),(221,2,2,'UPDATE CONTACT',1,2,'2022-11-15','192.168.1.1'),(222,2,2,'Create New User',14,19,'2022-11-15','192.168.1.1'),(223,2,2,'update User',14,2,'2022-11-15','192.168.1.1'),(224,2,2,'Create New User',14,20,'2022-11-16','192.168.1.1'),(225,2,2,'Create New User',14,21,'2022-11-16','192.168.1.1'),(226,2,2,'Create New User',14,22,'2022-11-16','192.168.1.1'),(227,2,2,'Create New User',14,23,'2022-11-16','192.168.1.1'),(228,2,2,'Create New User',14,24,'2022-11-16','192.168.1.1'),(229,2,2,'Create New User',14,25,'2022-11-16','192.168.1.1'),(230,2,2,'Create New User',14,26,'2022-11-16','192.168.1.1'),(231,2,2,'Create New User',14,27,'2022-11-16','192.168.1.1'),(232,2,2,'Create New User',14,28,'2022-11-16','192.168.1.1'),(233,2,2,'Create New User',14,29,'2022-11-16','192.168.1.1'),(234,2,2,'Create New User',14,30,'2022-11-16','192.168.1.1'),(235,2,2,'Create New User',14,31,'2022-11-16','192.168.1.1'),(236,2,2,'Create New User',14,32,'2022-11-16','192.168.1.1'),(237,2,2,'Create New User',14,33,'2022-11-16','192.168.1.1'),(238,2,2,'Create New User',14,34,'2022-11-16','192.168.1.1'),(239,2,2,'Create New User',14,35,'2022-11-16','192.168.1.1'),(240,2,2,'Create New User',14,36,'2022-11-16','192.168.1.1'),(241,2,2,'Create New User',14,37,'2022-11-16','192.168.1.1'),(242,2,2,'Create New User',14,38,'2022-11-16','192.168.1.1'),(243,2,2,'Create New User',14,39,'2022-11-16','192.168.1.1'),(244,2,2,'Create New User',14,40,'2022-11-16','192.168.1.1'),(245,2,2,'Create New User',14,41,'2022-11-16','192.168.1.1'),(246,2,2,'Create New User',14,42,'2022-11-16','192.168.1.1'),(247,2,2,'Create New User',14,43,'2022-11-16','192.168.1.1'),(248,2,2,'Create New User',14,44,'2022-11-16','192.168.1.1'),(249,2,2,'Create New User',14,45,'2022-11-16','192.168.1.1'),(250,2,2,'Create New User',14,46,'2022-11-16','192.168.1.1'),(251,2,2,'Create New User',14,47,'2022-11-16','192.168.1.1'),(252,2,2,'Create New User',14,48,'2022-11-16','192.168.1.1'),(253,2,2,'Create New User',14,49,'2022-11-16','192.168.1.1'),(254,2,2,'Create New User',14,50,'2022-11-16','192.168.1.1'),(255,2,2,'Create New User',14,51,'2022-11-16','192.168.1.1'),(256,2,2,'Create New User',14,52,'2022-11-16','192.168.1.1'),(257,2,2,'Create New User',14,53,'2022-11-16','192.168.1.1'),(258,2,2,'Create New User',14,54,'2022-11-16','192.168.1.1'),(259,2,2,'Create New User',14,55,'2022-11-16','192.168.1.1'),(260,2,2,'Create New User',14,56,'2022-11-16','192.168.1.1'),(261,2,2,'Create New User',14,57,'2022-11-16','192.168.1.1'),(262,2,2,'Create New User',14,58,'2022-11-16','192.168.1.1'),(263,2,2,'Create New User',14,59,'2022-11-16','192.168.1.1'),(264,2,2,'Create New User',14,60,'2022-11-16','192.168.1.1'),(265,2,2,'Create New User',14,61,'2022-11-16','192.168.1.1'),(266,2,2,'Create New User',14,62,'2022-11-16','192.168.1.1'),(267,2,2,'Create New User',14,63,'2022-11-16','192.168.1.1'),(268,2,2,'Create New User',14,64,'2022-11-16','192.168.1.1'),(269,2,2,'Create New User',14,65,'2022-11-16','192.168.1.1'),(270,2,2,'Create New User',14,66,'2022-11-16','192.168.1.1'),(271,2,2,'Create New User',14,67,'2022-11-16','192.168.1.1'),(272,2,2,'Create New User',14,68,'2022-11-16','192.168.1.1'),(273,2,2,'Create New User',14,69,'2022-11-16','192.168.1.1'),(274,2,2,'Create New User',14,70,'2022-11-16','192.168.1.1'),(275,2,2,'Create New User',14,71,'2022-11-16','192.168.1.1'),(276,2,2,'Create New User',14,72,'2022-11-16','192.168.1.1'),(277,2,2,'Create New User',14,73,'2022-11-16','192.168.1.1'),(278,2,2,'Create New User',14,74,'2022-11-16','192.168.1.1'),(279,2,2,'Create New User',14,75,'2022-11-16','192.168.1.1'),(280,2,2,'Create New User',14,76,'2022-11-16','192.168.1.1'),(281,2,2,'Create New User',14,78,'2022-11-16','192.168.1.1'),(282,2,2,'Create New User',14,79,'2022-11-16','192.168.1.1'),(283,2,2,'Create New User',14,80,'2022-11-16','192.168.1.1'),(284,2,2,'Create New User',14,81,'2022-11-16','192.168.1.1'),(285,2,2,'Create New User',14,82,'2022-11-16','192.168.1.1'),(286,2,2,'Create New User',14,83,'2022-11-16','192.168.1.1'),(287,2,2,'Create New User',14,84,'2022-11-16','192.168.1.1'),(288,2,2,'Create New User',14,86,'2022-11-16','192.168.1.1'),(289,2,2,'update User',14,2,'2022-11-16','192.168.1.1'),(290,2,2,'update User',14,2,'2022-11-16','192.168.1.1'),(291,2,2,'Create New User',14,87,'2022-11-16','192.168.1.1'),(292,2,2,'Create New User',14,88,'2022-11-16','192.168.1.1'),(293,2,2,'Create New User',14,89,'2022-11-16','192.168.1.1'),(294,2,2,'Create New User',14,90,'2022-11-16','192.168.1.1'),(295,2,2,'Create New User',14,91,'2022-11-16','192.168.1.1'),(296,2,2,'Create New User',14,92,'2022-11-16','192.168.1.1'),(297,2,2,'Create New User',14,93,'2022-11-16','192.168.1.1'),(298,2,2,'Create New User',14,94,'2022-11-16','192.168.1.1'),(299,2,2,'Create New User',14,95,'2022-11-16','192.168.1.1'),(300,2,2,'Create New User',14,96,'2022-11-16','192.168.1.1'),(301,2,2,'Create New User',14,97,'2022-11-16','192.168.1.1'),(302,2,2,'Create New User',14,98,'2022-11-16','192.168.1.1'),(303,2,2,'Create New User',14,99,'2022-11-16','192.168.1.1'),(304,2,2,'Create New User',14,100,'2022-11-16','192.168.1.1'),(305,2,2,'Create New User',14,101,'2022-11-16','192.168.1.1'),(306,2,2,'Create New User',14,102,'2022-11-16','192.168.1.1'),(307,2,2,'Create New User',14,105,'2022-11-16','192.168.1.1'),(308,2,2,'Create New User',14,106,'2022-11-16','192.168.1.1'),(309,2,2,'Create New User',14,107,'2022-11-16','192.168.1.1'),(310,2,2,'Create New User',14,108,'2022-11-16','192.168.1.1'),(311,2,2,'Create New User',14,109,'2022-11-16','192.168.1.1'),(312,2,2,'Create New User',14,110,'2022-11-16','192.168.1.1'),(313,2,2,'Create New User',14,111,'2022-11-16','192.168.1.1'),(314,2,2,'Create New User',14,112,'2022-11-16','192.168.1.1'),(315,2,2,'Create New User',14,113,'2022-11-16','192.168.1.1'),(316,2,2,'Create New User',14,114,'2022-11-16','192.168.1.1'),(317,2,2,'Create New User',14,115,'2022-11-16','192.168.1.1'),(318,2,2,'Create New User',14,116,'2022-11-16','192.168.1.1'),(319,2,2,'Create New User',14,117,'2022-11-16','192.168.1.1'),(320,2,2,'Create New User',14,118,'2022-11-16','192.168.1.1'),(321,2,2,'Create New User',14,119,'2022-11-16','192.168.1.1'),(322,2,2,'Create New User',14,120,'2022-11-16','192.168.1.1'),(323,2,2,'Create New User',14,121,'2022-11-16','192.168.1.1'),(324,2,2,'Create New User',14,122,'2022-11-16','192.168.1.1'),(325,2,2,'Create New User',14,123,'2022-11-16','192.168.1.1'),(326,2,2,'Create New User',14,124,'2022-11-16','192.168.1.1'),(327,2,2,'Create New User',14,125,'2022-11-16','192.168.1.1'),(328,2,2,'Create New User',14,126,'2022-11-16','192.168.1.1'),(329,2,2,'Create New User',14,127,'2022-11-16','192.168.1.1'),(330,2,2,'Create New User',14,128,'2022-11-16','192.168.1.1'),(331,2,2,'Create New User',14,129,'2022-11-16','192.168.1.1'),(332,2,2,'Create New User',14,130,'2022-11-16','192.168.1.1'),(333,2,2,'Create New User',14,131,'2022-11-16','192.168.1.1'),(334,2,2,'Create New User',14,132,'2022-11-16','192.168.1.1'),(335,2,2,'Create New User',14,133,'2022-11-16','192.168.1.1'),(336,2,2,'Create New User',14,134,'2022-11-16','192.168.1.1'),(337,2,2,'Create New User',14,136,'2022-11-16','192.168.1.1'),(338,2,2,'Create New User',14,137,'2022-11-16','192.168.1.1'),(339,2,2,'Create New User',14,138,'2022-11-16','192.168.1.1'),(340,2,2,'Create New User',14,139,'2022-11-16','192.168.1.1'),(341,2,2,'Create New User',14,140,'2022-11-16','192.168.1.1'),(342,2,2,'Create New User',14,141,'2022-11-16','192.168.1.1'),(343,2,2,'Create New User',14,142,'2022-11-16','192.168.1.1'),(344,2,2,'Create New User',14,143,'2022-11-16','192.168.1.1'),(345,2,2,'Create New User',14,144,'2022-11-16','192.168.1.1'),(346,2,2,'Create New User',14,145,'2022-11-16','192.168.1.1'),(347,2,2,'Create New User',14,146,'2022-11-16','192.168.1.1'),(348,2,2,'Create New User',14,147,'2022-11-16','192.168.1.1'),(349,2,2,'Create New User',14,148,'2022-11-16','192.168.1.1'),(350,2,2,'Create New User',14,149,'2022-11-16','192.168.1.1'),(351,2,2,'Create New User',14,150,'2022-11-16','192.168.1.1'),(352,2,2,'Create New User',14,151,'2022-11-16','192.168.1.1'),(353,2,2,'Create New User',14,152,'2022-11-16','192.168.1.1'),(354,2,2,'Create New User',14,153,'2022-11-16','192.168.1.1'),(355,2,2,'Create New User',14,154,'2022-11-16','192.168.1.1'),(356,2,2,'Create New User',14,155,'2022-11-16','192.168.1.1'),(357,2,2,'Create New User',14,156,'2022-11-16','192.168.1.1'),(358,2,2,'Create New User',14,157,'2022-11-16','192.168.1.1'),(359,2,2,'Create New User',14,158,'2022-11-16','192.168.1.1'),(360,2,2,'Create New User',14,159,'2022-11-16','192.168.1.1'),(361,2,2,'Create New User',14,160,'2022-11-16','192.168.1.1'),(362,2,2,'Create New User',14,161,'2022-11-16','192.168.1.1'),(363,2,2,'Create New User',14,162,'2022-11-16','192.168.1.1'),(364,2,2,'Create New User',14,163,'2022-11-16','192.168.1.1'),(365,2,2,'Create New User',14,164,'2022-11-16','192.168.1.1'),(366,2,2,'Create New User',14,165,'2022-11-16','192.168.1.1'),(367,2,2,'Create New User',14,166,'2022-11-16','192.168.1.1'),(368,2,2,'Create New User',14,167,'2022-11-16','192.168.1.1'),(369,2,2,'Create New User',14,168,'2022-11-16','192.168.1.1'),(370,2,2,'Create New User',14,169,'2022-11-16','192.168.1.1'),(371,2,2,'Create New User',14,170,'2022-11-16','192.168.1.1'),(372,2,2,'Create New User',14,171,'2022-11-16','192.168.1.1'),(373,2,2,'Create New User',14,172,'2022-11-16','192.168.1.1'),(374,2,2,'Create New User',14,173,'2022-11-16','192.168.1.1'),(375,2,2,'Create New User',14,174,'2022-11-16','192.168.1.1'),(376,2,2,'Create New User',14,175,'2022-11-16','192.168.1.1'),(377,2,2,'Create New User',14,176,'2022-11-16','192.168.1.1'),(378,2,2,'Create New User',14,177,'2022-11-16','192.168.1.1'),(379,2,2,'Create New User',14,178,'2022-11-16','192.168.1.1'),(380,2,2,'Create New User',14,179,'2022-11-16','192.168.1.1'),(381,2,2,'Create New User',14,180,'2022-11-16','192.168.1.1'),(382,2,2,'Create New User',14,181,'2022-11-16','192.168.1.1'),(383,2,2,'Create New User',14,182,'2022-11-16','192.168.1.1'),(384,2,2,'Create New User',14,183,'2022-11-16','192.168.1.1'),(385,2,2,'Create New User',14,184,'2022-11-16','192.168.1.1'),(386,2,2,'Create New User',14,185,'2022-11-16','192.168.1.1'),(387,2,2,'Create New User',14,186,'2022-11-16','192.168.1.1'),(388,2,2,'Create New User',14,187,'2022-11-16','192.168.1.1'),(389,2,2,'Create New User',14,188,'2022-11-16','192.168.1.1'),(390,2,2,'Create New User',14,189,'2022-11-16','192.168.1.1'),(391,2,2,'Create New User',14,190,'2022-11-16','192.168.1.1'),(392,2,2,'Create New User',14,191,'2022-11-16','192.168.1.1'),(393,2,2,'Create New User',14,192,'2022-11-16','192.168.1.1'),(394,2,2,'Create New User',14,195,'2022-11-16','192.168.1.1'),(395,2,2,'Create New User',14,198,'2022-11-16','192.168.1.1'),(396,2,2,'Create New User',14,200,'2022-11-16','192.168.1.1'),(397,2,2,'Create New User',14,203,'2022-11-16','192.168.1.1'),(398,2,2,'Create New User',14,205,'2022-11-16','192.168.1.1'),(399,2,2,'Create New User',14,206,'2022-11-16','192.168.1.1'),(400,2,2,'Create New User',14,207,'2022-11-16','192.168.1.1'),(401,2,2,'update User',14,2,'2022-11-16','192.168.1.1'),(402,2,2,'Create New User',14,208,'2022-11-17','192.168.1.1'),(403,2,2,'log In',14,208,'2022-11-17','192.168.1.1'),(404,2,2,'log In',14,208,'2022-11-17','192.168.1.1'),(405,2,2,'log In',14,208,'2022-11-17','192.168.1.1'),(406,2,208,'log In',14,208,'2022-11-17','192.168.1.1'),(407,2,208,'log In',14,208,'2022-11-17','192.168.1.1'),(408,2,212,'Create New User',14,2,'2022-11-17','192.168.1.1'),(409,2,213,'Create New User',14,2,'2022-11-17','192.168.1.1'),(410,2,213,'log In',14,213,'2022-11-17','192.168.1.1'),(411,2,208,'update User',14,208,'2022-11-17','192.168.1.1'),(414,2,215,'Create New User',14,2,'2022-11-17','192.168.1.1'),(415,36,218,'CREATE NEW CONTACT',1,50,'2022-11-17','192.168.1.1'),(416,36,218,'CREATE NEW CONTACT',1,51,'2022-11-17','192.168.1.1'),(417,36,255,'POST/usersLines/create/',11,22,'2022-11-18','192.168.1.1'),(418,36,255,'POST/usersLines/create/',11,23,'2022-11-18','192.168.1.1'),(419,36,255,'POST/usersLines/create/',11,24,'2022-11-18','192.168.1.1'),(420,36,255,'POST/usersLines/create/',11,25,'2022-11-18','192.168.1.1'),(421,36,255,'POST/usersLines/create/',11,26,'2022-11-18','192.168.1.1'),(423,36,270,'POST/users/create/',14,273,'2022-11-18','192.168.1.1'),(424,36,270,'PUT/users/update/',14,208,'2022-11-18','192.168.1.1'),(425,36,270,'PUT/users/update/',14,208,'2022-11-21','192.168.1.1'),(426,36,270,'PUT/users/update/',14,208,'2022-11-21','192.168.1.1'),(427,36,270,'PUT/users/update/',14,273,'2022-11-21','192.168.1.1'),(428,36,270,'POST/users/create/',14,274,'2022-11-21','192.168.1.1'),(429,36,270,'PUT/message/update/',9,5,'2022-11-21','192.168.1.1'),(430,36,270,'POST/message/create/',9,42,'2022-11-22','192.168.1.1'),(431,36,270,'PUT/message/update/?sender_id=&receiver_id=',9,42,'2022-11-22','192.168.1.1'),(432,36,270,'PUT/message/update/?sender_id=&receiver_id=',9,42,'2022-11-22','192.168.1.1'),(433,36,270,'DELETE/message/delete/',9,8,'2022-11-22','192.168.1.1');
/*!40000 ALTER TABLE `logs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `messaging`
--

DROP TABLE IF EXISTS `messaging`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `messaging` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `sender` int unsigned NOT NULL,
  `receiver` int unsigned NOT NULL,
  `message` text NOT NULL,
  `time_sent` datetime NOT NULL,
  `time_seen` varchar(45) DEFAULT NULL,
  `status` tinyint unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `from_idx` (`sender`),
  CONSTRAINT `from` FOREIGN KEY (`sender`) REFERENCES `users_lines` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `to` FOREIGN KEY (`sender`) REFERENCES `users_lines` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messaging`
--

LOCK TABLES `messaging` WRITE;
/*!40000 ALTER TABLE `messaging` DISABLE KEYS */;
INSERT INTO `messaging` VALUES (2,18,1,'testing','2022-11-18 12:29:10',NULL,0),(4,18,1,'tawa tawa','2022-11-18 12:29:35','2022/11/22',0),(5,18,1,'tawa tawa','2022-11-18 12:32:04',NULL,0),(6,19,20,'testing','2022-11-22 10:39:02','2022-11-22',0),(7,19,20,'alors','2022-11-22 10:39:23','2022-11-28',0),(9,19,20,'bnjr','2022-11-22 12:13:09','2022-11-28',0),(10,19,20,'bnjr','2022-11-22 12:13:22','2022-11-28',0),(11,19,20,'bnsr','2022-11-22 12:13:27','2022-11-28',0),(12,19,20,'cv?','2022-11-22 12:13:32','2022-11-28',0),(13,19,20,'hmd wenty?','2022-11-22 12:13:38','2022-11-28',0),(14,19,20,'hmd t3ich','2022-11-22 12:13:44','2022-11-28',0),(15,19,20,'mrugl degla','2022-11-22 12:13:50','2022-11-22',0),(16,19,20,'5amsa','2022-11-22 12:40:32','2022-11-28',0),(17,19,20,'w','2022-11-22 12:40:36','2022-11-28',0),(18,19,20,'5mis','2022-11-22 12:40:39','2022-11-28',0),(19,19,20,'3lik','2022-11-22 12:40:43','2022-11-28',0),(20,19,20,'uno','2022-11-22 12:40:46','2022-11-28',0),(21,19,20,'hh','2022-11-22 12:40:51','2022-11-28',0),(22,19,20,'dhamra','2022-11-22 12:40:58','2022-11-28',0),(23,19,20,'yalla','2022-11-22 12:41:02','2022-11-28',0),(24,19,20,'yalla','2022-11-22 12:45:00','2022-11-28',0),(25,19,20,'1','2022-11-22 12:45:04','2022-11-28',0),(26,19,20,'12','2022-11-22 12:45:07','2022-11-28',0),(27,19,20,'123','2022-11-22 12:45:09','2022-11-28',0),(28,19,20,'1234','2022-11-22 12:45:12','2022-11-28',0),(29,19,20,'12345','2022-11-22 12:45:13','2022-11-28',0),(30,19,20,'123445','2022-11-22 12:45:16','2022-11-28',0),(31,19,20,'1234456','2022-11-22 12:45:18','2022-11-28',0),(32,19,20,'12344567','2022-11-22 12:45:20','2022-11-28',0),(33,19,20,'123445678','2022-11-22 12:45:21','2022-11-28',0),(34,19,20,'9','2022-11-22 12:45:27','2022-11-28',0),(35,19,20,'8','2022-11-22 12:45:30','2022-11-28',0),(36,19,20,'7','2022-11-22 12:45:32','2022-11-28',0),(37,19,20,'4','2022-11-22 12:45:35','2022-11-28',0),(38,19,20,'5','2022-11-22 12:45:37','2022-11-28',0),(39,19,20,'6','2022-11-22 12:45:39','2022-11-28',0),(40,19,20,'2','2022-11-22 12:45:43','2022-11-28',0),(41,19,20,'1','2022-11-22 12:45:46','2022-11-28',0),(42,19,20,'1','2022-11-22 16:14:19','2022-11-28',0);
/*!40000 ALTER TABLE `messaging` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tags`
--

DROP TABLE IF EXISTS `tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tags` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `account_id` int unsigned NOT NULL,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `tg_account_id_idx` (`account_id`),
  CONSTRAINT `tg_account_id` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tags`
--

LOCK TABLES `tags` WRITE;
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
INSERT INTO `tags` VALUES (6,38,'tesst');
/*!40000 ALTER TABLE `tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tags_contacts`
--

DROP TABLE IF EXISTS `tags_contacts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tags_contacts` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `contact_id` int unsigned NOT NULL,
  `tag_id` int unsigned NOT NULL,
  `user_id` int unsigned NOT NULL,
  `date_attach` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ta_cn_tag_id_idx` (`tag_id`),
  KEY `ta_cn_user_id_idx` (`user_id`),
  KEY `ta_cn_contact_id_idx` (`contact_id`),
  CONSTRAINT `ta_cn_contact_id` FOREIGN KEY (`contact_id`) REFERENCES `contacts` (`id`),
  CONSTRAINT `ta_cn_tag_id` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`),
  CONSTRAINT `ta_cn_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tags_contacts`
--

LOCK TABLES `tags_contacts` WRITE;
/*!40000 ALTER TABLE `tags_contacts` DISABLE KEYS */;
INSERT INTO `tags_contacts` VALUES (11,33,6,2,'2022-11-15');
/*!40000 ALTER TABLE `tags_contacts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `account_id` int unsigned NOT NULL,
  `username` varchar(100) NOT NULL,
  `login` varchar(128) NOT NULL,
  `password` varchar(255) NOT NULL,
  `default_theme` tinyint unsigned DEFAULT NULL,
  `default_language` char(2) DEFAULT NULL,
  `default_timezone` tinyint unsigned DEFAULT NULL,
  `default_ring_sound` varchar(32) DEFAULT NULL,
  `email` varchar(128) DEFAULT NULL,
  `status` tinyint unsigned NOT NULL,
  `date_start` date NOT NULL,
  `date_end` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `acc_account_id_idx` (`account_id`),
  CONSTRAINT `acc_account_id` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=275 DEFAULT CHARSET=utf8mb4 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,2,'foueda','fou3eda','1245',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(14,27,'foueda','fou3ed','123456',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(208,2,'foueda','ahla biakaaaaaaaa','12a45aaa',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(209,2,'foueda','zaert','$2b$10$WMMfpidYQGKchCWa0ovHmOE6QO9SH9G9ccfXm6S2hznPLxPwLuUCq',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(212,2,'foueda','zaertaaa','$2b$10$n.2nkEkAdpUKyTYUTy8gQuEl2wPm/Y/yDnmkHPDkD2aHxst4R39v6',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(213,2,'foueda','fifi','$2b$10$gwDLDPEN4gOoRNqMyFEC5eM6BeAZeFV8jHXZoW0L63gMuE2ZgUZum',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(214,2,'last one','last one','$2b$10$xkRkd9rwlfkKXHwZfuuhEuL443Hgn5CTio6/DoUejQT2QDLaWlPAu',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(215,2,'déja','déja','$2b$10$rHmGSnYksIse4CgNUpfU8uHpk0J6668STUHCkIVDD7i729wE4mQsK',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(217,2,'déja','déjzaa','$2b$10$p2V6AQD9kpMn5n8zKYElm.b3nHFa26sNfi9WqZalTERYAssMnClFy',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(218,36,'déja','déjzaazeaa','$2b$10$Gv.cPSVZRndihUgPuTRnoutR.HpNvB2P/wy4wvePJ7InJhAcAcHkm',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(219,36,'déja','déjzaazeaazeaa','$2b$10$FIIdern6LzA.CzB4fLDtrOL59dGvJWQdHZQMkbqLAjkN6jPlEU43a',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(222,36,'déja','aza','$2b$10$j1gd0Hsf/i3RFgqvTEjKNuj3HABw38NGEmS.TvjP/FAkoGTFdD5ea',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(223,36,'déja','azezaeazaeazeazeazea','$2b$10$5io2I9buZutBYO24frn2kOtuXof90ddiVkujithA04je/DKKXOIEC',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(224,36,'déja','azezaeazaeazeaazeazea','$2b$10$Za.Os0HdalxQKLZFCXwLlO/a6N7hOOgm.wcRUVyRC3VTDDBR1QBAO',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(225,36,'déja','azezaeazaeazeaazeazeaa','$2b$10$1cYLgp5B38.gehGjzVaY6elX4Df1ivWgdshU9rJvNzUptxHI0Mjxe',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(226,36,'déja','azezaeazaeazeaazeaazeaa','$2b$10$MLjFwFCfbCdsSkiNDWBZT.IQGfUvRYrMOrxnhr7.3x8tHb4Znqexm',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(227,36,'déja','azezaeaazaeazeaazeaazeaa','$2b$10$p9M4Irurks9A813yTvfxR.nhGnjmituAnUwM2u2mVFwAKnNX1cZ6.',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(228,36,'déja','azezaeaazaaeazeaazeaazeaa','$2b$10$twZ6RxRLRKh0HmEDfZ7iiOdoe0K0ltwJIjEycR.EMbrnw3nvIH4xG',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(229,36,'déja','azezaeaazaaeazeaazaeaazeaa','$2b$10$ZUJDUADr8Mbn5FfGKExVL.MgbV6enujlPJ8wuszkPyexMLhiMPMYO',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(230,36,'déja','azezaeaazaaeazeaaazaeaazeaa','$2b$10$cA6lxEpV6EuzduUObotLWeJwcT8MnQNVq81zQMl9YKkiQW4QaFuce',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(231,36,'déja','azezaeaazaaeazeaaaazaeaazeaa','$2b$10$w2EFAnKeXG1QvK1.ut5jaufBhrRd/UTMZH7peDB4xFvy96HtMqiE2',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(232,36,'déja','azezaeaazaaeazeaaaaazaeaazeaa','$2b$10$q81L42a9syxnYOzCWRcGnuKlXC9XNx7QTXNSpdwmvTDVlQ9DHEjgy',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(233,36,'déja','azezaeaazaaeazeaaaaazaaeaazeaa','$2b$10$cR0.dIX8ycM7.ljfaEcek.1upHQ8Tf75393kYgZc6iXESEXGfcWAW',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(234,36,'déja','azezaeaazaaeazeaaaaazaaaeaazeaa','$2b$10$xRY1FtRywM5F7kiDOVGDR.8d/EE.YNcNd91wmFev9iFt0IA4Q321y',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(235,36,'déja','azezaeaazaaeazeaaaaaazaaaeaazeaa','$2b$10$7ys9/gBo.4YBjFDu4I3zmOMEcTmPgdVS3vDOTlxw3WUIGP/R7x4hq',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(236,36,'déja','azezaeaazaaeazeaaaaaaazaaaeaazeaa','$2b$10$g0ANdnB4gLDwFPhpliz4P.tE84jJDaUn2jxQiYxYUwASPAkTmoR8a',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(237,36,'déja','azezaeaazaaeazeaaaaaaazaaaaeaazeaa','$2b$10$IBh0avbxYG1pZxetrTEi/.NRQLVjhrGv9PoiYmVoJN79PBFlgeDmy',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(238,36,'déja','azezaeaazaaeazeaaaaaaazaaaaaeaazeaa','$2b$10$FYYyNSytfOrF6krYxQApku4XomphR4Y.WWHQXK8SoipHEjxn85SLe',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(239,36,'déja','azezaeaazaaeazeaaaaaaaazaaaaaeaazeaa','$2b$10$oFViAsqCaf47kvcmcvnQeOmbaw2BsvpHnX3NBiXmnAhFje.RixFeS',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(240,36,'déja','azezaeaazaaeazeaaaaaaaaazaaaaaeaazeaa','$2b$10$kJruzGASciyflfatTr7YR./QvLkWZMy8szUlByPbiuIkmCdt6sVp2',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(241,36,'déja','azezaeaazaaeazeaaaaaaaaazaaaaaaeaazeaa','$2b$10$pxYHFpBz7kZ5VdBH0y8AL.rPAHaXTF9w6zuWH5Ate5dLm0TqBU/BC',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(242,36,'déja','azezaeaazaaeazeaaaaaaaaaazaaaaaaeaazeaa','$2b$10$TkkQ4UOlh8zrM59fk3Dyy.TcazS1qFey8d5Dm8VOPTY.pDxcYaLHG',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(243,36,'déja','azezaeaazaaeazeaaaaaaaaaaazaaaaaaeaazeaa','$2b$10$jrx6cu6lH5CJJAT2pMowqup25pdPDvO01Evy6BBIn0NZJQnTno7H.',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(244,36,'déja','azezaeaazaaeazeaaaaaaaaaaazaaaaaaaeaazeaa','$2b$10$vldPY8KkfRnZNQ/TG.i7TujXOxcnXpWo1gQoRhiImH10J5zums2ou',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(245,36,'déja','azezaeaazaaeazeaaaaaaaaaaazaaaaaaaeaaazeaa','$2b$10$WCNqF6jAH3MCDJXlbndTAeNfFP8z6Amr9zXwJutqv/ne278dsq4Ny',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(246,36,'déja','abab','$2b$10$DRe1aNHhTkUERU.sn3PASu72WNrZzddBXyqcKyweJ0IfEt6yldt02',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(247,36,'déja','ababa','$2b$10$ktK3jB31CbnJVjZ6LnfctOS3PfJbU06dSarP2OyZU0fLzQKyxyF2y',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(248,36,'déja','ababaa','$2b$10$/VKEftchuhrQpFuVvTUjpOK9/NpRreDGGThfrF5eJ2eJC7y7Ak5T.',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(249,36,'déja','ababaaa','$2b$10$fNpreZ0LEThesdo9U/rYnur2B8xrCrsBsglRV3mlfzr1.gp3X.PfG',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(250,36,'déja','ababaaaa','$2b$10$JvRuokXPgijjsjMFO155yedt8WzUyeY7gDfnMGiRQYRzP.0JnUYG2',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(251,36,'déja','ababaaaaa','$2b$10$PKHOyRbjmX0h2ENt9iUqh.tqQqYX/Ts8MteK0NK4G9Z0f61/gQ74i',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(252,36,'déja','ababaaaaaa','$2b$10$XaftzpjOZdYCIFPR3MNMrOOjCcTknn7tPUaFYD90oYpeSsfnQYcnC',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(253,36,'déja','ababaaaaaaaa','$2b$10$YOjVQGYnvRAoMtiZ8yzM4uIofA1RE2DqD6G59uYHtS1JIN7vU1/w2',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(255,36,'déja','lyoum ','$2b$10$8nzkmTJKobSzVQiorw7YRudGkj4.HPxFIbgpqz8AebrFVa7hFwzPW',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(256,36,'déja','lyoumm ','$2b$10$SXMf4MzoyQEVU5E1Bu.Y3.oFGOfhMUaXDQZIuCrBMQWfS.gwuz6uy',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(257,36,'déja','lyoumam ','$2b$10$6JSwwqTt1iy15YJBNAoiOuBY0Mjg9robOXTmxP.qkWWumuHr.xI4G',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(258,36,'déja','lyoaumam ','$2b$10$u88eAY12qL7lnp8ge8H2SeqzkwEUMwiFIN7oOI6LWWLRy9JoHNfiy',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(259,36,'déja','lyoaumaam ','$2b$10$d6WVelTYwbGsZQYF6SMqHexCx7YMSoMdKJY6Yq6uUihaJBwLBroPu',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(260,36,'déja','lyoaumaaaaam ','$2b$10$WY8GiMqWDe21ufJhbfrICeHYyW5ilV/BVouNuuk3wzPfWYwg28c2G',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(261,36,'déja','fedit','$2b$10$KDf53tTjguu5CuHOv4iGZunzpw9qQ4wPcpWywIelqoUWLlm85zSHa',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(262,36,'déja','feditt','$2b$10$GCVTcX62scldrNFWusw0GeJHB30kcEJPYGKFR.HG9qJ9wPwfMpFby',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(263,36,'déja','feditta','$2b$10$tFkc2SH911CZcHfaI8bVne0/mtRnZj7BCYZEgQqgSaKuIITSPMfq.',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(264,36,'déja','fedittaa','$2b$10$ksv4piyPIXjQeRMulGM8X.sMPKW8W4XKPnqx8L3IVkurTJhtXblmK',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(265,36,'déja','fedittaaa','$2b$10$mUFkO7KuGAMswXsw5ZNxk.2kD3wR9Ej9vHl4VRs0Yoc2wX/TPaeVq',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(266,36,'déja','fedittaaaa','$2b$10$hBJ1iV1Efn2dZg.jN.z0peNdat7IrMsSLT/cs8F7LapIHP5XwlSl6',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(267,36,'déja','fedittaaaaa','$2b$10$1t7T6hup7dUw0.pmkDJ4mu784ysmjXAW5URMSK7ug7ZPhrTX8NfxC',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(268,36,'déja','fedittaaaaaa','$2b$10$UYcMgRxw0zAT9YjMwHAitOrCdfi2Za6wdiXXkNUS888K1DUTQ/VLe',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(269,36,'déja','fedittaaaaaaa','$2b$10$0vxSeK8T1ldAbzegtwYfQOy639CT.MNfFvM1oX/6JrBlygkmJrlIW',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(270,36,'déja','fedittaaaaaaaa','$2b$10$2Yl389XC2nKwINaIQhT4G.Hb3aVGHGpV6WSGUoN9rqB1CXyo6LKnC',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(271,36,'déja','fedittaaaaaaaaa','$2b$10$CcAhOonfIW0ZiJyTDxbmG.9Xiaj.vqK/P4qIOn1zECn4Z5CjH5ZAe',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(272,36,'déja','fedittaaaaaaaaaa','$2b$10$nqI5OCK4H6i7XX.Q7n3Vn.E1k2xBP1PZy/oBhw1yfUSXOtrMOimCm',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(273,36,'foueda','fedittaaaaaaaaaaa','12a45aaa',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL),(274,36,'déja','aighttyy','$2b$10$OGVgDsLVFX4thkABWdELzetyNhZoTnjqH8rixpaRaPIGHE9ecUsCq',1,'AR',1,'aze.mp3','test@gmail.com',1,'2022-01-31',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_lines`
--

DROP TABLE IF EXISTS `users_lines`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_lines` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int unsigned NOT NULL,
  `line_id` int unsigned NOT NULL,
  `connect_limit` tinyint unsigned NOT NULL,
  `status` tinyint unsigned NOT NULL,
  `date_start` date NOT NULL,
  `date_end` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `usli_user_id_idx` (`user_id`),
  KEY `usli_line_id_idx` (`line_id`),
  CONSTRAINT `usli_line_id` FOREIGN KEY (`line_id`) REFERENCES `lines` (`id`),
  CONSTRAINT `usli_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_lines`
--

LOCK TABLES `users_lines` WRITE;
/*!40000 ALTER TABLE `users_lines` DISABLE KEYS */;
INSERT INTO `users_lines` VALUES (17,255,13,8,1,'2022-11-01',NULL),(18,255,13,2,1,'2022-11-01',NULL),(19,255,13,2,1,'2022-11-01',NULL),(20,255,13,2,1,'2022-11-01',NULL),(21,255,13,2,1,'2022-11-01',NULL),(22,255,13,2,1,'2022-11-01',NULL),(23,255,13,2,1,'2022-11-01',NULL),(24,255,13,2,1,'2022-11-01',NULL),(25,255,13,2,1,'2022-11-01',NULL),(26,255,13,2,1,'2022-11-01',NULL);
/*!40000 ALTER TABLE `users_lines` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_permissions`
--

DROP TABLE IF EXISTS `users_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_permissions` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int unsigned NOT NULL,
  `action` varchar(100) NOT NULL,
  `status` tinyint unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `us_pr_user_id_idx` (`user_id`),
  CONSTRAINT `us_pr_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_permissions`
--

LOCK TABLES `users_permissions` WRITE;
/*!40000 ALTER TABLE `users_permissions` DISABLE KEYS */;
INSERT INTO `users_permissions` VALUES (12,245,'POST',1),(13,245,'POST',1);
/*!40000 ALTER TABLE `users_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_preferences`
--

DROP TABLE IF EXISTS `users_preferences`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_preferences` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int unsigned NOT NULL,
  `ip_address` varchar(32) DEFAULT NULL,
  `day_start` tinyint unsigned DEFAULT NULL,
  `day_end` tinyint unsigned DEFAULT NULL,
  `time_start` time DEFAULT NULL,
  `time_end` time DEFAULT NULL,
  `two_factor_auth` tinyint unsigned DEFAULT NULL,
  `countries_auth` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `uspr_user_id_idx` (`user_id`),
  CONSTRAINT `uspr_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_preferences`
--

LOCK TABLES `users_preferences` WRITE;
/*!40000 ALTER TABLE `users_preferences` DISABLE KEYS */;
/*!40000 ALTER TABLE `users_preferences` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-22 16:27:13
