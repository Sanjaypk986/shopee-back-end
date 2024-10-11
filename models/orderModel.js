import mongoose from "mongoose";

// Define the order Schema containing an array of products
const orderSchema = new mongoose.Schema({
     products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: 1,
      },
    },
  ],
  totalAmount: {
    type: Number,
    required: true, // Total price of the full order
  },
  
});

export const Order = mongoose.model('Order', orderSchema);
