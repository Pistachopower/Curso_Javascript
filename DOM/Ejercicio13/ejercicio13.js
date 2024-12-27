/*
Crear   un   formulario   que   contenga   un   cuadro   de   texto.   
Después   de   que   el   usuario introduzca   texto,   todas   las   
letras   se   convertirán   en   minúsculas,   tan   pronto   como   
haga clic en cualquier otro lugar el formulario.
*/

window.addEventListener("load", inicializar);

function inicializar() {
    var nombreObjeto = document.getElementById('nombre'); // Obtener el objeto del input

    // Agregar el evento blur para convertir a minúsculas
    nombreObjeto.addEventListener("blur", function() {
        // Convertir el texto a minúsculas
        nombreObjeto.value = nombreObjeto.value.trim().toLowerCase();
    });
}