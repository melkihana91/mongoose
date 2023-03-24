const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(require("./routes/index"));

mongoose.connect("mongodb://127.0.0.1:27017/test")
  .then(() => {
    console.log("DB CONNECTED");
    app.listen(PORT, (err) => {
      if (err) {
        console.log("SERVER IS DOWN");
      }
      console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
    });
  })
  .catch((err) => console.log(err));

