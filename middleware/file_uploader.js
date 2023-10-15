const multer = require("multer");
const path = require("path");

const thumbnailStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./thumbnails");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const imagesStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(" I am not getting error hai ");
    cb(null, path.join("./images"));
  },
  filename: (req, file, cb) => {
    console.log(" I am not getting error hai ");
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

module.exports.thumbnailUpload = multer({
  storage: thumbnailStorage,
  fileFilter: (req, file, cb) => {
    const allowedExtensions = [".jpg", ".jpeg"];
    const fileExtension = path.extname(file.originalname).toLowerCase();
    if (allowedExtensions.includes(fileExtension)) {
      console.log("Hellowewwew");
      cb(null, true);
    } else {
      cb(new Error("Invalid file type"));
    }
  },
});
module.exports.imagesUpload = multer({ storage: imagesStorage });
