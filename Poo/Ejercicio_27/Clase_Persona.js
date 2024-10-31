
/*
Implementar el ejercicio 20 y 21(sólo imprimir los datos), 
usando objetos.
 (P.e. clase Persona) 

*/

class ClasePersona {
    constructor(nombre, apellido, dni, anio) {
        this.nombre= nombre;
        this.apellido= apellido;
        this.dni= dni;
        this.anio= anio;
        
    };


    //metodo para guardar objetos de alumnos



    mostrarAtributosObjetos() {
        alert("Persona= nombre:" + this.nombre + "\n" + 
            "apellido: " + this.apellido + "\n" + "dni: " + this.dni
            + "\n" + " fecha nacimiento: " + this.anio 
        );
    };



    //metodo para mostrar los datos de un apellido

    //crear un metodo para buscar un usuario por apellidos



    //metodo para buscar un usuario por DNI


    //Función para buscar por edad
    
    //Funciones usuario mayores de edad

    //Funciones usuario menores de edad


};

//instanciar a la clase 
alumno1= new ClasePersona("nelson", "perez", "y54456", "1995");
alumno2= new ClasePersona("maria", "galicia", "y6058", "1999");



alumno1.mostrarAtributosObjetos();
alumno2.mostrarAtributosObjetos();
