async function loadFile(file) {
    let texto = await file.text();
    document.getElementById('resultado').textContent = texto;
//    console.log(texto)
    var cifrado = CryptoJS.DES.encrypt(texto, "abcdefgh");
    console.log(cifrado);
}

/*
      async function loadFile(file) {
        let text = await file.text();
        document.getElementById('output').textContent = text;
      }
*/
