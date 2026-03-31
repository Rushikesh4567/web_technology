const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("This is about page");
});

app.get("/profile", (req, res) => {
  res.send("This is profile page");
});

app.get("/Help", (req, res) => {
  res.send("This is help page");
});

app.get("/contact", (req, res) => {
  res.send("This is contact page");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
