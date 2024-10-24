/*
// Función para obtener los datos del usuario
const obtenerDatosUsuario = () => {
    var entrada = prompt("Introduce tu nombre, apellidos, DNI y fecha de nacimiento (separados por comas). Deja vacío para terminar:");
    if (entrada && entrada.trim()) {
        return entrada.split(',').map(dato => dato.trim());
    }
    return null;
};

// Función principal para recopilar y mostrar los datos
const recopilarDatos = () => {
    var datosUsuarios = [];
    var datos;

    // Utilizamos un do...while para seguir pidiendo datos hasta que se introduzca una cadena vacía
    do {
        datos = obtenerDatosUsuario();
        if (datos && datos.length > 0) {
            datosUsuarios.push(datos);
        }
    } while (datos !== null && datos.length > 0);

    // Imprimir los datos ingresados
    alert("Datos de los usuarios ingresados:");

    
    datosUsuarios.forEach((usuario, index) => {
        alert(`Usuario ${index + 1}: Nombre: ${usuario[0]}, Apellidos: ${usuario[1]}, DNI: ${usuario[2]}, Fecha de Nacimiento: ${usuario[3]}`)
        console.log();
    });
};

// Llamar a la función principal
recopilarDatos();


Hacer un programa en el que el usuario que introduzca, nombre, apellidos, DNI y 
fecha de nacimiento separado por comas. Esta entrada de datos se repetirá hasta 
que el usuario introduzca la cadena vacía. El programa debe guardar los datos en 
un array bidimensional.

nelson,diaz,y7777777x,20/04/93
pedro,perez,y8888x,10/03/80
*/

//creamos un array que se ira llenando los datos
var arrayGeneral = new Array();

var datosUsuario = prompt("Ingrese sus datos: ");

while (!(datosUsuario === "")) {

    //convertimos el dato del usuario a un array separados por comas y palabras
    var datosInternos = datosUsuario.split(",");

    // Añadimos el array resultante a nuestro array general
    arrayGeneral.push(datosInternos);

    datosUsuario = prompt("Ingrese sus datos: ");
}






