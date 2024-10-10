import mongoose from "mongoose";

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
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    imageUrl: {
      type: String,
      default:"https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg"
    },
  },
);

// Export the model to be used in the app
export  const Product = mongoose.model('Product', productSchema);
