// escribe tu función acá
function numAsteriscos(arreglo) {
    let contador = 0;
for (let i = 0; i < arreglo.length; i++) {
    contador += arreglo[i].split('*').length - 1;
    }
return contador;
}
// código de prueba
console.log(numAsteriscos(['', '*', '', '*'])) // 2
console.log(numAsteriscos(['*', '*', '*'])) // 3
console.log(numAsteriscos([])) // 0