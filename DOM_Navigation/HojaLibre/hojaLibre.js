document.addEventListener("DOMContentLoaded", function () {
    var viajes = [
        {
            src: "/img/img1.jpg",
            desc: "descripcion1",
            specs: ["spec11", "spec12",]
        },

        {
            src: "/img/img2.jpg",
            desc: "descripcion2",
            specs: ["spec21", "spec22",]
        },

    ];

    pintarElementos(viajes);

});

function pintarElementos(viajes) {
    // Seleccionamos el div que tendra como hijo a h1 y ul
    var div = document.querySelector("#todos-los-viajes");

    //creamos el elemento
    var h1 = document.createElement("h1");

    //escribimos el contenido
    h1.textContent = "Subtitulo";

    var ul = document.createElement("ul");

    //agregamos h1 y ul como hijos de div
    div.appendChild(h1);
    div.appendChild(ul);


    //recorremos el array de objetos con un for each
    viajes.forEach(function (viaje) {
        //creamos li que sera hijo de ul
        var li = document.createElement("li");

        //pintamos en el html
        ul.appendChild(li);

        //creamos un elemento img hijo de li
        var img = document.createElement("img");

        //agregamos el atributo src a img
        img.src = viaje.src;

        //pintamos en el html
        li.appendChild(img);

        //agregamos etiqueta p hija de li
        var p = document.createElement("p");

        //agregamos el texto del atributo desc a p
        p.textContent = viaje.desc;

        //pintamos en el html
        li.appendChild(p);

        //creamos la etiqueta ul
        var ulSub = document.createElement("ul");

        //agregamos el atributo a ul con className
        ulSub.className = "specs";

        //agregamos ulSub como hijo de liPadre
        li.appendChild(ulSub);

        //como tenemos otro objeto debemos recorrerlo
        viaje.specs.forEach(function (spec) {

            var liSub = document.createElement("li");

            //esscribimos el contenido
            liSub.textContent = spec;

            ulSub.appendChild(liSub);

        });

        p.style.display === "none";
        ulSub.style.display = "none";

        //usamos un evento que cuando el usuario de click se dispare
        img.addEventListener("click", function(){

            //seleccionamos p y ul y las propiedades style.display
            //para mostrar en bloques 
            if (p.style.display === "none" && ulSub.style.display === "none") {
                p.style.display = "block";
                ulSub.style.display = "block";
                
            } else {
                p.style.display = "none";
                ulSub.style.display = "none";
            }
        }

        )

    });

}

