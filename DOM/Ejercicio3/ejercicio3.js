/*
Añadir un campo de texto en el ejercicio anterior,  al lado 
de la fecha de nacimiento en el que el usuario no pueda
escribir y aparezca la edad del usuario.

nelson galicia
12345678914536
*/

/*
window: hace referencia a la ventana del navegador
addEventListener: escucha los eventos que pasan en window
load: se dispara cuando la pagina se ha cargado correctamente
inicializar: nombre de la funcion que se activa cuando load se dispara
*/

// Esperamos a que el DOM esté completamente cargado para ejecutar la función inicializar
window.addEventListener("load", inicializar);

function inicializar() {
    // Seleccionamos la etiqueta del campo
    var campoTexto = document.getElementById('campo estatico');

    // Lo hacemos solo lectura (readonly)
    campoTexto.readOnly = true;
}

function procesarFormulario() {
    // Obtenemos la fecha de nacimiento y la pasamos al campo de texto
    var edad = calcularFechaNac();

    // Colocamos la fecha en el campo "Nuevo campo"
    document.getElementById('campo estatico').value = edad;
}

function calcularFechaNac() {
    // Obtenemos el valor de la fecha de nacimiento
    var fechaNac = document.getElementById('fecha-nac').value;

     // Convertimos el string a un objeto Date
     var fechaNacimiento = new Date(fechaNac);

     // Obtenemos la fecha actual
     var fechaHoy = new Date();
 
     // Calculamos la diferencia en años. getFullYear() obtiene la edad en 4 digitos 
     var edad = fechaHoy.getFullYear() - fechaNacimiento.getFullYear();

    // Retornamos la edad
    return edad;
}









