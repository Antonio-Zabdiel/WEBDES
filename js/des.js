function cifrado(){    

    var clave=document.getElementById("clave").value;
    console.log(clave);
}


function descifrado(){
    var clave=document.getElementById("clave").value;
    console.log(clave);   
}

function leerArchivo()
{
    /*
    var CryptoJS = require("crypto-js");

    // Encrypt
    var ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123').toString();

    // Decrypt
    var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
    */
    //var originalText = bytes.toString(CryptoJS.enc.Utf8);

    //console.log(originalText); // 'my message'

    var archivo=document.getElementById("file");
    var reader = new FileReader();
    console.log("Estas dentro de la funcion")
    reader.readAsDataURL (archivo.files [0]); // Iniciar una solicitud asincrónica
    reader.onload = function()
    {
        // Después de la lectura, los datos se guardan en el atributo de resultado del objeto
        var texto=this.result;
        console.log(texto)   
    }
    //console.log(texto);//aqui no sirve esto
}
