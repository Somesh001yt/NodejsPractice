const subjectModal = require('../modals/subject')
const mongoose = require('mongoose')


const getSubjectList = async (req , res) => {
    try {
        const data = await subjectModal.find();
        console.log(data);
        res.send(data);
       
    }catch (error){
        console.log(error)
        res.status(500).send('Internal Network Error')
    }
}

const addSubject = async (req , res) => {
    try{
        const {subject  }= req.body;

        if (!subject) {
            return res.status(400).json({
                success: false,
                message: "Please provide a subject name.",
            });
        }

    const data = new subjectModal(req.body)
    const result = await data.save()
    console.log(result)
    res.send(result)
    }catch (error){
        console.log(error)
        res.status(500).send('Internal Network Error')
    }
}

module.exports = {
    getSubjectList, addSubject
   };