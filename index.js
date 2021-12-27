const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const morgan = require("morgan")
const helmet = require("helmet")
const bodyparser = require('body-parser')

const {authRouter} = require('./src/router')

dotenv.config()
const app = express()

app.use(bodyparser.json())

app.use('/api/user',authRouter)

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

mongoose.connect(process.env.MONGO).then(()=>{
  app.listen(process.env.PORT,()=>console.log(`server:${process.env.PORT} has been connected to mongodb atlas database`))
}).catch(e=>console.log(e))
