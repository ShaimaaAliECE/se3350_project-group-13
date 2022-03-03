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
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
  
    password: "password",
    database: "AccountsDatabase"
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
app.get('/',(req,res)=>{
    res.send('Hello World');
});

// Routes 

// Start listening 
app.listen(3001, ()=>{
    console.log("Server started on port 3001");
});