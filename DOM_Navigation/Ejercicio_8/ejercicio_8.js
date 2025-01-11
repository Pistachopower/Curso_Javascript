document.addEventListener("DOMContentLoaded", function () {
  var viajes = [
    {
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

  // Llamamos a la función para pintar los contenidos
  pintarContenido(viajes);
});

function pintarContenido(viajes) {
  // Seleccionamos el div que contiene el ul
  var div = document.querySelector("#todos-los-viajes");
  
  // Crear el h1 con el subtítulo
  var h1 = document.createElement("h1");
  h1.textContent = "subtitulo";
  
  
  var prueba= div.querySelector("ul");
  
  // Agregar el h1 al div antes del ul
  div.insertBefore(h1, prueba);
  
  // Seleccionamos el ul dentro del div para agregar los viajes
  var ul = div.querySelector("ul");

  // Recorremos el array de objetos viaje
  viajes.forEach(viaje => {
      // Creamos un li para cada viaje
      var li = document.createElement("li");

      // Creamos la imagen y la agregamos al li
      var img = document.createElement("img");
      img.src = viaje.src;
      li.appendChild(img);

      // Creamos el párrafo con la descripción y lo agregamos al li
      var p = document.createElement("p");
      p.textContent = viaje.desc;
      li.appendChild(p);

      // Creamos el ul para las especificaciones
      var specsList = document.createElement("ul");

      specsList.className= "specs";

      // Agregamos cada especificación como un li dentro del ul
      viaje.specs.forEach(spec => {
          var specItem = document.createElement("li");
          specItem.textContent = spec;
          specsList.appendChild(specItem);
      });

      // Agregamos el ul de especificaciones al li del viaje
      li.appendChild(specsList);

      // Finalmente, agregamos el li al ul principal
      ul.appendChild(li);
  });
}
