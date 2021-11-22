const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const helmet = require("helmet");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(morgan("combined"));
app.use(cors());
app.use(helmet());
app.use(cors(corsOptions));

var corsOptions = {
  origin: "http://localhost:8081",
};

const sequelize = require("./config/db");
sequelize.sync();

const user_route = require("./route/user_route");
app.use("/events", user_route);

app.get("/", (req, res) =>  res.json({ message: "Welcome to event-notification-backend application." }));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});