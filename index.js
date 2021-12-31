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

const PORT = process.env.PORT || 8000

app.use(bodyparser.json())

//route middleware
app.use('/api/auth',authRouter)
app.use('/api/user',userRouter)
app.use('/api/invoice',invoiceRouter)

app.use(morgan('common'))
app.use(helmet())

app.use('/',(req,res)=>{
  res.status(200).send('server is connected. this is / endpoint')
})
//connnect to MongoDB database with mongoose library
//app listen to the port for localhost server
mongoose.connect(process.env.MONGO).then(()=>{
  app.listen(PORT,()=>console.log(`server and database has been connected to port:${PORT}`))
}).catch(e=>console.log(e))
