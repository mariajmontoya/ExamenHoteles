'use strict';


function obtenerDatosCliente(){
    let infoCliente =[];
    let bError = false;

    let sNombreCliente = inputNombreCliente.value;
    let sCedula = Number(inputCedulaCliente.value);
    let sProvincia = inputProvincia.value;
    let sCanton = inputCanton.value;
    let sDistrito = inputDistrito.value;
    let sPrimerNombre = inputPrimerNombre.value;
    let sPrimerApellido = inputPrimerApellido.value;
    let sTelefono = Number(inputTelefonoCliente.value);
    let sCorreo = inputCorreo.value;
    let sUbicacion = JSON.stringify({latitud: marker.getPosition().lat(), longitud: marker.getPosition().lng()});

    infoCliente.push(sNombreCliente, sCedula, sProvincia, sCanton, sDistrito, sPrimerNombre, sPrimerApellido,sTelefono, sCorreo, sUbicacion, desactivar);
    
    bError = validar();
    if(bError == true){
        swal({
            type : 'warning',
            title : 'No se pudo registrar el cliente',
            /*text: 'Por favor revise los campos en rojo',*/
            confirmButtonText : 'Entendido'
        });
        
        console.log('No se pudo registrar el usuario');
    }else{
        registrarCliente(infoCliente);
        swal({
            type : 'success',
            title : 'Registro exitoso',
            text: 'El cliente se registró adecuadamente',
            confirmButtonText : 'Entendido'
        }).then(
            function(){
                window.location.href = "../../html/cliente/cliente_listar.html"
            }
        );
        limpiarFormulario();
    }
    
}

function validar(){
    let bError = false;

    let regexSoloLetras = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ]+$/;
    let regexSoloNumeros = /^[0-9]{1,8}$/;
    let regexFormatoCorreo = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    let regexCedulaJuridica = /^[0-9]{1,10}$/;

    

    //Validación del NombreEmpresa
    if(inputNombreCliente.value == '' || (regexSoloLetras.test(inputNombreCliente.value)==false) ){
        inputNombreCliente.classList.add('error-input');
        bError = true;
    }else{
        inputNombreCliente.classList.remove('error-input');
    }
    //Validación de la CedulaJuridica
    if(inputCedulaCliente.value == '' || (regexCedulaJuridica.test(inputCedulaCliente.value)==false) ){
        inputCedulaCliente.classList.add('error-input');
        bError = true;
    }else{
        inputCedulaCliente.classList.remove('error-input');
    }
     //Validación de la Distrito
     if(inputDistrito.value == ''){
        inputDistrito.classList.add('error-input');
        bError = true;
    }else{
        inputDistrito.classList.remove('error-input');
    }
     //Validación de la Provincia
     if(inputProvincia.value == ''){
        inputProvincia.classList.add('error-input');
        bError = true;
    }else{
        inputProvincia.classList.remove('error-input');
    }
     //Validación de la Canton
     if(inputCanton.value == ''){
        inputCanton.classList.add('error-input');
        bError = true;
    }else{
        inputCanton.classList.remove('error-input');
    }
    //Validación del NombreContacto
    if(inputPrimerNombre.value == '' ){
        inputPrimerNombre.classList.add('error-input');
        bError = true;
    }else{
        inputPrimerNombre.classList.remove('error-input');
    }
    //Validación del ApellidoContacto
    if(inputPrimerApellido.value == '' ){
        inputPrimerApellido.classList.add('error-input');
        bError = true;
    }else{
        inputPrimerApellido.classList.remove('error-input');
    }

    //Validación de la TelefonoContacto
    if(inputTelefonoCliente.value == '' || (regexSoloNumeros.test(inputTelefonoCliente.value) == false) ){
        inputTelefonoCliente.classList.add('error-input');
        bError = true;
    }else{
        inputTelefonoCliente.classList.remove('error-input');
    }

    //Validación de la CorreoContacto
    if(inputCorreo.value == '' || (regexFormatoCorreo.test(inputCorreo.value)==false) ){
        inputCorreo.classList.add('error-input');
        bError = true;
    }else{
        inputCorreo.classList.remove('error-input');
    }

    return bError;
}

function ListarTiquetes(){
    let ListaTiquete = [];

    ListaTiquete = fitrarListaTiquetes();

    console.log("lista tiquetes");
    console.log(ListaTiquete);
    let tbody = document.querySelector('#tblTiquetes tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < ListaTiquete.length; i++){
        
        if(ListaTiquete[i]['desactivado']){
            continue;
        } else { 
        
            let fila = tbody.insertRow();
            let celdaCodigoTiquete = fila.insertCell();
            let celdaCedulaJuridica = fila.insertCell();
            let celdaNombreProyecto = fila.insertCell();
            let celdaFecha = fila.insertCell();
            let celdaEstado = fila.insertCell();
            let cConfiguracion = fila.insertCell();
           
    
            celdaCodigoTiquete.innerHTML = ListaTiquete[i]['codigo_tiquete'];
            celdaCedulaJuridica.innerHTML = ListaTiquete[i]['Cedula'];
            celdaNombreProyecto.innerHTML = ListaTiquete[i]['Proyecto'];
            celdaFecha.innerHTML = ListaTiquete[i]['fecha'];
            celdaEstado.innerHTML = ListaTiquete[i]['Estado'];

           // validación para mostrar el estado del usuario en la tabla. Copiar esto
           if (ListaTiquete[i]['Desactivado'] == true) {
            celdaEstado.innerHTML = "Activo";
        } else if(ListaTiquete[i]['Desactivado'] == false) {
            celdaEstado.innerHTML = "Inactivo";
        }
       

        //Íconos para editar
        let aModificar = document.createElement('a'); // * * * agregar todos estos * * *
        aModificar.classList.add('fas');
        aModificar.classList.add('fa-eye');
        aModificar.dataset._id =  ListaTiquete[i]['_id'];         

        if (getUsuarioAutenticado().TipoUsuario == 3 || getUsuarioAutenticado().TipoUsuario == 1) {
            // modificar estado del cliente. Copiar esto
            let btnModificarEstado = document.createElement('button'); 
            btnModificarEstado.dataset._id =  ListaTiquete[i]['_id']; 

            // validación para mostrar el nombre del botón según el estado de usuario. Copiar esto
            if (ListaTiquete[i]['Estado'] == "Pendiente") {
                btnModificarEstado.innerHTML = 'Finalizado';
            } else if(ListaTiquete[i]['Estado'] == "Finalizado") {
                btnModificarEstado.innerHTML = 'Pendiente';
            }
            
            // llamado para la función modificar estado del cliente. Copiar esto
            btnModificarEstado.addEventListener('click', function(){
                let estado = ListaTiquete[i]['Estado'];
                if(estado == "Pendiente" ){
                    estado = "Finalizado";
                }else if(estado == "Finalizado"){
                    estado = "Pendiente";
                }
                actualizarEstadoTiquete(ListaTiquete[i], estado);
                ListarTiquetes();
            });
            cConfiguracion.appendChild(btnModificarEstado);
        }


        aModificar.addEventListener('click', function(){
            ftnMostrarTiquete(ListaTiquete[i]);
        });

        cConfiguracion.appendChild(aModificar);

        }
    }

};

