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
-- Table structure for table `account`
--

DROP TABLE IF EXISTS `account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(32) NOT NULL,
  `pass` varchar(32) NOT NULL,
  `email` varchar(32) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`),
  CONSTRAINT `account_chk_1` CHECK ((char_length(`pass`) > 6)),
  CONSTRAINT `account_chk_2` CHECK ((`email` like _utf8mb4'%@%.%'))
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account`
--

LOCK TABLES `account` WRITE;
/*!40000 ALTER TABLE `account` DISABLE KEYS */;
INSERT INTO `account` VALUES (1,'user','password','user@gmail.com'),(2,'user1','password1','user1@gmail.com'),(3,'hi','1234567','hi@gmail.com');
/*!40000 ALTER TABLE `account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customlevel`
--

DROP TABLE IF EXISTS `customlevel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customlevel` (
  `username` varchar(32) NOT NULL,
  `completionTime` time DEFAULT NULL,
  `numberOfAttempts` int DEFAULT NULL,
  `completed` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`username`),
  UNIQUE KEY `username` (`username`),
  CONSTRAINT `customlevel_ibfk_1` FOREIGN KEY (`username`) REFERENCES `account` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customlevel`
--

LOCK TABLES `customlevel` WRITE;
/*!40000 ALTER TABLE `customlevel` DISABLE KEYS */;
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
  `completionTime` time DEFAULT NULL,
  `numberOfAttempts` int DEFAULT NULL,
  `completed` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`username`),
  UNIQUE KEY `username` (`username`),
  CONSTRAINT `levelfive_ibfk_1` FOREIGN KEY (`username`) REFERENCES `account` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `levelfive`
--

LOCK TABLES `levelfive` WRITE;
/*!40000 ALTER TABLE `levelfive` DISABLE KEYS */;
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
  `completionTime` time DEFAULT NULL,
  `numberOfAttempts` int DEFAULT NULL,
  `completed` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`username`),
  UNIQUE KEY `username` (`username`),
  CONSTRAINT `levelfour_ibfk_1` FOREIGN KEY (`username`) REFERENCES `account` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `levelfour`
--

LOCK TABLES `levelfour` WRITE;
/*!40000 ALTER TABLE `levelfour` DISABLE KEYS */;
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
  `completionTime` time DEFAULT NULL,
  `completed` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`username`),
  UNIQUE KEY `username` (`username`),
  CONSTRAINT `levelone_ibfk_1` FOREIGN KEY (`username`) REFERENCES `account` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `levelone`
--

LOCK TABLES `levelone` WRITE;
/*!40000 ALTER TABLE `levelone` DISABLE KEYS */;
/*!40000 ALTER TABLE `levelone` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `leveltwo`
--

DROP TABLE IF EXISTS `leveltwo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `leveltwo` (
  `username` varchar(32) NOT NULL,
  `completionTime` time DEFAULT NULL,
  `numberOfAttempts` int DEFAULT NULL,
  `completed` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`username`),
  UNIQUE KEY `username` (`username`),
  CONSTRAINT `leveltwo_ibfk_1` FOREIGN KEY (`username`) REFERENCES `account` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `leveltwo`
--

LOCK TABLES `leveltwo` WRITE;
/*!40000 ALTER TABLE `leveltwo` DISABLE KEYS */;
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

-- Dump completed on 2022-03-24 18:23:53
