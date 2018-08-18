'use strict';
const express = require('express');
const router = express.Router();
const evaluation = require('./evaluation.api');


router.route('/hotelEvaluationRegistry')
    .post(function(req, res){           
    evaluation.hotelEvaluationRegistry(req, res);
});

router.route('/getEvaluations')
    .get(function (req, res) {
        evaluation.listar(req, res);
    });

module.exports = router;
