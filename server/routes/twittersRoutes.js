const express = require("express");
const { validate } = require("express-validation");
const {
  getTwitter,
  createTwitter,
  deleteTwitter,
} = require("../controllers/twitterController");

const twitterSchema = require("../schemas/twitterSchema");

const router = express.Router();

router.get("/", getTwitter);
router.post("/", validate(twitterSchema), createTwitter);
router.delete("/:id", deleteTwitter);

module.exports = router;
