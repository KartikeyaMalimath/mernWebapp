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
    // BE ,MTech etc
    stream:{
        type:String,
        required : [true, 'Stream is Required']
    },
    // cse, ise etc
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
        //Father details
            fatherName: {
                type: String,
                required: true
            },
            fatherOccupation:{
                type: String,
                required: true
            },
            fatherAge:{
                type: Number,
                required: true
            },
            fatherIncome:{
                type: Number,
                required:true
            },
            fatherMobile: {
                type: Number,
                required:true,
                maxlength:11
            },
            incomeClaim: {
                required:true,
                type:Boolean
            },
            //Mother Details
            motherName: {
                type: String,
                required: true
            },
            motherOccupation: {
                type: String,
                required: true
            },
            motherAge: {
                type:Number,
                required:true
            },
            motherIncome : {
                required: true,
                type: Number
            },
            motherMobile : {
                type: Number
            },
            //Guardian Details
            guardianName: {
                type: String,
            },
            guardianOccupation : {
                type: String
            },
            guardianAge : {
                type: Number
            },
            guardianMobile : {
                type: Number
            }
    },
    //Student personal Details
    studentDetails : {
        firstName: {
            type: String,
            required: true
        },
        middleName : {
            type: String
        },
        lastName : {
            type: String
        },
        religion : {
            type: String,
            required: true
        },
        caste: {
            type:String,
            required: true
        },
        subcaste : {
            type: String
        },
        blood : {
            type: String,
            maxlength: 3
        },
        nationality : {
            type: String,
            required: true
        },
        motherTongue : {
            type: String,
            required: true
        },
        area : {
            type: String,
            required: true
        },
        email: {
            type: String
        },
        currentAddress : {
            type: String,
            required: true
        },
        currentCity : {
            type: String,
            required: true
        },
        currentState : {
            type: String,
            required: true
        },
        country : {
            type: String,
            required: true
        },
        pinCode : {
            type : Number,
        },
        permAddress : {
            type: String,
            required: true
        },
        permCity : {
            type: String,
            required: true
        },
        permState : {
            type: String,
            required: true
        },
        permCountry : {
            type: String,
            required: true
        },
        permPinCode : {
            type: Number,
        },
        phone: {
            type: Number
        },
        emergencyContact : {
            type: Number,
            maxlength: 12
        },
        birthPlace : {
            type: String,
            required: true
        },
        birthState: {
            type: String,
            required: true
        },
        birthCountry : {
            type: String,
            required: true
        },
        disability: {
            type: String,
            required: true
        },
        disableType : {
            type: String,
        },
        backward : {
            type: String,
            required: true
        },
        AdharCard: {
            type: Number
        },
        siblings: {
            type: String
        }
    },
    academicHistory: {
        schoolName: {
            type: String,
            required: true
        },
        schoolBoard: {
            type: String,
            required: true
        },
        schoolTown: {
            type: String,
            required: true
        },
        schoolState: {
            type: String,
            required: true
        },
    }
});


const Student = mongoose.model('Student', studentSchema);
module.exports = Student;