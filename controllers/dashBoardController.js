import { Cart } from "../models/cartModel.js";
import { Product } from "./../models/productModel.js";

// create product
export const productCreate = async (req, res) => {
  try {
    const { name, price, quantity, imageUrl } = req.body; //get datas from body
    if (!name || !price || !quantity) {
      return res
        .status(400)
        .json({ sucess: false, message: "All fields are required" });
    }
    const newProduct = new Product({
      //creating new item
      name,
      price,
      quantity,
      imageUrl,
    });
    await newProduct.save(); //save
    res.status(200).json({
      success: true,
      message: "Product created successfully",
      data: newProduct,
    });
  } catch (error) {
    res
      .status(error.status || 500)
      .json({ message: error.message || "Internal server error" });
  }
};

// Delete product
export const deleteProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    
    if (!productId) {
      return res.status(400).json({
        sucess: false,
        message: "productId not available",
      });
    }
    const product = await Product.findByIdAndDelete(productId); //find and delete
    if (!product) {
      return res
        .status(400)
        .json({ sucess: false, message: "Product not available" });
    }

    return res.status(200).json({
      success: true,
      message: "Product quantity deleted successfully",
      data: product,
    });
  } catch (error) {
    res
      .status(error.status || 500)
      .json({ message: error.message || "Internal server error" });
  }
};

// UpdateQuantity
export const UpdateQuantity = async (req, res) => {
    try {
      const { productId, quantity } = req.body;
  
      if (!productId || !quantity) {
        return res.status(400).json({
          success: false,
          message: "quantity or productId not provided",
        });
      }
  
      const product = await Product.findByIdAndUpdate(
        productId,
        { quantity },
        { new: true } 
      );
  
      if (!product) {
        return res.status(404).json({
          success: false,
          message: "Product not found",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Product quantity updated successfully",
        data: product,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message || "Internal server error",
      });
    }
  };
  

// Total sales amount
export const TotalSalesAmount = async (req, res) => {
  try {
    const carts = await Cart.find({});
    if (!carts || carts.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No cart items available" });
    }

    let totalAmount = 0;

    carts.forEach((cart) => {
      cart.products.forEach((product) => {
        totalAmount += product.totalPrice;
      });
    });

    return res.status(200).json({
      success: true,
      message: "Total sales amount fetched successfully",
      data: totalAmount,
    });
  } catch (error) {
    return res
      .status(500)
      .json({
        success: false,
        message: error.message || "Internal server error",
      });
  }
};

// total Products
export const TotalProducts = async (req, res) => {
  try {
    const products = await Product.find({}); //fetch all products
    if (!products || products.length === 0) {
      return res
        .status(400)
        .json({ sucess: false, message: "products not available" });
    }
    res.status(200).json({
      success: true,
      message: "All products fetched successfully",
      data: products,
    });
  } catch (error) {
    res
      .status(error.status || 500)
      .json({ message: error.message || "Internal server error" });
  }
};
