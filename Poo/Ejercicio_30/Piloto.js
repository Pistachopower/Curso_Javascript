
class Piloto {
    constructor(objetoPiloto) {
        this.nombre = objetoPiloto.get('nombre');
        this.escuderia = objetoPiloto.get('escuderia');
        this.tiempos = objetoPiloto.get('tiempos') || []; // Usamos 'tiempos' en plural para reflejar que es un array
    };

    mostrarAtributosObjetos() { 
        alert("nombre piloto: " + this.nombre + "\n" + "escuderia: " +
             this.escuderia + "\n" + "tiempos: " + this.tiempos.join(', '));
    };


};


// Creamos un Map con los datos del piloto 
var datosPiloto1 = new Map();

datosPiloto1.set('nombre', 'Carlos');
datosPiloto1.set('escuderia', 'Red Bull');
datosPiloto1.set('tiempos', [8900, 6005, 7851]);

// Inicializamos el objeto Piloto usando el Map 
var piloto1 = new Piloto(datosPiloto);

// Creamos un Map con los datos del piloto 
var datosPiloto2 = new Map();

datosPiloto2.set('nombre', 'Mario');
datosPiloto2.set('escuderia', 'Ferrari');
datosPiloto2.set('tiempos', [8888, 9999, 7851]);

// Inicializamos el objeto Piloto usando el Map 
var piloto2 = new Piloto(datosPiloto);

piloto2.mostrarAtributosObjetos();

