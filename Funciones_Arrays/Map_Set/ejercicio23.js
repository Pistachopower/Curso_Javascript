/*
En este ejercicio, de cada módulo se desea guardar su nombre, duración y alumnos matriculados (módulo, duración, numAlumnos). Utiliza la estructura que sea más conveniente. 
Comprueba si existe en tu estructura el módulo “DWS” (Servidor) y si es así devuelve el número de alumnos matriculados en dicho módulo.
Calcula el número total de alumnos matriculados en todos los módulos


*/

// Crear la estructura Map para almacenar los módulos
const modulos = new Map();

// Añadir módulos (nombre, duración, numAlumnos)
modulos.set("DWECL", { nombre: "Desarrollo Web en Entorno Cliente", duracion: 100, numAlumnos: 25 });
modulos.set("DWEC", { nombre: "Desarrollo Web en Entorno Cliente 2", duracion: 120, numAlumnos: 20 });
modulos.set("DAW", { nombre: "Desarrollo de Aplicaciones Web", duracion: 150, numAlumnos: 30 });
modulos.set("DSM", { nombre: "Desarrollo de Sistemas Multimedia", duracion: 130, numAlumnos: 15 });
modulos.set("DWS", { nombre: "Desarrollo Web en Servidor", duracion: 140, numAlumnos: 22 });

// Comprobar si existe el módulo "DWS" y devolver el número de alumnos matriculados en dicho módulo
if (modulos.has("DWS")) {
  const dws = modulos.get("DWS");
  console.log("Número de alumnos matriculados en DWS: " + dws.numAlumnos);
} else {
  console.log("El módulo DWS no existe.");
}

// Calcular el número total de alumnos matriculados en todos los módulos
let totalAlumnos = 0;
modulos.forEach(function(valor) {
  totalAlumnos += valor.numAlumnos;
});
console.log("Número total de alumnos matriculados en todos los módulos: " + totalAlumnos);
