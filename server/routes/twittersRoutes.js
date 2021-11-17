const express = require("express");
const { validate } = require("express-validation");
const {
  getTwit,
  createTwit,
  deleteTwit,
} = require("../controllers/twitterController");

const twitterSchema = require("../schemas/twitterSchema");

const router = express.Router();

router.get("/", getTwit);
router.post("/", validate(twitterSchema), createTwit);
router.delete("/:id", deleteTwit);

module.exports = router;
