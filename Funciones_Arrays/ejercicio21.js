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

// Función para filtrar usuarios mayores de edad
const mayorEdad = (datosUsuarios) => {
    const mayores = datosUsuarios.filter(usuario => usuario.edad >= 18);
    const ventana = window.open("", "Mayores de Edad", "width=400,height=300");
    ventana.document.write("<h3>Usuarios Mayores de Edad</h3><ul>");
    mayores.forEach(usuario => {
        ventana.document.write(`<li>Nombre: ${usuario.nombre}, Apellidos: ${usuario.apellidos}, DNI: ${usuario.dni}, Fecha de Nacimiento: ${usuario.fechaNacimiento}, Edad: ${usuario.edad}</li>`);
    });
    ventana.document.write("</ul>");
    ventana.document.close();
};

// Función para filtrar usuarios menores de edad
const menorEdad = (datosUsuarios) => {
    const menores = datosUsuarios.filter(usuario => usuario.edad < 18);
    const ventana = window.open("", "Menores de Edad", "width=400,height=300");
    ventana.document.write("<h3>Usuarios Menores de Edad</h3><ul>");
    menores.forEach(usuario => {
        const edadRestante = 18 - usuario.edad;
        ventana.document.write(`<li>Nombre: ${usuario.nombre}, Apellidos: ${usuario.apellidos}, DNI: ${usuario.dni}, Días/Años restantes para la mayoría de edad: ${edadRestante} años</li>`);
    });
    ventana.document.write("</ul>");
    ventana.document.close();
};

// Función para modificar datos de un usuario
const modificarDatos = (datosUsuarios) => {
    const dni = prompt("Introduce el DNI del usuario a modificar:");
    const usuario = buscarPorDNI(datosUsuarios, dni);
    if (usuario) {
        const datoAModificar = prompt("¿Qué dato deseas modificar? (nombre, apellidos, dni, fecha de nacimiento)");
        const nuevoValor = prompt(`Introduce el nuevo valor para ${datoAModificar}:`);
        usuario[datoAModificar] = nuevoValor; // Modificamos el dato
        usuario.edad = calcularEdad(usuario.fechaNacimiento); // Recalculamos la edad
        console.log("Datos modificados:", usuario);
    } else {
        console.log("Usuario no encontrado.");
    }
};

// Función para eliminar un usuario
const eliminarUsuario = (datosUsuarios) => {
    const dni = prompt("Introduce el DNI del usuario a eliminar:");
    const index = datosUsuarios.findIndex(usuario => usuario.dni === dni);
    if (index !== -1) {
        const confirmacion = confirm("¿Estás seguro de que deseas eliminar este usuario?");
        if (confirmacion) {
            datosUsuarios.splice(index, 1); // Eliminar el usuario
            console.log("Usuario eliminado.");
        } else {
            console.log("Eliminación cancelada.");
        }
    } else {
        console.log("Usuario no encontrado.");
    }
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

    // Funciones de búsqueda y modificaciones
    mayorEdad(datosUsuarios);
    menorEdad(datosUsuarios);
    modificarDatos(datosUsuarios);
    eliminarUsuario(datosUsuarios);
};

// Llamar a la función principal
recopilarDatos();