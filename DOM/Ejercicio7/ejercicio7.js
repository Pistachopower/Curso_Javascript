/*
Crear   un   formulario   con   los   botones   de   opción   
que   representan   diferentes   colores. Utilice   el   
atributo   id   para   cada   botón   de   radio.   
Cambiar   el   fondo   del   formulario   al   color seleccionado.
*/
window.addEventListener("load", inicializar);

function inicializar() {
    // Asocia el evento de cambio de color a cada botón de radio
    //recuerda que function () es una funcion anonima que llama a 
    //otra funcion que es cambiar de color
    document.getElementById('rojo').addEventListener('click', function () {
        cambiarColor('rojo');
    }
    );
    document.getElementById('verde').addEventListener('click', function () {
        cambiarColor('verde');
    }
    );
    document.getElementById('azul').addEventListener('click', function () {
        cambiarColor('azul');
    }
    );

    document.getElementById('amarillo').addEventListener('click', function () {
        cambiarColor('amarillo');
    }
    );


}

function cambiarColor(color) {
    // Obtiene el objeto que es el elemento del formulario que contiene otros elementos
    const formulario = document.getElementById('formulario');

    // Cambia el color de fondo del formulario según el color seleccionado
    switch (color) {
        case 'rojo':
            //de mi objeto formulario uso la propiedad style y la propiedad
            //backgroundColor para cambiar el color de fondo del objeto
            //formulario
            formulario.style.backgroundColor = 'red';
            break;
        case 'verde':
            formulario.style.backgroundColor = 'green';
            break;
        case 'azul':
            formulario.style.backgroundColor = 'blue';
            break;
        case 'amarillo':
            formulario.style.backgroundColor = 'yellow';
            break;
    }
}



