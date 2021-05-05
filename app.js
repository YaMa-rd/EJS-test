const express = require("express");
const app = express();

//EJS

app.set("views", "./views/pages");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000);
