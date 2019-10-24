const express = require("express");

const routes = express.Router();

routes.get("/", (req, res) => {
  res.send("<h1>Hello World, from Express.js</h1>");
});

module.exports = routes;
