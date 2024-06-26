const mongoose = require('mongoose')

const User = new mongoose.Schema({
  fullname:{
    type:String,
    required:false,
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
    required:false,
    unique:true
  },
  birthday:{
    type:String,
    min:6,
    required:false,
    default:"belum terisi"
  },
  phoneNumber:{
    type:String,
    min:6,
    required:false,
    default:"belum terisi"
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
