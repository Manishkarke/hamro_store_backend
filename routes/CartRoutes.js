const router = require("express").Router();
const errorHandler = require("../middleware/error_handler");
const { accessTokenValidator } = require("../middleware/token_validator");
const Controller = require("../Controllers/CartController");

router.post(
  "/",
  errorHandler(accessTokenValidator),
  errorHandler(Controller.addCart)
);

module.exports = router;
