const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
    subject: {
        type: String,
        default: ""
    }
});

module.exports = mongoose.model('subject', subjectSchema);