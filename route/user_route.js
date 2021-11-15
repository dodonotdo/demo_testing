const express = require("express");
const router = express.Router();
const user_controller = require("../controller/user_controller");

router.get("/", user_controller.userRoot);

router.post("/create",user_controller.create_users);

module.exports = router;