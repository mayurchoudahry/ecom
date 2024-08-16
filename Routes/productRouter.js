const express = require("express");
const addproduct = require("../Controllers/ProductController");
const addcategory = require("../Controllers/categoryController");
const productRouter=express.Router();

productRouter.post("/add", addproduct)

productRouter.post("/cat",addcategory)




module.exports = productRouter;