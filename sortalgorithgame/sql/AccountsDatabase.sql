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
INSERT INTO LevelOne (username) (SELECT username FROM Account);
INSERT INTO LevelTwo (username) (SELECT username FROM Account);
INSERT INTO LevelThree (username) (SELECT username FROM Account);
INSERT INTO LevelFour (username) (SELECT username FROM Account);
INSERT INTO LevelFive (username) (SELECT username FROM Account);
INSERT INTO CustomLevel (username) (SELECT username FROM Account);
CREATE TABLE LevelOne(
username VARCHAR(32) NOT NULL UNIQUE,
completionTime TIME,
completed BOOL NOT NULL DEFAULT false,
PRIMARY KEY (username),
FOREIGN KEY (username) REFERENCES Account (username)
);

select * from account;
CREATE TABLE LevelTwo(
username VARCHAR(32) NOT NULL UNIQUE,
completionTime TIME,
numberOfAttempts INT,
completed BOOL NOT NULL DEFAULT false,
PRIMARY KEY (username),
FOREIGN KEY (username) REFERENCES Account (username)
);
CREATE TABLE LevelThree(
username VARCHAR(32) NOT NULL UNIQUE,
completionTime TIME,
numberOfAttempts INT,
completed BOOL NOT NULL DEFAULT false,
PRIMARY KEY (username),
FOREIGN KEY (username) REFERENCES Account (username)
);
CREATE TABLE LevelFour(
username VARCHAR(32) NOT NULL UNIQUE,
completionTime TIME,
numberOfAttempts INT,
completed BOOL NOT NULL DEFAULT false,
PRIMARY KEY (username),
FOREIGN KEY (username) REFERENCES Account (username)
);
CREATE TABLE LevelFive(
username VARCHAR(32) NOT NULL UNIQUE,
completionTime TIME,
numberOfAttempts INT,
completed BOOL NOT NULL DEFAULT false,
PRIMARY KEY (username),
FOREIGN KEY (username) REFERENCES Account (username)
);
CREATE TABLE CustomLevel(
username VARCHAR(32) NOT NULL UNIQUE,
completionTime TIME,
numberOfAttempts INT,
completed BOOL NOT NULL DEFAULT false,
PRIMARY KEY (username),
FOREIGN KEY (username) REFERENCES Account (username)
);

-- TRIGGERS
DELIMITER $$
CREATE TRIGGER Accounts
AFTER INSERT
ON Account FOR EACH ROW
BEGIN
	INSERT INTO LevelOne(username)(SELECT username FROM Account);
    INSERT INTO LevelTwo (username) (SELECT username FROM Account);
	INSERT INTO LevelThree (username) (SELECT username FROM Account);
	INSERT INTO LevelFour (username) (SELECT username FROM Account);
	INSERT INTO LevelFive (username) (SELECT username FROM Account);
	INSERT INTO CustomLevel (username) (SELECT username FROM Account);
END$$

DELIMITER ;

