/*
Diseñar un script que lea una dirección de email y la valide. No 
se terminará hasta introducir una dirección correcta. Modificar el 
ejercicio anterior para una vez validado el correo mostrar el usuario y 
el servidor de correo en dos mensajes.

usuario@dominio.ext

*/ 


const expresionRegular = /^[a-z0-9]+@[a-z0-9]+\.(com|es|net|org)$/;

var direccion = prompt("Ingrese su correo:");

while (!(expresionRegular.test(direccion))) {
    alert("Correo inválido. Debe contener '@', un dominio y una extensión válida (.com, .es, .net, .org).");
    direccion = prompt("Ingrese su correo:");
}

alert("Correo válido: " + direccion);