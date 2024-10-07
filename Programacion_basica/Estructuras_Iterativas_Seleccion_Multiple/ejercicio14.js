/*
14. Estamos interesados en calcular los ingresos medios de un conjunto de hombres y
mujeres. Para ello disponemos de un documento donde se recoge si se trata de un
hombre (H) o una mujer (M) y su sueldo correspondiente. La entrada de datos
termina cuando se lee un * como sexo. Se validarán todas las entradas, el sexo será
H o M y el sueldo entre los 1000 y 2000 euros independientemente de que el
trabajador sea hombre o mujer.


var sexo = "";
var sueldo = 0;
var cantidadPersonas = 0;
var ingresosPersonas = 0;
var mediaFinal = 0;

//convertimos el string a mayuscula sea cual sea el caso
sexo = prompt("Ingrese el sexo: ");
sueldo = parseInt(prompt("Ingrese el sueldo: "));
sexo = sexo.toLocaleUpperCase();

// creamos estructura iterativa while que pida los datos hasta que sexo no cumpla condicion
while (!(sexo === "*")) {
  switch (sexo) {
    case "M":
      // Código a ejecutar si la expresión coincide con valor1
      if (sueldo >= 1000 && sueldo <= 2000) {
        //sumamos a 1 para calcular el total de personas
        cantidadPersonas++;

        //variable sumatoria para la media
        ingresosPersonas = ingresosPersonas + sueldo;
      }

      break;
    case "H":
      // Código a ejecutar si la expresión coincide con valor1
      if (sueldo >= 1000 && sueldo <= 2000) {
        //sumamos a 1 para calcular el total de personas. Se pone adentro para que cuente bien la persona con el sueldo válido
        cantidadPersonas++;

        //variable sumatoria para la media
        ingresosPersonas = ingresosPersonas + sueldo;
      }
      break;
    // ... más casos
    default:
      // Código a ejecutar si no se cumple ninguna de las condiciones anteriores
      alert("El sexo es incorrecto.");
      break;
  }

  sexo = prompt("Ingrese el sexo: ");
  sueldo = parseInt(prompt("Ingrese el sueldo: "));
  sexo = sexo.toLocaleUpperCase();
}

//calculmos media
mediaFinal = ingresosPersonas / cantidadPersonas;

//pasamos la media a cadena para mostrarla
var salida = "";
salida = mediaFinal.toString();

alert("El cálculo total es " + salida);


*/
var totalSueldos = 0;
var totalPersonas= 0;

//pedimos los datos 
sexo = prompt("Ingrese el sexo: ");

if (sexo === "h" || sexo === "H" || sexo === "m" || sexo === "M") {

    while (!(sexo == "*")) {

        sueldo = parseInt(prompt('Ingrese el sueldo: '));
        //comprobamos el rango del sueldo
        if (sueldo >= 1000 && sueldo <= 2000) {
            //sumamos todos los sueldos
            totalSueldos = totalSueldos + sueldo;
            totalPersonas++;

        } else {
            alert("La opción no es correcta. Inténtelo de nuevo");
        }


        //controlamos que el sexo sea el correcto
        do {
            sexo = prompt("Ingrese el sexo: ");
        
        } while (sexo != "h" && sexo != "H" && sexo != "m" && sexo != "M" && sexo != "*");






    }



} else {
    alert("Los datos no son correcto");

}


alert("El total de sueldos de H y M es: " + (totalSueldos / totalPersonas));


