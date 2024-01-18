const express = require("express");
const cors = require("cors");
const multerConfig = require("./multer-config")
const mysql = require("mysql")
const app = express();
app.use(cors())
app.use(express.json())

const dataBase = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"",
    dataBase:"newsletters",
    // port : "3307"
})

dataBase.connect((error) => {
    if(error) throw error;
    console.log("database connectted succefuly")
})

app.post('/article/register', multerConfig, (req, res) => {
    console.log(req.file.filename);
    console.log(req.body.title);
    res.status(200).json('article reçu');
});

let categories = []

fetch















/* app.listen(5000, () => {
    console.log("welcome to your server");
}) */

/* 

app.use((req, res) =>{
    res.status(201).json("Hi everybody");
}) */