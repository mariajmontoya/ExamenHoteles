function getUserList(){
    let list = [];

    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/listUser',
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
    
    return list;
}


