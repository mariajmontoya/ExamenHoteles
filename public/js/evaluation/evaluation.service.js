function registerEvaluation(pEvaluation) {

    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/hotelEvaluationRegistry',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
            _id: Evaluation[0], 
            Food : Evaluation[1],
            CustomerService : Evaluation[2],
            Rooms: Evaluation[3],
            Building : Evaluation[4],
            Cleaning : Evaluation[5],
            HotelId : Evaluation[6]
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
