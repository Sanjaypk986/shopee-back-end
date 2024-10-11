// create order
import  Cart  from "../models/cartModel.js";
import Order  from "../models/orderModel.js";
import  Product from "../models/productModel.js";

export const orderCreate = async (req, res) => {
  try {
    const { cartId } = req.body;

    if (!cartId) {
      return res
        .status(400)
        .json({ success: false, message: "cartId not found" });
    }

    const cart = await Cart.findById(cartId);
    if (!cart || cart.products.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "cart not found" });
    }

    // Calculate total amount
    let totalAmount = 0;

    for (const item of cart.products) {
      const product = await Product.findById(item.productId);
      if (product) {
        totalAmount += product.price * item.quantity;
      }
    }

    // Create a new order with cart products and total amount
    const newOrder = new Order({
      products: cart.products.map((item) => ({
        productId: item.productId,
        quantity: item.quantity,
      })),
      totalAmount: totalAmount,
    });

    // Save the order to the database
    await newOrder.save();

    // Respond with the new order details
    res.status(201).json({ success: true, order: newOrder });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error creating order", error });
  }
};
