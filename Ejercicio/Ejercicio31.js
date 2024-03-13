// escribe tu función acá
function distancia(str1, str2) {
    let diferencia = 0;
for (let i = 0; i < str1.length; i++) {
if (str1[i] !== str2[i]) {
        diferencia++;
}
}
diferencia += Math.abs(str1.length - str2.length);
return diferencia;
}
// código de prueba
console.log(distancia("hola", "hola")) // 0
console.log(distancia("sol", "tol")) // 1
console.log(distancia("carro", "correr")) // 3