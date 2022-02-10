const express = require('express');

// Create express app
const app = express();

// Default route 
app.get('/',(req,res)=>{
    res.send('Hello World');
});

// Routes 

// Start listening 
app.listen(3001, ()=>{
    console.log("Server started on port 3001");
});