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
inputAddress = document.querySelector('#txtAddress');
inputCSPhone = document.querySelector('#txtCSPhone');
inputCSEmail = document.querySelector('#txtCSEmail');
inputphoneReservations = document.querySelector('#txtphoneReservations');
inputemailReservations = document.querySelector('#txtemailReservations');

HotelsList();

const botonRegistro = document.querySelector('#btnHotel');
if (botonRegistro != undefined) {
    botonRegistro.addEventListener('click' , hotelRegistration);
}   



function hotelRegistration(){
    let infoHotel =[];
    let bError = false;

    let hotelName = inputhotelName.value;
    let Provincia = inputProvincia.value;
    let Canton = inputCanton.value;
    let Distrito = inputDistrito.value;
    let Location = JSON.stringify({latitud: marker.getPosition().lat(), longitud: marker.getPosition().lng()});
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
        HotelsList();
        cleanForm();
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
    if (element == null)
    return;
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
    
    if(inputCSPhone.value == '' || (regexSoloNumeros.test(inputCSPhone.value)==false) ){
        inputCSPhone.classList.add('error-input');
        bError = true;
    }else{
        inputCSPhone.classList.remove('error-input');
    }

   
    if(inputCSEmail.value == '' || (regexFormatoCorreo.test(inputCSEmail.value)==false) ){
        inputCSEmail.classList.add('error-input');
        bError = true;
    }else{
        inputCSEmail.classList.remove('error-input');
    }

   
    if(inputphoneReservations.value == '' || (regexSoloNumeros.test(inputphoneReservations.value)==false)){
        inputphoneReservations.classList.add('error-input');
        bError = true;
    }else{
        inputphoneReservations.classList.remove('error-input');
    }

    if(inputemailReservations.value == '' || (regexFormatoCorreo.test(inputemailReservations.value)==false)){
        inputemailReservations.classList.add('error-input');
        bError = true;
    }else{
        inputemailReservations.classList.remove('error-input');
    }

    return bError;
}


function HotelsList(){
     let HotelList = listHotel();
     let cardContainer = document.querySelector('#cardContainer');
    // //  let tbody = document.querySelector('#tblHotels tbody');
    // // if(!pFiltro){
    // //     pFiltro = '';
    // }
    // tbody.innerHTML = '';

     if(cardContainer == undefined)
        return;
    if (HotelList == [])
        return;

    for(let i = 0; i < HotelList.length; i++){
        if(HotelList[i]['desactivado']){ // .toLowerCase().includes(pFiltro.toLowerCase())
            // let fila = tbody.insertRow();
            continue;
        } else { 

            console.log(HotelList[i]);

            let card = document.createElement("div");
            card.classList.add("card");

            let imgContainer = document.createElement("div");


            let imgInterContainer = document.createElement("div");
            imgInterContainer.classList.add("img_container");

            let img = document.createElement("img");
            img.src = "../css/images/barcelo.jpg";
            img.alt = "Foto";

            let stars = document.createElement("img");
            stars.src = "../css/images/5.png";
            stars.alt = "Foto";
            stars.classList.add("stars");

            let h2 = document.createElement("h2");
            h2.innerHTML = HotelList[i]['hotelName'];

            let buttonScore = document.createElement("button");
            let buttonScoreText = document.createTextNode("Evaluar hotel");
            buttonScore.appendChild(buttonScoreText);
            buttonScore.addEventListener("click", function(){
                openEvaluationModal(HotelList[i]);
            });
            buttonScore.classList.add("score");

            let buttonStatus = document.createElement("button");
            let buttonStatusText = document.createTextNode("Estado hotel");
            buttonStatus.appendChild(buttonStatusText);
            buttonStatus.addEventListener("click", function(){
                changeHotelStatus(HotelList[i]);
            });
            buttonStatus.classList.add("status");

            let buttonDelete = document.createElement("button");
            let buttonDeleteText = document.createTextNode("Eliminar hotel");
            buttonDelete.appendChild(buttonDeleteText);
            buttonDelete.addEventListener("click", function(){
                deteleHotel(HotelList[i]);
            });
            buttonDelete.classList.add("status");

            let buttonUpdate = document.createElement("button");
            let buttonUpdateText = document.createTextNode("Editar hotel");
            buttonUpdate.appendChild(buttonUpdateText);
            buttonUpdate.addEventListener("click", function(){
                updateHotelData(HotelList[i]);
            });
            buttonUpdate.classList.add("status");

            imgInterContainer.appendChild(img);
            imgContainer.appendChild(imgInterContainer);
            card.appendChild(imgContainer);
            card.appendChild(h2);
            card.appendChild(stars);
            card.appendChild(buttonScore);
            card.appendChild(buttonStatus);
            card.appendChild(buttonDelete);
            card.appendChild(buttonUpdate);
            cardContainer.appendChild(card);

        }
        
    }

};

function changeHotelStatus(hotelData) {
    console.log("cambiar estado hotel");
    if(hotelData["Status"] == "Desactivado") {
        hotelData["Status"] = "Activado";
    } else if(hotelData["Status"] == "Activado") {
        hotelData["Status"] = "Desactivado";
    }

    updateHotelStatus(hotelData, hotelData["Status"]);
    swal({
        type : 'success',
        title : 'Cambio de estado exitoso',
        confirmButtonText : 'Entendido'
    })
}

function deteleHotel(hotelData) {
    console.log("eliminar hotel");
}

function updateHotelData(params) {
    console.log("actualizar información del usuario");
}

function cleanForm(){
    inputhotelName.value = '';    
    inputProvincia.value = '';
    inputCanton.value = '';
    inputDistrito.value = '';
    inputLocation.value = '';
    inputAddress.value = '';
    // document.querySelector('#txtImagen').src = "";
    inputCSPhone.value = '',
    inputCSEmail.value = '';
    inputphoneReservations.value = '';
    inputemailReservations.value = '';
}

function showHotelMoreInfo(pHotelInfo) {
    console.log(pHotelInfo);
}


function updateHotel(){    ////////FUNCION UPDATE HOTEL
    let infoHotel =[];
    let bError = false;

    let hotelName = inputhotelName.value;
    let Provincia = inputProvincia.value;
    let Canton = inputCanton.value;
    let Distrito = inputDistrito.value;
    let Location = JSON.stringify({latitud: marker.getPosition().lat(), longitud: marker.getPosition().lng()});
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
            title : 'Datos erróneos!',
            text: 'Por favor revise los campos en rojo',
            confirmButtonText : 'Entendido'
        })
        console.log('No se pudo modificar el hotel');
    }else{
        updateHotel(infoHotel);
        // ftnDeshabilitarCampos();
        btnUpdate.classList.remove('modificar');
        btnSave.classList.add('modificar');
        swal({
            type : 'success',
            title : 'Modificación exitosa',
            text: 'El hotel se modificó adecuadamente',
            confirmButtonText : 'Entendido'
        });

        window.location.replace('../../html/cliente/cliente_listar.html'); // OMG NO SE COMO LLEGAR A LA FUCKIN CARPETA

    }
    
};








