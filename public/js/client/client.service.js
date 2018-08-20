'use strict';

function userRegistry(pUser){
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/userRegistry',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            Id : pUser[0],
            FristName : pUser[1],
            MiddleName: pUser[2],
            Lastname: pUser[3],
            SecondLastname : pUser[4],
            DateBirth : pUser[5],
            Gender : pUser[6],
            imagen : pUser[7],
            Email : pUser[8],
            Password : pUser[9],
            PasswordConfirmation: pUser[10],
            UserType: 1
        }
      });
    
      peticion.done(function(response){
        respuesta = response;
       });
     
       peticion.fail(function(response){
        console.log(response);
       });

      return respuesta;
}


function randomPasswordGenerador() {

    let length = 5,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}