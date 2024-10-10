const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
  {
    globalProducts:{
      products: [productItemSchema], // Array of product items
    },
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

const Product = mongoose.model('Product', productSchema);

module.exports = Product;