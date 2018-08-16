'use strict';
const express = require('express');
const router = express.Router();
const evaluation = require('./evaluation.api');


router.route('/hotelEvaluationRegistry')
    .post(function(req, res){           
    evaluation.hotelEvaluationRegistry(req, res);
});

module.exports = router;
