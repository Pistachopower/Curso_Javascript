/*
Realiza un programa que compruebe mediante expresiones regulares si un 
usuario ha introducido una matrícula de vehículo válida. Si el usuario
 añade la matrícula correctamente, formatea la cadena para que todas 
 sean guardadas (imagina que luego se guardarán en una BBDD) de la misma 
 forma, en mayúsculas y con un guión entre letras y números, por ejemplo: ABC-1234.
*/

// Ejemplo de uso
let matricula = "abc1234";

    // Expresión regular para validar la matrícula (tres letras seguidas de cuatro números)
    const regex = /^[A-Z]{3}\d{4}$/i;

    // Comprobar si la matrícula es válida
    if (regex.test(matricula)) {
        // Formatear la matrícula a mayúsculas y con un guión entre letras y números
        const letras = matricula.slice(0, 3).toUpperCase();
        const numeros = matricula.slice(3);

        //
        var matriculaBD= letras + "-" + numeros;

        alert(matriculaBD);
    } else {
        alert("Matricula inválida");
    }