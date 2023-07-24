const  User  = require("../model/configureDb");
//const generateToken = require('../Token')
const bcrypt = require('bcrypt')

//register
const registerUser = async(req,res)=>{
    const{username, email, password} = req.body
    const user = await User.findOne({email})
    if(user){
         return res.status(401).json({message: 'user already exists'})

    }else{
        const hashedPassword = await bcrypt.hash(password, 10)
       if(hashedPassword){
         const newuser = new User({
            username,
            email,
            password: hashedPassword
         })
         await newuser.save();
         res.status(200).json({message:'user successfully registered'})
       }    
    }
}

//login

const loginUser = async(req,res)=>{
    const{email,password} = req.body
    const user = User.findOne({email})
    if(user){
        
        const hashedPassword = user.password
        const ComparesPassword = await bcrypt.compare(hashedPassword, password)
        if(ComparesPassword){
           res.status(200).json({
           // _id:user._id,
            username:user.username,
            email:user.email,
            //token:generateToken(user._id)
           })
           res.status(200).json({message: "successfully logged in"})
        }else{
             res.status(401).json({message:'Incorrect username or password'})
        }

    }else{
        res.status(401).json({message:'User does not exist'})
    }
}
module.exports = {registerUser, loginUser}