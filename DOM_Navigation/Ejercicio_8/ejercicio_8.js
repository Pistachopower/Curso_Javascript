document.addEventListener("DOMContentLoaded", function () {
  var viajes = [
    //esto es un array
    {
      //clave: valor
      src: "/img/img1.jpg",
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
  var ul = document.querySelector("#todos-los-viajes ul");

  //recorremos el array de objeto 
  viajes.forEach(viaje => {

  //pintamos la estructura de la etiqueta
  var li= document.createElement("li");

  
      //creamos un elemento img
      const img = document.createElement("img");
      img.src = viaje.src;
  
      const p = document.createElement("p");

      p.textContent = viaje.desc;
  
      const specsList = document.createElement("ul");
      specsList.classList.add("specs");
  
      viaje.specs.forEach(spec => {
        const specItem = document.createElement("li");
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