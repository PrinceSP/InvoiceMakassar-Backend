const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const morgan = require("morgan")
const helmet = require("helmet")
const bodyparser = require('body-parser')

//import routes
const {authRouter,userRouter,invoiceRouter} = require('./src/router')

dotenv.config()
const app = express()

const PORT = process.env.PORT || 5000

app.use(bodyparser.json())

app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,UPDATE,DELETE,OPTIONS,PATCH');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next()
})

//route middleware
app.use('/api/auth',authRouter)
app.use('/api/user',userRouter)
app.use('/api/invoice',invoiceRouter)

app.use(morgan('common'))
app.use(helmet())

app.use('/',(req,res)=>{
  res.status(200).send('server is connected. this is / endpoint (invoice)')
})
//connnect to MongoDB database with mongoose library
//app listen to the port for localhost server
mongoose.connect(process.env.MONGO).then(()=>{
  app.listen(PORT,()=>console.log(`server and database has been connected to port:${PORT}`))
}).catch(e=>console.log(e))
