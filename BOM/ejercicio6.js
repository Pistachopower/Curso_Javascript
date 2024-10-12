/*
Crea una página web que realice las siguientes funciones 
desde la página principal. Crea botones para cada realizar 
cada una de las siguientes opciones:
    - Abrir ventana flotante
    - Abrir ventana flotante y detenerla
    - Cerrar ventana flotante
    - Dar foco a la ventana flotante: Cuando tienes varias ventanas abiertas en tu computadora y haces clic en una de ellas, esa ventana obtiene el foco, porque ahora está "al frente" y lista para usarse. Las otras ventanas se quedan en segundo plano.
    - Quitar foco ventana nueva
    - Scroll absoluto (0, 1000): baja a la parte de abajo de la hoja
    - Scroll relativo (0, 10): baja un poquito en pixeles
Desde la ventana secundaria se podrá realizar:
    - Mover absoluto (500, 150)
    - Mover relativo (0,50)
    - Redimensionar absoluto (500,500)
    - Redimensionar relativo (-50, -50)

*/


// Variable global que guardará la referencia a la ventana (objeto) que se abrirá
var miVentana = null;

// Función para abrir una nueva ventana
function abrirVentana() {
    // Si no hay una ventana abierta o la ventana está cerrada
    if (!miVentana || miVentana.closed) {
        // Abrimos una nueva ventana con las medidas definidas
        miVentana = window.open("", "_blank", "width=400,height=400");
        // Escribimos un mensaje dentro de la nueva ventana
        miVentana.document.write(`
           <p>Esta es una ventana flotante</p>
            <button onclick="window.opener.moverAbsoluto()">Mover absoluto (500, 150)</button>
            <button onclick="window.opener.moverRelativo()">Mover relativo (0, 50)</button>
            <button onclick="window.opener.redimensionarAbsoluto()">Redimensionar absoluto (500, 500)</button>
            <button onclick="window.opener.redimensionarRelativo()">Redimensionar relativo (-50, -50)</button>
            <div style="height:2000px; width:100%;">Contenido largo para probar scroll</div>
                `);
        miVentana.document.close();
    }
}

// Función para alternar entre abrir y cerrar la ventana
function abrirYCerrarVentana() {
    // Si no hay una ventana abierta o la ventana está cerrada
    if (!miVentana || miVentana.closed) {
        abrirVentana();
    } else {
        // Si la ventana está abierta, la cerramos
        miVentana.close();
        // Reseteamos la referencia a null para poder abrir una nueva ventana después
        miVentana = null;
    }
}

// Función para cerrar la ventana
function cerrarVentana() {
    // Si hay una ventana abierta y no está cerrada
    if (miVentana && !miVentana.closed) {
        // Cerramos la ventana
        miVentana.close();
        // Reseteamos la referencia a null
        miVentana = null;
    }
}

// Función para dar foco a la ventana (traerla al frente)
function darFocoVentana() {
    // Si hay una ventana abierta y no está cerrada
    if (miVentana && !miVentana.closed) {
        // Damos foco a la ventana
        miVentana.focus();
    }
}

// Función para quitar el foco de la ventana (enviarla al fondo)
function quitarFocoVentana() {
    // Si hay una ventana abierta y no está cerrada
    if (miVentana && !miVentana.closed) {
        // Quitamos el foco de la ventana
        miVentana.blur();
    }
}

// Función para hacer scroll absoluto en la ventana (a una posición específica)
function scrollAbsoluto() {
    // Si hay una ventana abierta y no está cerrada
    if (miVentana && !miVentana.closed) {
        // Hacemos scroll a la posición (0, 1000)
        miVentana.scrollTo(0, 1000);
    }
}

// Función para hacer scroll relativo en la ventana (desplazarse desde la posición actual)
function scrollRelativo() {
    // Si hay una ventana abierta y no está cerrada
    if (miVentana && !miVentana.closed) {
        // Hacemos scroll relativo (0, 10) desde la posición actual
        miVentana.scrollBy(0, 10);
    }
}

// Función para mover la ventana a una posición específica
function moverAbsoluto() {
    if (miVentana && !miVentana.closed) {
        miVentana.moveTo(500, 150);
    }
}

// Función para mover la ventana desde su posición actual
function moverRelativo() {
    if (miVentana && !miVentana.closed) {
        miVentana.moveBy(0, 50);
    }
}

// Función para redimensionar la ventana a un tamaño específico
function redimensionarAbsoluto() {
    if (miVentana && !miVentana.closed) {
        miVentana.resizeTo(500, 500);
    }
}

// Función para redimensionar la ventana desde su tamaño actual
function redimensionarRelativo() {
    if (miVentana && !miVentana.closed) {
        miVentana.resizeBy(-50, -50);
    }
}


