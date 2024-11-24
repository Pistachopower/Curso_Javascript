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
    //obtenemos la etiqueta con id mensaje
    var mensaje = document.getElementById("mensaje").value;

    //como mensaje obtiene aparte del caracter un salto de linea lo quitamos
   

    // Eliminar saltos de línea
    mensaje = mensaje.replace('\n','');

    //restamos la longitud de la cadena mensaje
    var caracteresRestantes = 145 - mensaje.length; //obtenemos la longitud del mensaje
    
    //sobreescribe la el valor de la etiqueta actualizando caracteresRestante segun digite el usuario
    var prueba= document.getElementById("contador").textContent = "Caracteres restantes: " + caracteresRestantes;

    // valida que solo se usen caracteres alfanuméricos y signos de puntuación
    var regex = /^[A-Za-z0-9 .,!?()'"-]+$/;

    
    var errorMensaje = document.getElementById("errorMensaje");

    //Si el mensaje no coincide con el patrón definido por la expresión regular regex
    if (!regex.test(mensaje)) {
        //obtiene el objeto de la etiqueta y escribe el mensaje de error en el html
        errorMensaje.textContent = "Solo se permiten caracteres alfanuméricos y signos de puntuación.";

        
    } else {
        //en caso contrario sobreescribe el mensaje de error
        errorMensaje.textContent = "";

        
    }
}


