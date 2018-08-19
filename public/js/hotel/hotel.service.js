function hotelRegistry(Hotel) {

    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/hotelRegistry',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
            hotelName : Hotel[0],
            Location : Hotel[1],
            Provincia : Hotel[2],
            Canton : Hotel[3],
            Distrito : Hotel[4],
            Address : Hotel[5],
            CSPhone : Hotel[6],
            CSEmail : Hotel[7],
            phoneReservations: Hotel[8],
            emailReservations: Hotel[9]
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