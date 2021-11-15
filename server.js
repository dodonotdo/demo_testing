const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var corsOptions = {
  origin: "http://localhost:8081",
};

const sequelize = require("./config/db");
const persons = require('./models/event-table'); 
sequelize.sync();
sequelize.sync({force:true});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to event-notification-backend application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
