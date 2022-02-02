const mongoose = require('mongoose')

const User = new mongoose.Schema({
  fullname:{
    type:String,
    required:true,
    min:8,
    max:40
  },
  username:{
    type:String,
    required:true,
    min:6,
    max:25,
    unique:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  birthday:{
    type:String,
    min:6,
    required:false,
  },
  phoneNumber:{
    type:String,
    min:6,
    required:false,
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
},{timestamps:true})

module.exports = mongoose.model("User",User)
