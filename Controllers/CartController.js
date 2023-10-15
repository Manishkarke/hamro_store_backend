const cartModel = require("../models/Carts");

//====>>>> Add a product to cart <<<<====//
module.exports.addCart = async (req, res) => {
  const user = req.user;
  const productId = req.body.id;

  console.log(user, productId);
};
