'use strict';
const express = require('express');
const router = express.Router();
const hotel = require('./hotel.api');


router.route('/hotelRegistry')
    .post(function(req, res){           
    hotel.hotelRegistry(req, res);
});

router.route('/updateHotel')
    .post(function(req, res){
    hotel.updateHotel(req, res); 
});

router.route('/listHotel')
    .get(function(req, res){
    hotel.listHotel(req, res);
});

router.route('/filterHotel')
    .get(function(req, res){
    hotel.filterHotel(req, res);
}); 

router.route('/deactivateHotel')
    .post(function(req, res){
    hotel.deactivateHotel(req, res);
});

router.route('/deleteHotel') 
    .post(function(req, res){
    hotel.deleteHotel(req, res);
});

router.route('/findHotelById')
    .post(function(req,res){
    hotel.findHotelById(req, res); 
});

module.exports = router;
