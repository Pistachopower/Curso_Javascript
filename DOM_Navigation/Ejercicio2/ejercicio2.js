window.addEventListener("load", inicializar);

function inicializar() {
    // Seleccionar el elemento con id "testdiv"
    const testdiv = document.getElementById("testdiv");

    // Crear el nodo <p>
    const para = document.createElement("p");

    // Crear el nodo de texto "Este es el"
    const txt1 = document.createTextNode("Este es el");
    para.appendChild(txt1); // Añadir txt1 al nodo <p>

    // Crear el nodo <em>
    const enfasis = document.createElement("em");

    // Crear el nodo de texto "contenido"
    const txt2 = document.createTextNode(" contenido");
    enfasis.appendChild(txt2); // Añadir txt2 al nodo <em>

    // Añadir el nodo <em> al nodo <p>
    para.appendChild(enfasis);

    // Crear el nodo de texto " de mi párrafo."
    const txt3 = document.createTextNode(" de mi párrafo.");
    para.appendChild(txt3); // Añadir txt3 al nodo <p>

    // Añadir el nodo <p> completo al <div> con id "testdiv"
    testdiv.appendChild(para);
}
