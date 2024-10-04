// 1. Qué son los Arrays
// 1.1 Crea una función llamada `procesarPedido` que recibe un array `pedido`.
// Debes sacar el primer elemento (nombre del cliente), añadir "bebida" al inicio del array y añadir el nombre del cliente al final.
function procesarPedido(pedido) {
    // Tu código aquí
    const cliente = pedido.shift();
    pedido.unshift('bebida');
    pedido.push(cliente);
    return pedido;
}

// 2. Iteración de Arrays en Javascript
// 2.1 Crea una función llamada `sumarPares` que reciba un array de números.
// Debes iterar sobre el array, sumar todos los números pares y devolver la suma.
    // tu código aquí
function sumarPares(numeros) {
    let suma = 0
    for (let i = 0; i < numeros.length; i++){
        if (numeros[i] % 2 === 0){
            suma = suma + numeros[i];
        }
    }
    return suma
}

// 3. Buscar en Arrays
// 3.1 Escribe una función llamada `palabrasTerminanConA` que reciba un array de palabras y devuelva `true` si todas terminan con "a", o `false` si al menos una no lo hace.
    // Tu código aquí
function palabrasTerminanConA(palabras) {
    for(let palabra of palabras){
        if (!palabra.endsWith('a'))
        {
            return false;
        }
    }
    return true;
}
/*
const palabras = ['casa', 'silla', 'mesa']
console.log(palabrasTerminanConA(palabras)) // -> true
*/
// 4. Transformar Arrays
// 4.1 Crea una función llamada `buscaPalabras` que reciba dos parámetros: un array `words` y una palabra `word`.
// Busca el índice de la palabra en el array y devuelve todas las palabras después de ese índice en un nuevo array
    // Tu código aquí
function buscaPalabras(words, word) {
    const i = words.indexOf(word);
    if (i === -1) {
        return [];
    }
    return words.slice(i + 1);
}
/*
const words = ['hola', 'mundo', 'javascript', 'node'];
console.log(buscaPalabras(words, 'mundo')) // El resultado debe ser: ['javascript', 'node']*/

// 5. Matrices
// 5.1 Crea una función llamada `findJavaScript` que reciba una matriz de cadenas y devuelva la posición de "JavaScript".
// Si no la encuentra, devuelve [-1, -1].
    // Tu código aquí
function findJavaScript(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 'JavaScript') {
                return [i, j];
            }
        }
    }
    return [-1, -1];

}
/*
const matrix = [
    ['HTML', 'CSS', 'JavaScript'],
    ['Java', 'C++', 'Python'],
    ['Ruby', 'Go', 'Swift']
  ]
  
  const position = findJavaScript(matrix);
  console.log(position); // -> [0, 2]*/

// 6. Algoritmos con Arrays
// 6.1 Crea una función llamada `findMinMaxPages` que reciba un array de números (representando el número de páginas de libros).
// La función debe devolver un array con dos posiciones: el índice del libro con menos páginas y el índice del libro con más páginas.
    // Tu código aquí
function findMinMaxPages(books) {
    let min = 0;
    let max = 0;
    for (let i = 1; i < books.length; i++) {
        if (books[i] < books[min]) {
            min = i;
        }
        if (books[i] > books[max]) {
            max = i;
        }
    }
    return [min, max];
}
/*
const libros = [350, 120, 540, 275, 390, 130, 670];
const resultado = findMinMaxPages(libros);
console.log(resultado); // -> [1, 6]*/

// Exportar las funciones para que puedan ser completadas y probadas
module.exports = {
    procesarPedido,
    sumarPares,
    palabrasTerminanConA,
    buscaPalabras,
    findJavaScript,
    findMinMaxPages
};

//Llamamos a las funciones
//Funcion procesar pedido
const pedido = ['Claudia','pizza','gaseosa']
console.log(procesarPedido(pedido));

//Funcion sumarPares
const numeros = [1,2,3,4];
console.log(sumarPares(numeros));

//Funcion palabrasTerminanconA
const palabras = ['sala', 'silla', 'mesa']
console.log(palabrasTerminanConA(palabras))

//Funcion buscarpalabras
const words = ['hola', 'mundo', 'javascript', 'node'];
console.log(buscaPalabras(words, 'mundo'));

//Funcion findJavaScript
const matrix = [
    ['HTML', 'CSS', 'JavaScript'],
    ['Java', 'C++', 'Python'],
    ['Ruby', 'Go', 'Swift']
]

const position = findJavaScript(matrix);
console.log(position);

//Funcion findMinMaxPages
const libros = [350, 120, 540, 275, 390, 130, 670];
const resultado = findMinMaxPages(libros);
console.log(resultado);
