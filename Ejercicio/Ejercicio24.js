// escribe tu función acá
function empiezanConA(arreglo) {
   
    return arreglo.filter(palabra => palabra.charAt(0).toLowerCase() === 'a');
}
// código de prueba
console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"])) // ["alfa", "Arbol"]
console.log(empiezanConA(["beta", "delta", "gama"])) // []
console.log(empiezanConA([])) // []