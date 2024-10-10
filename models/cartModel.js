const mongoose = require('mongoose');

const productItemSchema = mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product', // Reference to the Product model
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      default: 1, // Default to 1 unit
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0, // Calculate based on quantity * price
    },
  },
);

// Main product schema containing the global products array
const globalProductsSchema = mongoose.Schema(
  {
    products: [productItemSchema], // Array of product items
  },
);

// Export the model to be used in the app
const GlobalProducts = mongoose.model('GlobalProducts', globalProductsSchema);

module.exports = GlobalProducts;