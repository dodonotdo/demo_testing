const express = require("express");
const router = express.Router();
const user_controller = require("../controller/user_controller");

router.get("/", user_controller.getEvents);

router.post("/create",user_controller.postEvents);

module.exports = router;