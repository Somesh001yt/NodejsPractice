const mongoose = require('mongoose')

const teacherSchema = mongoose.Schema({
    name : {
        type : String,
        default : null
    },
    subject: {
        type : String,
        default : null
    },
    class : {
     type : String,
     default : null 
    }
})

module.exports =  mongoose.model('teacher' , teacherSchema)