/*
Realizar   un   examen   tipo   test   online   de   2  preguntas con 4 
respuestas (sólo   se   puede seleccionar   1).   

Cuando   el   usuario   seleccione   una respuesta,  hacerle   saber   si
es correcta o incorrecta y mostrar la 
respuesta correcta en un campo de texto aparte.
*/

window.addEventListener("load", inicializar);

function inicializar() {

    //llamamos a la funcion después de cargar el html
    //validarRespuesta();

}

function validarRespuesta() {

    //Creamos un objeto con una clave y el valor
    const respuestasCorrectas = {
        pregunta1: 'a',   // Respuesta correcta para la Pregunta 1
        pregunta2: 'c'   // Respuesta correcta para la Pregunta 2
    };

    //variables que almacena las respuestas del usuario
    var seleccionUsuarioPreg1 = '';
    let seleccionUsuarioPreg2 = '';

    // Comprobamos cuál fue la respuesta seleccionada 
    //por usuario en la primera pregunta y la guardamos
    for (let i = 0; i < document.formulario.pregunta1.length; i++) {

        //checked comprueba si se ha seleccionado la etiqueta
        if (document.formulario.pregunta1[i].checked) {
            //almacena seleccion usuario
            seleccionUsuarioPreg1 = document.formulario.pregunta1[i].value;
        }
    }

    //seleccion usuario pregunta2
    for (let i = 0; i < document.formulario.pregunta2.length; i++) {

        //checked comprueba si se ha seleccionado la etiqueta
        if (document.formulario.pregunta2[i].checked) {
            //almacena seleccion usuario
            seleccionUsuarioPreg2 = document.formulario.pregunta2[i].value;
        }
    }

    // Limpiamos cualquier resultado anterior antes de mostrar los nuevos
    document.getElementById("resultadoPregunta1").innerHTML = '';
    document.getElementById("resultadoPregunta2").innerHTML = '';

    // Comprobamos la respuesta para la pregunta 1
    if (seleccionUsuarioPreg1 === respuestasCorrectas.pregunta1) {
        document.getElementById("resultadoPregunta1").innerHTML = "Es correcta la selección de la pregunta 1.";

    } else {
        document.getElementById("resultadoPregunta1").innerHTML = "Incorrecta. La respuesta correcta es: París.";
    }

    // Comprobamos la respuesta para la pregunta 2
    if (seleccionUsuarioPreg2 === respuestasCorrectas.pregunta2) {
        document.getElementById("resultadoPregunta2").innerHTML = "Es correcta la selección de la pregunta 2.";

    } else {
        document.getElementById("resultadoPregunta2").innerHTML = "Incorrecta. La respuesta correcta es: 7.";
    }


}