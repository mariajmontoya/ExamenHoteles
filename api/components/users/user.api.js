'use strict';
//para que se conecte a la base de datos de mongo, necesito de mongoose
const userModel = require('./user.model');

module.exports.userRegistry = function(req, res){
    let newUser = new userModel({
        Id : req.body.Id,
        FristName: req.body.FristName,
        MiddleName: req.body.MiddleName,
        Lastname : req.body.Lastname,
        SecondLastname : req.body.SecondLastname,
        DateBirth: req.body.DateBirth,
        Gender : req.body.Gender,
        imagen : req.body.imagen,
        Email  : req.body.Email,
        Password : req.body.Password,
        PasswordConfirmation : req.body.PasswordConfirmation,
        UserType : 1
    });

    newUser.save(function(error){
        if(error){
            res.json({success : false, msg : 'User not registered, and error has ocurred' + error});
        }else{
            res.json({success : true, msg : 'Successfully registered'});
        }

    });

};

module.exports.listUser = function(req, res){
    userModel.find().then(
        function(user){
            res.send(user);
        });
};