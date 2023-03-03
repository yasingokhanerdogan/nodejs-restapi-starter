const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();
require("./config").mongoDB();

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

module.exports = {app};
