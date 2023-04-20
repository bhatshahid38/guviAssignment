const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
const router = express.Router();
const login = require("./routes/login");
const signup = require("./routes/signup");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/usersignin", login);
app.use("/usersignup", signup);
module.exports = app;
