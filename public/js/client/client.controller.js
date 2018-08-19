'use strict';
let Id;
let FristName;
let MiddleName;
let Lastname;
let SecondLastname;
let DateBirth;
let Gender;
let Picture;
let Email;
let Password;
let PasswordConfirmation;

function initializeVariables() {
    Id = Number(document.querySelector('#txtId')).value;
    FristName = document.querySelector('#txtFristName').value;
    MiddleName = document.querySelector('#txtMiddleName').value;
    Lastname = document.querySelector('#txtLastname').value;
    SecondLastname = document.querySelector('#txtSecondLastname').value; 
    DateBirth = document.querySelector('#txtDateBirth').value; 
    Gender = document.querySelector('#txtGender').value; 
    Picture = document.querySelector('#txtPicture').value; 
    Email = document.querySelector('#txtEmail').value;
    SecondPasswordLastname = document.querySelector('#txtPassword').value;  
    PasswordConfirmation = document.querySelector('#txtPasswordConfirmation').value; 
}

function userRegistration(){
    let infoUser =[];
    let bError = false;

    initializeVariables();

    infoUser.push(Id, FristName, MiddleName, Lastname, SecondLastname, DateBirth, Gender, Picture, Email, Password, PasswordConfirmation);
    
    bError = validar();
    if(bError == true){
        swal({
            type : 'warning',
            title : 'No se pudo registrar el cliente',
            text: 'Por favor revise los campos en rojo',
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
        cleanForm();
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
   


    
    if(inputId.value == '' || (regexSoloNumeros.test(inputId.value)==false) ){
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
   
    if(inputDateBirth.value == '' || (regexSoloNumeros.test(inputId.value)==false) ){
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

    
    if(inputEmail.value == '' || (regexFormatoCorreo.test(inputEmail.value) == false) ){
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
