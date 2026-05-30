const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hola GitHub Actions" });
});

module.exports = app;