const express = require("express")
const categoryModel = require("../Models/CategoryModel")

const addcategory = async (req,res)=>{
    const {name,description}=req.body

    try {
        const excategory = await categoryModel.findOne({name})
        
        if(excategory){
            return res.status(400).json({messase:"category already exists"})
        }
   
         const result = await categoryModel.create({name,description})

         res.status(200).json({result})
           
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"something went wrong"})
        
    }
}



module.exports = addcategory