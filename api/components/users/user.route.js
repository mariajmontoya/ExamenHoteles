'use strict';
const express = require('express');
const router = express.Router();
const user = require('./user.api');


router.route('/userRegistry')
    .post(function(req, res){           
    user.userRegistry(req, res);
});

router.route('/listUser')
    .get(function(req, res){
    user.listUser(req, res);
});


router.route('/deleteUser') 
    .post(function(req, res){
    hotel.deleteHotel(req, res);
});

router.route('/filterUser')
    .get(function(req, res){
    hotel.filterHotel(req, res);
}); 

router.route('/updateUser')
    .post(function(req, res){
    hotel.updateHotel(req, res); 
});


module.exports = router;


