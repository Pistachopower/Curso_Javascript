document.addEventListener("DOMContentLoaded", function () {
  var viajes = [
    //esto es un array
    {
      //clave: valor
      src: "img/img1.jpg",
      desc: "descripcion1",
      specs: ["spec11", "spec12"]
    },
    {
      src: "/img/img2.jpg",
      desc: "descripcion2",
      specs: ["spec21", "spec22"]
    },
  ];

  //llamamos a la funcion 
  pintarContenido(viajes);

});



function pintarContenido(viajes) {


  //tomamos la etiqueta completa y todos sus hijos 
  //querySelector("#todos-los-viajes"): selecciona el primer selector o etiqueta con sus hijos
  var ul = document.querySelector("#todos-los-viajes");

  //recorremos el array de objeto 
  viajes.forEach(viaje => {

  //pintamos la estructura de la etiqueta
  var li= document.createElement("li");

  
  //creamos un elemento img vacio
  var img = document.createElement("img");

  //viaje.src: accedemos al objeto array viaje y seleccionamos la clave src que tiene su valor
  //img.src: tomamos la etiqueta img y accedemos al atributo propio de img src para escribir 
  //el contenido de viaje.src
  img.src = viaje.src;
  
  //seguimos los mismos pasos
  var p = document.createElement("p");

  //escribimos en p el contenido de viaje.desc
  p.textContent = viaje.desc;
  
  //creamos otra etiqueta vacia 
  var specsList = document.createElement("ul");
  

  //iteramos sobre el objeto array de specs
  viaje.specs.forEach(spec => {
    //creamos una etiqueta li vacia
  var specItem = document.createElement("li");

  //escribimos el contenido de spec en la etiqueta li
  specItem.textContent = spec;

  
  specsList.appendChild(specItem);
  });
  
  //pinta el elemento y su contenido en el html (por cada elemento del objeto viaje)
  li.appendChild(img);
  li.appendChild(p);
  li.appendChild(specsList);
  ul.appendChild(li);

  });

}