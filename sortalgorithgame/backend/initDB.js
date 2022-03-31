const mysql = require("mysql");

//setup db connection
const db = mysql.createConnection({
    user: "root",
    host: "104.197.234.107",

    password: "password",
    database: "sortalgorithm"
});
//connect
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("MySQL connection established");
});


db.query(`CREATE TABLE Accounts(id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(32) NOT NULL UNIQUE,
    pass VARCHAR(32) NOT NULL,
    email VARCHAR(32) NOT NULL UNIQUE,
    PRIMARY KEY (id)
    )`, (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
}
);


db.query(`
    CREATE TABLE LevelOne(
    username VARCHAR(32) NOT NULL UNIQUE,
    completionTime VARCHAR(8),
    completed BOOL NOT NULL DEFAULT false,
    PRIMARY KEY (username),
    FOREIGN KEY (username) REFERENCES Accounts (username))`, (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
}
);

db.query(`
CREATE TABLE LevelTwo(
    username VARCHAR(32) NOT NULL UNIQUE,
    completionTime VARCHAR(8),
    numberOfAttempts INT DEFAULT 0,
    completed BOOL NOT NULL DEFAULT false,
    PRIMARY KEY (username),
    FOREIGN KEY (username) REFERENCES Accounts (username)
    )`, (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
}
);

db.query(`
CREATE TABLE LevelThree(
    username VARCHAR(32) NOT NULL UNIQUE,
    completionTime VARCHAR(8),
    numberOfAttempts INT DEFAULT 0,
    completed BOOL NOT NULL DEFAULT false,
    PRIMARY KEY (username),
    FOREIGN KEY (username) REFERENCES Accounts (username)
    )`, (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
}
);

db.query(`

CREATE TABLE LevelFour(
    username VARCHAR(32) NOT NULL UNIQUE,
    completionTime VARCHAR(8),
    numberOfAttempts INT DEFAULT 0,
    completed BOOL NOT NULL DEFAULT false,
    PRIMARY KEY (username),
    FOREIGN KEY (username) REFERENCES Accounts (username)
    )`

    , (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
        }
    }
);


db.query(`



CREATE TABLE LevelFive(
username VARCHAR(32) NOT NULL UNIQUE,
completionTime VARCHAR(8),
numberOfAttempts INT DEFAULT 0,
completed BOOL NOT NULL DEFAULT false,
PRIMARY KEY (username),
FOREIGN KEY (username) REFERENCES Accounts (username)
)
    
    `

    , (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
        }
    }
);

db.query(`


CREATE TABLE CustomLevel(
    username VARCHAR(32) NOT NULL UNIQUE,
    completionTime VARCHAR(8),
    numberOfAttempts INT DEFAULT 0,
    completed BOOL NOT NULL DEFAULT false,
    PRIMARY KEY (username),
    FOREIGN KEY (username) REFERENCES Accounts (username)
    )
    
    `

    , (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
        }
    }
);


db.query(`
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
END;`

    , (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
        }
    }
);




