const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const morgan = require("morgan")
const helmet = require("helmet")
const bodyparser = require('body-parser')

const {authRouter,userRouter,invoiceRouter} = require('./src/router')

dotenv.config()
const app = express()

const MONGO = process.env.MONGO
const PORT = process.env.PORT

app.use(bodyparser.json())

app.use('/api/auth',authRouter)
app.use('/api/user',userRouter)
app.use('/api/invoice',invoiceRouter)

app.use(morgan('common'))
app.use(helmet())
app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin','*')
  res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization')
})

app.use('/',(req,res)=>{
  res.status(200).send('server is connected. this is / endpoint')
})

mongoose.connect(MONGO).then(()=>{
  app.listen(PORT,()=>console.log(`server:${PORT} has been connected to mongodb atlas database`))
}).catch(e=>console.log(e))
