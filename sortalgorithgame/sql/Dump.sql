CREATE DATABASE  IF NOT EXISTS `sortalgorithm` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `sortalgorithm`;
-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: sortalgorithm
-- ------------------------------------------------------
-- Server version	8.0.27

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
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(32) NOT NULL,
  `pass` varchar(32) NOT NULL,
  `email` varchar(32) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`),
  CONSTRAINT `accounts_chk_1` CHECK ((char_length(`pass`) > 6)),
  CONSTRAINT `accounts_chk_2` CHECK ((`email` like _utf8mb4'%@%.%'))
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accounts`
--

LOCK TABLES `accounts` WRITE;
/*!40000 ALTER TABLE `accounts` DISABLE KEYS */;
INSERT INTO `accounts` VALUES (1,'user','password','user@gmail.com'),(5,'user1','password1','user1@gmail.com'),(6,'hi','1234567','hi@gmail.com'),(7,'user2','Password2','user2@gmail.com'),(9,'hi2','1234567','hi2@gmail.com'),(11,'hi3','1234567','hi3@gmail.com'),(13,'hi4','1234567','hi4@gmail.com'),(14,'hi6','1234567','hi6@gmail.com'),(15,'hi9','1234567','hi9@gmail.com'),(16,'hi10','1234567','hi10@gmail.com');
/*!40000 ALTER TABLE `accounts` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `addUser` AFTER INSERT ON `accounts` FOR EACH ROW BEGIN 
	INSERT INTO LevelOne(username) value (new.username);
    INSERT INTO LevelTwo(username) value (new.username);
    INSERT INTO LevelThree(username) value (new.username);
    INSERT INTO LevelFour(username) value (new.username);
    INSERT INTO LevelFive(username) value (new.username);
    INSERT INTO CustomLevel(username) value (new.username);
	-- INSERT INTO LevelOne(username)(SELECT username FROM Accounts);
    -- INSERT INTO LevelTwo (username) (SELECT username FROM Accounts);
	-- INSERT INTO LevelThree (username) (SELECT username FROM Accounts);
	-- INSERT INTO LevelFour (username) (SELECT username FROM Accounts);
	-- INSERT INTO LevelFive (username) (SELECT username FROM Accounts);
	-- INSERT INTO CustomLevel (username) (SELECT username FROM Accounts);
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `customlevel`
--

DROP TABLE IF EXISTS `customlevel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customlevel` (
  `username` varchar(32) NOT NULL,
  `completionTime` varchar(8) DEFAULT NULL,
  `numberOfAttempts` int DEFAULT '0',
  `completed` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`username`),
  UNIQUE KEY `username` (`username`),
  CONSTRAINT `customlevel_ibfk_1` FOREIGN KEY (`username`) REFERENCES `accounts` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customlevel`
--

LOCK TABLES `customlevel` WRITE;
/*!40000 ALTER TABLE `customlevel` DISABLE KEYS */;
INSERT INTO `customlevel` VALUES ('hi','00:00:56',1,1),('hi10','00:00:45',1,1),('hi2',NULL,0,0),('hi3',NULL,0,0),('hi4',NULL,0,0),('hi6',NULL,0,0),('hi9','00:00:48',1,1),('user','0:0:0',0,0),('user1',NULL,0,0),('user2',NULL,0,0);
/*!40000 ALTER TABLE `customlevel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `levelfive`
--

DROP TABLE IF EXISTS `levelfive`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `levelfive` (
  `username` varchar(32) NOT NULL,
  `completionTime` varchar(8) DEFAULT NULL,
  `numberOfAttempts` int DEFAULT '0',
  `completed` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`username`),
  UNIQUE KEY `username` (`username`),
  CONSTRAINT `levelfive_ibfk_1` FOREIGN KEY (`username`) REFERENCES `accounts` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `levelfive`
--

LOCK TABLES `levelfive` WRITE;
/*!40000 ALTER TABLE `levelfive` DISABLE KEYS */;
INSERT INTO `levelfive` VALUES ('hi',NULL,0,0),('hi10','00:01:35',1,1),('hi2',NULL,0,0),('hi3',NULL,0,0),('hi4',NULL,0,0),('hi6',NULL,0,0),('hi9','00:01:27',0,1),('user',NULL,0,0),('user1',NULL,0,0),('user2',NULL,0,0);
/*!40000 ALTER TABLE `levelfive` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `levelfour`
--

DROP TABLE IF EXISTS `levelfour`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `levelfour` (
  `username` varchar(32) NOT NULL,
  `completionTime` varchar(8) DEFAULT NULL,
  `numberOfAttempts` int DEFAULT '0',
  `completed` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`username`),
  UNIQUE KEY `username` (`username`),
  CONSTRAINT `levelfour_ibfk_1` FOREIGN KEY (`username`) REFERENCES `accounts` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `levelfour`
--

LOCK TABLES `levelfour` WRITE;
/*!40000 ALTER TABLE `levelfour` DISABLE KEYS */;
INSERT INTO `levelfour` VALUES ('hi','00:01:26',0,1),('hi10',NULL,0,0),('hi2',NULL,0,0),('hi3',NULL,0,0),('hi4','00:01:08',2,1),('hi6',NULL,0,0),('hi9',NULL,0,0),('user',NULL,0,0),('user1',NULL,0,0),('user2',NULL,0,0);
/*!40000 ALTER TABLE `levelfour` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `levelone`
--

DROP TABLE IF EXISTS `levelone`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `levelone` (
  `username` varchar(32) NOT NULL,
  `completionTime` varchar(8) DEFAULT NULL,
  `completed` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`username`),
  UNIQUE KEY `username` (`username`),
  CONSTRAINT `levelone_ibfk_1` FOREIGN KEY (`username`) REFERENCES `accounts` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `levelone`
--

LOCK TABLES `levelone` WRITE;
/*!40000 ALTER TABLE `levelone` DISABLE KEYS */;
INSERT INTO `levelone` VALUES ('hi','00:00:09',1),('hi10','00:00:10',1),('hi2',NULL,0),('hi3',NULL,0),('hi4','00:00:29',1),('hi6','00:00:30',1),('hi9','00:00:11',1),('user',NULL,0),('user1',NULL,0),('user2','00:00:16',1);
/*!40000 ALTER TABLE `levelone` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `levelthree`
--

DROP TABLE IF EXISTS `levelthree`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `levelthree` (
  `username` varchar(32) NOT NULL,
  `completionTime` varchar(8) DEFAULT NULL,
  `numberOfAttempts` int DEFAULT '0',
  `completed` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`username`),
  UNIQUE KEY `username` (`username`),
  CONSTRAINT `levelthree_ibfk_1` FOREIGN KEY (`username`) REFERENCES `accounts` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `levelthree`
--

LOCK TABLES `levelthree` WRITE;
/*!40000 ALTER TABLE `levelthree` DISABLE KEYS */;
INSERT INTO `levelthree` VALUES ('hi',NULL,0,0),('hi10','00:01:06',2,1),('hi2',NULL,0,0),('hi3',NULL,0,0),('hi4',NULL,0,0),('hi6',NULL,0,0),('hi9','00:01:10',2,1),('user',NULL,0,0),('user1',NULL,0,0),('user2',NULL,0,0);
/*!40000 ALTER TABLE `levelthree` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `leveltwo`
--

DROP TABLE IF EXISTS `leveltwo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `leveltwo` (
  `username` varchar(32) NOT NULL,
  `completionTime` varchar(8) DEFAULT NULL,
  `numberOfAttempts` int DEFAULT '0',
  `completed` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`username`),
  UNIQUE KEY `username` (`username`),
  CONSTRAINT `leveltwo_ibfk_1` FOREIGN KEY (`username`) REFERENCES `accounts` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `leveltwo`
--

LOCK TABLES `leveltwo` WRITE;
/*!40000 ALTER TABLE `leveltwo` DISABLE KEYS */;
INSERT INTO `leveltwo` VALUES ('hi','00:01:20',1,1),('hi10','00:00:59',1,1),('hi2',NULL,0,0),('hi3',NULL,0,0),('hi4','00:00:49',1,1),('hi6',NULL,0,0),('hi9','00:00:52',2,1),('user','00:01:16',1,1),('user1',NULL,0,0),('user2',NULL,0,0);
/*!40000 ALTER TABLE `leveltwo` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-31 20:02:26
