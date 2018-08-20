let imagenUrl = '';
$(function() {

    $.cloudinary.config({ cloud_name: 'dspuap7va', api_key: '197862372221396'});

    // Upload button
    let uploadButton = $('#btnSeleccionarImagen');

    // Upload button event
    uploadButton.on('click', function(e){
        // Initiate upload
        cloudinary.openUploadWidget({ cloud_name: 'dspuap7va', upload_preset: 'bltw16ob', tags: ['cgal']},
        function(error, result) {
            if(error) console.log(error);
            // If NO error, log image data to console
            let id = result[0].public_id;
             console.log(id);
            imagenUrl = processImage(id);
            let cadena = processImage(id),
            patron = "file",
            nuevoValor = "http",
            nuevaCadena = cadena.replace(patron, nuevoValor);
            console.log(imagenUrl);
            document.querySelector('#txtImagen').src = nuevaCadena;
            //document.querySelector('#txtImagen').src = imagenUrl;
            return imagenUrl;
        });
    });
})

function processImage(id) {
    let options = {
        client_hints: true,
    };
    return  $.cloudinary.url(id, options);
}
