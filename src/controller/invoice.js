const Invoice = require('../model/invoice')
const User = require('../model/User')

exports.createInvoice = async (req,res)=>{
  const newInvoice = new Invoice(req.body)
  try {
    const savedInvoice = await newInvoice.save()
    res.status(200).send(savedInvoice)
  } catch (e) {
    return res.status(500).json(e)
  }
}

exports.updateInvoice = async (req,res)=>{
  try{
    const invoice = await Invoice.findById(req.params.id)
    if ( invoice.userId === req.body.userId) {
      await invoice.updateOne({$set: req.body})
      res.status(200).json('invoice has been updated')
    } else{
      return res.status(403).json('you can only update your invoice')
    }
  } catch(e){
    return res.status(500).json(e)
  }

}

//delete only one invoice with its current user id
exports.deleteInvoice = async (req,res)=>{
  try{
    const invoice = await Invoice.findById(req.params.id)
    if ( invoice.userId === req.body.userId) {
      await invoice.deleteOne()
      res.status(200).json('invoice has been deleted')
    } else{
      return res.status(403).json('you can only delete your invoice')
    }
  } catch(e){
    return res.status(500).json(e)
  }
}

//get single invoice
exports.getInvoice = async (req,res)=>{
  try{
    const invoice = await Invoice.findById(req.params.id)
    res.status(200).json(invoice)
  } catch(e){
    return res.status(500).json(e)
  }
}

//get current user invoices list
exports.getInvoicesList = async (req,res)=>{
  try{
    const currentUser = await User.findById(req.body.userId)
    const userInvoices = await Invoice.find({userId:currentUser._id})
    res.status(200).json(userInvoices)
  } catch(e){
    return res.status(500).json(e)
  }
}

//get users invoices list
exports.getAllInvoicesList = async (req,res)=>{
  try{
    const userInvoices = await Invoice.find().sort({_id:-1})
    res.status(200).json(userInvoices)
  } catch(e){
    return res.status(500).json(e)
  }
}
