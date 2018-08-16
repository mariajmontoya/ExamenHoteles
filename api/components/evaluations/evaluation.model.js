'use strict';
let mongoose = require('mongoose');

let EvaluationModel = new mongoose.Schema({
    Food : {type : String, required: true},
    CustomerService : {type: String, required : true},
    Rooms: {type : String, required : true},
    Building : {type : String, required : true},
    Cleaning : {type : String, required : true},
    HotelId : {type : String, require : true}
});

module.exports = mongoose.model('Evaluation', EvaluationModel);
