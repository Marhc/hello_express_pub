const express = require("express");
const routes = require("./routes");

const app_port = process.env.app_port || 8080;

const app = express();

app.use(routes);

app.listen(app_port);
