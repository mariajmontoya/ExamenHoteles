'use strict';
let mongoose = require('mongoose');

let HotelSchema = new mongoose.Schema({
    HotelName : {type : String, required: true},
    Map : {type: String, required : true},
    City: {type : String, required : true},
    District : {type : String, required : true},
    Address : {type : String, required : true},
    ClientPhone : {type : String, required : true},
    CSEmailClient : {type : String, required : true},
    CSPhone : {type : String, required : true},
    CSEmailReservations : {type : String, unique : true, required: true},
});

module.exports = mongoose.model('Hotel', HotelSchema);



