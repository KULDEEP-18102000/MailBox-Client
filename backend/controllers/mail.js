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
            readMail:false,
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

exports.getSentBoxMails=async(req,res)=>{
    try {
        const mails=await Mail.find({senderEmail:req.user.email})
        res.status(200).json(mails)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

exports.getMailDetail=async(req,res)=>{
    try {
        const id=req.params.id
        const mail=await Mail.findById(id)
        console.log(mail.receiverEmail)
        const updatedDocument = await Mail.findByIdAndUpdate(
            id, 
            { $set: { readMail: true } }, 
            { new: true } 
          );
        //   console.log(updatedDocument);
        res.status(200).json(mail)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error
        })
    }
}


exports.deleteMail=async(req,res)=>{
    try {
        const id=req.params.id
        console.log(id)
        const mail=await Mail.findByIdAndDelete(id)
        console.log("successfully deleted")
        res.status(200).json(mail)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error
        })
    }
}