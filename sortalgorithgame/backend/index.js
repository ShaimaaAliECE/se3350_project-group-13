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
    host: "localhost",
  
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
//insert into levelOneTime
app.post("/levelOneTime", (req, res) => {
  
  console.log(req.query);
  const username = req.body.username;
  const completionTime = req.body.completionTime;
  const completed = req.body.completed;
  db.query(
    "INSERT INTO LevelOne (username, completionTime, completed) VALUES (?,?,?)",
    [
      username,
      completionTime,
      completed,
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
//get level one logged info
app.get("/getLevelOneAct");
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