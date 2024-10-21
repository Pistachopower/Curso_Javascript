/*
Realizar un programa que permita introducir 2 matrices (hasta tamaño 3x3), 
y nos de la opción de sumarlas o multiplicarlas. El programa imprimirá las dos matrices y la matriz resultante (si la hubiera). 
*/
// Función para leer una matriz desde la entrada del usuario
const leerMatriz = (n) => {
    const matriz = [];
    for (let i = 0; i < n; i++) {
        const fila = [];
        for (let j = 0; j < n; j++) {
            const valor = parseFloat(prompt(`Ingrese el valor para la posición [${i}][${j}] de la matriz:`));
            fila.push(valor);
        }
        matriz.push(fila);
    }
    return matriz;
};

// Función para sumar dos matrices
const sumarMatrices = (matriz1, matriz2) => {
    const n = matriz1.length;
    const resultado = [];
    for (let i = 0; i < n; i++) {
        const fila = [];
        for (let j = 0; j < n; j++) {
            fila.push(matriz1[i][j] + matriz2[i][j]);
        }
        resultado.push(fila);
    }
    return resultado;
};

// Función para multiplicar dos matrices
const multiplicarMatrices = (matriz1, matriz2) => {
    const n = matriz1.length;
    const resultado = [];
    for (let i = 0; i < n; i++) {
        const fila = [];
        for (let j = 0; j < n; j++) {
            let suma = 0;
            for (let k = 0; k < n; k++) {
                suma += matriz1[i][k] * matriz2[k][j];
            }
            fila.push(suma);
        }
        resultado.push(fila);
    }
    return resultado;
};

// Función para imprimir una matriz
const imprimirMatriz = (matriz) => {
    matriz.forEach(fila => console.log(fila));
};

// Tamaño de las matrices (puede ser 2 o 3)
const n = parseInt(prompt("Ingrese el tamaño de la matriz (2 o 3):"), 10);

// Leer las matrices del usuario
console.log("Ingrese los valores para la primera matriz:");
const matriz1 = leerMatriz(n);

console.log("Ingrese los valores para la segunda matriz:");
const matriz2 = leerMatriz(n);

// Mostrar las matrices ingresadas
console.log("Primera matriz:");
imprimirMatriz(matriz1);
console.log("Segunda matriz:");
imprimirMatriz(matriz2);

// Elegir la operación a realizar
const operacion = prompt("¿Desea sumar o multiplicar las matrices? (suma/multiplicación):").toLowerCase();

// Realizar la operación y mostrar el resultado
let matrizResultado;
if (operacion === "suma") {
    matrizResultado = sumarMatrices(matriz1, matriz2);
    console.log("Resultado de la suma:");
} else if (operacion === "multiplicación") {
    matrizResultado = multiplicarMatrices(matriz1, matriz2);
    console.log("Resultado de la multiplicación:");
} else {
    console.log("Operación no válida.");
}

// Imprimir la matriz resultante si existe
if (matrizResultado) {
    imprimirMatriz(matrizResultado);
}
