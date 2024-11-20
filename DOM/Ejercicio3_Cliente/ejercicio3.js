/*
Añadir un campo de texto en el ejercicio anterior,  al lado 
de la fecha de nacimiento en el que el usuario no pueda
escribir y aparezca la edad del usuario.

nelson galicia
12345678914536
*/

window.addEventListener("load", inicializar, false);

function inicializar() {

    //seleccionamos con el campo del texto con el id
    var campoTexto = document.getElementById('campo estatico');

    // Hacemos que sea de solo lectura (readonly)
    campoTexto.readOnly = true;
}


