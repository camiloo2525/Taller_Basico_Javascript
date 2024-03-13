// escribe tu función acá
function password(str) {
    
    str = str.toLowerCase();
    // Eliminar espacios en blanco
    str = str.replace(/\s/g, '');
    
    str = str.replace(/a/g, '4');
    str = str.replace(/e/g, '3');
    str = str.replace(/i/g, '1');
    str = str.replace(/o/g, '0');
    return str;
}
// código de prueba
console.log(password("hola")) // "h0l4"
console.log(password("esta es una prueba")) // "3st43sun4pru3b4"
console.log(password("")) // ""