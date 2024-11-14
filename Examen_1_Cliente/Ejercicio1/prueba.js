// Clase para cada Cita
class Cita {
    constructor(sala, fechaHora) {
        this.sala = sala;
        this.fechaHora = fechaHora;
    }
}

// Clase para cada Cliente
class Cliente {
    constructor(nombre, apellidos, dni) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.dni = dni;
        this.citasPendientes = [];
        this.historialCitas = [];
    }

    // Método para agregar una nueva cita
    agregarCita(cita) {
        const hoy = new Date();
        hoy.setHours(0, 0, 0, 0); // Eliminamos las horas para solo comparar la fecha
        const mismaFecha = this.citasPendientes.some(c => 
            c.fechaHora.toDateString() === cita.fechaHora.toDateString()
        );

        if (cita.fechaHora < hoy) {
            console.log("La cita no puede ser anterior a la fecha actual.");
        } else if (mismaFecha) {
            console.log("Ya existe una cita para ese día.");
        } else {
            this.citasPendientes.push(cita);
            console.log("Cita añadida con éxito.");
        }
    }

    // Método para actualizar el historial y citas pendientes
    actualizarCitas() {
        const ahora = new Date();
        this.citasPendientes = this.citasPendientes.filter(cita => {
            if (cita.fechaHora <= ahora) {
                this.historialCitas.push(cita);
                return false;
            }
            return true;
        });
    }
}

// Clase para manejar la agenda
class Agenda {
    constructor() {
        this.clientes = [];
        this.recordatoriosActivos = {};
    }

    // Agregar un cliente
    agregarCliente(cliente) {
        this.clientes.push(cliente);
    }

    // Configurar recordatorio para citas
    configurarRecordatorio() {
        setInterval(() => {
            const hoy = new Date();
            hoy.setHours(0, 0, 0, 0);
            this.clientes.forEach(cliente => {
                cliente.actualizarCitas();
                cliente.citasPendientes.forEach(cita => {
                    const tiempoRestante = cita.fechaHora - hoy;
                    const unDia = 24 * 60 * 60 * 1000;

                    if (tiempoRestante <= unDia && tiempoRestante > 0) {
                        const citaId = `${cliente.dni}-${cita.fechaHora}`;
                        if (!this.recordatoriosActivos[citaId]) {
                            this.recordatoriosActivos[citaId] = 1;
                            this.mostrarRecordatorio(citaId, cliente, cita);
                        }
                    }
                });
            });
        }, 60000); // Verifica cada minuto
    }

    // Método para mostrar recordatorio con límite de 3 veces
    mostrarRecordatorio(citaId, cliente, cita) {
        if (this.recordatoriosActivos[citaId] <= 3) {
            alert(`Recordatorio: ${cliente.nombre} tiene una cita mañana en la sala ${cita.sala} a las ${cita.fechaHora.toLocaleTimeString()}.`);
            this.recordatoriosActivos[citaId] += 1;

            setTimeout(() => {
                this.mostrarRecordatorio(citaId, cliente, cita);
            }, 5000); // Vuelve a mostrar el recordatorio en 5 segundos
        } else {
            delete this.recordatoriosActivos[citaId];
        }
    }
}

// Ejemplo de uso
const agenda = new Agenda();
const cliente1 = new Cliente("Juan", "Pérez", "12345678A");

agenda.agregarCliente(cliente1);

// Crear citas mock
const cita1 = new Cita("Sala 101", new Date(new Date().setDate(new Date().getDate() + 1)));
const cita2 = new Cita("Sala 102", new Date(new Date().setDate(new Date().getDate() + 2)));

// Agregar citas
cliente1.agregarCita(cita1);
cliente1.agregarCita(cita2);

// Configurar recordatorios automáticos
agenda.configurarRecordatorio();