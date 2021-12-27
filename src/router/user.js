const router = require('express').Router()
const userController = require('../controller/user')

router.put('/:id',userController.updateUser)
router.delete('/:id',userController.deleteUser)
router.get('/:id',userController.getUser)
router.get('/:id',userController.getAllUser)

module.exports = router
