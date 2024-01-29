const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')

const studentSchema =  mongoose.Schema({
  name: {
    type : String , 
    default : ''
  },
  rollnumber : {
    type : Number ,
    default : null
  },
  studentClass: {
    type : ObjectId,
    ref: 'classes'
  }
})

module.exports = mongoose.model('students' , studentSchema)