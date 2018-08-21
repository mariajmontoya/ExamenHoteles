
'use strict'
const nodeMailer = require('nodemailer');
const transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mmontoyab@ucenfotec.ac.cr',
        pass: 'P3rrog@to2196'
    }
});
let mailOptions = {
    from: 'mmontoyab@ucenfotec.ac.cr',
    to: '',
    subject: '',
    html: ''
};

module.exports.envio=function(datos) {

    mailOptions.to = datos.to;
    mailOptions.subject = datos.subject;
    mailOptions.html =
        `<html>
            <head>
                ${datos.head}
            </head>
            <body>
                ${datos.body} 
            </body>
        </html>`;
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
};
