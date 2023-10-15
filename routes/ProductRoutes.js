const router = require("express").Router();
const Controller = require("../Controllers/ProductController");
const errorHandler = require("../middleware/error_handler.js");
const tokenValidator = require("../middleware/token_validator.js");
const {
  thumbnailUpload,
  imagesUpload,
} = require("../middleware/file_uploader");
router.post(
  "/",
  errorHandler(tokenValidator.accessTokenValidator),
  errorHandler(tokenValidator.adminValidator),
  thumbnailUpload.single("thumbnails"),
  errorHandler(Controller.createProduct)
);

module.exports = router;
