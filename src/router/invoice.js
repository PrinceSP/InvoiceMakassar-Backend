const router = require('express').Router()
const invoiceController = require('../controller/invoice')

//create a post
router.post('/', invoiceController.createInvoice)
//endpoint to update post by their id
router.put('/:id', invoiceController.updateInvoice)
//endpoint to delete post by their id
router.delete('/:id', invoiceController.deleteInvoice)
//get posts
router.get('/:id', invoiceController.getInvoice)
//get current user post
router.get('/invoicesList/:userId',invoiceController.getInvoicesList)
//get all users posts list
router.get('/',invoiceController.getAllInvoicesList)

module.exports = router
