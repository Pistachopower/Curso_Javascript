// Definición de la clase Alumno que hereda de Persona 
class Alumno extends Clase_Persona {
    constructor(nombre, dni, curso, notas) {
        // Llamar al constructor de la clase padre (Persona) 
        super(nombre, dni);
        this.curso = new Set(curso); // Usar Set para asegurar asignaturas únicas
        this.notas = new Map(notas); // Usar Map para asignaturas y notas
    }

    mostrarAtributosAlumno() {
        let asignaturas = Array.from(this.curso).join(', ');
        let notas = Array.from(this.notas.entries()).map(([asig, nota]) => `${asig}: ${nota}`).join(', ');
        alert(`Alumno= \n nombre: ${this.nombre} \n dni: ${this.dni} \n Curso: ${asignaturas} \n Notas: ${notas}`);
    }

    notaMediaAlumno() {
        let sumaNota = 0;
        this.notas.forEach(nota => sumaNota += nota);
        return sumaNota / this.notas.size;
    }

    mejorNota() {
        let maxNota = -Infinity;
        this.notas.forEach(nota => {
            if (nota > maxNota) {
                maxNota = nota;
            }
        });
        return maxNota;
    }

    nombreModuloMejorNota() {
        let maxNota = this.mejorNota();
        for (let [asig, nota] of this.notas) {
            if (nota === maxNota) {
                return asig;
            }
        }
    }
}
/*
// Instanciar el objeto Alumno que hereda los atributos de Persona
let alumno1 = new Alumno("jorge perez", "c5558", ["sistemas", "programacion", "fol"], [["sistemas", 3.5], ["programacion", 6.5], ["fol", 7.1]]);

// Mostrar atributos del alumno
alumno1.mostrarAtributosAlumno();

// Mostrar la nota media del alumno
alert("La nota media es " + alumno1.notaMediaAlumno());

// Mostrar la mejor nota del alumno
alert("La mejor nota: " + alumno1.mejorNota())

// Mostrar el nombre del módulo con la mejor nota
alert(alumno1.nombreModuloMejorNota());
*/
