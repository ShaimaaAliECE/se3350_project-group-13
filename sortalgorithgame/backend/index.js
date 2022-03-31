//get express package
const express = require("express");
//create express app instance
const app = express();
//using mysql
const mysql = require("mysql");
//using cors
const cors = require("cors");

app.use(express.json());
app.use(cors());

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
const port = 3001; //port number
const server = `http://localhost:${port}`;
app.listen(port, () => console.log(`Server started. Running at: ${server}`));

// Routes
//insert into accounts
app.post("/newUser", (req, res) => {
  
    console.log(req.query);
    const username = req.body.username;
    const pass = req.body.pass;
    const email = req.body.email;
    db.query(
      "INSERT INTO Accounts (username, pass, email) VALUES (?,?,?)",
      [
        username,
        pass,
        email,
      ],
      (err, result) => {
        if (err) {
          console.log(err);
          res.send(false);
        } else {
          res.send("values are properly inserted");
        }
      }
    );
  });
//update levelOneTime
app.put("/levelOneTime/:username", (req, res) => { 
  let username = req.body.username;
  const completionTime = req.body.completionTime;
  const completed = req.body.completed;
  db.query(
    "UPDATE LevelOne SET completionTime = ?, completed = ? WHERE username = ?",
    [
      completionTime,
      completed,
      username,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send(false);
      } else {
        res.send("values are properly updated");
      }
    }
  );
});
//update level 2-5 and custom level info
app.put("/levelInfo/:username", (req, res) => { 
  let username = req.body.username;
  let level = req.body.level;
  const completionTime = req.body.completionTime;
  const completed = req.body.completed;
  const attempts = req.body.attempts;
  db.query(
    `UPDATE ${level} SET completionTime = ?, numberOfAttempts = ?, completed = ? WHERE username = ?`,
    [
      completionTime,
      attempts,
      completed,
      username,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send(false);
      } else {
        res.send("values are properly updated");
      }
    }
  );
});
/*app.get("/getLevelAttemptsInfo", (req, res) => {
  db.query(
    `SELECT SELECT numberOfAttempts FROM ${req.query.level} WHERE username = ${req.query.username}`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});*/
//
//get levels 2-5, custom level logged info
app.get("/getLevelInfo", (req, res) => {
  db.query(
    `SELECT completionTime, numberOfAttempts, completed FROM ${req.query.level} WHERE username = '${req.query.username}'`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
//get level one logged info
app.get("/getLevelOneInfo", (req, res) => {
  db.query(
    `SELECT completionTime, completed FROM LevelOne WHERE username = '${req.query.username}'`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
//verify login credentials
app.get("/verifylogin", (req, res) => {
    db.query(
      `SELECT id, pass FROM Accounts WHERE username = "${req.query.username}"`,
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          if (result[0] != null && result[0].pass == req.query.password) {
            res.send(result[0]);
          } else {
            res.send(false);
          }
        }
      }
    );
  });


function Rollback(res) {
  db.query(`ROLLBACK`, (err6, result6) => {
    if (err6) {
      console.log(err6);
    } else {
      res.send("ERROR - Rolledback");
    }
  });
}