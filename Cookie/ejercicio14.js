/*
Crear   un   formulario   que   contiene   un   conjunto   de   casillas   de   
verificación   con   diferentes tipos   de   cafés   ­   espresso,   cappuccino,   
moka,   y   así   sucesivamente.   Pida   al   usuario su   nombre   y   número
de   habitación   y   seleccionar   un   tipo   de   café.   Indicar   al   usuario
que va   a   enviar   el   café   a   su   número   de   habitación.   Cree   las
cookie   para   recordar   las preferencias   del   usuario.   La   próxima   vez
que   el   usuario  entre en la   página, en introduzca su nombre de usuario y 
habitación, se mostrará su café favorito. Después de haber pedido 3 cafés, 
se le dirá que hay una tarifa especial y su próximo café será gratuito.
*/


window.addEventListener("load", inicializar);

function inicializar() {
    //obtenemos el elemento padre formulario
    var formulario = document.getElementById('ordenFormulario');

    // Cargar preferencias del usuario si existen
    //cargarPreferencias();

    //se usa para evitar que el formulario se envie
    formulario.onsubmit = function(event) {
        event.preventDefault(); // Evitar el envío del formulario

        // Capturar los valores
        var nombre = document.getElementById('nombre').value.trim();

        var numHabitacion = document.getElementById('numHabitacion').value.trim();

        //obtiene el elemento con el valor seleccionado del cafe
        var bebidaSeleccionada = document.querySelector('input[name="bebidas"]:checked');
        
        //tomamos solamente el valor del elemento seleccionado
        var tipoCafe = bebidaSeleccionada.value;

        // Guardar en cookies
        document.cookie = "nombre=" + nombre; 
        document.cookie = "numHabitacion=" + numHabitacion;
        document.cookie = "tipoCafe="  + tipoCafe;

        //
        var contadorPedidos = parseInt(getCookie('contadorPedidos')) || 0;
        contadorPedidos++;
        document.cookie = `contadorPedidos=${contadorPedidos}; SameSite=None; Secure`;

        // Mostrar información del pedido
        mostrarInformacionPedido(nombre, numHabitacion, tipoCafe, contadorPedidos);
    };
}

function cargarPreferencias() {
    var nombre = getCookie('nombre');
    var numHabitacion = getCookie('numHabitacion');
    var tipoCafe = getCookie('tipoCafe');
    var contadorPedidos = parseInt(getCookie('contadorPedidos')) || 0;

    if (nombre && numHabitacion && tipoCafe) {
        //obtenemos el valor del elemento nombre, numHabitacion y tipoCafe
        document.getElementById('nombre').value = nombre;
        document.getElementById('numHabitacion').value = numHabitacion;


        document.querySelector(`input[name="bebidas"][value="${tipoCafe}"]`).checked = true;
        mostrarInformacionPedido(nombre, numHabitacion, tipoCafe, contadorPedidos);
    }
}

//mostrar cookies
function mostrarInformacionPedido(nombre, numHabitacion, tipoCafe, contadorPedidos) {
    var mostrarInformacion = document.getElementById('mostrarInformacion');
    var mensaje = nombre  + " su café favorito es" + tipoCafe + "y se lo enviará a la habitación" 
     + numHabitacion;
    
    if (contadorPedidos > 2) {
        mensaje += " Felicitaciones! Ha pedido 3 cafés, su próximo café será gratuito.";
    }

    mostrarInformacion.textContent = mensaje;
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
