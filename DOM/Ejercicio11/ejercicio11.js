/*
Crear   un   formulario   que   contiene   dos   campos   de   texto   
contraseña.   Cuando   el   usuario   sale   de   cada   campo   de   
texto,   utilice   el   controlador   de eventos   para   Blur   y   
comprobar   si   el   usuario   ha   introducido   nada   en   el   campo
respectivo. Si   el   usuario   no   lo   hizo,   enviar   una   alerta   
para   decírselo,   y   utilizar   el   método   focus()   para devolver el 
foco al campo de texto que el usuario acaba de abandonar.

*/

window.addEventListener("load", inicializar);

function inicializar() {
    //obtenemos los elementos 1 y 2 de las contraseñas
    var contrasena1 = document.getElementById('contrasena1');
    var contrasena2 = document.getElementById('contrasena2');
    
    //obtenemos los elementos que muestran el mensaje de error de la etiqueta span
    var error1 = document.getElementById('error1'); // Mensaje de error para contrasena1
    var error2 = document.getElementById('error2'); // Mensaje de error para contrasena2

    // Función que verifica si el campo está vacío cuando el usuario lo abandona (blur)
    //event: es un objeto que contiene información sobre el evento (en este caso, cuando el campo pierde el foco).
    function verificarCampoVacio(event) {
        //target: da referencia al elemento que disparó el evento
        const campo = event.target; // El campo que ha perdido el foco


        //si el campo.id es igual a contrasena1 guarda ese valor en errorMensaje o en caso contrario guarda el error2
        const errorMensaje = campo.id === 'contrasena1' ? error1 : error2; // Selecciona el mensaje de error correspondiente

        // Verificamos si el campo está vacío
        if (campo.value.trim() === '') {
            errorMensaje.style.display = 'inline'; // Muestra el mensaje de error
        } else {
            errorMensaje.style.display = 'none'; // Si no está vacío, oculta el mensaje de error
        }
    }

    // cuando el usuario sale del campo de contraseña se activa el evento y llama a la funcion
    contrasena1.addEventListener('blur', verificarCampoVacio);
    contrasena2.addEventListener('blur', verificarCampoVacio);
}




