const mongoose = require('mongoose');

<<<<<<< HEAD
const productSchema = mongoose.Schema(
  {
    globalProducts:{
      products: [productItemSchema], // Array of product items
=======
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
>>>>>>> d5ab5e2cf33bc95f0487afa919afe61cd4d2f0f3
    },
  ],
});

<<<<<<< HEAD
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
=======
const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;
>>>>>>> d5ab5e2cf33bc95f0487afa919afe61cd4d2f0f3
