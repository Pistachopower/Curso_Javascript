class Clase_Persona {
    constructor(nombre, dni) {
        this.nombre= nombre;
        this.dni= dni;
        
    };

    mostrarAtributosPersona() {
        alert("Persona= \n nombre:" + this.nombre + "\n" + "dni: " + this.dni);
    };

};

//instanciar a la clase 
//persona1= new ClasePersona("nelson","y54456");
//persona2= new ClasePersona("maria",  "y6058");
//
//persona1.mostrarAtributosPersona();
//persona2.mostrarAtributosPersona();
