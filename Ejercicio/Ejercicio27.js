// escribe tu función acá
function numerosAPalabras(numeros) {
    const palabras = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
    const resultado = [];
for (let i = 0; i < numeros.length; i++) {
if (numeros[i] >= 0 && numeros[i] <= 9) {
    resultado.push(palabras[numeros[i]]);
} else {
    resultado.push("fuera de rango");
}
}
return resultado;
}

// código de prueba
console.log(numerosAPalabras([0, 1, 2, 3, 4])) // ["cero", "uno", "dos", "tres", "cuatro"]
console.log(numerosAPalabras([5, 6, 7, 8, 9])) // ["cinco", "seis", "siete", "ocho", "nueve"]