const Cart = require("../models/cartModel.js");
const Product = require("../models/productModel");

// Add product to cart
export const addProductToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    let cart = await Cart.findOne();

    if (!cart) {
      // If cart doesn't exist, create a new one
      cart = new Cart({
        products: [
          { productId, quantity, totalPrice: product.price * quantity },
        ],
      });
    } else {
      // Check if the product already exists in the cart
      const productIndex = cart.products.findIndex(
        (p) => p.productId.toString() === productId
      );

      if (productIndex > -1) {
        // If the product exists, update its quantity
        cart.products[productIndex].quantity += quantity;
        cart.products[productIndex].totalPrice += product.price * quantity;
      } else {
        // Otherwise, add the product to the cart
        cart.products.push({
          productId,
          quantity,
          totalPrice: product.price * quantity,
        });
      }
    }
    await cart.save();
    res.status(200).json({ success: true, cart });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error adding product to cart", error });
  }
};
