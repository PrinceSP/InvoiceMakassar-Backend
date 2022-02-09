const mongoose = require("mongoose")

const Invoice = new mongoose.Schema({
  userId:{
    type:String,
    required:true
  },
  sender:{
    type:String,
    required:true
  },
  date:{
    type:String,
    required:true
  },
  vehicle:{
    type:String,
    required:true
  },
  plat:{
    type:String,
    required:true
  },
  vehicleType:{
    type:String,
    required:true
  },
  client:{
    type:String,
    required:true
  },
  phoneNumber:{
    type:String,
    required:true
  },
  diagnosis:{
    type:String,
    required:true
  },
  action:{
    type:String,
    required:true
  },
  spareParts:{
    type:String,
    required:true
  },
  freonUse:{
    klea:Number,
    bailian:Number,
    dupoet:Number
  },
  repairService:{
    type:mongoose.NumberLong,
    required:true
  },
  total:{
    type:mongoose.NumberLong,
    required:true
  },
  desc:String
},{timestamps:true})

module.exports = new mongoose.model('Invoice',Invoice)
