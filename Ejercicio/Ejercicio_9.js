// escribe tu respuesta acá
function numeroDeAes(texto) {
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === 'a') {
            contador++;
        }
    }
    return contador;
}
// código de prueba
console.log(numeroDeAes("abracadabra")) // 5
console.log(numeroDeAes("etinol")) // 0
console.log(numeroDeAes("")) // 0