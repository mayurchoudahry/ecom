const userModel = require("../Models/UserSchema")
const bcrypt = require("bcrypt")
const JWT = require("jsonwebtoken")
const SECRET_KEY = "SECRET_KEY"

const user = (req,res)=>{
    res.send("hello")
}


const userCreate = async (req,res)=>{
      const { name, email, password, address} = req.body;
      try {
             const existing= await userModel.findOne({email:email})
             if(existing){
                return res.status(400).json("email already exsist");
             }
            
             

        const hashpassword = await bcrypt.hash(password,10)
        const result = await  userModel.create({
            name:name,  
            email:email,
            password:hashpassword,
            address:address

        })
        res.status(201).json({user:result});


      } catch (error) {
       console.log(error)
       return res.status(500).json("bad request"); 
      }

}


const login = async (req,res)=>{
   const {email , password}= req.body;
    
  try {
    
    const exisiting = await userModel.findOne({email:email})

    if(!exisiting){
     return res.status(404).json("user not found")
    }
     
     const matchpassword = await bcrypt.compare(password, exisiting.password)
    
     if(!matchpassword){
         return res.status(404).json("password not matched")
     }

     const token = JWT.sign({email:exisiting.email,id:exisiting._id},SECRET_KEY)
 
       res.status(200).json({user:exisiting,token:token}) 
  } 
  catch (error) {
    console.log(error)
    return res.status(500).json("something went wrong")
  }

}


const getuser = async (req,res)=>{
         try {
              const user = await userModel.find()
              return res.status(200).json(user) 
         } catch (error) {
            res.status(500).json({message:"something went wrong"})
         } 
}


module.exports = { userCreate , login ,getuser}