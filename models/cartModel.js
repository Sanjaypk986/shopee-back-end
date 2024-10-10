const mongoose = require('mongoose');

// Define the Cart Schema containing an array of products
const cartSchema = new mongoose.Schema({
  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product', // Reference to the Product model
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: 1,
      },
      totalPrice: {
        type: Number,
        required: true,
        default: 0, // Total price for this product based on quantity * price
      },
    },
  ],
});

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;
