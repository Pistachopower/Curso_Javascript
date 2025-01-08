document.addEventListener("DOMContentLoaded", function() {
  //documento json  
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
      }
    ];
  
    //seleccionamos la etiqueta completa
    const ul = document.querySelector("#todos-los-viajes ul");
  
    //recorremos el json
    viajes.forEach(viaje => {
      //creamos un elemento li
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
  
      li.appendChild(img);
      li.appendChild(p);
      li.appendChild(specsList);
      ul.appendChild(li);
    });
  });
  