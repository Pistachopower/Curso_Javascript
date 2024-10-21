/*
Hacer un programa en el que el usuario que introduzca, nombre, apellidos, DNI y 
fecha de nacimiento separado por comas. Esta entrada de datos se repetirá hasta 
que el usuario introduzca la cadena vacía. El programa debe guardar los datos en 
un array bidimensional.
*/

// Función para obtener los datos del usuario
const obtenerDatosUsuario = () => {
    const entrada = prompt("Introduce tu nombre, apellidos, DNI y fecha de nacimiento (separados por comas). Deja vacío para terminar:");
    return entrada ? entrada.split(',').map(dato => dato.trim()) : null;
};

// Función principal para recopilar y mostrar los datos
const recopilarDatos = () => {
    const datosUsuarios = [];
    let datos;

    // Utilizamos un do...while para seguir pidiendo datos hasta que se introduzca una cadena vacía
    do {
        datos = obtenerDatosUsuario();
        if (datos) {
            datosUsuarios.push(datos);
        }
    } while (datos !== null); // Continuar mientras no sea nulo

    // Imprimir los datos ingresados
    console.log("Datos de los usuarios ingresados:");
    datosUsuarios.forEach((usuario, index) => {
        console.log(`Usuario ${index + 1}: Nombre: ${usuario[0]}, Apellidos: ${usuario[1]}, DNI: ${usuario[2]}, Fecha de Nacimiento: ${usuario[3]}`);
    });
};

// Llamar a la función principal
recopilarDatos();

