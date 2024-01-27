const express=require('express')
const router=express.Router()
const userController=require('../controllers/auth')

router.post('/signup',userController.signUp)

module.exports=router