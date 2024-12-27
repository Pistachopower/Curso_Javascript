/*
Hacer   un   enlace   que   cambia   su   color   de   fondo   (azul   claro)   
cuando   el   ratón   puntero   se sitúa sobre él. 
*/


window.addEventListener("load", inicializar);

function inicializar() {
    // Obtenemos el objeto enlace directamente
    let enlace = document.querySelector('a');

    // Añadimos un evento 'mouseover' al enlace que sirve cuando el usuario pasa el ratón por encima
    enlace.addEventListener('mouseover', function () {
        cambiarColor(enlace);
    });

    // Añadimos un evento 'mouseout' para restaurar el color original cuando el puntero sale
    //enlace.addEventListener('mouseout', function () {
    //    restaurarColor(enlace);
    //});
}

//pasamos por parametro el objeto enlace
function cambiarColor(enlace) {
    // Cambia el color de fondo del enlace a azul claro
    enlace.style.backgroundColor = 'lightblue';
    
}

function restaurarColor(enlace) {
    // Restaura el color original cuando el puntero sale del enlace
    enlace.style.backgroundColor = '';
}
