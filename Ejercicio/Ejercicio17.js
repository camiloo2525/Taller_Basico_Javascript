// escribe tu función acá
function capitalizar(cadena) {
    
    let palabras = cadena.split(" ");
    
    for (let i = 0; i < palabras.length; i++) {

        if (palabras[i].length > 0) {
            palabras[i] = palabras[i][0].toUpperCase() + palabras[i].slice(1);
        }
    }
    // Unimos las palabras nuevamente en una cadena y las retornamos
    return palabras.join(" ");
}
// código de prueba
console.log(capitalizar("hola mundo")) // "Hola Mundo"
console.log(capitalizar("make it real")) // "Make It Real"
console.log(capitalizar("")) // ""