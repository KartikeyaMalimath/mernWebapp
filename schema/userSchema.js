
const mongoose = require('mongoose');
const Joi = require('joi');
const bcrypt = require('bcrypt')

//Schema of User
const Schema = mongoose.Schema;
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    },
    Role: String,
    //tokens: {
    //    token: String,
    //    tokenStart: Boolean,
    //    tokenExp: Date,

    //}
    //  lastOnline:{type:Date,default:Date.now()},
    //  logcount:Number,
    //  resetPassword:{
    //      otp:Number,
    //      status:Boolean,
    //      expiry:Date
    //     }
});
function validateUser(user) {
    const userSchema = {
        username: Joi.string().min(5).max(255).required().email,
        password: Joi.string().min(5).max(255).required(),
    };
    return Joi.validate(user, schema);
}



//exporting model
module.exports = mongoose.model('users', userSchema);
exports.validate = validateUser;

