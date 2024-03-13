// escribe tu función acá
function pares(arreglo) {
    
    return arreglo.filter(numero => numero % 2 === 0);
}
// código de prueba
console.log(pares([1, 2, 3, 4, 5, 6])) // [2, 4, 6]
console.log(pares([])) // []