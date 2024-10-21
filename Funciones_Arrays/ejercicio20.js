  // Función para obtener los datos del usuario
  const obtenerDatosUsuario = () => {
    const entrada = prompt("Introduce tu nombre, apellidos, DNI y fecha de nacimiento (separados por comas). Deja vacío para terminar:");
    return entrada ? entrada.split(',').map(dato => dato.trim()) : null;
};

// Función para calcular la edad a partir de la fecha de nacimiento
const calcularEdad = (fechaNacimiento) => {
    const [dia, mes, año] = fechaNacimiento.split('/');
    const fechaNac = new Date(año, mes - 1, dia);
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNac.getFullYear();
    const m = hoy.getMonth() - fechaNac.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < fechaNac.getDate())) {
        edad--;
    }
    return edad;
};

// Función para imprimir los datos de los usuarios
const imprimirDatos = (datosUsuarios) => {
    console.log("Datos de los usuarios ingresados:");
    datosUsuarios.forEach((usuario, index) => {
        console.log(`Usuario ${index + 1}: Nombre: ${usuario.nombre}, Apellidos: ${usuario.apellidos}, DNI: ${usuario.dni}, Fecha de Nacimiento: ${usuario.fechaNacimiento}, Edad: ${usuario.edad}`);
    });
};

// Función para buscar un usuario por apellidos
const buscarPorApellidos = (datosUsuarios, apellidos) => {
    return datosUsuarios.filter(usuario => usuario.apellidos.toLowerCase() === apellidos.toLowerCase());
};

// Función para buscar un usuario por DNI
const buscarPorDNI = (datosUsuarios, dni) => {
    return datosUsuarios.find(usuario => usuario.dni === dni);
};

// Función para buscar por edad
const buscarPorEdad = (datosUsuarios, edad) => {
    return datosUsuarios.filter(usuario => usuario.edad === edad);
};

// Función principal para recopilar y mostrar los datos
const recopilarDatos = () => {
    const datosUsuarios = [];
    let datos;

    // Utilizamos un do...while para seguir pidiendo datos hasta que se introduzca una cadena vacía
    do {
        datos = obtenerDatosUsuario();
        if (datos) {
            const [nombre, apellidos, dni, fechaNacimiento] = datos;
            const edad = calcularEdad(fechaNacimiento);
            datosUsuarios.push({ nombre, apellidos, dni, fechaNacimiento, edad });
        }
    } while (datos !== null); // Continuar mientras no sea nulo

    // Imprimir los datos ingresados
    imprimirDatos(datosUsuarios);

    // Ejemplo de búsqueda por apellidos
    const apellidosABuscar = prompt("Ingrese apellidos para buscar:");
    const resultadosPorApellidos = buscarPorApellidos(datosUsuarios, apellidosABuscar);
    console.log("Resultados de la búsqueda por apellidos:", resultadosPorApellidos);

    // Ejemplo de búsqueda por DNI
    const dniABuscar = prompt("Ingrese DNI para buscar:");
    const resultadoPorDNI = buscarPorDNI(datosUsuarios, dniABuscar);
    console.log("Resultado de la búsqueda por DNI:", resultadoPorDNI);

    // Ejemplo de búsqueda por edad
    const edadABuscar = parseInt(prompt("Ingrese edad para buscar:"), 10);
    const resultadosPorEdad = buscarPorEdad(datosUsuarios, edadABuscar);
    console.log("Resultados de la búsqueda por edad:", resultadosPorEdad);
};

// Llamar a la función principal
recopilarDatos();