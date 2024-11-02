/*
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

Implementar funciones para el ejercicio anterior para imprimir los 
datos y para buscar una persona por apellidos, por DNI o por edad. 
¿cómo podríamos optimizar la búsqueda?

nelson,galicia,y6069381v,20/08/93
juan,mario,y587495v,02/05/93

//pedimos la informacion al usuario
var datosUsuario = prompt("Ingrese sus datos: ");

//convertimos el programa a una funcion
var pedirRellenarUsuarios = function (datosUsuario) {
    //creamos un array que se ira llenando los datos
    var arrayGeneral = new Array();

    
    while (!(datosUsuario === "")) {

        //convertimos el dato del usuario a un array separados por comas y palabras
        var datosInternos = datosUsuario.split(",");

        // Añadimos el array resultante a nuestro array general
        arrayGeneral.push(datosInternos);

        datosUsuario = prompt("Ingrese sus datos: ");
    }
    return arrayGeneral;
};


//llamamos a la funcion y pasamos por parametro los datos
//recibimos el array con los datos
var arrayGeneral= pedirRellenarUsuarios(datosUsuario);

//creamos una funcion que imprimira todos los datos
var imprimeTodosDatos = function(arrayGeneral) {
     //tomamos el array que fue rellendo y lo mostramos con un for each
     arrayGeneral.forEach(function(elemento, indice) {
        alert("Elemento: " +  (indice + 1));
        alert(elemento);
        
    });
    
};

//llamamos a la funcion
imprimeTodosDatos(arrayGeneral);

nelson,galicia,y6069381v,20/08/93
juan,mario,y587495v,02/05/93

*/





//buscar una persona por apellidos
const buscarApellido = function(arrayGeneral, apellidoBuscar) {

    //creamos un nuevo array que guardara el apellido
    /*
    filter devuelve un nuevo array si include devuelve true
    
    */
    return arrayGeneral.filter(elementoArray => elementoArray.includes(apellidoBuscar));
	
};

//array de prueba
var arrayGeneral = [
    ['nelson', 'galicia', 'y6069381v', '20/08/93'],
    ['juan', 'perez', 'y587495v', '02/05/93']
   
  ];

  
//llamamos a la funcion
alert(buscarApellido(arrayGeneral, 'galicia'));


