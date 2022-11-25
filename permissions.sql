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
) ENGINE=InnoDB AUTO_INCREMENT=109 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_key_acc_permission`
--

LOCK TABLES `api_key_acc_permission` WRITE;
/*!40000 ALTER TABLE `api_key_acc_permission` DISABLE KEYS */;
INSERT INTO `api_key_acc_permission` VALUES (27,8,'GET/accounts/',1),(28,8,'POST/accounts/create/',1),(29,8,'PUT/accounts/update/',1),(30,8,'DELETE/accounts/delete/',1),(31,8,'GET/users/',1),(32,8,'POST/users/create/',1),(33,8,'PUT/users/update/',1),(34,8,'DELETE/users/delete/',1),(35,8,'GET/contacts/',1),(38,8,'POST/contacts/create/',1),(39,8,'PUT/contacts/update/',1),(40,8,'DELETE/contacts/delete/',1),(41,8,'GET/notes/',1),(42,8,'POST/notes/create/',1),(43,8,'PUT/notes/update/',1),(44,8,'DELETE/notes/delete/',1),(45,8,'GET/phoneNumber/',1),(46,8,'POST/phoneNumber/create/',1),(47,8,'PUT/phoneNumber/update/',1),(48,8,'DELETE/phoneNumber/delete/',1),(49,8,'GET/groups/',1),(50,8,'POST/groups/create/',1),(51,8,'PUT/groups/update/',1),(52,8,'DELETE/groups/delete/',1),(53,8,'GET/groupsElement/',1),(54,8,'POST/groupsElement/create/',1),(55,8,'PUT/groupsElement/update/',1),(56,8,'DELETE/groupsElement/delete/',1),(57,8,'GET/integration/account/',1),(58,8,'POST/integration/account/create/',1),(59,8,'PUT/integration/account/update/',1),(60,8,'DELETE/integration/account/delete/',1),(61,8,'GET/line/',1),(62,8,'POST/line/create/',1),(63,8,'PUT/line/update/',1),(64,8,'DELETE/line/delete/',1),(65,8,'GET/tags/',1),(66,8,'POST/tags/create/',1),(67,8,'PUT/tags/update/',1),(68,8,'DELETE/tags/delete/',1),(69,8,'GET/contactTag/',1),(70,8,'POST/contactTag/create/',1),(71,8,'PUT/contactTag/update/',1),(72,8,'DELETE/contactTag/delete/',1),(73,8,'GET/usersLines/',1),(74,8,'POST/usersLines/create/',1),(75,8,'PUT/usersLines/update/',1),(76,8,'DELETE/usersLines/delete/',1),(77,8,'GET/usersPermissions/',1),(78,8,'POST/usersPermissions/create/',1),(79,8,'PUT/usersPermissions/update/',1),(80,8,'DELETE/usersPermissions/delete/',1),(81,8,'GET/userPreference/',1),(82,8,'POST/userPreference/create/',1),(83,8,'PUT/userPreference/update/',1),(84,8,'DELETE/userPreference/delete/',1),(85,8,'GET/accountPermission/',1),(86,8,'POST/accountPermission/create/',1),(87,8,'PUT/account/Permission/update/',1),(88,8,'DELETE/accountPermission/delete/',1),(91,8,'GET/message/',1),(92,8,'POST/message/create/',1),(93,8,'PUT/message/update/',1),(94,8,'DELETE/message/delete/',1),(95,8,'POST/users/login/',1),(96,8,'GET/users/login/',1),(97,8,'GET/message/?sender_id=&receiver_id=',1),(98,8,'PUT/message/update/?sender_id=&receiver_id=',1),(99,8,'GET/message/user_id/',1),(100,8,'GET/usersLines/user_id/',1),(101,8,'GET/notes/contact/',1),(102,8,'GET/phoneNumber/contact/',1),(103,8,'GET/contactTag/contact/',1),(104,8,'GET/groupsElement/group/',1),(105,8,'GET/contacts/user/',1),(106,8,'GET/groupsElement/group/?group_id=&class=',1),(107,8,'GET/groupsElement/?group_id=&class=',1),(108,8,'GET/groupsElement/group/?id=&class=',1);
/*!40000 ALTER TABLE `api_key_acc_permission` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-25 18:25:53
