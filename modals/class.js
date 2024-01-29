const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
  name: {
    type: String,                                                                                                               
    default: "",
  },
  subject : [{type:mongoose.Schema.Types.ObjectId,default:null,ref:"subject"}],
});

module.exports = mongoose.model("classes", classSchema);
