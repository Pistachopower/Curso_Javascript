/*
Realizar un programa que muestre cuántos días faltan para 
el próximo cumpleaños del usuario y muestre “¡Felicidades!”
 si es el día señalado.


*/
// Obtener la fecha actual
var fechaActual = new Date(); // Se crea un objeto Date con la fecha actual

// Definir el cumpleaños del usuario (puedes cambiar el año de nacimiento)
var mesCumple = 7; // Agosto (recuerda que los meses en JavaScript comienzan desde 0)
var diaCumple = 20; // Día del cumpleaños

// Crear la fecha del próximo cumpleaños
var añoActual = fechaActual.getFullYear(); // Obtener el año actual
var proximoCumple = new Date(añoActual, mesCumple, diaCumple); // Crear la fecha del cumpleaños de este año

// Verificar si el cumpleaños ya pasó este año
if (fechaActual > proximoCumple) {
    // Si el cumpleaños ya pasó, calcular para el próximo año
    proximoCumple.setFullYear(añoActual + 1);
}

// Calcular la diferencia en milisegundos
var diferencia = proximoCumple - fechaActual;

// Convertir la diferencia a días
var calculoDias = Math.ceil(diferencia / (1000 * 60 * 60 * 24)); // Convertir de milisegundos a días

// Mostrar el resultado
if (calculoDias === 0) {
    alert("¡Felicidades!");
} else {
    alert("Faltan " + calculoDias + " días para tu cumpleaños.");
}
