/*
Crear un programa que va a crear un reloj digital en el
título. Utilice el método setInterval() para actualizar
el título de la página una vez cada minuto con la hora actual.
*/


//creamos la funcion
function actualizarHora() {
    var horaActual = new Date();

    var hora = horaActual.getHours();
    var minuto = horaActual.getMinutes();
    var segundos = horaActual.getSeconds();

    //accedemos con el dom al titulo y le asignamos la hora
    document.title= hora + ":" + minuto + ":" + ":" +segundos;

}

//llamamos a la funcion
setInterval(actualizarHora,1000);