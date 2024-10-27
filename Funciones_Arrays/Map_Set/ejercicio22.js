/*

Utiliza un map almacenar información sobre módulos impartidos en el IES de la 
siguiente manera:  ("DWECL", “Desarrollo Web en Entorno Cliente”). Añade 
la información con posterioridad a la creación de la estructura.

Muestra cuántos módulos hay almacenados
Muestra el contenido de la estructura
Devuelve las abreviaturas de todos los módulos guardados
Devuelve el nombre completo de todos los módulos
Consulta si está el módulo "DAW"
Si está, elimínalo.
Ordena alfabéticamente el map según las abreviaturas de los módulos
*/

// Crear la estructura Map y añadir la información de los módulos
var modulos = new Map();
modulos.set("DWECL", "Desarrollo Web en Entorno Cliente");

// Añadir más módulos
modulos.set("DWEC", "Desarrollo Web en Entorno Cliente 2");
modulos.set("DAW", "Desarrollo de Aplicaciones Web");
modulos.set("DSM", "Desarrollo de Sistemas Multimedia");

// Mostrar cuántos módulos hay almacenados
alert("Número de módulos almacenados: " + modulos.size);


// Mostrar el contenido de la estructura
alert("Contenido de la estructura:")
modulos.forEach(function(nombre, abreviatura) {
    alert("Abreviatura: " + abreviatura + ", Nombre: " + nombre)
 
});

// Devolver las abreviaturas de todos los módulos guardados
var abreviaturas = Array.from(modulos.keys());
alert("Abreviaturas de los módulos:", abreviaturas)


// Devolver el nombre completo de todos los módulos
var nombres = Array.from(modulos.values());
alert("Nombres completos de los módulos:", nombres)


// Consultar si está el módulo "DAW"
if (modulos.has("DAW")) {
    alert("El módulo DAW está presente.")
  
  // Si está, elimínalo
  modulos.delete("DAW");
  alert("El módulo DAW ha sido eliminado.")
  
} else {
    alert("El módulo DAW no está presente.")
  
}

// Ordenar alfabéticamente el map según las abreviaturas de los módulos
const modulosOrdenados = new Map([...modulos.entries()].sort());
alert("Módulos ordenados alfabéticamente por abreviatura:")

modulosOrdenados.forEach(function(nombre, abreviatura) {
    alert("Abreviatura: " + abreviatura + ", Nombre: " + nombre);
});
