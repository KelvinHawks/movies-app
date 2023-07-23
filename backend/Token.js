const jwt = require('jsonwebtoken')
const { model } = require('mongoose')

const generateToken = (id)=>{
    return jwt.sign({id}, "jwtkey", {expiresIn: "1hr"})
}

model.exports = generateToken