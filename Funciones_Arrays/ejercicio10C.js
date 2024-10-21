/*
Asegúrate de que la función se llama bar
*/

//sin refactorizar
function bar() {
    let txt = '';
    for (let i in arguments) {
        txt += arguments[i];
    }
    return txt;
}

//alert(bar(['A','B','C','D']));

//refactorizador
/*
Explicación Paso a Paso

    Uso del Operador de Propagación (...):
        En lugar de usar arguments, que es un objeto similar a un arreglo, usamos ...args, que 
        permite recibir un número variable de argumentos como un arreglo. Esto es más legible 
        y moderno.

    Concatenación de Cadenas:
        En lugar de usar un bucle for para concatenar los elementos, podemos utilizar el método 
        join(''), que une todos los elementos del arreglo en una sola cadena. El argumento '' 
        indica que queremos unir los elementos sin ningún separador.

*/
//operador rest que recibe parametro y devuelve una variable de tipo cadena
const barF = (...args) => args.join(''); //args: solo es el nombre del argumento

//recibe array o cadena
alert(barF('Hola', ' ', 'mundo', '!'));

