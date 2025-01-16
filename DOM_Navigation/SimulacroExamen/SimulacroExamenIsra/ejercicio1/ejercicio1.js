/*
document.addEventListener("DOMContentLoaded", inicializar);
function inicializar() {
  const partidos = [
    {
      escudoLocal: "/escudos/rayo.gif",
      nombreLocal: "Rayo",
      resultadoLocal: 1,
      resultadoVisitante: 2,
      nombreVisitante: "Getafe",
      escudoVisitante: "/escudos/getafe.gif",
      enlaces: [
        {
          tipo: "Crónica",
          url: "/RayoGetafe/"
        },
        {
          tipo: "Así lo vivimos",
          url: "/RayoGetafe/asilovivimos.html"
        }
      ]
    },
    {
      escudoLocal: "/escudos/osasuna.gif",
      nombreLocal: "Osasuna",
      resultadoLocal: 2,
      resultadoVisitante: 1,
      nombreVisitante: "Betis",
      escudoVisitante: "/escudos/betis.gif",
      enlaces: [
        {
          tipo: "Crónica",
          url: "/OsasunaBetis/"
        },
        {
          tipo: "Así lo vivimos",
          url: "/OsasunaBetis/asilovivimos.html"
        }
      ]
    }
  ];



  //llamaos a la funcion
  pintarElementos(partidos);
}

function pintarElementos(partidos) {

  //creamos etiqueta principal
  var divPrincipal = document.createElement("div");

  //agregamos atributo
  divPrincipal.id = "partidosAjax";

  //agregamos el principal al dom 
  document.body.appendChild(divPrincipal);

  //console.log(divPrincipal);

  //creamos los hijos de principal recorriendo partidos
  partidos.forEach(partido => {

    //agregamos los hijos de principal
    var divPadre = document.createElement("div");

    //agregamos atributo
    divPadre.className = "equipos";

    //ponemos el hijo al principal
    divPrincipal.appendChild(divPadre);

    //agregamos los subHijos1 con un for
    var subHijos1 = document.createElement("div");

    //creamos la clase
    subHijos1.className = "escudo";

    //pintamos los subhijos
    divPadre.appendChild(subHijos1);

    //creamos y agregamos atributoas imagen en subHijo1
    var img = document.createElement("img");
    img.src = partido.escudoLocal;
    img.alt = partido.nombreLocal;

    //agregamos img a subHijo1 y los demás
    subHijos1.appendChild(img);

    var subHijos2 = document.createElement("div");
    subHijos2.className = "equipo";
    subHijos2.textContent = partido.nombreLocal;

    divPadre.appendChild(subHijos2);

    var subHijos3 = document.createElement("div");
    subHijos3.className = "resultado";
    subHijos3.textContent = partido.resultadoLocal;

    divPadre.appendChild(subHijos3);

    var subHijos4 = document.createElement("div");
    subHijos4.className = "resultado";
    subHijos4.textContent = partido.resultadoVisitante;

    divPadre.appendChild(subHijos4);

    var subHijos5 = document.createElement("div");
    subHijos5.className = "equipo";
    subHijos5.textContent = partido.nombreVisitante;

    divPadre.appendChild(subHijos5);

    var subHijos6 = document.createElement("div");
    subHijos6.className = "escudo";

    divPadre.appendChild(subHijos6);

    //creamos y agregamos atributoas imagen en subHijo6
    var img2 = document.createElement("img");
    img2.src = partido.escudoVisitante;
    img2.alt = partido.nombreVisitante;

    subHijos6.appendChild(img2);

    var ul = document.createElement("ul");
    divPadre.appendChild(ul);

    partido.enlaces.forEach(enl => {
      var li = document.createElement("li");

      ul.appendChild(li);

      var a = document.createElement("a");
      a.href = enl.url;
      a.textContent = enl.tipo;

      li.appendChild(a);

    });


    //pasamos por parametro el elemento img
    img.addEventListener("mouseover", () => mostrarEnlaces(ul));
    img.addEventListener("mouseleave", () => ocultarEnlaces(ul)); 
    subHijos3.addEventListener("mouseover", aumentarFuente); 
    subHijos3.addEventListener("mouseleave", reducirFuente); 
    subHijos4.addEventListener("mouseover", aumentarFuente); 
    subHijos4.addEventListener("mouseleave", reducirFuente);

  });
}

function mostrarEnlaces(ul) { 
  ul.style.display = "block"; 
  setTimeout(() => { 
    ul.style.display = "none"; }, 3000); 
}

function ocultarEnlaces(ul) { 
  ul.style.display = "none"; 
} 

function aumentarFuente(event) { 
  event.target.style.fontSize = "2em"; 
} 

function reducirFuente(event) { 
  event.target.style.fontSize = "1em"; 
}
*/

document.addEventListener("DOMContentLoaded", inicializar);

function inicializar() {
  const partidos = [
    {
      escudoLocal: "./imagenes/rayo.png",
      nombreLocal: "Rayo",
      resultadoLocal: 1,
      resultadoVisitante: 2,
      nombreVisitante: "Getafe",
      escudoVisitante: "./imagenes/getafe.png",
      enlaces: [
        {
          tipo: "Crónica",
          url: "/RayoGetafe/"
        },
        {
          tipo: "Así lo vivimos",
          url: "/RayoGetafe/asilovivimos.html"
        }
      ]
    },
    {
      escudoLocal: "./imagenes/osasuna.png",
      nombreLocal: "Osasuna",
      resultadoLocal: 2,
      resultadoVisitante: 1,
      nombreVisitante: "Betis",
      escudoVisitante: "./imagenes/betis.png",
      enlaces: [
        {
          tipo: "Crónica",
          url: "/OsasunaBetis/"
        },
        {
          tipo: "Así lo vivimos",
          url: "/OsasunaBetis/asilovivimos.html"
        }
      ]
    }
  ];

  pintarElementos(partidos);
}



function pintarElementos(partidos) {
  const divPrincipal = document.createElement("div");
  divPrincipal.id = "partidosAjax";
  document.body.appendChild(divPrincipal);

  partidos.forEach(partido => {
    const divPadre = document.createElement("div");
    divPadre.className = "equipos";
    divPrincipal.appendChild(divPadre);

    // Escudo Local
    const subHijos1 = document.createElement("div");
    subHijos1.className = "escudo";
    const img = document.createElement("img");
    img.src = partido.escudoLocal;
    img.alt = partido.nombreLocal;
    subHijos1.appendChild(img);
    divPadre.appendChild(subHijos1);

    // Nombre Local
    const subHijos2 = document.createElement("div");
    subHijos2.className = "equipo";
    subHijos2.textContent = partido.nombreLocal;
    divPadre.appendChild(subHijos2);

    // Resultado Local
    const subHijos3 = document.createElement("div");
    subHijos3.className = "resultado";
    subHijos3.textContent = partido.resultadoLocal;
    divPadre.appendChild(subHijos3);

    // Resultado Visitante
    const subHijos4 = document.createElement("div");
    subHijos4.className = "resultado";
    subHijos4.textContent = partido.resultadoVisitante;
    divPadre.appendChild(subHijos4);

    // Nombre Visitante
    const subHijos5 = document.createElement("div");
    subHijos5.className = "equipo";
    subHijos5.textContent = partido.nombreVisitante;
    divPadre.appendChild(subHijos5);

    // Escudo Visitante
    const subHijos6 = document.createElement("div");
    subHijos6.className = "escudo";
    const img2 = document.createElement("img");
    img2.src = partido.escudoVisitante;
    img2.alt = partido.nombreVisitante;
    subHijos6.appendChild(img2);
    divPadre.appendChild(subHijos6);

    // Lista de enlaces
    const ul = document.createElement("ul");
    divPadre.appendChild(ul);

    partido.enlaces.forEach(enl => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = enl.url;
      a.textContent = enl.tipo;
      li.appendChild(a);
      ul.appendChild(li);
    });

    // Eventos de mouse
    img.addEventListener("mouseover", () => mostrarEnlaces(ul));
    img.addEventListener("mouseleave", () => ocultarEnlaces(ul));
    img2.addEventListener("mouseover", () => mostrarEnlaces(ul));
    img2.addEventListener("mouseleave", () => ocultarEnlaces(ul));
    subHijos3.addEventListener("mouseover", aumentarFuente);
    subHijos3.addEventListener("mouseleave", reducirFuente);
    subHijos4.addEventListener("mouseover", aumentarFuente);
    subHijos4.addEventListener("mouseleave", reducirFuente);
  });
}

// Función para mostrar la lista de enlaces al pasar el cursor sobre una imagen
function mostrarEnlaces(ul) {
  ul.style.display = "block"; // Cambia la propiedad display a block para que el elemento se muestre
  ul.style.opacity = 1; // Cambia la opacidad a 1 para que el elemento sea completamente visible
  clearTimeout(ul.timer); // Limpia cualquier temporizador previo para evitar ocultar prematuramente
}

// Función para ocultar la lista de enlaces después de 3 segundos de haber pasado el cursor sobre la imagen
function ocultarEnlaces(ul) {
  ul.timer = setTimeout(() => { // Establece un temporizador de 3 segundos
    ul.style.opacity = 0; // Cambia la opacidad a 0 para ocultar el elemento con una transición suave
    setTimeout(() => {
      ul.style.display = "none"; // Cambia la propiedad display a none después de 500ms para ocultar el elemento completamente
    }, 500); // Duración del deslizamiento (transición)
  }, 3000); // Espera 3 segundos antes de iniciar la transición de ocultar
}

// Función para aumentar el tamaño de la fuente al pasar el cursor sobre el resultado
function aumentarFuente(event) {
  event.target.style.fontSize = "2em"; // Cambia el tamaño de la fuente del elemento objetivo a 2em
}

// Función para reducir el tamaño de la fuente cuando el cursor sale del resultado
function reducirFuente(event) {
  event.target.style.fontSize = "1em"; // Restaura el tamaño de la fuente del elemento objetivo a 1em
}

