/*
En una nueva ventana, imprimir todas las propiedades
 del objeto navigator.

 
*/
document.getElementById("mostrar-propiedades").
addEventListener("click", function mostrarPropiedades() {
    // Abre una nueva ventana
    var nuevaVentana = window.open("", "_blank");

    //vamos agregando etiquetas html poco a poco con las 
    //propiedades de windows
    let contenido = "<h1>Propiedades del BOM</h1>";
    contenido += "<h2>Propiedades de window</h2><ul>";
    contenido += "<li>Altura interior: " + window.innerHeight + "</li>";
    contenido += "<li>Ancho interior: " + window.innerWidth + "</li>";
    contenido += "</ul>";

    contenido += "<h2>Propiedades de navigator</h2><ul>";

    //imprimimos todas las propiedades de navigator
    for (let propiedad in navigator) {

            contenido += "<li>" + propiedad + ":" + navigator[propiedad] + "</li>";

    }
    contenido += "</ul>";

    contenido += "<h2>Propiedades de screen</h2><ul>";
    contenido += "<li>Ancho pantalla:  " + screen.width + "</li>";
    contenido += "<li>Altura pantalla: " + screen.height + "</li>";
    contenido += "</ul>";

    contenido += "<h2>Propiedades de location</h2><ul>";
    contenido += "<li>URL completa: " + location.href + "</li>";
    contenido += "<li>Protocolo: " + location.protocol + "</li>";
    contenido += "<li>Host:  " + location.host + "</li>";
    contenido += "</ul>";

    // Escribir el contenido en la nueva ventana
    nuevaVentana.document.write(contenido);
    
});





