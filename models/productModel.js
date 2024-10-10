const mongoose = require('mongoose');

// Define the schema for products
const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  },
);

// Export the model to be used in the app
const Product = mongoose.model('Product', productSchema);

module.exports = Product;