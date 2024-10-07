/*
Valida con una expresión regular el horario de formato de 24 hrs, por ejemplo 14:45 o 08:12.
*/

// Expresión regular para validar el formato de 24 horas
/*

    ^(?:[01]\d|2[0-3]) valida las horas:
        [01]\d valida las horas de 00 a 19.
        2[0-3] valida las horas de 20 a 23.
    :[0-5]\d$ valida los minutos de 00 a 59.
*/
const patron = /^(?:[01]\d|2[0-3]):[0-5]\d$/;

// Ejemplos de uso
const horarios = '14:45';

var comprobarHorario= patron.test(horarios);

if (comprobarHorario) {
    alert("horario valido ");
} else {
    alert("horario invalido ");
}

