const router = require('express').Router()
const userController = require('../controller/user')

router.put('/:id',userController.updateUser)
router.delete('/:id',userController.deleteUser)
router.get('/',userController.getUser)
router.get('/userList/all',userController.getAllUser)

module.exports = router
