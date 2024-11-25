/*
Añadir un botón de reseteo de formulario con confirmación antes de borrar.
nelson
galicia
g@gmail.com
12345678
12345678
m
g@gmail.com
*/
window.addEventListener("load", inicializar);

function inicializar() {
    
    document.getElementById('confirmar').addEventListener('click', function() {
      
        //para validar sexo
        var regex = /^[hHmM]$/;

        // Limpiar mensajes anteriores
        var mensaje = document.getElementById("mensaje");
        mensaje.textContent = "";

        // Obtener los valores de los campos
        var nombre = document.getElementById('nombre').value.trim();
        var apellidos = document.getElementById('apellidos').value.trim();
        var usuario = document.getElementById('usuario').value.trim();
        var passwd = document.getElementById('passwd').value;
        var passwdConfirm = document.getElementById('passwdConfirm').value; // Cambiado para usar el ID correcto
        var fechaNacimiento = document.getElementById('dia').value;
        var sexo = document.getElementById('sexo').value.trim();
        var telefono = document.getElementById('telefono').value.trim();
        var email = document.getElementById('email').value.trim();

        // Se usa para guardar los errores de tipo cadena
        let errores = [];

        if (!nombre) {
            //errores.push("El nombre es requerido.");
            var nombreError = document.getElementById("nombreError");
            nombreError.textContent = "El nombre es requerido.";
        }

        if (!apellidos) {
            //errores.push("Los apellidos son requeridos.");
            var apellidoError = document.getElementById("apellidoError");
            apellidoError.textContent = "Los apellidos son requeridos.";
        }

        //si usuario no contiene la cadena gmail... agrega al array la cadena con el
        //error correspondiente nombreUsuarioError
        if (!usuario.includes('@gmail.com')) {
            //errores.push("El nombre de usuario debe ser un correo de Gmail.");
            var nombreUsuarioError = document.getElementById("nombreUsuarioError");
            nombreUsuarioError.textContent = "El nombre de usuario debe ser un correo de Gmail.";
        }

        if (passwd.length < 8) {
            errores.push("La contraseña debe tener al menos 8 caracteres.");
        }

        if (passwd !== passwdConfirm) {
            errores.push("Las contraseñas no coinciden.");
        }

        if (!fechaNacimiento) {
            errores.push("La fecha de nacimiento es requerida.");
        }

        if (!regex.test(sexo)) {
            errores.push("El sexo debe ser 'Mujer' o 'Hombre'.");
        }

        if (telefono.length !== 9) {
            errores.push("El teléfono debe tener 9 dígitos.");
        }

        if (!email) {
            errores.push("El correo electrónico es requerido.");
        }

        //Si la longitud del array errores es mayor a 0 
        if (errores.length > 0) {
            mensaje.textContent = errores.join(" ");
        } else {
            // Aquí puedes agregar la lógica para enviar el formulario si no hay errores
            mensaje.textContent = "Formulario enviado correctamente.";
            // Por ejemplo, puedes usar: document.getElementById('formulario').submit();
        }
    });
}

function confirmarReset() {
    // Resetear el formulario directamente sin confirmación
    document.getElementById('formulario').reset();
    // Limpiar mensajes de error o éxito
    document.getElementById("mensaje").textContent = ""; 
}