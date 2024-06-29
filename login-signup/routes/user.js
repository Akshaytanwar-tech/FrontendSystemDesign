const express = require("express");
const router = express.Router();
const { signup, signin } = require("../controller/user");

router.post("/create", signup);
router.post("/signin", signin);
module.exports = router;
