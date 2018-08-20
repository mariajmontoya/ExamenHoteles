'use strict';
let inputId;
let inputFristName;
let inputMiddleName;
let inputLastname;
let inputSecondLastname;
let inputDateBirth;
let inputGender;
let imagen = imagenUrl;
let inputEmail;
let inputPassword;
let inputPasswordConfirmation;
let inputUserType = "";


    inputId = document.querySelector('#txtId');
    inputFristName = document.querySelector('#txtFristName');
    inputMiddleName = document.querySelector('#txtMiddleName');
    inputLastname = document.querySelector('#txtLastname');
    inputSecondLastname = document.querySelector('#txtSecondLastname'); 
    inputDateBirth = document.querySelector('#txtDateBirth'); 
    inputGender = document.querySelector('#txtGender'); 
    inputEmail = document.querySelector('#txtEmail');
    inputPassword= document.querySelector('#txtPassword');  
    inputPasswordConfirmation = document.querySelector('#txtPasswordConfirmation'); 

    const botonRegistro = document.querySelector('#btnRegistro');
    botonRegistro.addEventListener('click' , userRegistration);

    // inputFiltro.addEventListener('keyup' , function(){
    //     HotelsList(inputFiltro.value)
    // });

function userRegistration(){
    let infoUser =[];
    let bError = false;

    let Id = inputId.value;
    let FristName = inputFristName.value;
    let MiddleName = inputMiddleName.value;
    let Lastname = inputLastname.value;
    let SecondLastname = inputSecondLastname.value;
    let DateBirth = inputDateBirth.value;
    let Gender = inputGender.value;
    let imagen = imagenUrl;
    let Email = inputEmail.value;
    let Password = inputPassword.value;
    let PasswordConfirmation = inputPasswordConfirmation.value;
    let UserType = "";

    infoUser.push(Id, FristName, MiddleName, Lastname, SecondLastname, DateBirth, Gender, imagen, Email, Password, PasswordConfirmation, UserType);
    
    bError = validation();
    if(bError == true){
        swal({
            type : 'warning',
            title : 'No se pudo registrar el cliente',
            text: 'Por favor revise los campos en rojo',
            confirmButtonText : 'Entendido'
        });
        
        console.log('No se pudo registrar el usuario');
    }else{
        userRegistry(infoUser);
        swal({
            type : 'success',
            title : 'Registro exitoso',
            text: 'El cliente se registró adecuadamente',
            confirmButtonText : 'Entendido'
        })
        // cleanForm();
    }
    
}


function cleanForm(){
    inputId.value = '';    
    inputFristName.value = '';
    inputMiddleName.value = '';
    inputLastname.value = '';
    inputSecondLastname.value = '';
    inputDateBirth.value = '';
    inputGender.value = '';
    inputPicture.value = '';
    inputEmail.value = '';
    inputPassword = '';
    inputPasswordConfirmation = '';
}

function validation(){
    let bError = false;

    let regexSoloLetras = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ]+$/;
    let regexSoloNumeros = /^[0-9]{1,8}$/;
    let regexFormatoCorreo = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
   


    
    if(inputId.value == ''   ){
        inputId.classList.add('error-input');
        bError = true;
    }else{
        inputId.classList.remove('error-input');
    }
   
    if(inputFristName.value == '' ){
        inputFristName.classList.add('error-input');
        bError = true;
    }else{
        inputFristName.classList.remove('error-input');
    }
 
     if(inputMiddleName.value == ''){
        inputMiddleName.classList.add('error-input');
        bError = true;
    }else{
        inputMiddleName.classList.remove('error-input');
    }
   
     if(inputLastname.value == ''){
        inputLastname.classList.add('error-input');
        bError = true;
    }else{
        inputLastname.classList.remove('error-input');
    }
    
     if(inputSecondLastname.value == ''){
        inputSecondLastname.classList.add('error-input');
        bError = true;
    }else{
        inputSecondLastname.classList.remove('error-input');
    }
   
    if(inputDateBirth.value == ''  ){
        inputDateBirth.classList.add('error-input');
        bError = true;
    }else{
        inputDateBirth.classList.remove('error-input');
    }

    if(inputGender.value == '' ){
        inputGender.classList.add('error-input');
        bError = true;
    }else{
        inputGender.classList.remove('error-input');
    }

    
    if(inputEmail.value == ''  ){
        inputEmail.classList.add('error-input');
        bError = true;
    }else{
        inputEmail.classList.remove('error-input');
    }


    if(inputPassword.value == '' ){
        inputPassword.classList.add('error-input');
        bError = true;
    }else{
        inputPassword.classList.remove('error-input');
    }

    if(inputPasswordConfirmation.value == '' ){
        inputPasswordConfirmation.classList.add('error-input');
        bError = true;
    }else{
        inputPasswordConfirmation.classList.remove('error-input');
    }

    return bError;
}

function birthDate (){

    let DateBirth = new Date();
    let dd = DateBirth.getDate();
    let mm = DateBirth.getMonth()+1;
    let yyyy = DateBirth.getFullYear();
    let DateBirth = null;

    if(dd<10) {
        dd = '0'+dd
    } 

    if(mm<10) {
    mm = '0'+mm
    } 

    textoDateBirth = yyyy + "-" + mm + "-" + dd;
  
    return textoDateBirth;
}
