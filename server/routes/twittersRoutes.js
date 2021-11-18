const express = require("express");
const { validate } = require("express-validation");
const {
  getTwit,
  createTwit,
  deleteTwit,
  likeTwit,
} = require("../controllers/twitterController");

const twitterSchema = require("../schemas/twitterSchema");

const router = express.Router();

router.get("/", getTwit);
router.post("/", validate(twitterSchema), createTwit);
router.delete("/:id", deleteTwit);
router.patch("/:id", likeTwit);

module.exports = router;
