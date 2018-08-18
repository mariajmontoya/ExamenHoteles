



let food;
let customerService;
let Rooms;
let Building;
let Cleaning;
let HotelId;

function initializeVariables() {
    food = Number(document.querySelector('#txtNombre')).value;
    customerService = document.querySelector('#txtCedula').value;
    Rooms = document.querySelector('#txtProvincia').value;
    Building = document.querySelector('#txtCanton').value;
    Cleaning = document.querySelector('#txtDistrito').value; 
}


function registerEvaluation(){
    let evualuationData =[];
    let bError = false;

    initializeVariables();

    evualuationData.push(food, customerService, 
        Rooms, Building, Cleaning, HotelId);
    
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