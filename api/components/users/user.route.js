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


module.exports = router;


