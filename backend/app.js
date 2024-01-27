const express=require('express')
const app=express()

const cors=require('cors')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const userRoutes=require('./routes/auth')

app.use(cors())

app.use(bodyParser.json())

app.use('/user',userRoutes)

mongoose.connect('mongodb+srv://jadonkuldeepsingh2:kuldeepmailboxclient@cluster0.fsc5bdc.mongodb.net/?retryWrites=true&w=majority')
.then(result=>{
  console.log("connected")
  app.listen(5000)
})
.catch(err=>{
  console.log(err)
})