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
        maxlength: 2
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
        type:String,
        required: [true, 'Date of Birth is required']
    },
    gender:{
        type: String,
        required: true,
        maxlength: 1
    },

    parentDetails : {
            fatherName: {
                type: String
            },
            fatherOccupation:{
                type: String
            },
            fatherAge:{
                type: Number
            },
            fatherIncome:{
                type: Number
            },

            motherName: {
                type: String
            },

    }
});


const Student = mongoose.model('Student', studentSchema);
module.exports = Student;