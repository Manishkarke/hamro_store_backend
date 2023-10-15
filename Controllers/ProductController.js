const { json } = require("body-parser");
const productModel = require("../models/products");

//====>>>> create the product <<<<====//
module.exports.createProduct = async (req, res) => {
  const { productName, description, color, discountPercentage, category } =
    req.body;
  console.log(req);

  const thumbnail = `http://localhost:5000/${req.file.path}`;
  console.log("Hellooooo runing");

  const images = req.files.map((file) => `http://localhost:5000/${file.path}`);
  console.log(images);
  console.log(req.files);

  if (!thumbnail) throw "thumbnail is required.";

  console.log(req.files);
  if (
    !productName ||
    !description ||
    !color ||
    !discountPercentage
    // !rating
  ) {
    throw "All fields are required.";
  }

  const productRepeated = await productModel.findOne({ productName });

  if (productRepeated) {
    throw "Product already exists in database";
  }

  const newProduct = await productModel.create({
    productName,
    description,
    color,
    discountPercentage,
    category,
    thumbnail,
  });

  res.json({
    status: "Success",
    message: "Product created successfully",
    data: newProduct,
  });
};
