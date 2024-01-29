const express = require('express')
const router = express.Router(); 
const subjectController = require('../controllers/subject')


router.get('/subject/list',subjectController.getSubjectList);
router.post('/subject/add' ,subjectController.addSubject)

module.exports = router