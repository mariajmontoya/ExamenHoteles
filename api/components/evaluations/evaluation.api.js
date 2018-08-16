'use strict';
//para que se conecte a la base de datos de mongo, necesito de mongoose
const EvaluationModel = require('./evaluation.model');

module.exports.hotelEvaluationRegistry = function(req, res){
    let newEvaluation = new EvaluationModel({
        Food : req.body.Food,
        CustomerService : req.body.CustomerService,
        Rooms: req.body.Rooms,
        Building : req.body.Building,
        Cleaning : req.body.Cleaning,
        });

        newEvaluation.save(function(error){
        if(error){
            res.json({success : false, msg : 'Evaluation not registered, and error has ocurred' + error});
        }else{
            res.json({success : true, msg : 'Successfully registered'});
        }

    });

};
