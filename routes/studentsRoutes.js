const express = require('express')
const router = express.Router(); 
const studentController = require('../controllers/stduent')


router.get('/student/list',studentController.getStudentList)
router.post('/student/add' , studentController.addStudent)

module.exports = router