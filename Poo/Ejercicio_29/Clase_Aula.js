// Clase que representa un aula
class Aula {
    // Constructor de la clase Aula
    constructor() {
        this.alumnos = []; // Inicializa un array vacío para almacenar alumnos
    }

    // Método para agregar un nuevo alumno al aula
    agregarAlumno(alumno) {
        this.alumnos.push(alumno); // Agrega el alumno al array
    }

    // Método para buscar un alumno por su DNI
    buscarAlumnoPorDNI(dni) {
        // Busca y devuelve el alumno que coincida con el DNI
        return this.alumnos.find(alumno => alumno.dni === dni);
    }

    // Método para ordenar las notas de un alumno en particular
    ordenarNotasAlumno(dni) {
        const alumno = this.buscarAlumnoPorDNI(dni); // Busca el alumno por DNI
        if (alumno) {
            // Si se encuentra el alumno, ordena sus notas de menor a mayor
            return alumno.notas.sort((a, b) => a - b);
        }
        return null; // Devuelve null si no se encuentra el alumno
    }

    // Método para ordenar el array de alumnos por apellido
    ordenarAlumnosPorApellido() {
        return this.alumnos.sort((a, b) => {
            // Separa el apellido del nombre
            const apellidoA = a.nombre.split(" ").pop();
            const apellidoB = b.nombre.split(" ").pop();
            // Compara los apellidos
            return apellidoA.localeCompare(apellidoB);
        });
    }

    // Método para imprimir los alumnos del aula
    imprimirAlumnos() {
        this.alumnos.forEach(alumno => {
            // Muestra un alert con el nombre y DNI de cada alumno
            alert("Alumno= \n nombre:" + alumno.nombre + "\n" + "dni: " + alumno.dni);
        });
    }
}

// Instanciar el aula
const aula = new Aula();

// Agregar alumnos al aula
aula.agregarAlumno(new Alumno("Jorge Pérez", "c5558", ["Sistemas", "Programación", "FOL"], 3.5, 6.5, 7.1));
aula.agregarAlumno(new Alumno("María López", "c1234", ["Sistemas", "Programación", "FOL"], 8.0, 9.0, 7.5));
aula.agregarAlumno(new Alumno("Ana Gómez", "c6789", ["Sistemas", "Programación", "FOL"], 6.5, 5.0, 8.0));

// Ejemplo de uso: buscar un alumno por DNI
/*
const alumnoBuscado = aula.buscarAlumnoPorDNI("c5558");
if (alumnoBuscado) {
    alert("Alumno encontrado: " +  alumnoBuscado.nombre); // Muestra el nombre del alumno encontrado
} else {
    alert("Alumno no encontrado."); // Mensaje si no se encuentra el alumno
}

// Ejemplo de uso: ordenar las notas de un alumno
const notasOrdenadas = aula.ordenarNotasAlumno("c5558");
if (notasOrdenadas) {
    alert("Notas ordenadas: " + notasOrdenadas); // Muestra las notas ordenadas
}

// Ejemplo de uso: ordenar alumnos por apellido
const alumnosOrdenados = aula.ordenarAlumnosPorApellido();
alert("Alumnos ordenados por apellido:\n" + alumnosOrdenados.map(a => a.nombre).join(", ")); // Muestra los nombres ordenados

// Imprimir todos los alumnos en el aula
aula.imprimirAlumnos(); // Llama al método para mostrar todos los alumnos
*/

aula.imprimirAlumnos()