// IMPORTS
// -------------------------------------------
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { promisify } = require("util");
const multer = require("multer");
const path = require("path");

// Load environment variables from .env file


// PORT
const PORT = process.env.DB_POST || 3001;

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_POST,
});
db.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Connected to MySQL as ID " + db.threadId);
});


app.get('/pin',(req,res)=>{
  res.send("puerto----- " + PORT )}
    )



app.get('/ping',(req,res)=>{
    res.send(DB_PASSWORD)}
      )


app.post("/agregar", (req, res) => {
  db.query('INSERT INTO client(nombre) VALUES("angel") ')
})

app.get("/ver", async (req, res) =>  {
    try {
    const users = await  db.query("SELECT * FROM mon");
    res.json({ users: nn });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send("Error fetching users");
  }
})



app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
