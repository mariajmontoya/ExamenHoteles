'use strict';
//para que se conecte a la base de datos de mongo, necesito de mongoose
const userModel = require('./user.model');
const nodeMailer = require('nodemailer');

const transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mmontoyab@ucenfotec.ac.cr',
        pass: 'P3rrog@to2196'
    },
    secure: false, 
    tls: {
        rejectUnauthorized: false
    }
});

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
            let mailOptions2 = {
                from: 'mmontoyab@ucenfotec.ac.cr',
                to: newUser.Email,
                subject: 'Bienvenido',
                html: 
                        `
                        <html>
                        <head>
                            <style>
                                .tituloPrincipal{
                                    text-decoration: underline;                          
                                }
                            </style>
                        </head>
                        <body>
                            <h1 class='tituloPrincipal'>Bienvenido ${newUser.nombre}</h1>
                            <p>Tu registro fue exitoso</p>
                            <p> Puedes ingresar con tu correo electrónico</p>
                            <p>Contraseña: ${newUser.Password}</p>
                            <p>Te esperamos!</p>
                        </body>
                    </html>
                                `
            };
            transporter.sendMail(mailOptions2, function (error, info) {
                if (error) {
                    console.log('Error:' + error);
                } else {
                    console.log('Email sent: ' + info.response+error);
                }
            });
			
            res.json({
                succes: true,
                msj: 'El usuario fue registrado con éxito'
            });

        }

    });

};

module.exports.listUser = function(req, res){
    userModel.find().then(
        function(user){
            res.send(user);
        });
};