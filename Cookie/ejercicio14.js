/*
Crear   un   formulario   que   contiene   un   conjunto   de   casillas   de   verificación   
con   diferentes tipos   de   cafés espresso,   cappuccino,   moka,   y   
así   sucesivamente.   Pida   al   usuario su   nombre   y   número   de   habitación   
y   seleccionar   un   tipo   de   café.   Indicar   al   usuario   que va   a   enviar
el   café   a   su   número   de   habitación.   Cree   las   cookie   para   recordar   
las preferencias   del   usuario.   La   próxima   vez   que   el   usuario  entre en la
página, en introduzca su nombre de usuario y habitación, se mostrará su café favorito. 
Después de haber pedido 3 cafés, se le dirá que hay una tarifa especial y su próximo café será gratuito.
*/
window.addEventListener("load", inicializar);

function inicializar() {
    //obtenemos el objeto del formulario
    var formulario = document.getElementById('ordenFormulario');

    // Cargar preferencias del usuario si existen
    //cargarPreferencias();


    formulario.onsubmit = function (event) {
        event.preventDefault(); // Evitar el envío del formulario

        // Capturar los valores
        var nombre = document.getElementById('nombre').value.trim();
        var numHabitacion = document.getElementById('numHabitacion').value.trim();

        //obtenemos el objeto bebida seleccionado en el radio
        var bebidaSeleccionada = document.querySelector('input[name="bebidas"]:checked');

        //seleccionamos el texto del radio seleccionado
        var tipoCafe = bebidaSeleccionada.value;

        document.cookie = `nombre=${nombre}; SameSite=None; Secure`;
        document.cookie = `numHabitacion=${numHabitacion}; SameSite=None; Secure`;
        document.cookie = `tipoCafe=${tipoCafe}; SameSite=None; Secure`;
        

        //pensar en como extraerla, luego compararla si el valor que tienes en los campos y las cookies son iguales 
        //

    }
}

function mostrarInformacionPedido(nombre, numHabitacion, tipoCafe) {
    //obtenemos la etiqueta para escribir 
    var mostrarInformacion = document.getElementById('mostrarInformacion');
    var mensaje= nombre + " su café favorito es " + tipoCafe + " y se lo enviará a la habitación " + numHabitacion;

}
