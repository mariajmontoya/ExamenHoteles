'use strict';

let inputhotelName;
let inputProvincia;
let inputCanton;
let inputDistrito;
let inputLocation;
let inputAddress;
let inputCSPhone;
let inputCSEmail;
let inputphoneReservations;
let inputemailReservations;

inputhotelName = document.querySelector('#txthotelName');
inputProvincia = document.querySelector('#txtProvincia');
inputCanton = document.querySelector('#txtCanton');
inputDistrito = document.querySelector('#txtDistrito');
inputLocation = document.querySelector('#txtLocation');
inputAddress = document.querySelector('#txtAddress');
inputCSPhone = document.querySelector('#txtCSPhone');
inputCSEmail = document.querySelector('#txtCSEmail');
inputphoneReservations = document.querySelector('#txtphoneReservations');
inputemailReservations = document.querySelector('#txtemailReservations');

let botonRegistro = document.querySelector('#btnHotel');
botonRegistro.addEventListener('click' , hotelRegistration);

function hotelRegistration(){
    let infoHotel =[];
    let bError = false;

    let hotelName = inputhotelName.value;
    let Provincia = inputProvincia.value;
    let Canton = inputCanton.value;
    let Distrito = inputDistrito.value;
    let Location = inputLocation.value;
    let Address = inputAddress.value;
    let CSPhone = inputCSPhone.value;
    let CSEmail = inputCSEmail.value;
    let phoneReservations = inputphoneReservations.value;
    let emailReservations = inputemailReservations.value;

    infoHotel.push(hotelName, Provincia, Canton, Distrito, Location, Address, CSPhone, CSEmail, phoneReservations, emailReservations);
    
    bError = hotelValidation();
    if(bError == true){
        swal({
            type : 'warning',
            title : 'No se pudo registrar el hotel',
            text: 'Por favor revise los campos en rojo',
            confirmButtonText : 'Entendido'
        });
        
        console.log('No se pudo registrar el hotel');
    }else{
        hotelRegistry(infoHotel);
        swal({
            type : 'success',
            title : 'Registro exitoso',
            text: 'El hotel se registró adecuadamente',
            confirmButtonText : 'Entendido'
        })
        // limpiarFormulario();
    }
    
}

/** Select que contiene la lista de provincias**/
listener(inputProvincia, 'change', function () {
    llenarSelect(inputCanton, inputProvincia.value, cantones);
    llenarSelect(inputDistrito, inputProvincia.value, distritos);

});

/**Select que contiene la lista de provincias**/
listener(inputCanton, 'change', function () {
    llenarSelect(inputDistrito, inputCanton.value, distritos);
});

/**Select que contiene la lista de distritos**/
listener(inputDistrito, 'change', function () {
});

function elm(id) {
    return document.querySelector(id);
}

function listener(element, event, action) {
    element.addEventListener(event, action);
}

/**
 *  * Esta funcion llena un elemento HTMLSelectElement con datos dependiendo del valor de otro elemento
 * @param {*} element elemento al cual se le van a generar opciones
 * @param {String} key el valor donde se encuentra la lista
 * @param {JSON} data elemento del cual se sacan los datos dependiendo del value del element
 * @return {void} 
 */
function llenarSelect(element, key, data) {
    key = key.toLowerCase().replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ú/g, 'u').replace(/ñ/g, 'nn').replace(/ /g, '_');
    element.innerHTML = '';
    let lista = data[key];
    element.options[0] = new Option('-Seleccione un ' + element.name + '-', '');
    if (key != '') {
        for (let i = 1; i < lista.length; i++) {
            element.options[i] = new Option(lista[i - 1], lista[i - 1]);
        }
    }
}

/**variable de tipo json que guarda la informacion de los cantones de cada provincia*/
let cantones = {
    san_jose: ["San José", "Escazú", "Desamparados", "Puriscal", "Tarrazú", "Asserí", "Mora", "Goicoechea", "Santa Ana", "Alajuelita", "Vásquez de Coronado", "Acosta", "Tibás", "Moravia", "Montes de Oca", "Turrubares", "Dota", "Curridabat", "Pérez Zeledón", "León Cortés"],
    alajuela: ["Alajuela", "San Ramón", "Grecia", "San Mateo", "Atenas", "Naranjo", "Palmares",
        "Poás", "Orotina", "San Carlos", "Zarcero", "Valverde Vega", "Upala", "Los Chiles", "Guatuso", "Río Cuarto"],
    heredia: ["Heredia", "Barva", "Santo Domingo", "Santa Bárbara", "San Rafael", "San Isidro", "Belén", "Flores",
        "San Pablo", "Sarapiquí"],
    cartago: ["Cartago", "Paraíso", "La Unión", "Jiménez", "Turrialba", "Alvarado", "Oreamuno", "El Guarco"],
    puntarenas: ["Puntarenas", "Esparza", "Buenos Aires", "Montes de Oro", "Osa", "Quepos", "Golfito", "Coto Brus", "Parrita", "Corredores", "Garabito"],
    limon: ["Limón", "Pococí", "Siquirres", "Talamanca", "Matina", "Guácimo"],
    guanacaste: ["Liberia", "Nicoya", "Santa Cruz", "Bagaces", "Carrillo", "Cañas", "Abangares", "Tilarán", "Nandayure", "La Cruz", "Hojancha"]
};
/**variable de tipo json que guarda la informacion de los distritos de cada canton*/
let distritos = {
    san_jose: ["Carmen", "Merced", "Hospital", "Catedral", "Zapote", "San Francisco de Dos Ríos", "La Uruca", "Mata Redonda", "Pavas", "Hatillo", "San Sebastián"],
    escazu: ["Escazú Centro", "San Rafael", "San Antonio"],
    desamparados: ["Desamparados", "San Miguel", "San Juan de Dios", "San Rafael Arriba", "San Antonio", "Frailes", "Patarrá", "San Cristóbal", "Rosario", "Damas", "San Rafael Abajo", "Gravilias", "Los Guido"],
    puriscal: ["Santiago", "Mercedes Sur", "Barbacoas", "Grifo Alto", "San Rafael", "Candelarita", "Desamparaditos", "San Antonio", "Chires"],
    asseri: ["Asserí", "Tarbaca", "Vuelta de Jorco", "San Gabriel", "Legua", "Monterrey", "Salitrillos"],
    mora: ["Colón", "Guayabo", "Tabarcia", "Piedras Negras", "Picagres", "Jaris", "Quitirrisí"],
    goicoechea: ["Guadalupe", "San Francisco", "Calle Blancos", "Mata de Plátano", "Ipís", "Rancho Redondo", "Purral"],
    santa_ana: ["Santa Ana", "Salitral", "Pozos", "Uruca", "Piedades", "Brasil"],
    vasquez_de_coronado: ["San Isidro", "San Rafael", "Dulce Nombre de Jesús", "Patalillo", "Cascajal"],
    alajuelita: ["Alajuelita", "San Josecito", "San Antonio", "Concepción", "San Felipe", "Barrio Lámparas"],
    acosta: ["San Ignacio", "Guaitil", "Palmichal", "Cangrejal", "Sabanillas"],
    tibas: ["San Juan de Tibás", "Cinco Esquinas", "Anselmo Llorente", "León XIII", "Colima"],
    moravia: ["San Vicente", "San Jerónimo", "La Trinidad"],
    montes_de_oca: ["San Pedro", "Sabanilla", "Mercedes", "San Rafael"],
    turrubares: ["San Pablo", "San Pedro", "San Juan de Mata", "San Luis", "Carara"],
    dota: ["Santa María", "Jardín", "Copey"],
    curridabat: ["Curridabat", "Granadilla", "Sánchez", "Tirrases"],
    perez_zeledon: ["San Isidro de El General", "El General", "Daniel Flores", "Rivas", "San Pedro", "Platanares", "Pejibaye", "Cajón", "Barú", "Río Nuevo", "Páramo", "La Amistad"],
    leon_cortes: ["San Pablo", "San Andrés", "Llano Bonito", "San Isidro", "Santa Cruz", "San Antonio"],
    alajuela: ["Alajuela", "San José", "Carrizal", "San Antonio", "Guácima", "San Isidro", "Sabanilla", "San Rafael de Ojo de Agua", "Río Segundo", "Desamparados", "Turrúcares", "Tambor", "La Garita", "Sarapiquí"],
    san_ramon: ["San Ramón", "Santiago", "San Juan", "Piedades Norte", "Piedades Sur", "San Rafael", "San Isidro", "Ángeles", "Alfaro", "Volio", "Concepción", "Zapotal", "Peñas Blancas", "San Lorenzo"],
    grecia: ["Grecia", "San Isidro", "San José", "San Roque", "Tacares", "Puente de Piedra", "Bolívar"],
    san_mateo: ["San Mateo", "Desmonte", "Jesús María", "Labrador"],
    atenas: ["Atenas", "Jesús", "Mercedes", "San Isidro", "Concepción: Río Grande", "San José: San José Sur", "Santa Eulalia", "Escobal"],
    naranjo: ["Naranjo", "San Miguel", "San José", "Cirrí", "San Jerónimo", "San Juan", "Rosario", "Palmitos"],
    palmares: ["Palmares", "Zaragoza", "Buenos Aires", "Santiago", "Candelaria", "Esquipulas", "La Granja"],
    poas: ["San Pedro", "San Juan", "San Rafael", "Carrillos", "Sabana Redonda"],
    orotina: ["Orotina", "El Mastate", "Hacienda Vieja", "Coyolar", "La Ceiba"],
    san_carlos: ["Quesada", "Florencia", "Buenavista", "Aguas Zarcas", "Venecia", "Pital", "La Fortuna", "La Tigra", "La Palmera", "Venado", "Cutris", "Monterrey", "Pocosol"],
    zarcero: ["Zarcero", "Laguna", "Tapezco", "Guadalupe", "Palmira", "Zapote", "Brisas"],
    valverde_vega: ["Sarchí Norte", "Sarchí Sur", "Toro Amarillo", "San Pedro", "Rodríguez"],
    upala: ["Upala", "Aguas Claras", "San José", "Bijagua", "Delicias", "Dos Ríos", "Yolillal", "Canalete"],
    los_chiles: ["Los Chiles", "Caño Negro", "El Amparo", "San Jorge"],
    guatuso: ["San Rafael", "Buenavista", "Cote", "Katira"],
    rio_cuarto: ["Ángeles Norte", "Bolaños", "Bosque Alegre", "Caño Negro", "El Carmen", "Carrizal", "Colonia del Toro", "Crucero", "La Flor", "Hule", "La Trinidad", "Laguna", "Los Lagos", "La Merced", "Montelirio", "Naranjales", "Palmar", "Palmera", "Pata de Gallo", "Peoresnada", "El Pinar", "Pueblo Nuevo", "San Fernando", "San Gerardo", "San Jorge", "San José", "San Rafael", "San Vicente", "Santa Isabel", "Santa Rita", "La Tabla", "La Victoria"],
    cartago: ["Oriental", "Occidental", "Carmen", "San Nicolás(Taras){ ", "Agua Caliente(San Francisco){ ", "Guadalupe(Arenilla){ ", "Corralillo", "Tierra Blanca", "Dulce Nombre", "Llano Grande", "Quebradilla"],
    paraiso: ["Paraíso", "Orosi", "Cachí", "Santiago", "Llanos de Santa Lucía"],
    la_union: ["Tres Ríos", "San Diego", "San Juan", "San Rafael", "Concepción", "Dulce Nombre", "San Ramón", "Río Azul"],
    jimenez: ["Juan Viñas", "Tucurrique", "Pejibaye"],
    turrialba: ["Turrialba", "La Suiza", "Peralta", "Santa Cruz", "Teresita", "Pavones", "Tuis", "Tayutic", "Santa Rosa", "Tres Equis", "La Isabe", "Chirripó"],
    alvarado: ["Villa de Pacayas", "Distrito Cervantes", "Santa Cruz", "Capellades"],
    oreamuno: ["San Rafael", "Cot", "Potrero Cerrado", "Potrero Cerrado", "Santa Rosa"],
    el_Guarco: ["El Tejar", "San Isidro", "Tobosi", "Patio de Agua"],
    limon: ["Limón", "Valle La Estrella", "Liverpool", "Matama"],
    pococi: ["Guápiles", "Jiménez", "La Rita", "Roxana", "Cariari", "Colorado", "La Colonia"],
    siquirres: ["Siquirres", "Pacuarito", "Florida", "Germania", "Cairo", "Alegría"],
    talamanca: ["Bratsi", "Sixaola", "Cahuita", "Telire"],
    matina: ["Matina", "Bataán", "Carrandí"],
    guacimo: ["Guácimo", "Mercedes", "Pocora", "Río Jiménez", "Duacarí"],
    puntarenas: ["Puntarenas", "Pitahaya", "Chomes", "Lepanto", "Paquera", "Manzanillo", "Guacimal", "Barranca", "Monteverde", "Isla del Coco", "Cóbano", "Chacarita", "Chira", "Acapulco", "El Roble", "Arancibia"],
    esparza: ["Espíritu Santo", "San Juan Grande", "Macacona", "San Rafael", "San Jerónimo", "Caldera"],
    buenos_aires: ["Buenos Aires", "Volcán", "Potrero Grande", "Boruca", "Pilas", "Colinas", "Chánguena", "Biolley", "Brunka"],
    montes_de_oro: ["Miramar", "La Unión", "San Isidro"],
    osa: ["Cortés", "Palmar", "Sierpe", "Bahía Ballena", "Piedras Blancas", "Bahía Drake"],
    quepos: ["Quepos", "Savegre", "Naranjito"],
    golfito: ["Golfito", "Puerto Jiménez", "Guaycará", "Pavón", "Puerto Jiménez", "Guaycará", "Pavón"],
    coto_brus: ["San Vito", "Sabalito", "Aguabuena", "Limoncito", "Pittier", "Gutiérrez Brown"],
    parrita: ["Parrita"],
    corredores: ["Corredor", "La Cuesta", "Paso Canoas", "Laurel", "Gutiérrez Brown"],
    garabito: ["Jacó", "Tárcoles"],
    heredia: ["Heredia", "Mercedes", "San Francisco", "Ulloa", "Vara Blanca"],
    barva: ["Barva ", "San Pedro", "San Pablo", "San Roque", "Santa Lucía", "San José de la Montaña"],
    santo_domingo: ["Santo Domingo ", "San Vicente", "San Miguel", "Paracito", "Santo Tomás", "Santa Rosa", "Tures", "Pará"],
    san_rafael: ["San Rafael ", "San Josecito", "Santiago", "Los Ángeles", "Concepción"],
    san_isidro: ["San Isidro ", "San José", "Concepción", "San Francisco"],
    belen: ["San Antonio ", "La Ribera", "La Asunción"],
    flores: ["San Joaquín ", "Barrantes", "Llorente"],
    san_pablo: ["San Pablo ", "Rincón de Sabanilla"],
    sarapiqui: ["Puerto Viejo ", "La Virgen", "Horquetas", "Llanuras del Gaspar", "Cureña"],
    liberia: ["Liberia", "Cañas Dulces", "Mayorga", "Nacascolo", "Curubandé"],
    nicoya: ["Nicoya", "Mansión", "San Antonio", "Quebrada Honda", "Sámara", "Nosara", "Belén de Nosarita"],
    santa_cruz: ["Santa Cruz", "Bolsón", "Veintisiete de Abril", "Tempate", "Cartagena", "Cuajiniquil", "Diriá", "Cabo Velas", "Tamarindo"],
    bagaces: ["Bagaces", "La Fortuna", "Mogote", "Río Naranjo"],
    carrillo: ["Filadelfia", "Belén", "Palmira", "Sardinal"],
    cannas: ["Cañas", "Palmira", "San Miguel", "Bebedero", "Porozal"],
    abangares: ["Las Juntas", "Sierra", "San Juan", "Colorado"],
    tilaran: ["Tilarán", "Quebrada Grande", "Tronadora", "Santa Rosa", "Líbano", "Tierras Morenas", "Arenal"],
    nandayure: ["Carmona", "Santa Rita", "Zapotal", "San Pablo", "Porvenir", "Bejuco"],
    la_cruz: ["La Cruz", "Santa Cecilia", "La Garita", "Santa Elena"],
    hojancha: ["Hojancha", "Monte Romo", "Puerto Carrillo", "Huacas", "Matambú"],
    tarrazu: ["San Marcos", "San Lorenzo", "San Carlos"]
};

function hotelValidation(){
    let bError = false;

    let regexSoloLetras = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ]+$/;
    let regexFormatoCorreo = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    let regexSoloNumeros = /^[0-9]+$/;

 
    if(inputhotelName.value == '' ){
        inputhotelName.classList.add('error-input');
        bError = true;
    }else{
        inputhotelName.classList.remove('error-input');
    }

    if(inputLocation.value == ''){
        inputLocation.classList.add('error-input');
        bError = true;
    }else{
        inputLocation.classList.remove('error-input');
    }
 
     if(inputProvincia.value == ''){
        inputProvincia.classList.add('error-input');
        bError = true;
    }else{
        inputProvincia.classList.remove('error-input');
    }
 
     if(inputCanton.value == ''){
        inputCanton.classList.add('error-input');
        bError = true;
    }else{
        inputCanton.classList.remove('error-input');
    }
    if(inputDistrito.value == ''){
        inputDistrito.classList.add('error-input');
        bError = true;
    }else{
        inputDistrito.classList.remove('error-input');
    }
   
    if(inputAddress.value == '' ){
        inputAddress.classList.add('error-input');
        bError = true;
    }else{
        inputAddress.classList.remove('error-input');
    }
    
    if(inputCSPhone.value == '' ){
        inputCSPhone.classList.add('error-input');
        bError = true;
    }else{
        inputCSPhone.classList.remove('error-input');
    }

   
    if(inputCSEmail.value == ''  ){
        inputCSEmail.classList.add('error-input');
        bError = true;
    }else{
        inputCSEmail.classList.remove('error-input');
    }

   
    if(inputphoneReservations.value == '' ){
        inputphoneReservations.classList.add('error-input');
        bError = true;
    }else{
        inputphoneReservations.classList.remove('error-input');
    }

    if(inputemailReservations.value == ''){
        inputemailReservations.classList.add('error-input');
        bError = true;
    }else{
        inputemailReservations.classList.remove('error-input');
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

function  FiltrarListaTiquetes (){

    let criterioBusqueda = inputBusqueda.value.toUpperCase();
    let filasTiquetes = tablaTiquetes.getElementsByTagName('tr');
    let datosFila = null;
    let datos = null;
    let valor = null;
    let coincide = false;

    for (let i = 1; i < filasTiquetes.length; i++) {    
        datosFila = filasTiquetes[i];
        datos = datosFila.getElementsByTagName('td');
        coincide = false;

        for (let j = 0; j < datos.length; j++) {
            valor = datos[j].innerHTML.toUpperCase();

            if(valor.includes(criterioBusqueda)){
                coincide = true;
            } 
        }
        if(coincide){
            datosFila.classList.remove('esconder');
        } else {
            datosFila.classList.add('esconder');
        }
    }

   
};

function ftnEliminarTiquete(){
	let tiquetes = [this.name,true];
    desactivarTiquete(tiquetes);
    swal({
        type : 'success',
        title : 'Eliminación exitosa',
        text: 'El tiquetes ha sido eliminado adecuadamente',
        confirmButtonText : 'Entendido'
    });
    ListaTiquete();
};

function  filtrarTiquetesPorEncargado (){
    let listaDatos = [];
    let listaTiquetes = obtenerListaTiquetes();

    for (let i = 0; i < listaTiquetes.length; i++) {
        if (JSON.parse(listaTiquetes[i].encargado)._id == getUsuarioAutenticado()._id) {
            listaDatos.push(listaTiquetes[i]);
        }
        
    }

    return listaDatos;
};

function guardarTiquete(Tiquete) {
    sessionStorage.setItem("tiqueteSeleccionado", JSON.stringify(Tiquete));
};