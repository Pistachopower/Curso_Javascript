/*
Realizar una función que rellene un matriz de orden N de número aleatorios. 
*/
// Función para generar una matriz de orden N con números aleatorios
const generarMatrizAleatoria = (n, min = 0, max = 100) => {
    // Creamos una matriz vacía
    const matriz = [];

    // Rellenamos la matriz con números aleatorios
    for (let i = 0; i < n; i++) {
        // Creamos una fila vacía para la fila i
        const fila = [];
        
        for (let j = 0; j < n; j++) {
            // Generamos un número aleatorio entre min y max
            // Math.random() genera un número entre 0 (inclusive) y 1 (exclusive)
            // Multiplicamos por (max - min + 1) para escalarlo a nuestro rango
            // Sumamos min para ajustar el rango
            const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
            
            // Agregamos el número aleatorio a la fila
            fila.push(numeroAleatorio);
        }
        
        // Agregamos la fila completada a la matriz
        matriz.push(fila);
    }

    // Devolvemos la matriz llena de números aleatorios
    return matriz;
};

// Ejemplo de uso
// Pedimos al usuario que ingrese el orden de la matriz
const n = parseInt(prompt("Ingrese el orden de la matriz (N):"), 10);

// Generamos la matriz aleatoria con el orden N
const matrizAleatoria = generarMatrizAleatoria(n);

// Imprimimos la matriz en la consola
console.log("Matriz Aleatoria:");
// Usamos forEach para imprimir cada fila de la matriz
matrizAleatoria.forEach(fila => console.log(fila));
