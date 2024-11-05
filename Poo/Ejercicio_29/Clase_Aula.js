class Aula {
    constructor() {
        this.alumnos = new Map(); // Usar Map para almacenar alumnos por su DNI
    }

    agregarAlumno(alumno) {
        this.alumnos.set(alumno.dni, alumno); // Agregar el alumno al Map usando su DNI como clave
    }

    buscarAlumnoPorDNI(dni) {
        //this.imprimirAlumnos(this.alumnos.get(dni)); // Obtener el alumno por su DNI
        return this.alumnos.get(dni);
    }


    ordenarNotasAlumno(dni) { 
        const alumno = this.buscarAlumnoPorDNI(dni);
        if (alumno) {
            // Ordenar las notas del alumno y actualizar el Map
            let notasOrdenadas = new Map([...alumno.notas.entries()].sort((a, b) => a[1] - b[1]));
            alumno.notas = notasOrdenadas;
        }
    }


    ordenarAlumnosPorApellido() { 
        const alumnosOrdenados = [...this.alumnos.values()].sort((a, b) => { 
            const apellidoA = a.nombre.split(" ").pop(); 
            const apellidoB = b.nombre.split(" ").pop(); 
            return apellidoA.localeCompare(apellidoB); 
        }); 
        this.alumnos = new Map(alumnosOrdenados.map(alumno => [alumno.dni, alumno])); }



    imprimirAlumnos() {
        this.alumnos.forEach(alumno => {
            alumno.mostrarAtributosAlumno();
        });
    }
}

// Instanciar el aula
const aula = new Aula();

// Agregar alumnos al aula
aula.agregarAlumno(new Alumno("Jorge Pérez", "c5558", ["Sistemas", "Programación", "FOL"], [["Sistemas", 3.5], ["Programación", 6.5], ["FOL", 7.1]]));
aula.agregarAlumno(new Alumno("María López", "a1234", ["Sistemas", "Programación", "FOL"], [["Sistemas", 8.0], ["Programación", 9.0], ["FOL", 7.5]]));
aula.agregarAlumno(new Alumno("Ana Gómez", "c6789", ["Sistemas", "Programación", "FOL"], [["Sistemas", 6.5], ["Programación", 5.0], ["FOL", 8.0]]));

// Imprimir todos los alumnos en el aula
//aula.imprimirAlumnos();

aula.ordenarNotasAlumno();

aula.imprimirAlumnos();

