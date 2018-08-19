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