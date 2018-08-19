'use strict';
let mongoose = require('mongoose');

let HotelSchema = new mongoose.Schema({
    hotelName : {type : String, required: true},
    Location : {type: String, required : true},
    Provincia: {type : String, required : true},
    Canton : {type : String, required : true},
    Distrito : {type : String, required : true},
    Address : {type : String, required : true},
    CSPhone : {type : String, required : true},
    CSEmail : {type : String, required : true},
    phoneReservations : {type : String, required : true},
    emailReservations : {type : String, required: true},
});

module.exports = mongoose.model('Hotel', HotelSchema);



