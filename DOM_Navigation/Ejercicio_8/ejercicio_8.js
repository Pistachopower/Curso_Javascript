document.addEventListener("DOMContentLoaded", function() {

  const viajes = [
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
  
    //seleccionamos la etiqueta completa con el hijo ul

    /*
    por cada indice del objeto va a ir pintando el contenido del json
    */
    const ul = document.querySelector("#todos-los-viajes ul");
  
    //recorremos el json
    viajes.forEach(viaje => {
      //creamos un elemento li nueva 
      const li = document.createElement("li");

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
  });
  