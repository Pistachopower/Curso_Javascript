/*
Crear   un   formulario   que   contiene   un   conjunto   de   casillas   de   verificación   
con   diferentes tipos   de   cafés   ­   espresso,   cappuccino,   moka,   y   
así   sucesivamente.   Pida   al   usuario su   nombre   y   número   de   habitación   
y   seleccionar   un   tipo   de   café.   Indicar   al   usuario   que va   a   enviar
el   café   a   su   número   de   habitación.   Cree   las   cookie   para   recordar   
las preferencias   del   usuario.   La   próxima   vez   que   el   usuario  entre en la
página, en introduzca su nombre de usuario y habitación, se mostrará su café favorito. 
Después de haber pedido 3 cafés, se le dirá que hay una tarifa especial y su próximo café será gratuito.
*/

window.addEventListener("load", inicializar);

function inicializar() {
    
    // Obtenemos el objeto formulario con todas las etiquetas
    const formulario = document.getElementById('ordenFormulario');

    //con el objeto formulario usamos la propiedad onsubmit (sirve cuando
    //el usuario da click en submit o enter)
    //dentro de ella usamos una función anonima 
    formulario.onsubmit = function () {
        // Capturar los valores
        const nombre = document.getElementById('nombre').value.trim();
        const numHabitacion = document.getElementById('numHabitacion').value.trim();

        
        const bebidaSeleccionada = document.querySelector('input[name="bebidas"]:checked');



    //guardamos el texto que vamos a mostrar
    //var mensaje= mensaje.textContent = nombre + " se te va a llevar el café";
    }
}

function obtenerTipoCafe() {


}