const express = require('express')
const router = express.Router(); 
const classController = require('../controllers/class')


router.get('/class/list',classController.getClassList);
router.post('/class/add' , classController.addClass)
router.put('/class/update/:_id' , classController.updateClass)

module.exports = router