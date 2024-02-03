const express=require('express')
const router=express.Router()
const mailController=require('../controllers/mail')
const authenticationController=require('../middleware/auth')

router.post('/sendmail',authenticationController.authenticate,mailController.storeMail)

router.get('/getinboxmails',authenticationController.authenticate,mailController.getInboxMails)

router.get('/getsentboxmails',authenticationController.authenticate,mailController.getSentBoxMails)

router.get('/getMailDetail/:id',mailController.getMailDetail)

router.delete('/deletemail/:id',mailController.getMailDetail)

module.exports=router