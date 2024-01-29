const studentModal = require('../modals/students')
const mongoose = require('mongoose')


const getStudentList = async (req , res) => {
    try {
        const data = await studentModal.find().populate('studentClass');
        console.log(data);
        res.send(data);
       
    }catch (error){
        console.log(error)
        res.status(500).send('Internal Network Error')
    }
}

const addStudent = async (req , res) => {
    try{

    const {name ,studentClass , rollnumber }= req.body;

    if (!name) {
        return res.status(400).json({
            success: false,
            message: "Please provide your name.",
        });
    }
    if (!rollnumber) {
        return res.status(400).json({
            success: false,
            message: "Please provide your roll number.",
        });
    }
    if (!studentClass) {
        return res.status(400).json({
            success: false,
            message: "Please provide your class.",
        });
    }

  

    const data = new studentModal(req.body)
    const result = await data.save()
    res.send(result)
    }catch (error){
        console.log(error)
        res.status(500).send('Internal Network Error')
    }
}

module.exports = {
 getStudentList,addStudent
};