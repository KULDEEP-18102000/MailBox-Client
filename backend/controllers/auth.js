const User=require('../models/user')
const bcrypt=require('bcryptjs')
const { json } = require('body-parser')
const jwt =require('jsonwebtoken')

exports.signUp=async(req,res)=>{
    try {
        const {email,password}=req.body
        const user=await User.findOne({email:email})
        if(user){
            res.json({message:'User Already Exists'})
        }else{
            bcrypt.hash(password,10,async(err,hash)=>{
                await User.create({email:email,password:hash})
                res.status(201).json({message:"Successfully created new user"})
            })
        }
    } catch (error) {
        res.status(500).json({message:error})
    }
}

function generateAccessToken(email){
    return jwt.sign({email:email},"bobyjadon")
}

exports.login=async(req,res)=>{
    try {
        const {email,password}=req.body
        const user=await User.findOne({email:email})
        if(!user){
            res.status(404).json({message:"User Not Found"})
        }
        bcrypt.compare(password,user.password,(err,result)=>{
            if(err){
                res.status(500).json({message:"Something Went Wrong"})
            }
            if(result==true){
                res.status(200).json({success:true,token:generateAccessToken(user.email)})
            }else{
                res.status(400).json({success:false,message:"Incorrect Password"})
            }
        })
    } catch (error) {
        res.status(500).json({message:error})
    }
}