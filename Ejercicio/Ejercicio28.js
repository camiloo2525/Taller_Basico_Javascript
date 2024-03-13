// escribe tu función acá
function palabrasANumeros(palabras) {
    const numeros = {
    "cero": 0,
    "uno": 1,
    "dos": 2,
    "tres": 3,
    "cuatro": 4,
    "cinco": 5,
    "seis": 6,
    "siete": 7,
    "ocho": 8,
    "nueve": 9
    };
    
    const resultado = [];

    for (let i = 0; i < palabras.length; i++) {
    if (palabras[i] in numeros) {
resultado.push(numeros[palabras[i]]);
} else {
resultado.push(-1);
}
    }
return resultado;
}
// código de prueba
console.log(["cero", "uno", "dos", "tres", "what?", "cuatro"]) // [0, 1, 2, 3, -1, 4]
console.log(["cinco", "seis", "siete", "ocho", "nueve"]) // [5, 6, 7, 8, 9]