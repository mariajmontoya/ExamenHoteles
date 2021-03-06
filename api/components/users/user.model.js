'use strict';
let mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
    Id : {type : String, required: true},
    FristName: {type: String, required : true},
    MiddleName: {type : String, required : true},
    Lastname : {type : String, required : true},
    SecondLastname : {type : String, required : true},
    DateBirth: {type : String, required : true},
    Gender : {type : String, required : true},
    imagen : {type : String, required : true},
    Email : {type : String, unique : true, required: true},
    Password : {type : String, required : true},
    PasswordConfirmation : {type : String, required : true},
    UserType : {type : String, required : true},
});

module.exports = mongoose.model('User', UserSchema);
