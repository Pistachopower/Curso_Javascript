/*
Realizar un programa que calcule los días de la semana en 
que caerán los próximos 50 cumpleaños del usuario.
*/

var fechaNacimientoDateUsuario = "1994/07/20";

var fechaNacimientoDate = new Date(fechaNacimientoDateUsuario);

// Obtener el año de nacimiento
var añoNacimiento = fechaNacimientoDate.getFullYear();
var mesNacimiento = fechaNacimientoDate.getMonth();
var diaNacimiento = fechaNacimientoDate.getDate();

// Calcular y mostrar los próximos 50 cumpleaños
for (let i = 1; i <= 50; i++) {
    const próximoCumpleaños = new Date(añoNacimiento + i, mesNacimiento, diaNacimiento);
    const díaSemana = próximoCumpleaños.getDay(); //obtenemos el dia de la semana del cumpleados

    // Convertir el día de la semana a texto
    let nombreDía;
    switch (díaSemana) {
        case 0: 
            nombreDía = 'domingo'; 
            break;
        case 1: 
            nombreDía = 'lunes'; 
            break;
        case 2: 
            nombreDía = 'martes'; 
            break;
        case 3: 
            nombreDía = 'miércoles'; 
            break;
        case 4: 
            nombreDía = 'jueves'; 
            break;
        case 5: 
            nombreDía = 'viernes'; 
            break;
        case 6: 
            nombreDía = 'sábado'; 
            break;
    }

    alert("Cumpleaño en "+ (añoNacimiento + 1) + ":" + nombreDía);
   
}