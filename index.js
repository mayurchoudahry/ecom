const express = require("express");
const userRouter = require("./Routes/userRoutes");
const { default: mongoose } = require("mongoose");
const productRouter = require("./Routes/productRouter");
const app = express();
require('dotenv').config();

app.use(express.json())


app.use("/user",userRouter)
app.use("/product",productRouter)




mongoose.connect("mongodb://localhost:27017/ecommerce").then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("server is running on port 5000");
    })

})
.catch((error)=>{
   console.log(error)
})






