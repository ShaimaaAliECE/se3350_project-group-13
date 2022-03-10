CREATE TABLE Account(
id INT NOT NULL AUTO_INCREMENT,
username VARCHAR(32) NOT NULL UNIQUE,
pass VARCHAR(32) NOT NULL 
	CHECK(CHAR_LENGTH(pass) > 6),
email VARCHAR(32) NOT NULL UNIQUE
	CHECK (email LIKE '%@%.%'),
PRIMARY KEY (id)
);
INSERT INTO Account (username, pass, email)
	VALUES ("user", "password", "user@gmail.com");

INSERT INTO Account (username, pass, email)
	VALUES ("user1", "password1", "user1@gmail.com");
