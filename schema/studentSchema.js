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
        required: [true, 'Semester is required'],
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
                type:String
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
    admissionDetails: {
        entranceExam: {
            type: String,
            required: true
        },
        //date of admission better to use date.now function for better results
        admissionDate: {
            type: String
        },
        batch: {
            type: String
        },
        admissionOrder: {
            type: Number
        },
        seatCatagoryAlloted: {
            type: String
        },
        seatCatagoryClaimed: {
            type: String
        },
        collegeCode: {
            type: String
        },
        degreeLevel: {
            type: String
        },
        jeeRank : {
            type: String
        }
    },
    academicHistory: {
        school:{
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
            //10th exam roll number
            schoolRegNo : {
                type: String,
            },
            schoolPassYear: {
                type: Number,
                required: true
            },
            schoolMarkscardNo: {
                type: String
            },
            //english, kannada etc
            schoolMedium: {
                type: String
            },
            //10 or 625 or 600
            schoolMaxMarks: {
                type: Number
            },
            //marks obtained
            schoolMarks: {
                type: Number
            },
            //percentage obtained
            schoolAggregate: {
                type: String
            }
        },
        puc: {
            collegeName: {
                type: String
            },
            collegeBoard : {
                type: String
            },
            collegeTown : {
                type: String
            },
            collegeState: {
                type: String
            },
            collegeCountry: {
                type: String
            },
            collegePassYear : {
                type: Number
            },
            //12th exam roll number
            collegeRegNo : {
                type: String
            },
            //12th exam max marks 600
            collegeMaxMarks : {
                type: Number
            },
            collegeMarks: {
                type: Number
            },
            collegeAggregate: {
                type: String
            },
            collegeMarkscardNo: {
                type: String
            },
            //english kannada etc
            collegeMedium: {
                type: String
            },
            attempts: {
                type: Number
            },
            //3 subjects of puc : PCM or PMCs etc max marks
            sub1MaxMarks: {
                type: Number
            },
            sub2MaxMarks: {
                type: Number
            },
            sub3MaxMarks: {
                type: Number
            },
            //3 subjects of puc: PCM or PMCs marks obtained
            sub1Marks: {
                type: Number
            },
            sub2Marks: {
                type: Number
            },
            sub3Marks: {
                type: Number
            },
        }
    },
    documents: {
        // CET/ COMEDK admission letter
        entranceOrginal: {
            type: Number
        },
        entranceCopy: {
            type: Number
        },
        //sslc marks card
        sslcOrginal: {
            type: Number
        },
        sslcCopy: {
            type: Number
        },
        //puc or equivalent marks card
        collegeOrginal: {
            type: Number
        },
        collegeCopy: {
            type: Number
        },
        //caste-income-reservation certificates
        reservationOrginal: {
            type: Number
        },
        reservationCopy: {
            type: Number
        },
        //handicap, ncc, scouts and guides, sports, defence
        specialOrginal : {
            type: Number
        },
        specialCopy : {
            type: Number
        },
        // SC/ ST/ OBC Reservation certificate
        scstobcOrginal : {
            type: Number
        },
        scstobcCopy: {
            type: Number
        },
        //migration Certificate
        migrationOrginal : {
            type: Number
        },
        migrationCopy: {
            type: Number
        },
        //Transfer Certificate
        migrationOrginal: {
            type: Number
        },
        migrationCopy: {
            type: Number
        },
        //study Certificate
        studyOrginal : {
            type: Number
        },
        studyCopy: {
            type: Number
        },
        //Any other certificates
        otherOrginal: {
            type: Number
        },
        otherCopy: {
            type: Number
        }
    }

});


const Student = mongoose.model('Student', studentSchema);
module.exports = Student;