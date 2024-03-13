// escribe tu función acá
function capitalizar(cadena) {
    if (cadena.length === 0) { 
        return cadena;
    }
    return cadena[0].toUpperCase() + cadena.slice(1); 
}
// código de prueba
console.log(capitalizar("pedro")) // "Pedro"
console.log(capitalizar("hola mundo")) // "Hola mundo"
console.log(capitalizar("")) // ""