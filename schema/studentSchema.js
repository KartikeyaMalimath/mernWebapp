const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const studentSchema =  new Schema({
    usn:{
        type:String
    },
    name:{
        type:String,
        required: [true, 'Name field is Required']
    },
    stream:{
        type:String,
        required : [true, 'Stream is Required']
    },
    branch:{
        type:String,
        required: [true, 'branch is required']
    },
    currentSem:{
        type: Number, 
        required: [true, 'Semiter is required'],
        maxlength: 1
    },
    batch:{ 
        type:String,
        required: [true, 'Batch is required'],
        maxlength: 7
    },
    mobile:{
        type:Number,
        minlength: 10,
        maxlength: 10
    },
    DOB:{
        type:Date,
        required: [true, 'Date of Birth is required']
    }
    });

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;