// create product
export const productCreate = async (req, res) => {
  try {
    const { name, price, quantity, image } = req.body; //get datas from body
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
      image,
    });
    await newProduct.save(); //save
    res.status(200).json({
      success: true,
      message: "Address created successfully",
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
    const { productId, quantity } = req.body; //get data from body
    if (!productId || !quantity) {
      return res.status(400).json({
        sucess: false,
        message: "quantity or productId not available",
      });
    }
    const product = await Product.findById(productId); //find using id
    if (!product) {
      return res
        .status(400)
        .json({ sucess: false, message: "Product not available" });
    }
    product.quantity = quantity; //update quantity
    await product.save();
    return res.status(200).json({
      success: true,
      message: "Product quantity updated successfully",
      data: product,
    });
  } catch (error) {
    res
      .status(error.status || 500)
      .json({ message: error.message || "Internal server error" });
  }
};

// Total sales amount
export const TotalSalesAmount = async (req, res) => {
  try {
    const cart = await Cart.find({}); //fetch all cart
    if (!cart || cart.length === 0) {
      return res
        .status(400)
        .json({ sucess: false, message: "cart not available" });
    }
    const TotalAmount = cart.reduce((acc, sale) => {
      return acc + sale.total; //calculating total amount of sales
    }, 0);
    return res.status(200).json({
      success: true,
      message: "cart total fetched successfully",
      data: TotalAmount,
    });
  } catch (error) {
    res
      .status(error.status || 500)
      .json({ message: error.message || "Internal server error" });
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
