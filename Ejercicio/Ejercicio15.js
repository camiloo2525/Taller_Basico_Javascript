// escribe tu función acá
function transcribir(cadenaADN) {
    let complementoARN = "";
    for (let i = 0; i < cadenaADN.length; i++) {
        let nu = cadenaADN[i];
        if (nu === "G") {
            complementoARN += "C";
        } else if (nu === "C") {
            complementoARN += "G";
        } else if (nu === "T") {
            complementoARN += "A";
        } else if (nu === "A") {
            complementoARN += "U";
        }
    }
    return complementoARN;
}

// código de prueba
console.log(transcribir("ACGT")) // "UGCA"
console.log(transcribir("ACGTGGTCTTAA")) // "UGCACCAGAAUU"