/*
Diseña una expresión regular que valide contraseñas que contengan 
al menos una letra mayúscula, una letra minúscula, un número y 
un carácter especial, y que tengan entre 8 y 20 caracteres.
*/

var expresionR= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

const contraseña = "Ejemplo@123sjsjsjsjssjsjsjsjsjsjsjsjsjjjsjssjsjsjsjsj";

if (expresionR.test(contraseña)) {
    console.log("La contraseña es válida.");
} else {
    console.log("La contraseña no cumple con los requisitos.");
}