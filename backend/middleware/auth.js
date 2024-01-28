const jwt=require('jsonwebtoken')
const User=require('../models/user')

const authenticate=async(req,res,next)=>{
    try {
        const token=req.header('Authorization')
        console.log(token)
        const user=jwt.verify(token,"bobyjadon")
        console.log(user)
        const databaseUser=await User.findOne({email:user.email})
        req.user=databaseUser
        next()
    } catch (error) {
        console.log(error)
        return res.status(401).json({success:false})
    }
}

module.exports={
    authenticate
}