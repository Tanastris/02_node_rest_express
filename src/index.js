"use strict";
console.log("index.js file was loaded");

const express = require("express");
const app = express();
const PORT = 3000;
const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 35 },
];

// route GET - /about.html
app.get("/about.html", (req, res) => {
  res.send("Hello World!");
});
// route GET - /
app.get("/", (req, res) => {
  res.send("<h1>Welcome ot homepage</h1>");
});
// route GET - /users
app.get("/users", (req, res) => {
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
