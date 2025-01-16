/*
Crea en JavaScript tradicional ( Vanilla JS ) un formulario de login para la
empresa DWC con dos campos, correo electrónico y departamento al que pertenece.
Realiza una validación dónde el correo debe ser válido y corporativo (dwc.com). Si la
validación es correcta se enviarán los datos y se creará una cookie con el email y el
departamento. La próxima vez que el usuario cargue la página, se rellenarán
automáticamente los campos del formulario.
B. [ 1 puntos ] Realiza las modificaciones necesarias para que el almacenamiento del
correo y el email no se pase al servidor en cada petición y el almacenamiento dure sólo
durante la sesión abierta en el navegador.

*/


// Se asegura de que el código se ejecute una vez que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", inicializar);

function inicializar() {
    // Llamamos a la función para autocompletar los campos si existen cookies
    autocompletarFormulario();

    // Asignamos el manejador para el evento de submit del formulario
    const form = document.getElementById("loginForm");
    form.addEventListener("submit", manejarFormulario);
}

// Función para obtener una cookie por su nombre
function getCookie(name) {
    let cookieArr = document.cookie.split(";");
    for (let i = 0; i < cookieArr.length; i++) {
        let cookie = cookieArr[i].trim();
        if (cookie.startsWith(name + "=")) {
            return cookie.substring(name.length + 1);
        }
    }
    return null;
}

// Función para establecer una cookie (con duración de sesión)
function setCookie(name, value) {
    // Aquí añadimos una pequeña verificación para ver si la cookie realmente se establece
    document.cookie = name + "=" + value + "; path=/";  // Cookie de sesión, duración durante la sesión
    console.log(`Cookie ${name} set to: ${value}`); // Mostramos un mensaje en consola
}

// Función para borrar una cookie
function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    console.log(`Cookie ${name} deleted`);  // Mostramos un mensaje en consola
}

// Función para validar el correo electrónico (debe ser de dominio dwc.com)
function validarEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@dwc\.com$/;
    return regex.test(email);
}

// Función para autocompletar los campos del formulario si existen cookies
function autocompletarFormulario() {
    const email = getCookie("email");
    const department = getCookie("department");

    // Si las cookies existen, completamos los campos del formulario
    if (email && department) {
        document.getElementById("email").value = email;
        document.getElementById("department").value = department;
        console.log(`Autocompletando formulario con correo: ${email} y departamento: ${department}`);
    }
}

// Función para manejar el submit del formulario
function manejarFormulario(event) {
    // Evitamos el envío por defecto del formulario
    event.preventDefault();

    // Obtenemos los valores de los campos del formulario
    const email = document.getElementById("email").value;
    const department = document.getElementById("department").value;

    // Validamos que el correo electrónico sea válido y corporativo
    if (!validarEmail(email)) {
        alert("Por favor, ingrese un correo electrónico válido de la empresa (ejemplo@dwc.com).");
        return;
    }

    // Si la validación es correcta, almacenamos los valores en cookies
    setCookie("email", email);
    setCookie("department", department);

    // Confirmamos que los datos fueron guardados
    alert("Datos guardados correctamente.");
}
