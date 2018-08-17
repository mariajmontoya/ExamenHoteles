function autenticarCredenciales (Email, Password){
    let userList = getUserList();
    let valido = false;

    for (let i = 0; i < userList.length; i++) {
        if (userList[i]["Email"] == Email && userList[i]["Password"] == Password) {
            valido = true;
            return valido;
        }
    }

    return valido;
};


function iniciarSesion(Email, Password) {
    let userList = getUserList();
    let valido = false;

    for (let i = 0; i < userList.length; i++) {
        if (userList[i]["Email"] == Email && userList[i]["Password"] == Password) {
            setUsuarioSessionStorage(userList[i]);
            valido = true;
            return valido;
        }
    }

    return valido;
}

function setUsuarioSessionStorage(infoUsuario) {
    console.log("Usuario Autenticado");
    console.log(infoUsuario);
    sessionStorage.setItem("UsuarioAutenticado", JSON.stringify(infoUsuario));
    console.log(JSON.parse(sessionStorage.getItem("UsuarioAutenticado")));
}

function removerCredenciales() {
    sessionStorage.clear();
}

function getUsuarioAutenticado() {
    return JSON.parse(sessionStorage.getItem("UsuarioAutenticado"));
}

