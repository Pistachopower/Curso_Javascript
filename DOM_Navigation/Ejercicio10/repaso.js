/*
Crea un página con un div y a medida que mueves el ratón por la 
pantalla, dentro de el div se visualizan las coordenadas.
*/
document.addEventListener("DOMContentLoaded", inicializar );

function inicializar() {

    pintarCodigo();

    //llamamos al html, obtenemos el elemento por id
    //asignamos al elemento el evento   
    document.getElementById("contenedor").
    addEventListener("mouseover", mouseOverFuncion);


}

function pintarCodigo() {  
    //creamos el elemento
    var div = document.createElement("div");


    //agregamos la propiedad id al div
    div.id= "contenedor";

    div.textContent= "hola";

    //escribimos en el html
    document.body.appendChild(div);

 }

 
//creamos la funcion mouseover
function mouseOverFuncion(evento) { //evento: le estas pasando el objeto evento

    //seleccionamos el elemento
    var div = document.getElementById('contenedor');

    //accedes a las propiedades del objeto mouseover offsetX 
    const x = evento.offsetX;
    const y = evento.offsetY;

    //escrimos las coordenadas
    div.textContent= x + " " + y;
}




