var CryptoJS = require("crypto-js");


async function loadFile(file) {
    //optenemos valor del string
    let texto = await file.text();
    document.getElementById('resultado').textContent = texto;
    var textonuevo = texto.toString();
    console.log(textonuevo)

    var cifrado = CryptoJS.DES.encrypt(texto, "abcdefgh");
    console.log(cifrado);
}
