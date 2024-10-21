/*
Realizar un script que tome una serie de palabras ingresadas por el usuario 
(separadas por coma) y almacena esas palabras en un array. Posteriormente, 
manipule el array para mostrar en una nueva ventana los siguientes datos: 
La primera palabra ingresada por el usuario 
La última palabra ingresada por el usuario
El número de palabras presentes en el array
Todas las palabras ordenadas alfabéticamente 

*/
     // Solicitar al usuario que ingrese palabras separadas por comas
     const input = prompt("Ingrese una serie de palabras separadas por comas:");

     // Separar las palabras y eliminar espacios en blanco
     const palabras = input.split(',').map(palabra => palabra.trim());

     // Obtener la primera palabra
     const primeraPalabra = palabras[0];

     // Obtener la última palabra
     const ultimaPalabra = palabras[palabras.length - 1];

     // Obtener el número de palabras
     const numeroDePalabras = palabras.length;

     // Ordenar las palabras alfabéticamente
     const palabrasOrdenadas = palabras.sort();

     // Crear un mensaje con los resultados
     let mensaje = `
         Primera palabra: ${primeraPalabra}\n
         Última palabra: ${ultimaPalabra}\n
         Número de palabras: ${numeroDePalabras}\n
         Palabras ordenadas: ${palabrasOrdenadas.join(', ')}
     `;

     // Mostrar el mensaje en una nueva ventana
     const ventanaResultados = window.open("", "Resultados", "width=400,height=300");
     ventanaResultados.document.write("<pre>" + mensaje + "</pre>");
     ventanaResultados.document.close();