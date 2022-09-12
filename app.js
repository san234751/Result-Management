const express = require("express");
const mongoose = require("mongoose");
const UploadFile=require('./upload_csv');
require('dotenv').config()
const Router = require("./router/router");
const app = express();
app.use(express.json());

mongoose.connect(process.env.BACKENDURL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
UploadFile();
app.listen(3000,()=> console.log('Server is listening'));