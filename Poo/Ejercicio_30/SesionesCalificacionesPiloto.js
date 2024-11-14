
// SesionCalificacion.js
class SesionCalificacion {
    constructor(piloto, tiempo) {
        this.piloto = piloto;
        this.tiempo = tiempo;
    }
}

// Calificaciones.js
const sesiones = [];

// Ordenar por tiempos
function ordenarPorTiempos() {
    sesiones.sort((a, b) => a.tiempo - b.tiempo);
}

// Ordenar por nombre de piloto
function ordenarPorNombre() {
    sesiones.sort((a, b) => a.piloto.nombre.localeCompare(b.piloto.nombre));
}

// Añadir o actualizar sesión de calificación
function añadirOActualizarSesion(nombrePiloto, escuderia, tiempo) {
    let sesionExistente = sesiones.find(s => s.piloto.nombre === nombrePiloto);

    if (!sesionExistente) {
        const piloto = new Piloto(nombrePiloto, escuderia);
        const sesion = new SesionCalificacion(piloto, tiempo);
        sesiones.push(sesion);
    } else {
        if (sesionExistente.tiempo > tiempo) {
            sesionExistente.tiempo = tiempo;
        }
    }
}

// Eliminar sesión
function eliminarSesion(nombrePiloto) {
    const index = sesiones.findIndex(s => s.piloto.nombre === nombrePiloto);

    if (index !== -1) {
        sesiones.splice(index, 1);
        return true;
    }
    return false;
}

// Mostrar sesiones
function mostrarSesiones() {
    sesiones.forEach(sesion => {
        console.log(`Piloto: ${sesion.piloto.nombre}, Escudería: ${sesion.piloto.escuderia}, Tiempo: ${sesion.tiempo}ms`);
    });
}

// Ejemplo de uso
añadirOActualizarSesion("Lewis Hamilton", "Mercedes", 89000);
añadirOActualizarSesion("Max Verstappen", "Red Bull", 87000);
añadirOActualizarSesion("Fernando Alonso", "Alpine", 88000);

console.log("Sesiones de calificación iniciales:");
mostrarSesiones();

console.log("\nOrdenar por tiempos:");
ordenarPorTiempos();
mostrarSesiones();

console.log("\nOrdenar por nombre:");
ordenarPorNombre();
mostrarSesiones();

console.log("\nActualizar tiempo de Lewis Hamilton:");
añadirOActualizarSesion("Lewis Hamilton", "Mercedes", 86000);
mostrarSesiones();

console.log("\nEliminar sesión de Fernando Alonso:");
eliminarSesion("Fernando Alonso");
mostrarSesiones();
