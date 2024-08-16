const express = require("express");
const {userCreate,login, getuser} = require("../Controllers/UserController");
const userRouter=express.Router();



userRouter.post("/signup",userCreate)
userRouter.post("/login",login)
userRouter.get("/all",getuser)

module.exports= userRouter