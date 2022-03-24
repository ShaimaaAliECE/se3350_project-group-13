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
// Default route 
/*
app.get('/',(req,res)=>{
    res.send('Hello World');
});*/

// Routes
//insert into allaccount
app.post("/newUser", (req, res) => {
  
    console.log(req.query);
    const username = req.body.username;
    const pass = req.body.pass;
    const email = req.body.email;
    db.query(
      "INSERT INTO Account (username, pass, email) VALUES (?,?,?)",
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
  
//verify that the given username and password are correct
app.get("/verifylogin", (req, res) => {
    db.query(
      `SELECT id, pass FROM Account WHERE username = "${req.query.username}"`,
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

// Start listening 
/*app.listen(3001, ()=>{
    console.log("Server started on port 3001");
});*/
function Rollback(res) {
  db.query(`ROLLBACK`, (err6, result6) => {
    if (err6) {
      console.log(err6);
    } else {
      res.send("ERROR - Rolledback");
    }
  });
}