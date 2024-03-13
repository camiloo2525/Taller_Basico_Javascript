// escribe tu función acá
function terminanConS(arreglo) {
return arreglo.filter(palabra => palabra.toLowerCase().endsWith('s'));
}
// código de prueba
console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"])) // ["pruebas", "tokens"]
console.log(terminanConS(["beta", "delta", "gama"])) // []
console.log(terminanConS([])) // []