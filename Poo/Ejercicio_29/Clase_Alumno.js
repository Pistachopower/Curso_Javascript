
//Definición de la clase Alumno que hereda de Persona 
class Alumno extends Clase_Persona {
    constructor(nombre, dni, curso, ...notas) { //usamos spread para el curso y notas
        // Llamar al constructor de la clase padre (Persona) 
        super(nombre, dni);
        this.curso = curso; //se recibe un array de notas
        this.notas = notas; //almacena las notas en un array
    }

    mostrarAtributosAlumno() {
        alert("Alumno= \n nombre:" + this.nombre + "\n" + "dni: " + this.dni
            + "\n"  + this.curso + "\n"  + this.notas
        );
    };

    // devuelva nota media
    notaMediaAlumno() {
        //variable que indica el indice donde tiene que comenzar a suma
        var valorInicial= 0;

        //sumamoos las notas
        var sumaNota= this.notas.reduce(
            (acumulador, valorActual) => acumulador + valorActual, valorInicial
        );

        //calculamos la media
        var notaMedia=  sumaNota / this.notas.length;
        return notaMedia;
    };

    //obtener la mejor nota [arrays]
    mejorNota(){
        var notaMax= Math.max(...this.notas)
        return notaMax;
    }


    //nombre del modulo con la mejor nota
    /*Se entiende que el orden de los cursos coinciden con las notas*/
    nombreModuloMejorNota(){
        //this hace referencia al objeto alumno1, no el this.notas
        //guarda la nota más alta
        var mejorNota= this.mejorNota();

        //pasamos la nota más alta y si existe en this.nota guardoo en indiceNotaAlta
        //el indice donde se encuentra el modulo con la mejor nota
        var indiceNotaAlta= this.notas.indexOf(mejorNota);

        //accedemos con el indice de la mejor nota y devolvemos
        return this.curso[indiceNotaAlta];
    }

}

//intanciamos al objeto Alumno que hereda los atributos de persona
//alumno1= new Alumno("jorge perez", "c5558", ["sistemas", "programacion", "fol"], 3.5,6.5,7.1);

//alumno1.mostrarAtributosAlumno();

//alert("La nota media es " + alumno1.notaMediaAlumno());

//alert("La mejor nota: " + alumno1.mejorNota())

//alert(alumno1.nombreModuloMejorNota());




