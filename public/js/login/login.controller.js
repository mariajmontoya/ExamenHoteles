'use strict';

const btnIngresarUsuario = document.querySelector('#btnInicioSesion');
// const aSalirUsuario = document.querySelector('#btnSalir');

btnIngresarUsuario.addEventListener('click' , getCredencialesUsuario);

// aSalirUsuario.addEventListener('click' , cerrarSesion);

function obtenerUrl() {
    let paginaUrl = window.location.href;
    let valor = false;
    
    if(paginaUrl.includes("login.html")){
        valor = true;
    }
 
    return valor;
 }; 

function ftnRevisionCredenciales (){

    if(obtenerUrl()){
        return;
    } else {
        let credenciales = getUsuarioAutenticado();
        
        if(credenciales == '' || credenciales == null){
            swal({
                type : 'warning',
                title : 'Sin credenciales',
                text: 'Por favor, iniciar sesión.',
                confirmButtonText : 'Entendido'
            }).then(
                function(){
                    window.location.replace('../../html/login.html');
                }
            );
        } else {
            if(autenticarCredenciales(credenciales.Correo,credenciales.Contrasenna)){
                // validarMenu();
                return;
            } else {
                swal({
                    type : 'warning',
                    title : 'Usuario Inválido',
                    text: 'Por favor, iniciar sesión con otro usuario.',
                    confirmButtonText : 'Entendido'
                }).then(
                    function(){
                        window.location.replace('../../html/login.html');
                    }
                );
            }
        }
    }
} ;
   
function getCredencialesUsuario() {
    let correo = document.querySelector("#txtCorreoInicio").value;
    let contrasenna = document.querySelector("#txtContrasennaInicio").value;

    let valido = validarCredenciales(correo, contrasenna);

    if (valido) {
        swal({
            type : 'success',
            title : 'Bienvenido',
            text: 'Acceso permitido',
            confirmButtonText : 'Entendido'}).then(
                function(){
                    console.log("Acceso permitido");
                    redireccionarUsuario();
                }
            );
    } else {
        swal({
            type : 'warning',
            title : 'Acceso denegado',
            text: 'Por favor revise el usuario y/o la clave que digitó',
            confirmButtonText : 'Entendido'
        });
        console.log("Acceso denegado");
    }
}

function validarCredenciales(correo, contrasenna) {
    let valido = iniciarSesion(correo, contrasenna);
    return valido;
}

function cerrarSesion() {
    removerCredenciales();
    window.location.replace('./html/login.html');
}

function redireccionarUsuario() {
    let usuarioAutenticado = getUsuarioAutenticado();

    switch (usuarioAutenticado.UserType) {
        case "0":
            // acciones de administrador            
            window.location.replace('./landing.html');
            break;
        case "1":
            // acciones de profesor
            window.location.replace('./landing.html');
            break;                                     
        default:
            break;
    }
}



