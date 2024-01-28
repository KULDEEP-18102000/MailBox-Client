const express=require('express')
const router=express.Router()
const mailController=require('../controllers/mail')
const authenticationController=require('../middleware/auth')

router.post('/sendmail',authenticationController.authenticate,mailController.storeMail)

router.get('/getinboxmails',authenticationController.authenticate,mailController.getInboxMails)

module.exports=router