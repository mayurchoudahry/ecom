const express = require("express")
const Jwt = require("jsonwebtoken");
const ProductModel = require("../Models/ProductModel");




const addproduct = async (req,res)=>{
     const {name,description,price,category,stock} = req.body;
       try {
           const result = await ProductModel.create({
                 name:name,
                 description:description,
                 price:price,
                 category:category,
                 stock:stock

           })
           res.status(200).json({result})
        
       } catch (error) {
        console.log(error)
        res.status(500).json({message:"something went wrong"})
        
       }

}



module.exports = addproduct