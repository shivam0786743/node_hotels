const express = require("express");
const app = express();
const db = require("./db");
require('dotenv').config();
const PORT= process.env.PORT || 3004;

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const personrouters = require("./routers/personrouters");
const menuitemrouters= require("./routers/menuitemrouters");

app.use("/person", personrouters);
app.use("/menuitem", menuitemrouters);

app.listen(PORT, () => {
  console.log("Server listening on port 3004");
});
