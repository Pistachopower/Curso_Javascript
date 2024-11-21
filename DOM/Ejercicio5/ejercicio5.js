/*
Realizar  un   formulario   para   envío   de   SMS   con   una   área   
de   texto   de   145 caracteres como máximo, no debe permitir escribir más. 
Sólo se permiten alfanuméricos y signos de puntuación. Se debe mostrar el 
número de caracteres permitidos que le quedan al usuario para poder escribir.
*/

window.addEventListener("load", inicializar);

function inicializar() {

    //llamamos a la funcion después de cargar el html
}

function actualizarContador() {
    //obtenemos la etiqueta
    var mensaje = document.getElementById("mensaje").value;

    //restamos 
    var caracteresRestantes = 145 - mensaje.length; //obtenemos la longitud del mensaje
    

    document.getElementById("contador").textContent = "Caracteres restantes: " + caracteresRestantes;

    // valida que solo se usen caracteres alfanuméricos y signos de puntuación
    const regex = /^[A-Za-z0-9 .,!?()'"-]+$/;

    
    const errorMensaje = document.getElementById("errorMensaje");

    if (!regex.test(mensaje)) {
        errorMensaje.textContent = "Solo se permiten caracteres alfanuméricos y signos de puntuación.";
    } else {
        errorMensaje.textContent = "";
    }
}


