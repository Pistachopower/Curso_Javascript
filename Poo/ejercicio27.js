/*
Implementar el ejercicio 20 y 21(sólo imprimir los datos), usando objetos. (P.e. clase Persona) 

*/


class ClasePersona {
    constructor(nombre, apellido, dni, anio) {
        this.nombre= nombre;
        this.apellido= apellido;
        this.dni= dni;
        this.anio= anio;
        
    };



    mostrarAtributosObjetos() {
        alert("Persona= nombre:" + this.nombre + "\n" + 
            "apellido: " + this.apellido + "\n" + "dni: " + this.dni
            + "\n" + " fecha nacimiento: " + this.anio 
        );
    };
};


persona= new ClasePersona("nelson", "perez", "y54456", "1995");

persona.mostrarAtributosObjetos();