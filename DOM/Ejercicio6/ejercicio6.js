/*
Crear   un   formulario   que   utiliza   un   campo   de   entrada   de   texto, que   
pida   al   usuario   que escriba   su   nombre   en   letras   mayúsculas.   El   
botón   de   envío   será   una   imagen.   Validar que   el   formulario   no   está
vacío y   que   el   usuario   ha   escrito   su   nombre   sólo   con   letras 
mayúsculas. Envíe el formulario a un programa de servidor si es correcto.
*/
window.addEventListener("load", inicializar);

function inicializar() {

    //onclick: activa la funcion anonima que recibe por parametro
    //una variable llamada evento (contiene las propiedades y metodos)
    document.getElementById("miBoton").onclick = function(evento) {
        // Prevenir el envío del formulario
        evento.preventDefault();
        
        // Obtenemos el valor del input
        var nombre = document.getElementById("nombre").value;

        // Expresión regular para validar que el nombre solo tenga letras mayúsculas
        var regex = /^[A-Z]+$/;

        // Obtener el elemento donde se mostrará el mensaje
        var mensaje = document.getElementById("mensaje");

        // Validar que el nombre no esté vacío y que solo contenga letras mayúsculas
        if (nombre.length > 0 && regex.test(nombre)) {

            //pasamos el mensaje con el contenido a la etiqueta p con textContent
            mensaje.textContent = "Formulario enviado correctamente: " + nombre;

        } else {
            //
            mensaje.textContent = "Por favor, escribe tu nombre en letras mayúsculas y asegúrate de que no esté vacío.";

        }
    };
}

    



