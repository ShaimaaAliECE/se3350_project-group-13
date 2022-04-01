select * from Accounts;
select * from leveltwo;
-- insert into customlevel (username) (select (username) from Accounts);
CREATE TABLE Accounts(
id INT NOT NULL AUTO_INCREMENT,
username VARCHAR(32) NOT NULL UNIQUE,
pass VARCHAR(32) NOT NULL 
	CHECK(CHAR_LENGTH(pass) > 6),
email VARCHAR(32) NOT NULL UNIQUE
	CHECK (email LIKE '%@%.%'),
PRIMARY KEY (id)
);

CREATE TABLE LevelOne(
username VARCHAR(32) NOT NULL UNIQUE,
completionTime VARCHAR(8),
completed BOOL NOT NULL DEFAULT false,
PRIMARY KEY (username),
FOREIGN KEY (username) REFERENCES Accounts (username)
);

CREATE TABLE LevelTwo(
username VARCHAR(32) NOT NULL UNIQUE,
completionTime VARCHAR(8),
numberOfAttempts INT DEFAULT 0,
completed BOOL NOT NULL DEFAULT false,
PRIMARY KEY (username),
FOREIGN KEY (username) REFERENCES Accounts (username)
);
CREATE TABLE LevelThree(
username VARCHAR(32) NOT NULL UNIQUE,
completionTime VARCHAR(8),
numberOfAttempts INT DEFAULT 0,
completed BOOL NOT NULL DEFAULT false,
PRIMARY KEY (username),
FOREIGN KEY (username) REFERENCES Accounts (username)
);
CREATE TABLE LevelFour(
username VARCHAR(32) NOT NULL UNIQUE,
completionTime VARCHAR(8),
numberOfAttempts INT DEFAULT 0,
completed BOOL NOT NULL DEFAULT false,
PRIMARY KEY (username),
FOREIGN KEY (username) REFERENCES Accounts (username)
);
CREATE TABLE LevelFive(
username VARCHAR(32) NOT NULL UNIQUE,
completionTime VARCHAR(8),
numberOfAttempts INT DEFAULT 0,
completed BOOL NOT NULL DEFAULT false,
PRIMARY KEY (username),
FOREIGN KEY (username) REFERENCES Accounts (username)
);
CREATE TABLE CustomLevel(
username VARCHAR(32) NOT NULL UNIQUE,
completionTime VARCHAR(8),
numberOfAttempts INT DEFAULT 0,
completed BOOL NOT NULL DEFAULT false,
PRIMARY KEY (username),
FOREIGN KEY (username) REFERENCES Accounts (username)
);

-- TRIGGER
DELIMITER $$
CREATE TRIGGER addUser
AFTER INSERT
ON Accounts FOR EACH ROW
BEGIN 
	INSERT INTO LevelOne(username) value (new.username);
    INSERT INTO LevelTwo(username) value (new.username);
    INSERT INTO LevelThree(username) value (new.username);
    INSERT INTO LevelFour(username) value (new.username);
    INSERT INTO LevelFive(username) value (new.username);
    INSERT INTO CustomLevel(username) value (new.username);
END$$
DELIMITER ;
show triggers;
-- drop trigger addUser;
INSERT INTO Accounts (username, pass, email)
	VALUES ("user", "password", "user@gmail.com");
INSERT INTO Accounts (username, pass, email)
	VALUES ("user1", "password1", "user1@gmail.com");

