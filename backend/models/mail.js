const mongoose=require('mongoose')

const Schema=mongoose.Schema

const mailSchema=new Schema({
    senderEmail:{
        type:'String',
        required:true
    },
    receiverEmail:{
        type:'String',
        required:true
    },
    subject:{
        type:'String',
        required:true
    },
    readMail:{
        type:'Boolean'
    },
    editorState:{
        type:'Object',
        required:true
    }
})

module.exports=mongoose.model('Mail',mailSchema)