/*
Escribir un script que mostrará el nombre del navegador , 
la versión y el sistema operativo que esté utilizando. 
Prueba tu programa en distintos navegadores, el objeto 
Navigator no está estandarizado.

alert("Nombre del navegador: " + navigator.userAgent
    + "\n" + " Versión del sitema operativo: ");

Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:131.0) Gecko/20100101 Firefox/131.0
*/

//creo una variable que almacena en cadena toda la informacion del navegador
var informacionTodoDelNavegador= navigator.userAgent;

//seleccionamos por indice el nombre del navegador
var nombreNavegador= informacionTodoDelNavegador.substring(0,7);

//seleccionamos la version del navegador
var versionNavegador= informacionTodoDelNavegador.substring(65);

//sistema operativo que pertenece al navegador
var sitemaOperativoNavegador= informacionTodoDelNavegador.substring(17,31);
alert("Información del navegador: \n" + " Nombre del navegador:" + nombreNavegador
    + "\n" + " Version del navegador: " + versionNavegador 
    + "\n" + "Sistema operativo: " + sitemaOperativoNavegador
);


/*

// Obtener información del navegador
var informacionTodoDelNavegador = navigator.userAgent;

// Función para obtener el nombre del navegador
function obtenerNombreNavegador(ua) {
    if (ua.indexOf("Firefox") > -1) return "Firefox";
    if (ua.indexOf("Chrome") > -1) return "Chrome";
    if (ua.indexOf("Safari") > -1) return "Safari";
    if (ua.indexOf("MSIE") > -1 || ua.indexOf("Trident") > -1) return "Internet Explorer";
    return "Navegador desconocido";
}

// Función para obtener la versión del navegador
function obtenerVersionNavegador(ua) {
    var version = /(?:Firefox|Chrome|Version)[\/\s](\d+\.\d+)/.exec(ua);
    return version ? version[1] : "Versión desconocida";
}

// Función para obtener el sistema operativo
function obtenerSistemaOperativo(ua) {
    if (ua.indexOf("Win") > -1) return "Windows";
    if (ua.indexOf("Mac") > -1) return "MacOS";
    if (ua.indexOf("X11") > -1 || ua.indexOf("Linux") > -1) return "Linux";
    return "Sistema operativo desconocido";
}

// Obtener los datos
var nombreNavegador = obtenerNombreNavegador(informacionTodoDelNavegador);
var versionNavegador = obtenerVersionNavegador(informacionTodoDelNavegador);
var sistemaOperativoNavegador = obtenerSistemaOperativo(informacionTodoDelNavegador);

// Mostrar alerta con la información
alert("Información del navegador: \n" +
      "Nombre del navegador: " + nombreNavegador + "\n" +
      "Versión del navegador: " + versionNavegador + "\n" +
      "Sistema operativo: " + sistemaOperativoNavegador);

*/