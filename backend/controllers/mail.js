const User=require('../models/user')
const Mail=require('../models/mail')

exports.storeMail=async(req,res)=>{
    try {
        console.log(req.user)
        const user=await User.findOne({email:req.user.email})
        await Mail.create({
            senderEmail:user.email,
            receiverEmail:req.body.recipientMail,
            subject:req.body.subject,
            editorState:req.body.editorState
        })
        res.status(200).json({message:"mail successfully created"})
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

exports.getInboxMails=async(req,res)=>{
    try {
        const mails=await Mail.find({receiverEmail:req.user.email})
        res.status(200).json(mails)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}