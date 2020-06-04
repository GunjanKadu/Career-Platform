CREATE TABLE `course_lecture` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) DEFAULT NULL,
  `description` mediumtext,
  `course_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `COURSEID_idx` (`course_id`),
  CONSTRAINT `COURSEID` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id_courses`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `courses` (
  `id_courses` int NOT NULL AUTO_INCREMENT,
  `course_name` mediumtext NOT NULL,
  `description` longtext NOT NULL,
  `lectures_Total` int NOT NULL,
  `date_Added` datetime DEFAULT NULL,
  `category` varchar(45) NOT NULL,
  `price` varchar(45) DEFAULT NULL,
  `total_hours` varchar(45) DEFAULT NULL,
  `rating` int DEFAULT NULL,
  `level` varchar(45) DEFAULT NULL,
  `image` mediumtext,
  `short_description` mediumtext,
  `course_author` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_courses`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `course_user` (
  `course_id` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`course_id`,`user_id`),
  KEY `FK_USER_idx` (`user_id`),
  CONSTRAINT `FK_COURSE` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id_courses`),
  CONSTRAINT `FK_USER` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `featured_courses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `course_name` mediumtext NOT NULL,
  `image_url` longtext NOT NULL,
  `course_author` varchar(45) NOT NULL,
  `course_rating` int NOT NULL,
  `course_price` double NOT NULL,
  `course_desc` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `user_detail_id` int DEFAULT NULL,
  `password` varchar(100) NOT NULL,
  `role` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_DETAIL_idx` (`user_detail_id`),
  CONSTRAINT `FK_DETAIL` FOREIGN KEY (`user_detail_id`) REFERENCES `user_detail` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;

CREATE TABLE `user_detail` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_desc` varchar(128) DEFAULT NULL,
  `social_media` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;
SELECT * FROM SAD.courses;