// escribe tu respuesta acá
function multiplicarArreglo(arreglo) {
    if (arreglo.length === 0) {
        return 1; 
    }
    let producto = 1;
    for (let i = 0; i < arreglo.length; i++) {
        producto *= arreglo[i];
    }
    return producto;
}
// código de prueba
console.log(multiplicarArreglo([4, 1, 2, 3])) // 24
console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])) // 40320
console.log(multiplicarArreglo([])) // 1