/*
Dada una cadena leída por teclado, realizar un programa que extraiga los números que aparecen 
en dicha secuencia e imprima por pantalla dichos números y su suma. 
*/

//funciones normales
// Función para extraer números de una cadena
/*
function extraerNumeros(cadena) {
    // Usamos una expresión regular para encontrar todos los números en la cadena
    const numeros = cadena.match(/\d+/g);

    // Si no hay números, retornamos un arreglo vacío y la suma es 0
    if (!numeros) {
        return { numeros: [], suma: 0 };
    }

    // Convertimos los números de string a números y calculamos la suma
    const numerosConvertidos = numeros.map(Number);
    const suma = numerosConvertidos.reduce((acumulador, valorActual) => acumulador + valorActual, 0);

    return { numeros: numerosConvertidos, suma };
}

// Pedimos al usuario que ingrese una cadena
const cadena = prompt("Ingresa una cadena de texto:");

const resultado = extraerNumeros(cadena);

// Imprimimos los números encontrados y su suma
console.log("Números encontrados:", resultado.numeros);
console.log("Suma de los números:", resultado.suma);
*/

//otra forma
// Función para extraer números de una cadena usando funciones flechas
const extraerNumeros = (cadena) => {
    // Usamos una expresión regular para encontrar todos los números en la cadena
    const numeros = cadena.match(/\d+/g) || []; // Devuelve un array vacío si no hay coincidencias

    // Convertimos los números de string a números y calculamos la suma
    const numerosConvertidos = numeros.map(Number);
    const suma = numerosConvertidos.reduce((acumulador, valorActual) => acumulador + valorActual, 0);

    return { numeros: numerosConvertidos, suma };
};

// Pedimos al usuario que ingrese una cadena
const cadena = prompt("Ingresa una cadena de texto:");

const resultado = extraerNumeros(cadena);

// Imprimimos los números encontrados y su suma
console.log("Números encontrados:", resultado.numeros);
console.log("Suma de los números:", resultado.suma);

