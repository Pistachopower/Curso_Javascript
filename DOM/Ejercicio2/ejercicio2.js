/*
Usar JS para mostrar el contenido, en mayúsculas, del formulario 
anterior en la misma ventana. Modifica el script para mandar los
datos a una nueva ventana.

nelson galicia
12345678915478
123456787
nelson@gmail.com
sevilla

*/

function capturaDatosFormulario(event){
    event.preventDefault(); // Evita el envío tradicional del formulario


    //obtenemos los datos individualmente por id y lo pasamos a mayusculas
    var nombre= document.getElementById('nombre').value;
    nombre= nombre.toUpperCase(); 

    var apellido= document.getElementById('apellido').value;
    apellido= apellido.toUpperCase();

    var usuario= document.getElementById('usuario').value;
    usuario= usuario.toUpperCase();
    
    var contrasena= document.getElementById('password').value;
    contrasena= contrasena.toUpperCase();

    var fechaNacimiento= document.getElementById('fecha-nac').value;
    fechaNacimiento= fechaNacimiento.toUpperCase();

    var sexo= document.getElementById('sexo').value;
    sexo= sexo.toUpperCase();

    var tlf= document.getElementById('telefono').value;
    tlf= tlf.toUpperCase();

    var correo= document.getElementById('correo').value;
    correo= correo.toUpperCase();

    var ubicacion= document.getElementById('ubicacion').value;
    ubicacion= ubicacion.toUpperCase();

    //guardamos toda la informacion en una variable
    var contenidoFinalFormulario= nombre + " " + apellido +  " " + usuario 
    + " " + contrasena + " " + fechaNacimiento + " " + sexo + " " + tlf + 
    " " + correo + " " + ubicacion;

    //escribimos en el html con el metodo textContent
    //document.getElementById('contenidoFinalFormulario').textContent = contenidoFinalFormulario;

    //creamos la nueva ventana
    var miVentana = window.open("", "_blank", "width=400,height=400");

    //escribimos el contenido del formulario en la nueva ventana
    miVentana.document.write(contenidoFinalFormulario);
     
};



