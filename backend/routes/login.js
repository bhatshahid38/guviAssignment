const express = require("express");
const { signin } = require("../controller/loginController");
const { profile } = require("../controller/profilecontroller");
const { update } = require("../controller/update");
const router = express.Router();
router.post("/signin", signin);
router.get("/profile", profile);
router.put("/update", update);

module.exports = router;
