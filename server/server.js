const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose
  .connect(
    "mongodb://localhost/sanoh",
    { useNewUrlParser: true }
  )
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.log("Couldnt connect to MongoDB"));

const port = process.env.PORT || 3001;
app.listen(3001, () => console.log(`Listening in port ${port}`));

//console.log("port", port);
