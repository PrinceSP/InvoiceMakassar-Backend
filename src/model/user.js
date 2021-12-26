const mongoose = require('mongoose')

const User = new mongoose.Schema({
  fullname:{
    type:String,
    required:true,
    min:8,
    max:40
  }
  username:{
    type:String,
    required:true,
    min:6,
    max:25
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    min:8,
    required:true
  },
  profilePicture:{
    type:String,
    default:""
  }
})

module.exports = mongoose.model("User",User)
