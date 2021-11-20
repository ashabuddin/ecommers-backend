const Product = require('../models/productModel')
const ErrorHandler = require("../utils/errorHandler");

//create product  -- Admin
exports.createProduct = async (req, res, next) => {
  const product = await Product.create(req.body)

  res.status(201).json({
    success: true,
    product,
  });
}
// Get All Product
exports.getAllProducts = async (req, res) => {

  const products = await Product.find()
  res.status(200).json({
    success: true,
    products,
  })
}
// Get Product Detail
exports.getProductDetails = async (req,res,next) => {
  let product = await Product.findById(req.params.id)
  if(!product){
    return next( new ErrorHandler("Product not found",404))
  }
  res.status(200).json({
    success: true,
    product
  })

}


// Update All Product Admin
exports.updateProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id)
  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product is not found"
    })
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  })
  res.status(200).json({
    success: true,
    product
  })
}
//Delete product
exports.deleteProduct = async (req,res,next) => {
  let product = await Product.findById(req.params.id)
  if(!product){
    return res.status(500).json({
      success: false,
      message: "Product is not found"
    })
  }
   await product.remove()
   res.status(200).json({
    success: true,
    message: "Product Delete Successfully",
  })
}

