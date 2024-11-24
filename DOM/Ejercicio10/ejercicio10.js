window.addEventListener("load", inicializar);

function inicializar() {
    // Agregar eventos de entrada para validación en tiempo real
    document.getElementById('nombre').addEventListener('input', validarNombre);
    document.getElementById('apellidos').addEventListener('input', validarApellidos);
    document.getElementById('usuario').addEventListener('input', validarUsuario);
    document.getElementById('passwd').addEventListener('input', validarContraseña);
    document.getElementById('passwdConfirm').addEventListener('input', validarContraseñaConfirm);
    document.getElementById('telefono').addEventListener('input', validarTelefono);
    document.getElementById('email').addEventListener('input', validarEmail);
}

function validarNombre() {
    const nombre = document.getElementById('nombre').value.trim();
    const mensaje = document.getElementById("mensaje");
    if (!nombre) {
        mensaje.textContent = "El nombre es requerido.";
    } else {
        mensaje.textContent = "";
    }
}

function validarApellidos() {
    const apellidos = document.getElementById('apellidos').value.trim();
    const mensaje = document.getElementById("mensaje");
    if (!apellidos) {
        mensaje.textContent = "Los apellidos son requeridos.";
    } else {
        mensaje.textContent = "";
    }
}

function validarUsuario() {
    const usuario = document.getElementById('usuario').value.trim();
    const mensaje = document.getElementById("mensaje");
    if (!usuario.includes('@gmail.com')) {
        mensaje.textContent = "El nombre de usuario debe ser un correo de Gmail.";
    } else {
        mensaje.textContent = "";
    }
}

function validarContraseña() {
    const passwd = document.getElementById('passwd').value;
    const mensaje = document.getElementById("mensaje");
    if (passwd.length < 8) {
        mensaje.textContent = "La contraseña debe tener al menos 8 caracteres.";
    } else {
        mensaje.textContent = "";
    }
}

function validarContraseñaConfirm() {
    const passwd = document.getElementById('passwd').value;
    const passwdConfirm = document.getElementById('passwdConfirm').value;
    const mensaje = document.getElementById("mensaje");
    if (passwd !== passwdConfirm) {
        mensaje.textContent = "Las contraseñas no coinciden.";
    } else {
        mensaje.textContent = "";
    }
}

function validarTelefono() {
    const telefono = document.getElementById('telefono').value.trim();
    const mensaje = document.getElementById("mensaje");
    if (telefono.length !== 9) {
        mensaje.textContent = "El teléfono debe tener 9 dígitos.";
    } else {
        mensaje.textContent = "";
    }
}

function validarEmail() {
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById("mensaje");
    if (!email) {
        mensaje.textContent = "El correo electrónico es requerido.";
    } else {
        mensaje.textContent = "";
    }
}

function confirmarReset() {
    // Resetear el formulario directamente sin confirmación
    document.getElementById('formulario').reset();
    // Limpiar mensajes de error o éxito
    document.getElementById("mensaje").textContent = ""; 
}