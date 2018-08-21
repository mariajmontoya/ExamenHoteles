function hotelRegistry(photel) {

    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/hotelRegistry',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
            hotelName : photel[0],
            Provincia : photel[1],
            Canton : photel[2],
            Distrito : photel[3],
            Location : photel[4],
            Address : photel[5],
            CSPhone : photel[6],
            CSEmail : photel[7],
            phoneReservations: photel[8],
            emailReservations: photel[9]
        }
    });

    peticion.done(function (response) {
        respuesta = response;
    });

    peticion.fail(function (response) {
        console.log(response);
    });

    return respuesta;
}

function listHotel(){
    let listHotel = [];

    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/listHotel',
        type : 'get',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            
        }
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
       
      });

      return respuesta;
}

function updateHotel(photel){
    let respuesta = '';
    // let contrasennaAutogenerada = ftnGeneradorContrasenna();
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/updateHotel',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            hotelName : photel[0],
            Provincia : photel[1],
            Canton : photel[2],
            Distrito : photel[3],
            Location : photel[4],
            Address : photel[5],
            CSPhone : photel[6],
            CSEmail : photel[7],
            phoneReservations: photel[8],
            emailReservations: photel[9],
            _id : photel[10]
        }
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
       
      });

      return respuesta;
}


function updateHotelStatus(photel, estado) {
    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/deactivateHotel',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
            _id: photel._id,
            Status: estado,
        }
    });

    peticion.done(function (response) {
        console.log('desactivó bien');
        respuesta = response;
    });

    peticion.fail(function (response) {
        console.log('desactivó mal');
    });

    return respuesta;
}

function deleteHotel(pHotel){
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/deleteHotel',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            _id : pHotel
        }
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
       
      });

      return respuesta;
}
